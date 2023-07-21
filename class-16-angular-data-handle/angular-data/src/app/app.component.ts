import { Component } from '@angular/core'; // Se importa el decorador de angular que extiende el comportamiento propio de un componente de angular.

// Se crea un decorador para el componente, el cual recibe un objeto con las propiedades del componente: selector, templateUrl, styleUrls.
@Component({
  selector: 'app-root', // Se define el selector del componente, el cual se utiliza para llamar al componente en el html.
  templateUrl: './app.component.html', // Se define la ruta del archivo html que contiene el código del componente.
  styleUrls: ['./app.component.css'] // Se define la ruta del archivo css que contiene los estilos del componente.
})

// Se crea la clase del componente, la cual se exporta para que pueda ser utilizada en otros archivos.
export class AppComponent {
  name: string = "juan";
  age: number = 20;
  person = {
    name: "oscar",
    lastname: "garcia",
  }

  fruits: string[] = ["apple", "kiwi", "banana"]

  type: string = "button"
  disabled: boolean = false;
  imgUrl: string = "https://tse1.mm.bing.net/th?id=OIP.0e365QXKL-NORBeVdozttgHaHe&pid=Api&P=0&h=180";

  variableModificable: string = "valor";

  dataPerson = {
    name: "",
    lastName: "",
    phone: ""
  };

  buttonClicked(){
    console.log("Hola mundo");
  }

  increaseAge(){
    // this.age = this.age + 1;
    this.age += 1;
  }

  disableSubmitButton(){
    this.disabled = !this.disabled;
  }

  showDataPerson(){
    console.log(this.dataPerson);
  }
}
