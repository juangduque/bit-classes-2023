function add(number1, number2){ // SE declara la función "add" que suma dos números pasados por parámetro -> number1 y number2
  return number1 + number2; // Se retorna el resultado de la operación suma de los números pasados por parametro
}

// console.log( add(3,4) ); 

function calculusCircleArea(radio){ // Se declara la función "calculusCircleArea" que tiene un parámetro llamado radio
  const pi = 3.1416; // Se declara la variable pi con el valor del número pi
  const area = pi*(radio*radio); // Se hace el cálculo del area y se asigna a la variable "area"
  return area; // Ser retorna la variable area.
};

const input = 5; // Se declara la variable "input" y se inicializa con el valor 5

// console.log( calculusCircleArea(input) ); // Se hace un llamado a console.log con la función calcular area del circulo y su parametro que es la variable input

// Crear una función que reciba unos parámetros para calcular el area de un cuadrado. (L x L)

function returnAName(name){
  return name;
}

function sayHi(name){
  console.log( "Hola", name );
}

sayHi( returnAName("Juan") )
