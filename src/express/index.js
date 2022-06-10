const express = require("express");
const app = express();
let pokemons = require("../informacionFake/pokemons.json");
// bodyParser se usa para poder acceder a la informacion del body de una peticion
const bodyParser = require("body-parser");
const cors = require("cors");

// La configuración de cors es para dar accesos a ciertos dispositivos 
// El sibolo * significa dar acceso a todos
app.options("*", cors());
app.use(cors())
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// CRUD C:Create, R:Read, U: Update, D:Delete
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Mamá estoy triunfando en el mundo de la programación");
});

// R:Read
app.get("/pokemons", function (req, res) {
  // Aqui busco informacion de base de datos con una promesa;
  res.send(pokemons);
});

// C:Create
app.post("/pokemons", function (req, res) {
  let nuevoPokemon = req.body;
  nuevoPokemon.id = pokemons[pokemons.length - 1].id + 1;
  pokemons.push(nuevoPokemon);
  res.send("Se inserto correctamente");
});

// U:Update
app.put("/pokemons", function (req, res) {
  const { id, nombre, color } = req.body;
  let pokemon = pokemons.find((pokemon) => pokemon.id === id);
  pokemon.nombre = nombre;
  pokemon.color = color;
  res.send("Pokemon actualizado");
});

// U:Delete
app.delete("/pokemons", function (req, res) {
  pokemons = [];
  res.send("Se eliminaron todos");
});

app.get("/pokemons/:id", function (req, res) {
  const { id } = req.params;
  const data = req.query;
  //Para convertir un valor a string se usa toString()
  // Para convertir un valor a entero se usa parseInt(valor)
  // = asiganar un valor const numero = 0;
  // == Para comparar valores sin su tipo 5 == '5' Es true
  // === Para comparar valores incluyendo su tipo 5 === '5' es false
  let pokemon = pokemons.find((pokemon) => pokemon.id.toString() === id);
  res.send(pokemon);
});

app.listen(3000);
