import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from '../interface/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  private API_CLIENTES = "https://proyectoapp-b0489-default-rtdb.firebaseio.com/";

  //Esto es para mandar los datos a una base de datps 
  guardarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.API_CLIENTES}/clientes.json`, cliente)

  }

  getClientes(): Observable<Cliente[]> {
  return this.http.get<Record<string, Omit<Cliente, 'id'>>>(`${this.API_CLIENTES}/clientes.json`)
    .pipe(
      map(data =>
        Object.entries(data || {}).map(
          ([id, cliente]) => ({ id, ...cliente } as Cliente)
        )
      )
    );
}

  buscarClienteById(id: string): Observable<any>{
  return this.http.get(`${this.API_CLIENTES}/cliete/${id}.json`)
}

eliminarCliente(id: string): Observable<any>{
  return this.http.delete(`${this.API_CLIENTES}/clientes/${id}.json`)
}

editarCliente(id: string, cliente:any): Observable<any>{
  return this.http.put(`${this.API_CLIENTES}/clientes/${id}.json`, cliente);
}
}
