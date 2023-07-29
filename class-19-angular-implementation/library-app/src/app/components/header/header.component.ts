import { Component } from '@angular/core'; // Se importa el decorador Component desde el core de angular para crear el componente
import { Router } from '@angular/router'; // Se importa el modulo Router para poder usarlo en el constructor y poder navegar entre rutas.

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router){} // Se crea una variable privada router de tipo Router para poder usar el modulo Router y poder navegar a otras páginas.

  // Este metodo sirve para navegar a la ruta create-customer
  navigateToCreateCustomer(){
    this.router.navigate(['/create-customer']); // Se usa el metodo navigate del router para navegar a la ruta create-customer
  }

  // Este metodo sirve para navegar a la ruta view-customers
  navigateToViewCustomers(){
    this.router.navigate(['view-customers']); // Se usa el metodo navigate del router para navegar a la ruta view-customers
  }

}
