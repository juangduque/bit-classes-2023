function myFunction(){ // Se declara la función
  console.log("aqui pasa algo")
};

// myFunction() // Al ponerle parentesis se le dice al js que lo ejecute

// para js las funciones son como tipos de datos.
const functionName = myFunction; // Se asigna la función a la variable.

functionName(); // Se ejecuta la variable

// Se puede asignar la función a n cantidad de variables.
const x = myFunction;

x(); // Se ejecuta la variable