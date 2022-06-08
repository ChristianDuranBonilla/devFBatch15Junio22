// forma de importar y exportar con COMMON JS const {} = require('module');
// No es soportada por el navegador
const { error, calculadora, datos, bandera } = require("./exportCommonJs");

console.log("error ", error);
console.log("calculadora ", calculadora(5, 5));
console.log("datos ", datos);
console.log("bandera ", bandera);
