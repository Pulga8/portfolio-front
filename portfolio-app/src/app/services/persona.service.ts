import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL + 'traer');
  }

  public getPersonaPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL + 'traer/' + id);
  }

  public setPersona(persona: Persona): Observable<any> {
    return this.http.post<Persona>(this.URL + 'crear', persona);
  }

  public deletePersona(id: number): Observable<Object> {
    return this.http.delete<Persona>(this.URL + 'delete/' + id);
  }

  public editPersona(id: number, persona: Persona): Observable<any> {
    return this.http.post(this.URL + 'modificar/' + id, persona);
  }
}
