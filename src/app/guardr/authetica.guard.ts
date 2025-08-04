import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../servicies/autenticacion.service';

export const autheticaGuard: CanActivateFn = (route, state) => {

  /*const router = inject(Router)
  const loginExitoso = localStorage.getItem('user')
  if(loginExitoso){
    return true;
  }else{
    return router.parseUrl("home");
  }*/
  
    const authServicio = inject(AutenticacionService);
    const router = inject(Router);

    if(authServicio.sessionInit()){
      return true;
    }else{
      localStorage.setItem("redirectUrl", state.url)
    
      return router.parseUrl("/login")
    }
};
