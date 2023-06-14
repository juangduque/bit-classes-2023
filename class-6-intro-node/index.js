const person = require('./person'); // Aqui le especifico lo que quiero importar

console.log(person);

function myName() {
  let name = "juan";
  console.log("esto esta adentro de la función", name);
};

myName();

console.log("esto esta afuera de la función", name);
