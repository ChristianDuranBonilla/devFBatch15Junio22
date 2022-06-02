"use strict"

//version simplificada de una calculadora con callbacks
// const suma = (a, b) => a + b
// const resta = (a, b) => a - b
// const multiplicar = (a, b) => a * b
// const dividir = (a, b) => a / b

// const calculadora = (a, b, operacion) => operacion(a, b)

// console.log(calculadora(13, 7, suma))
// console.log(calculadora(13, 7, resta))
// console.log(calculadora(13, 7, multiplicar))
// console.log(calculadora(13, 7, dividir))

// ================================================================

//version màs detallada de una calculadora con callbacks
//funcion estandar/primer orden
function suma(a, b) {
    return a + b
}
function resta(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
const dividir = (a, b) => {
    return a / b
}

//Funciòn de orden mayor
function calculadora(a, b, operacion) {
    //callback -> comportamiento de ejecutar el parametro como una funcion
    return operacion(a, b)
}

console.log(calculadora(13, 7, suma))
console.log(calculadora(13, 7, resta))

console.log(calculadora(13, 7, multiplicar))
console.log(calculadora(13, 7, dividir))

// EJERCICIO:
// Crear una calculadora/Funcion de orden mayor, que ejecute como callback
// las funciones de multiplicar y dividir.
// Tienes que hacer la funcion de multiplicar como una de primer orden
// y la de dividir, tiene que ser una arrow function
