"use strict"
//Nos permite crear nuestros propios eventos
const EventEmitter = require("events")
const emitter = new EventEmitter()

//muy parecido a eventlistener
//definir las reglas del evento:
//si un evento ocurre, ejecuta este codigo
emitter.on("saludar", (args) => {
  console.log("Hola, " + args.nombre + "!");
})

//generando el evento. Colocando un trigger(disparador)
emitter.emit("saludar", {
  edad : 20,
  nombre : "Enrique"
})