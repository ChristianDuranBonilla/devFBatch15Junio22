"use strict"

function hola(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1500);
}

function hablar(mensaje, callback) {
    return setTimeout(() => {
        return callback(mensaje)
    }, 1100);
}

function adios(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1000);
}

//El condenado encadenamiento. CALLBACK HELL...
hola("Samantha", (nombre) => {
    console.log('Hola, ' + nombre)

    return hablar("bla bla bla 1...", (mensaje) => {
        console.log(mensaje)

        return adios("Samantha", (nombre) => {
            return console.log('Adios, ' + nombre)
        })
    })
})

console.log('Iniciando proceso')


//CONSEGUIR EL SIGUIENTE OUTPUT: hacerlo con callbacks
// inicio
// hola
// hablar
// adios