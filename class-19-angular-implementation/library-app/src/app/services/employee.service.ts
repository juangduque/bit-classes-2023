import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee.model';

const API_URL = 'http://localhost:3000/employees'; // Se define la url base de la api que interactúa con la entidad de employee

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { } // Se inyecta el HttpClient para poder realizar peticiones http

  // El siguiente método se utiliza para obtener un employee por su id
  registerEmployee(body: Employee){ // Se define el método registerEmployee con el parámetro body de tipo Employee
    return this.http.post<string>(`${API_URL}/register`, body); // Se hace el llamado a la api para crear un employee nuevo
  };

  // El siguiente método se utiliza para obtener los datos de un employee por su id
  getEmployeeById(id: string){ // Se define el método getEmployeeById con el parámetro id de tipo string
    return this.http.get<Employee>(`${API_URL}/${id}`); // El parámetro id se concatena a la url de la api para obtener el employee por su id al hacer el llamado a la api. Este llamado a la api retorna un objeto de tipo Employee.
  };
}
