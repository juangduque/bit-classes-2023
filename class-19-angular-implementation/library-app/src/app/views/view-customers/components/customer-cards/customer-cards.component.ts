import { Component, Input } from '@angular/core'; // Se importa el Input para poder recibir datos desde el componente padre
import { Router } from '@angular/router'; // Se importa el router para redireccionar

import { CustomerService } from '../../../../customer.service';


import { Customer } from '../../../../models/customer.model';
@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-cards.component.html',
  styleUrls: ['./customer-cards.component.css']
})
export class CustomerCardsComponent {
  @Input() customers: Customer[] = []; // Se declara la variable customers como un array de objetos de tipo Customer y se inicializa como un array vacío. Además se indica que en esta variable se va a recibir un valor desde el componente padre.

  // El siguiente constructor recibe como parámetro el servicio de customer y el router
  constructor(private customerService: CustomerService, private router: Router){};

  // El siguiente método recibe como parámetro el id del customer a eliminar y llama al método deleteCustomer del servicio de customer para eliminar el customer por id
  deleteCustomer(id: string | undefined){
    // Se llama al método deleteCustomer del servicio de customer y se le pasa como parámetro el id del customer a eliminar.
    this.customerService.deleteCustomer(id as string).subscribe(
      (data) => {
        window.location.reload(); // Si el resultado es exitoso, se recarga la página para que se actualice la lista de customers.
        console.log(data); // Se imprime en consola el resultado retornado por la api.
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // El siguiente método recibe como parámetro el id del customer a editar y redirecciona a la página de edit-customer
  routeToEditCustomer(id: string | undefined){
    this.router.navigate(['/edit-customer', id]); // El método navigate recibe como parámetro un array con el path y el id del customer a editar.	Esta ruta se encuentra definida en el archivo app-routing.module.ts
  }
}
