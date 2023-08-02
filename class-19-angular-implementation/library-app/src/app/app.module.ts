// Módulos principales o internos de la aplicación
import { NgModule } from '@angular/core'; // Se importa el NgModule para poder crear el módulo
import { BrowserModule } from '@angular/platform-browser'; // Se importa el BrowserModule para poder ejecutar la aplicación en el navegador
import { AppRoutingModule } from './app-routing/app-routing.module'; // Se importa el AppRoutingModule para poder utilizar las rutas definidas en el archivo app-routing.module.ts
import { HttpClientModule } from '@angular/common/http'; // Se importa el HttpClientModule para poder realizar peticiones http
import { FormsModule } from '@angular/forms'; // Se importa el FormsModule para poder utilizar el ngModel

// Componentes reutilizables.
import { AppComponent } from './app.component'; // Se importa el componente principal
import { HeaderComponent } from './components/header/header.component'; // Se importa el componente header
import { LoaderComponent } from './components/loader/loader.component'; // Se importa el componente loader
import { ErrorComponent } from './components/error/error.component'; // Se importa el componente error

// Vistas de la aplicación
import { LoginComponent } from './views/login/login.component'; // Se importa la vista login
import { CreateCustomerComponent } from './views/create-customer/create-customer.component'; // Se importa la vista create-customer
import { ViewCustomersComponent } from './views/view-customers/view-customers.component'; // Se importa la vista view-customers
import { HomeComponent } from './views/home/home.component'; // Se importa la vista home
import { EditCustomerComponent } from './views/edit-customer/edit-customer.component'; // Se importa la vista edit-customer
import { CustomerCardsComponent } from './views/view-customers/components/customer-cards/customer-cards.component'; // Se importa el componente customer-cards

// A continuación se relacionan los componentes en la sección declarations y se relacionan los módulos en la sección imports

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreateCustomerComponent,
    ViewCustomersComponent,
    HomeComponent,
    LoaderComponent,
    ErrorComponent,
    CustomerCardsComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
