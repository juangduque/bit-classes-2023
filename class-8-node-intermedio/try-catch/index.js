const book = "cien años de soledad";

console.log("esto esta antes");

try{
  // Aqui se pone código de algo que puede fallar
  console.log(name);
  // throw new Error("esto es un error personalizado"); // Esta es la sintaxis para generar un error personalizado
}catch(error){
  // Aqui se pone código para hacer la gestión del error.
  console.log("ha ocurrido un error: ", error.message);
};

console.log("esto esta despues");