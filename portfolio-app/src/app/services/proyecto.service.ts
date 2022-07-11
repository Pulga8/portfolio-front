import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL + 'traer');
  }

  public setProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<Proyecto>(this.URL + 'crear', proyecto);
  }

  public deleteProyecto(id: number): Observable<Object> {
    return this.http.delete<Proyecto>(this.URL + 'delete/' + id);
  }

  public editProyecto(id: number, proyecto: Proyecto): Observable<any> {
    return this.http.post(this.URL + 'modificar/' + id, proyecto);
  }
}
