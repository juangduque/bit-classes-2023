let number1 = 10; // Esta es la forma implicita de tipar variable En este caso es el motor de inferencias de ts el que asigna el tipo de dato.
let number2: number = 20; // Forma explícita de tipar un dato

// number2 = "10"; // Esto para ts es un error

console.log(number1 + number2);