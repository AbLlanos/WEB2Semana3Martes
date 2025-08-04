import { Component } from '@angular/core';
import { ClientesService } from '../../servicies/clientes.service';
import { Cliente } from '../../interface/clientes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-cliente',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla-cliente.component.html',
  styleUrl: './tabla-cliente.component.css'
})
export class TablaClienteComponent {

  constructor(private servicioClientees: ClientesService){}

  clientess: Cliente[]=[];

  ngOnInit() {
  this.servicioClientees.getClientes().subscribe(data => {
    this.clientess = data; 
  });
}

eliminar(id: string): void{
  this.servicioClientees.eliminarCliente(id).subscribe(()=> {
    this.clientess=this.clientess.filter(cliente => cliente.id !== id)
  }, error=>{
    console.log("Error al eliminar al cliento", error);
    
  })
}

}
