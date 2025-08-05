import { CanDeactivateFn } from '@angular/router';
import { RegistroUsarioFormComponent } from '../components/registro-usario-form/registro-usario-form.component';


//Poner el tipo de dato
export const resigtroUsuarioGuard: CanDeactivateFn<RegistroUsarioFormComponent> = (component, currentRoute, currentState, nextState) => {
  
  if (component.camposSinLlenar()) {
    return confirm("tienes datos sin llenar. ¿Seguro quieres abanadonar le registro?")
  } 
  
  return true;
};
