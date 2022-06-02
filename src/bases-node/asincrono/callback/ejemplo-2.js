"use strict"
//Las callbacks, pueden tener comportamiento sìncrono y asìncrono

//Ejemplo sìncrono
const saludar = () => {
    return console.log('Mitad')
}

console.log('Inicio')
saludar()
console.log('Fin');