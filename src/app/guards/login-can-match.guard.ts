import { CanMatchFn } from '@angular/router';
import { AutenticacionService } from '../servicies/autenticacion.service';
import { inject } from '@angular/core';

export const loginCanMatchGuard: CanMatchFn = (route, segments) => {


  //usar inject e insertar el servicio
  const authServicio = inject(AutenticacionService);
  return !authServicio.sessionInit();

};
