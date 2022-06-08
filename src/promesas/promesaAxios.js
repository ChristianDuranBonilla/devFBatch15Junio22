"use strict";

const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/dito";

axios
  .get(url)
  .then((response) => {
    console.log("response ", response.data);
  })
  .catch((error) => {
    console.log("error ", error.response.data);
  });
