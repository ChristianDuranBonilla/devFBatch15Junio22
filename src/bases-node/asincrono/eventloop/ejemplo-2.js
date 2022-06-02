"use strict"

// ¿Què se ejecuta primero?

console.log("inicio")

setTimeout(() => {
    console.log("Mitad")
}, 0)

console.log("Fin")