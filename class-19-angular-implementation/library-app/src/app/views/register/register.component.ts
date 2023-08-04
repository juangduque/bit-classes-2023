import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models/employee.model';

import { Router } from '@angular/router'; // Se importa el router para redireccionar


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  employee: Employee = {
    name: "",
    email: "",
    role: "",
    cel: "",
    password: "",
  }

  constructor(private employeeService: EmployeeService, private router: Router){}

  registerEmployee(){
    this.employeeService.registerEmployee(this.employee).subscribe(
      (data) => {
        this.router.navigate(['/login']); // Si la creación del customer es exitosa, se redirecciona a la página de view-customers.
        console.log(data); // Se imprime en consola el resultado de la creación del customer.
      },
      (error) => {
        console.log(error); // Si hay error, se imprime en consola el error.
      }
    );
  }

}
