import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input() errorMessage: string =""; // Este decorador @Input() sirve para recibir datos desde el componente padre, en este caso el componente padre es el componente que llama a este componente. y el dato que se recibe es el mensaje de error.

}
