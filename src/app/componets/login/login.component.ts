import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicies/autenticacion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = "";
  password: string = "";
  error: string = "";

  constructor(private authServicio: AutenticacionService, private router: Router) {}

  Login() {
  this.authServicio.LoginAuthenticacion(this.usuario, this.password).subscribe(sesionExitosa => {
    if (sesionExitosa) {
      const redireccion = localStorage.getItem("redirectUrl") || "empleado";
      localStorage.removeItem("redirectUrl");
      this.router.navigateByUrl(redireccion);
    } else {
      this.error = "Error: Prende de nuevo tu tostadora.";
    }
  });
}

}
