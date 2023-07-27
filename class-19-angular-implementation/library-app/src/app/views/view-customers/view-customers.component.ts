import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

interface Customer {
  id: string;
  name: string;
  cc: string;
  email: string;
  birthDate: string;
  cel: string;
  address: string;
}

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data.result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
