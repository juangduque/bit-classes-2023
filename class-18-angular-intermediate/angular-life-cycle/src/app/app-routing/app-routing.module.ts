import { NgModule } from '@angular/core'; // Este modulo es el que nos permite usar el decorador @NgModule, el cual importa angular y nos permite crear modulos

import { RouterModule, Routes } from '@angular/router'; // Estas importaciones nos permiten usar el modulo de rutas de angular. RouterModule sirve para crear rutas y Routes es el tipo de dato que se le pasa a RouterModule.

import { HomeComponent } from '../views/home/home.component'; // Importamos los componentes que vamos a usar en las rutas
import { LoginComponent } from '../views/login/login.component'; // Importamos los componentes que vamos a usar en las rutas
import { AboutComponent } from '../views/about/about.component'; // Importamos los componentes que vamos a usar en las rutas

// El objeto routes es un arreglo de objetos que tienen la siguiente estructura: {path: 'ruta', component: ComponenteQueSeVaAMostrarEnLaRuta}. Sirve para definir las rutas de la aplicacion.
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'about-us', component: AboutComponent }
]

// El decorador @NgModule recibe un objeto con la siguiente estructura: {declarations: [], imports: [], exports: []}. Sirve para definir modulos.
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Este metodo forRoot() es el que nos permite usar las rutas en la aplicacion. Se le pasa el arreglo de rutas que definimos arriba.
  exports: [RouterModule] // Este exports es para exportar el modulo de rutas y poder usarlo en otros modulos.
})
export class AppRoutingModule { } // Exportamos la clase AppRoutingModule para poder usarla en otros modulos.
