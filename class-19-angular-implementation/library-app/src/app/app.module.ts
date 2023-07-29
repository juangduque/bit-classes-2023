import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { CreateCustomerComponent } from './views/create-customer/create-customer.component';
import { ViewCustomersComponent } from './views/view-customers/view-customers.component';
import { HomeComponent } from './views/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';

import { CustomerCardsComponent } from './views/view-customers/components/customer-cards/customer-cards.component';
import { EditCustomerComponent } from './views/edit-customer/edit-customer.component';


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
