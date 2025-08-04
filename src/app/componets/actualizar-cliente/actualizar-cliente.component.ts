import { Component } from '@angular/core';
import { ClientesService } from '../../servicies/clientes.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent {

  constructor(private servicioCliente: ClientesService,
    private router: Router, private ruta: ActivatedRoute
  ){}

  id: string="";
  cliente: any ={nombre:"", direccion:"", email:""}

  ngOnInit():void{
    this.ruta.params.subscribe(params => {
      this.id=params["id"]
      this.servicioCliente.buscarClienteById(this.id).subscribe(cliente=>{
        cliente=cliente;
      });
    });
  }

  editar(formulario:any):void{
    const clienteActualizado = {...formulario.value, id: this.id};
    this.servicioCliente.editarCliente(this.id, clienteActualizado).subscribe(()=>{
      this.router.navigate(["/clientes"])
    });
  }
}
