
// Clase: Es un modelo que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad. Es como un molde.
class Person {
 // Es la zona de declaracion de propiedades

  height: number = 0; // Propiedades
  name: string = ""; // Propiedades
  civilState: string = ""; // Propiedades
  age: number = 0; // Propiedades
  isWorking: boolean = false; // Propiedades

  // El constructor es un metodo que se ejecuta cuando se crea un objeto de esta clase
  constructor(name: string, age: number){
    this.name = name; // this hace referencia a la clase
    this.age = age; // this hace referencia a la clase
  };

  // De aqui para abajo es la zona de declaración de metodos.

  // Este metodo es para saludar a una persona por su nombre pasado como parametro. Retorna un string
  greeting(nameOfPersonGreet: string){
    return "Hello " + nameOfPersonGreet;
  };

  // Este metodo es para saludar con el propio nombre del objeto. Retorna un string
  sayHi(){
    return "Hi, my name is " + this.name;
  };
  walk(){};
  run(){};
  sleep(){};
};

// Se crean instacias de la clase Person
let person1 = new Person("oscar", 15); // Los parentesis invocan al constructor siempre.
let person2 = new Person("fulano", 20);

// Se accede a las propiedades de los objetos creados.
const value = person1.sayHi(); // Se accede a la propiedad sayHi del objeto person1
console.log( value ); // Se imprime el valor de la variable value



// Esto de abajo es para probar el metodo greeting de forma directa:
// console.log( person1.greeting("pepito") );