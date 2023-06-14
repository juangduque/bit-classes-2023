let person = {
  name: 'John Doe',
  age: 30,
  height: 1.8,
  weight: 80,
  skinTone: 'white'
};

function sayHello(name){
  console.log("hola ", name);
};

// Aqui le especifico que quiero exportar.
// module.exports solo se puede usar 1 vez por archivo.
module.exports = {
  sayHello,
  person
}
