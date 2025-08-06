import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
private usuariosUrl = 'assets/usuarios.json';


  constructor(private http: HttpClient) { }


  LoginAuthenticacion(usuario: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usuariosUrl).pipe(
      map(usuarios => {
        const encontrado = usuarios.find(u => u.usuario === usuario && u.password === password);
        
        if (encontrado) {
          localStorage.setItem("user", usuario);
          return true;
        }
        return false;
      })
    );
  }

  sessionInit(): boolean {
    return localStorage.getItem("user") !== null;
  }

  logOut(): void {
    localStorage.removeItem("user");
  }
  
  
}
