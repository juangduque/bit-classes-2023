
// const variable = ""; // Por fuera de una clase se tiene que declarar una variable usando var, const o let
class Person {
  height: number = 0;
  name: string = "";
  civilState: string = "";
  age: number = 0;
  isWorking: boolean = false;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  };

  greeting(nameOfPersonGreet: string){
    return "Hello " + nameOfPersonGreet;
  };

  sayHi(){
    return "Hi, my name is " + this.name;
  };
  walk(){};
  run(){};
  sleep(){};
};


let person1 = new Person("oscar", 15); // Los parentesis invocan al constructor siempre
let person2 = new Person("fulano", 20);

console.log( person1.sayHi() );

console.log( person2.sayHi() ); 



// const returnedValue = oscar.greeting("pepito");

// console.log( returnedValue );