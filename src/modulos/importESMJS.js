// forma de importar y exportar con ESM import {} from 'module';
// No es soportada por NodeJS
// Se puede observar la importacion en el archivo index.js
import { error, calculadora, datos, bandera } from "./exportESMJS.js";

console.log("error ", error);
console.log("calculadora ", calculadora(5, 5));
console.log("datos ", datos);
console.log("bandera ", bandera);
