//estructura
function ordenMayor(otraFuncion) {
    return otraFuncion()
}

//========================================================
//ejemplo 1
function funcionParametro() {
    return 'Hola, soy otra funcion!'
}
//Recuerda. El paràmetro de una funciòn se puede llamar como sea
function ordenMayor(otraFuncion) {
    return console.log(otraFuncion())
}
ordenMayor(funcionParametro)

//========================================================
// ejemplo 2
function hola(nombre, otraFuncion) {
    otraFuncion('Hola, ' + nombre + '!')
}
hola("Pamela", (nombre) => console.log(nombre))
hola("Samantha", (nombre) => console.log(nombre))
