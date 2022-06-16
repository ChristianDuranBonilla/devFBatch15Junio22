"use strict"

const titulo = document.querySelector("h1")
const titulo_data = titulo.dataset

let myColor = titulo.dataset.color = "red"

console.log(titulo);
console.log(titulo_data.titulo);
console.log(myColor);