"use strict";

const pokemons = require("../informacionFake/pokemons.json");

pokemons.forEach((pokemon) => {
  const {
    nombre,
    habilidades: { habilidad1, cosas },
  } = pokemon;
  const idPokemon = pokemon["id pokemon"];

  if (cosas) {
    console.log("2.- ", nombre, habilidad1, cosas, idPokemon);
  }
});
