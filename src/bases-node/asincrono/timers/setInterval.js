"use strict"

let cuenta = 1

const incremental = setInterval(() => {
    if (cuenta === 7) return clearInterval(incremental) 
    return console.log(cuenta++)
}, 1000)