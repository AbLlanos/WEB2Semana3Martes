import { Component } from '@angular/core';
import { EmpleadosService } from '../../servicies/empleados.service';
import { Empleado } from '../../interface/empleado';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  constructor(private servicioEmpleado: EmpleadosService){}
  empleados: Empleado[]=[];

  ngOnInit(){
    this.servicioEmpleado.getEmpleados().subscribe(data=>{
      this.empleados=data.items;
    })
  }

}
