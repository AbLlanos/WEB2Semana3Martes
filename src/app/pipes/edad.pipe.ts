import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad',
  standalone: true
})
export class EdadPipe implements PipeTransform {

  transform(fechaNacimiento: string): number {

    if (!fechaNacimiento) return 0;

    const nacimiento = new Date(fechaNacimiento);

    const hoy = new Date();


    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    let mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes == 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;


  }

}
