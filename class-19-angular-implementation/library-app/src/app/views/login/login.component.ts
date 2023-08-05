import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: "",
    password: ""
  }
  isError: boolean = false;
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.credentials).subscribe(
      (data: { token: string, code?: number }) =>{
        if(data.code  === 404){
          this.isError = true;
          this.errorMessage = "Credenciales no válidas";
        }else{
          this.isError = false;
          this.authService.setToken(data.token);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.isError = true;
        this.errorMessage = "Correo o contraseña no es correcto";
        console.error(error);
      }
    )
  }

}
