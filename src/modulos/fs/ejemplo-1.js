"use strict"

//File system
const fs = require("fs")

const archivos = fs.readdirSync("./src")
console.log(archivos);

fs.readdir("./", (error, files) => {
  if (error) return console.log("Error: " + error); 
  return console.log("Resultado", files);
})