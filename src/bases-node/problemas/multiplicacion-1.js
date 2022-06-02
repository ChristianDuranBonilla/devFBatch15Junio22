'use strict'
// Algoritmo de Alejandro
//3 * 6 = 3 + 3 + 3 + 3 + 3 + 3 => soluciòn. Puedes ejecutar cada uno, con code runner!.
let cont = 0;

const multiply = (stNum, ndNum) => {
    let result = 0;
    for (cont = 0; cont < ndNum; cont++) {
        result += stNum;
    }
    return console.log(`The result (multiply) is: ${result}`);
}
multiply(15, 3);

// ============================================
// Algoritmo de Anahì
function sum(num1, num2) {
    let suma = 0;
    for (let i = 0; i < num2; i++) {
        suma += num1;
    }
    return console.log("El resutado es:" + suma);
}
sum(2, 5)

// ============================================
// Algoritmo de Jonathan
const mulTwoNumbers = (one, two) => {

    if (two === 0) return 0;
    if (two === 1) return one;

    return one + mulTwoNumbers(one, two - 1)
}
console.log(mulTwoNumbers(5, 1))