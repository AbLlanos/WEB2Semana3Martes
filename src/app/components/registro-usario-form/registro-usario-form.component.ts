import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesionPipe } from '../../pipes/profesion.pipe';
import { EdadPipe } from '../../piped/edad.pipe';

@Component({
  selector: 'app-registro-usario-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ProfesionPipe, EdadPipe],
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

  constructor(private router: Router) { }

  fb = inject(FormBuilder);

  registroForm: FormGroup = this.fb.group({
    nombre: ["", Validators.required],
    profesion: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    fechaNacimiento: ["", Validators.required],
    password: ["", Validators.required, Validators.minLength(6)],

  })




  //some detecta que no este vacio
  camposSinLlenar = () => {

    return !this.enviado && Object.values(this.registroForm).some(valor => valor.trim?.() !== "");

  }

  registrar() {
    if (this.registroForm.valid) {
      this.enviado = true;
      console.log("registro exitoso", this.registroForm.value)
      console.log("Fecha de nacimiento:", this.registroForm.get('fechaNacimiento')?.value);
      alert("registrado")
    } else {
      this.registroForm.markAllAsTouched();
      console.log("Fecha de nacimiento:", this.registroForm.get('fechaNacimiento')?.value);
      console.log("Error")
    }

  }


}
