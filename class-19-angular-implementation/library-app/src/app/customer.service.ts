import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer} from './models/customer.model';

interface ApiResponse {
  result: Customer[]
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient ) { }

  getAllCustomers() {
    return this.http.get<ApiResponse>('http://localhost:3000/customers');
  }

  postCustomer(body: Customer){
    return this.http.post<string>('http://localhost:3000/customers', body);
  }
}
