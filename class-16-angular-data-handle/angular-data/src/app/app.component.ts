import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
