import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  result: Customer[]
}

interface Customer {
  id: string;
  name: string;
  cc: string;
  email: string;
  birthDate: string;
  cel: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient ) { }

  getAllCustomers() {
    return this.http.get<ApiResponse>('http://localhost:3000/customers');
  }
}