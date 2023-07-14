/*
  Este es el componente principal de la aplicación. El decorador @Component recibe un objeto de configuración con las siguientes propiedades:
  - selector: El selector es el nombre que se le va a dar al componente para poder utilizarlo en otros componentes.
  - templateUrl: La ruta al archivo HTML que contiene la plantilla del componente.
  - styleUrls: La ruta al archivo CSS que contiene los estilos del componente.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // El selector es el nombre que se le va a dar al componente para poder utilizarlo en otros componentes.
  templateUrl: './app.component.html', // La ruta al archivo HTML que contiene la plantilla del componente.
  styleUrls: ['./app.component.css'] // La ruta al archivo CSS que contiene los estilos del componente.
})
export class AppComponent {
  title = 'intro-project';
} // Exportamos el componente AppComponent (el componente principal de la aplicación)
