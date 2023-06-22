let fruits: string[]  = ["apple", "banana", "lemon"];
let numbers: number[] = [0, 1, 2];
let booleans: boolean[] = [true, false,true];
let arrayVariables: (string | number)[] = ["", 0, ""];

// Lo siguiente arroja error
// fruits.push(0);
// numbers.push("");

// Esta es otra forma de tipar los arreglos
let fruits2: Array<string> = ["pear", "kiwi"]; // Esta forma de tipar arreglos es igual a la de la linea 1.

let names: Array<string | number>  = ["", 1, 2];  // Esta otra forma me permite indicar que pueden haber múltiples tipos de datos en un arreglo.