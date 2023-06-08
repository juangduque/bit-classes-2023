const numero1 = 5;
const numero2 = 2;

// if(numero1 === 3){
//   console.log("Este número es igual a 3");
// }else if(numero1 === 4){
//   console.log("Este número es igual a 4")
// }else{
//   console.log("Este número no es igual a ninguno de las comparaciones");
// }

// El switch case solo se usa para comparar igualdad
switch (numero1) {
  case 3:
    // Tu codigo aqui
    console.log("Este número es igual a 3");
    break;
  case 4:
    console.log("Este número es igual a 4")
    break;
  default:
    console.log("Este número no es igual a ninguno de las comparaciones");
    break;
}