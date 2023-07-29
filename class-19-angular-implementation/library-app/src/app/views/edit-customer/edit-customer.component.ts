import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../../customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements	 OnInit {
  id: string | null= "";
  customer: Customer  = {
    address: "",
    birthDate: "",
    cc: "",
    cel: "",
    email: "",
    name: ""
  };

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router ){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); // Se le va a asignar el id que viene desde la url (path) a la variable llamada 'id'

    this.customerService.getCustomerById(this.id as string).subscribe(
      (data) => {
        this.customer = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  editCustomer(){
    this.customerService.putCustomer(this.id as string, this.customer).subscribe(
      () => {
        this.router.navigate(['/view-customers']);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
