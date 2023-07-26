import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Se importa el modulo Router desde el modulo @angular/router. Sirve para navegar hacia otra vista.

@Component({
  selector: 'app-login', // Este es el selector del componente. Sirve para llamar al componente desde otro componente.
  templateUrl: './login.component.html', // Este es el archivo html del componente. Es el que contiene la estructura del componente.
  styleUrls: ['./login.component.css'] // Este es el archivo css del componente. Es el que contiene los estilos del componente.
})
export class LoginComponent {

  constructor(private router: Router) {} // Se crea una variable privada router de tipo Router. Sirve para navegar hacia otra vista.

  //Se va crear un método para ayudarnos a navegar hacia otra vista
  redirectToAboutPage(){
    this.router.navigate(['/about-us']) // Se navega hacia la vista about-us.
  }
}
