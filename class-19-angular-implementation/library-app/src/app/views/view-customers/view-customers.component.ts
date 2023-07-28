import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  customers: Customer[] = [];
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string = "Ha ocurrido un error";

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data.result;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = "Ha ocurrido un error al tratar de leer los clientes"
      }
    )
  }

}
