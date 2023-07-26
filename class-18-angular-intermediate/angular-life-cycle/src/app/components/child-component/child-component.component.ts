import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core'; // Se importa el decorador Component, el decorador Input, el decorador OnInit, el decorador OnChanges y el decorador OnDestroy desde el modulo @angular/core.

@Component({
  selector: 'app-child-component', // Este es el selector del componente. Sirve para llamar al componente desde otro componente.
  templateUrl: './child-component.component.html', // Este es el archivo html del componente. Es el que contiene la estructura del componente.
  styleUrls: ['./child-component.component.css'] // Este es el archivo css del componente. Es el que contiene los estilos del componente.
})
export class ChildComponentComponent implements OnInit, OnChanges, OnDestroy { // Se implementan las interfaces OnInit, OnChanges y OnDestroy en la clase ChildComponentComponent.
  @Input() message: string = ""; // Este decorador @Input() sirve para recibir datos desde el componente padre.

  /* Este es el ciclo de vida de un componente. Se ejecuta en el siguiente orden:
    constructor
    ngOnChanges
    ngOnInit
    ngOnDestroy
  */

  // Este es el constructor del componente. Se ejecuta cuando se crea el componente. Sirve para inicializar variables.
  constructor(){
    console.log("constructor");
  }

  // Este es el metodo ngOnInit. Se ejecuta cuando se crea el componente. Sirve para ejecutar codigo cuando se crea el componente.
  ngOnInit(){
    console.log("ngOnInit");
  }

  // Este es el metodo ngOnChanges. Se ejecuta cuando se cambia el valor de una variable del componente. Sirve para ejecutar codigo cuando se cambia el valor de una variable del componenteo en general cuando el componente sufre cambios.
  ngOnChanges(){
    console.log("ngOnChanges");
  }

  // Este es el metodo ngOnDestroy. Se ejecuta cuando se desmonta el componente. Sirve para ejecutar codigo cuando se destruye el componente.
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
