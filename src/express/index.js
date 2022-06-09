const express = require('express')
const app = express()
const pokemons = require('../informacionFake/pokemons.json');
// bodyParser se usa para poder acceder a la informacion del body de una peticion
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Mamá estoy triunfando en el mundo de la programación')
})

app.get('/pokemons', function (req, res) {
  // Aqui busco informacion de base de datos con una promesa;
  res.send(pokemons);
})

app.post('/pokemons', function (req, res) {
  pokemons.push(req.body)
  res.send('Se inserto correctamente');
})

app.listen(3000);