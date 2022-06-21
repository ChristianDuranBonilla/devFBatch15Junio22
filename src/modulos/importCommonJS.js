// forma de importar y exportar con COMMON JS const {} = require('module');
// No es soportada por el navegador
const { calculadora, datos } = new require("./exportCommonJs");
const objeto = new require("./exportCommonJs");

console.log(calculadora(3, 8));

console.log(datos);
console.log(objeto);

const tools = new objeto.Herramientas()

console.log(tools.bandera2);

// console.log("error ", error);
// console.log("calculadora ", calculadora(5, 5));
// console.log("datos ", datos);
// console.log("bandera ", bandera);
