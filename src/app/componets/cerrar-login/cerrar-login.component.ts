import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicies/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-login',
  standalone: true,
  imports: [],
  templateUrl: './cerrar-login.component.html',
  styleUrl: './cerrar-login.component.css'
})
export class CerrarLoginComponent {

  usuari: string=""
  password: string=""

  constructor(private logUser: AutenticacionService, private router: Router){}

  logLogin(){
    const cerrar = this.logUser.logOut();
    this.router.navigate(["/login"])
    
  }
}
