import { Component, OnInit } from '@angular/core'; // Se importa el OnInit para poder implementar el método ngOnInit el cual se ejecuta cuando se carga el componente
import { ActivatedRoute, Router } from '@angular/router'; // Se importa el router para redireccionar y ActivatedRoute para obtener el id de la url

import { CustomerService } from '../../customer.service'; // Se importa el servicio de customer
import { Customer } from '../../models/customer.model'; // Se importa el modelo de customer

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements	 OnInit { // Se implementa el OnInit para poder implementar el método ngOnInit el cual se ejecuta cuando se carga el componente
  id: string | null= ""; // Se inicializa la variable id como string o null porque asi lo retorna el método snapshot.paramMap.get('id') de ActivatedRoute

  // Se inicializa el objeto customer con los datos iniciales
  customer: Customer  = {
    address: "",
    birthDate: "",
    cc: "",
    cel: "",
    email: "",
    name: ""
  };

  // En el siguiente constructor se inyecta el servicio de customer, ActivatedRoute y Router
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router ){}

  // En el siguiente método se obtiene el id de la url y se llama al método getCustomerById del servicio de customer para obtener el customer por id
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); // Se le va a asignar el id que viene desde la url (path) a la variable llamada 'id'

    // A continuación se llama al método getCustomerById del servicio de customer para obtener el customer por id
    this.customerService.getCustomerById(this.id as string).subscribe(
      (data) => {
        this.customer = data; // Se asigna el valor retornado por la api al objeto customer.
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // En el siguiente método se llama al método putCustomer del servicio de customer para actualizar el customer por id
  editCustomer(){
    // Se llama al método putCustomer del servicio de customer y se le pasa como parámetro el id y el objeto customer a actualizar.
    this.customerService.putCustomer(this.id as string, this.customer).subscribe(
      () => {
        this.router.navigate(['/view-customers']); // Si la actualización del customer es exitosa, se redirecciona a la página de view-customers.
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
