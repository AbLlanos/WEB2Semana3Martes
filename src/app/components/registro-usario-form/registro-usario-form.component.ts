import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usario-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-usario-form.component.html',
  styleUrl: './registro-usario-form.component.css'
})
export class RegistroUsarioFormComponent {

  enviado: boolean = false;

  registro = {

    nombre: "",
    email: "",
    profesion: "",
    fechaNacimiento: "",
    password: "",

  };

  //some detecta que no este vacio
  camposSinLlenar=()=>{

    return !this.enviado && Object.values(this.registro).some(valor => valor.trim?.() !== "");

  }


}
