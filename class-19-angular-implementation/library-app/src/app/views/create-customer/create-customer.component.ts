import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service'; // Se importa el servicio de customer
import { Router } from '@angular/router'; // Se importa el router para redireccionar

import { Customer } from "../../models/customer.model"; // Se importa el modelo de customer o lo que es lo mismo, la interfaz.

// Aqui se define los datos iniciales del objeto customer
const INITIAL_CUSTOMER_DATA: Customer = {
  name: "",
  cc: "",
  email: "",
  birthDate: "",
  cel: "",
  address: ""
};
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  customer: Customer = INITIAL_CUSTOMER_DATA; // Se asigna al objeto customer los datos iniciales.

  constructor(private customerService: CustomerService, private router: Router){} // Se crea una variable privada router de tipo Router para poder usar el modulo Router y poder navegar a otras páginas.

  // El siguiente método se implementar el servicio de customer para crear un nuevo customer.
  createCustomer(){
    // Se llama al método postCustomer del servicio de customer y se le pasa como parámetro el objeto customer a crear.
    this.customerService.postCustomer(this.customer).subscribe(
      (data) => {
        this.router.navigate(['/view-customers']); // Si la creación del customer es exitosa, se redirecciona a la página de view-customers.
        console.log(data); // Se imprime en consola el resultado de la creación del customer.
      },
      (error) => {
        console.log(error); // Si hay error, se imprime en consola el error.
      }
    )
  }

}
