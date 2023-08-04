// Este archivo es para definir la lógica del servicio de customer que se utilizará en la aplicación. Se importa el HttpClient para poder realizar peticiones http, se importa el modelo de customer y se define la interfaz ApiResponse para definir el tipo de respuesta que se obtendrá de la api. Se define la url de la api y se exporta la clase del servicio de customer con los métodos que se utilizarán en la aplicación.

// Cabe aclarar que el servicio de customer se utiliza en los componentes de view-customers, add-customer, edit-customer y delete-customer.

import { Injectable } from '@angular/core'; // Se importa el Injectable para poder inyectar el servicio en los componentes
import { HttpClient } from '@angular/common/http'; // Se importa el HttpClient para poder realizar peticiones http

import { Customer} from '../models/customer.model'; // Se importa el modelo de customer

// Se drfine la interfaz ApiResponse para definir el tipo de respuesta que se obtendrá de la api para el método getAllCustomers.
interface ApiResponse {
  result: Customer[]
}

const API_URL = 'http://localhost:3000/customers'; // Se define la url base de la api

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { } // Se inyecta el HttpClient para poder realizar peticiones http

  // El siguiente método se utiliza para obtener un customer por su id
  getCustomerById(id: string){ // Se define el método getCustomerById con el parámetro id de tipo string
    return this.http.get<Customer>(`${API_URL}/id/${id}`); // El parámetro id se concatena a la url de la api para obtener el customer por su id al hacer el llamado a la api.
  }

  // El siguiente método se utiliza para obtener todos los customers
  getAllCustomers() {
    return this.http.get<ApiResponse>(API_URL); // Se hace el llamado a la api para obtener todos los customers
  }

  // El siguiente método se utiliza para crear un customer
  postCustomer(body: Customer){ // Se define el método postCustomer con el parámetro body de tipo Customer
    return this.http.post<string>(API_URL, body); // Se hace el llamado a la api para crear un customer
  }

  // El siguiente método se utiliza para eliminar un customer por su id
  deleteCustomer(id: string){ // Se define el método deleteCustomer con el parámetro id de tipo string
    return this.http.delete<string>(`${API_URL}/${id}`); // El parámetro id se concatena a la url de la api para eliminar el customer por su id al hacer el llamado a la api.
  }

  // El siguiente método se utiliza para actualizar un customer por su id
  putCustomer(id: string, body: Customer){ // Se define el método putCustomer con los parámetros id de tipo string y body de tipo Customer
    return this.http.put<string>(`${API_URL}/${id}`, body); // El parámetro id se concatena a la url de la api para actualizar el customer por su id y también se pasa la información a actualizar.
  }
}
