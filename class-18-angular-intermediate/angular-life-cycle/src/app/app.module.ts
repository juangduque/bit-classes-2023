import { NgModule } from '@angular/core'; // Este modulo es el que nos permite usar el decorador @NgModule, el cual importa angular y nos permite crear modulos
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // Importamos el componente principal de la aplicación
import { FormsModule } from '@angular/forms'; // Este modulo es el que nos permite usar el ngModel
import { AppRoutingModule } from './app-routing/app-routing.module'; // Importamos el modulo de rutas que definimos en app-routing/app-routing.module.ts
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { SiblingComponent } from './components/sibling/sibling.component';
import { HomeComponent } from './views/home/home.component';

// El decorador @NgModule recibe un objeto con la siguiente estructura: {declarations: [], imports: [], exports: []}. Sirve para definir modulos. En este caso es el modulo principal de toda la aplicación.
@NgModule({
  declarations: [ // En el arreglo declarations se declaran todos los componentes que se van a usar en el modulo.
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    SiblingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, // Este modulo es el que nos permite usar la directiva ngIf, ngFor, etc.
    FormsModule, // Este modulo es el que nos permite usar el ngModel
    AppRoutingModule // Este es el modulo de rutas que definimos en app-routing/app-routing.module.ts.
  ],
  providers: [],
  bootstrap: [AppComponent] // Este es el componente que se va a cargar cuando se inicie la aplicación.
})
export class AppModule { }
