import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'http://localhost:8080/proyecto/traer';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL);
  }
}
