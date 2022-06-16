"use strict"

let x = 7

if (x === 10) {
  console.log("if, vale 10");
} else {
  console.log("if, no vale 10");
}

(x === 10)
  ?
  console.log("ternario, vale 10")
  :
  console.log("ternario, no vale 10");

let equis = (x === 10) ? "equis, vale 10" : "equis, no vale 10"
console.log(equis);
