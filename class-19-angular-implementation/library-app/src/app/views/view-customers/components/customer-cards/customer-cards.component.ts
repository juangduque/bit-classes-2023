import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../../../../customer.service';


import { Customer } from '../../../../models/customer.model';
@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-cards.component.html',
  styleUrls: ['./customer-cards.component.css']
})
export class CustomerCardsComponent {
  @Input() customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router){};

  deleteCustomer(id: string | undefined){
    this.customerService.deleteCustomer(id as string).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  routeToEditCustomer(id: string | undefined){
    this.router.navigate(['/edit-customer', id])
  }
}
