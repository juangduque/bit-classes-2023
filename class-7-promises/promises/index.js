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

// Aqui a continuación se ejecuta/llama a la promesas
myPromise
  .then( (respuestaSatisfactoria) => console.log(respuestaSatisfactoria) )
  .catch( (respuestaDeRechazo) => console.log(respuestaDeRechazo) )

// Esta es otra forma de ejecutar/llamar promesas ,Esta es la sintaxis para declara una función asíncrona con el enfoque arrow function
const thisFunctionCallAPromise = async () => {
  try{
    const response = await myPromise;
    console.log(response);
  }catch(error){
    console.log(error)
  }
}

thisFunctionCallAPromise();

// Esta es la sintaxis para declara una función asíncrona con el enfoque clásico
async function thisFunctionCallAPromise2() {
  try{
    const response = await myPromise;
    console.log(response);
  }catch(error){
    console.log(error)
  }
}

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
