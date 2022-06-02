//Archivo creado para testear nodemon
"use strict"

let cont = 0;

const multiply = (stNum, ndNum) => {
    let result = 0;
    for (cont = 0; cont < ndNum; cont++) {
        result += stNum;
    }
    return console.log(`The result (multiply) is: ${result}`);
}
multiply(8, 9);