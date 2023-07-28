import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';

import { Customer } from "../../models/customer.model";


const INITIAL_CUSTOMER_DATA = {
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
  customer: Customer = INITIAL_CUSTOMER_DATA;

  constructor(private customerService: CustomerService){}

  createCustomer(form: NgForm){
    this.customerService.postCustomer(this.customer).subscribe(
      (data) => {
        this.customer = INITIAL_CUSTOMER_DATA;
        form.resetForm();
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
