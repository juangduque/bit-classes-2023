interface Person { // La primera letra va en mayúscula
  firstName: string;
  age: number;
  sex: string;
  height: number;
  isStudiying: boolean;
  skinTone?: string; // El signo de interrogación se usa para especificar que una propiedades del objeto es opcional.
}

let person: Person = {
  firstName: "juan",
  age: 10,
  sex: "",
  height: 1.7,
  isStudiying: false,
};

// Este es un arreglo de objetos, en este caso de objetos "Person"
const persons: Person[] = [{
  firstName: "juan",
  age: 10,
  sex: "",
  height: 1.7,
  isStudiying: false,
}];

const persons2: Array<Person> = [{
  firstName: "juan",
  age: 10,
  sex: "",
  height: 1.7,
  isStudiying: false,
  skinTone: "white"
}];

