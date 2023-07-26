import { Component } from '@angular/core'; // Se importa el decorador de angular que extiende el comportamiento propio de un componente de angular.

// Se crea una interfaz para definir el tipo de dato del objeto producto.
interface Product {
  id: string,
  name: string,
  price: number,
  description: string,
  image: string,
}

// Se crea un decorador para el componente, el cual recibe un objeto con las propiedades del componente: selector, templateUrl, styleUrls.
@Component({
  selector: 'app-root', // Se define el selector del componente, el cual se utiliza para llamar al componente en el html.
  templateUrl: './app.component.html', // Se define la ruta del archivo html que contiene el código del componente.
  styleUrls: ['./app.component.css'] // Se define la ruta del archivo css que contiene los estilos del componente.
})

// Se crea la clase del componente, la cual se exporta para que pueda ser utilizada en otros archivos.
export class AppComponent {
  name: string = "juan"; // Se crea una variable de tipo string con el valor "juan".
  age: number = 20; // Se crea una variable de tipo number con el valor 20.
  // Se crea una variable de tipo objeto con dos propiedades: name y lastname.
  person = {
    name: "oscar",
    lastname: "garcia",
  }

  fruits: string[] = ["apple", "kiwi", "banana"] // Se crea una variable de tipo array con los valores "apple", "kiwi", "banana".

  type: string = "date" // Se crea una variable de tipo string con el valor "date".
  disabled: boolean = false; // Se crea una variable de tipo boolean con el valor false.
  imgUrl: string = "https://tse1.mm.bing.net/th?id=OIP.0e365QXKL-NORBeVdozttgHaHe&pid=Api&P=0&h=180"; // Se crea una variable de tipo string con la ruta de una imagen.

  variableModificable: string = "valor"; // Se crea una variable de tipo string con el valor "valor".

  // Se crea una variable de tipo objeto con tres propiedades: name, lastName y phone.
  dataPerson = {
    name: "nicolas",
    lastName: "",
    phone: ""
  };

  // Se crea un arreglo de objetos de tipo Product.
  products: Product[] = [
    {
      id: "1",
      name: "product 1",
      price: 100,
      description: "description 1",
      image: "https://m.media-amazon.com/images/I/71UOxU0t4-L._AC_SX466_.jpg",
    },
    {
      id: "2",
      name: "product 2",
      price: 200,
      description: "description 2",
      image: "https://http2.mlstatic.com/jabon-liquido-natural-sin-ingredientes-daninos-D_NQ_NP_315011-MLM20452399840_102015-F.jpg",
    },
    {
      id: "3",
      name: "product 4",
      price: 100,
      description: "description 4",
      image: "https://tse4.mm.bing.net/th?id=OIP.QTLafirwLtI6Od7ezQLZuQHaEv&pid=Api&P=0&h=180",
    },
    {
      id: "4",
      name: "product 4",
      price: 100,
      description: "description 4",
      image: "https://3.bp.blogspot.com/-tWTsiaeKKzI/UPoVBH9uX4I/AAAAAAABhrs/tTvDQQlYhIU/s1600/helado-en-cono-de-sabor-chocolate-con-frambuezas-y-cerezas-ice-cream-cone.jpg",
    }
  ]

//Funcionamiento bucle for of:
// const numbers = [1,2,3,4,5];
// const fruits = ["apple", "kiwi", "banana"];

// for(const variable of numbers){
//   console.log(variable)
// }

// const number = "";

// if (number === 2){
//   console.log("Este es un 2")
// }else if(number === 3){
//   console.log("Este es un 3")
// }else if(number === 4){
//   console.log("Este es un 4")
// }else{
//   console.log("No se que es")
// }

// switch(number){
//   case 2:
//     console.log("Este es un 2")
//     break;
//   case 3:
//     console.log("Este es un 3")
//     break
//   case 4:
//     console.log("Este es un 4")
//     break
//   default:
//     console.log("No se que es")
//     break;
// }

  // Se crea un método para mostrar un mensaje en la consola.
  buttonClicked(){
    console.log("Hola mundo");
  }

  // Se crea un método para aumentar en 1 el valor de la variable age.
  increaseAge(){
    // this.age = this.age + 1;
    this.age += 1; // Se incrementa en 1 el valor de la variable age.
  }

  // Se crea un método para cambiar el valor de la variable disabled el cual es booleano.
  disableSubmitButton(){
    this.disabled = !this.disabled; // Se asigna el valor contrario al valor actual de la variable disabled.
  }

  // Se crea un método para mostrar el objeto dataPerson en la consola.
  showDataPerson(){
    console.log(this.dataPerson);
  }
}
