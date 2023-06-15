// const myPromise = new Promise(function(resolve, reject){ // Esta es la sintaxis básica de una promesa

// })

const number = 2;

const myPromise = new Promise(function(resolve, reject ){ // Aqui declaro la promesa
  if(number > 4){
    resolve("Esta promesa se cumplió");
  }else{
    reject("No se ha cumplido");
  }
});

// Aqui a continuación se ejecuta/llama a la promes
myPromise
  .then( (respuestaSatisfactoria) => console.log(respuestaSatisfactoria) )
  .catch( (respuestaDeRechazo) => console.log(respuestaDeRechazo) )

// Hacer un pequeño programa donde se declare una promesa y se evalue si la edad de el usuario corresponde a alguien mayor o menor de edad, al ejecutar la promesa el programa debe decir si la edad es de alguien mayor o no de edad.

const age = 18;
const calculateAGe = new promise(function(resolve, reject ){
  if(age >= 19 ) {
	resolve("es mayor de edad ")
	}else{ 
	reject ("no es mayorde edad")
  }
});

calculateAGe
  .then( respuestaSatisfactoria => console.log(respuestaSatisfactoria) )
  .catch( respuestaDeRechazo => console.log(respuestaDeRechazo) )
