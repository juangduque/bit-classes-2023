import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer} from './models/customer.model';

interface ApiResponse {
  result: Customer[]
}

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient ) { }

  getCustomerById(id: string){
    return this.http.get<Customer>(`${API_URL}/id/${id}`);
  }

  getAllCustomers() {
    return this.http.get<ApiResponse>(API_URL);
  }

  postCustomer(body: Customer){
    return this.http.post<string>(API_URL, body);
  }

  deleteCustomer(id: string){
    return this.http.delete<string>(`${API_URL}/${id}`);
  }

  putCustomer(id: string, body: Customer){
    return this.http.put<string>(`${API_URL}/${id}`, body);
  }
}
