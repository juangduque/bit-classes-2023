// Este archivo se hizo para hablar de los problemas de js
let name = "pepito";

// El hecho de que un lenguaje es dinamicamente tipado quiere decir que se puede reasignar la variable a otro tipo de dato.
name = 10;

console.log(name);

name = true;

console.log(name);


// Caso de la vida real.
let number1 = 10;
const number2 = 20;

number1 = "5";

// En este punto el programa entiende que number1 es del tipo string y por ello el resultado de la operación es una concatenación y no una suma.
console.log(number1 + number2); // "520"
