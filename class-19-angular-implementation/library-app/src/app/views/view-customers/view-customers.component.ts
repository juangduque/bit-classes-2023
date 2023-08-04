import { Component, OnInit } from '@angular/core'; // Se importa el OnInit para poder implementar el método ngOnInit el cual se ejecuta cuando se carga el componente
  console.log("sirve");
import { CustomerService } from '../../services/customer.service'; // Se importa el servicio de customer

import { Customer } from '../../models/customer.model'; // Se importa el modelo de customer

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  customers: Customer[] = []; // Se inicializa la variable customers como un array de objetos de tipo Customer
  isLoading: boolean = false; // Se declara la variable isLoading como booleana y se inicializa en false
  isError: boolean = false; // Se declara la variable isError como booleana y se inicializa en false
  errorMessage: string = "Ha ocurrido un error"; // Se declara la variable errorMessage como string y se inicializa en "Ha ocurrido un error"

  constructor(private customerService: CustomerService) {} // Se inyecta el servicio de customer

  // El método ngOnInit se ejecuta cuando se carga el componente debido a que  es necesario obtener los customers desde la api al cargar el componente la primera vez.
  ngOnInit(): void {
    this.isLoading = true; // Se configura la variable isLoading en true para mostrar el spinner de carga

    // A continuación se llama al método getAllCustomers del servicio de customer para obtener todos los customers
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data.result; // Si la petición es exitosa, se asigna el valor retornado por la api a la variable customers
        this.isLoading = false; // Se configura la variable isLoading en false para ocultar el spinner de carga
      },
      (error) => {
        this.isLoading = false; // Se configura la variable isLoading en false para ocultar el spinner de carga
        this.isError = true; // Se configura la variable isError en true para mostrar el mensaje de error
        this.errorMessage = "Ha ocurrido un error al tratar de leer los clientes"; // Se configura la variable errorMessage con el mensaje de error
      }
    )
  }

}
