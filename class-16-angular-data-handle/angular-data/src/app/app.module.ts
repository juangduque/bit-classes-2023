import { NgModule } from '@angular/core'; // Se importa el decorador de angular que extiende el comportamiento propio de un módulo de angular.
import { BrowserModule } from '@angular/platform-browser'; // Se importa el módulo de angular que permite la ejecución de la aplicación en un navegador.
import { FormsModule } from '@angular/forms'; // Se importa el módulo de angular que permite la utilización de formularios en la aplicación, lo cual permite la utilización de ngModel.

import { AppComponent } from './app.component'; // Se importa el componente principal de la aplicación.

// Se crea el decorador del módulo, el cual recibe un objeto con las propiedades del módulo: declarations, imports, providers, bootstrap.
@NgModule({
  declarations: [
    AppComponent // Se define el componente principal de la aplicación.
  ],
  imports: [
    BrowserModule, // Se importa el módulo de angular que permite la ejecución de la aplicación en un navegador.
    FormsModule // Se importa el módulo de angular que permite la utilización de formularios en la aplicación, lo cual permite la utilización de ngModel.
  ],
  providers: [], // Se define el servicio principal de la aplicación.
  bootstrap: [AppComponent] // Se define el componente principal de la aplicación.
})

// Se crea la clase del módulo, la cual se exporta para que pueda ser utilizada en otros archivos.
export class AppModule { }
