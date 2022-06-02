"use strict"

// ¿Què se ejecuta primero?
console.log("inicio")

setTimeout(() => {
    console.log("Mitad")
}, 1000)

console.log("Fin")
