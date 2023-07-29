import { NgModule } from '@angular/core'; // Este modulo es el que nos permite usar el decorador @NgModule, el cual importa angular y nos permite crear modulos

import { RouterModule, Routes } from '@angular/router'; // Estas importaciones nos permiten usar el modulo de rutas de angular. RouterModule sirve para crear rutas y Routes es el tipo de dato que se le pasa a RouterModule.

import { LoginComponent } from '../views/login/login.component';
import { CreateCustomerComponent } from '../views/create-customer/create-customer.component';
import { ViewCustomersComponent } from '../views/view-customers/view-customers.component';
import { HomeComponent } from '../views/home/home.component';
import { EditCustomerComponent } from '../views/edit-customer/edit-customer.component';


// El objeto routes es un arreglo de objetos que tienen la siguiente estructura: {path: 'ruta', component: ComponenteQueSeVaAMostrarEnLaRuta}. Sirve para definir las rutas de la aplicacion.
const routes: Routes = [
  {path: '', component: HomeComponent }, // Esta ruta es la ruta por defecto, es decir, la ruta que se va a mostrar cuando se ingrese a la aplicacion.
  {path: 'login', component: LoginComponent }, // Esta es la ruta para el login
  {path: 'create-customer', component: CreateCustomerComponent }, // Esta es la ruta para crear un nuevo customer
  {path: 'view-customers', component: ViewCustomersComponent }, // Esta es la ruta para ver todos los customers
  {path: 'edit-customer/:id', component: EditCustomerComponent }, // Esta es la ruta para editar un customer, se le pasa el id del customer que se va a editar
]

// El decorador @NgModule recibe un objeto con la siguiente estructura: {declarations: [], imports: [], exports: []}. Sirve para definir modulos.
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Este metodo forRoot() es el que nos permite usar las rutas en la aplicacion. Se le pasa el arreglo de rutas que definimos arriba.
  exports: [RouterModule] // Este exports es para exportar el modulo de rutas y poder usarlo en otros modulos.
})
export class AppRoutingModule { } // Exportamos la clase AppRoutingModule para poder usarla en otros modulos.
