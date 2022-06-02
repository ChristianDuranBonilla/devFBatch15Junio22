"use strict"

//timer ejecuta algo, despuès de n milisegundos
//funcion de orden mayor, recibe como parametro un callback y una cantidad del milisegundos

// ejemplo 1, recibiendo una funciòn ya hecha, como parpametro
const holaAsincrono = () => console.log('Hola asìncrono');
setTimeout(holaAsincrono, 3000)

//========================================================
//ejemplo 2, con IIFE(Immediately Invoked Function Expression)
setTimeout(() => {
    console.log('Hola');
}, 3000)
