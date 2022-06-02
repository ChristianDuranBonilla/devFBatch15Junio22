//funciòn anònima que se guarda dentro de una variable/constante.
//Las arrow functions, no son compatibles con el objeto this

//estructura
const suma = (a, b) => {
    return a + b
}
console.log(suma(10, 18))


//========================================================
//Si solo retornas una cosa, puedes obviar parèntesis y la palabra reservada 'return'
const suma = (a, b) => a + b
console.log(suma(8, 18))


//========================================================
//si solo pasas un parametro, puedes quitarle los parentesis
const hola = nombre => 'Hola, ' + nombre
console.log(hola('Samantha!'))