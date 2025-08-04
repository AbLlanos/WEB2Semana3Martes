import { Component } from '@angular/core';
import { ClientesService } from '../../servicies/clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent {

  constructor(private clienteServicio: ClientesService){}

  nombre: string ="";
  direccion: string ="";
  email: string ="";

  agregarFormulario(formulario:any){
    this.clienteServicio.guardarCliente(formulario.value).subscribe(()=>{
      window.location.reload(); //esto es para que se actualice la pagina
      alert("Usuario Registrado")
    })
  }
}
