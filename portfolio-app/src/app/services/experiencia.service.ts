import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  URL = 'http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL + 'traer');
  }

  public setExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<Experiencia>(this.URL + 'crear', experiencia);
  }

  public deleteExperiencia(id: number): Observable<Object> {
    return this.http.delete<Experiencia>(this.URL + 'delete/' + id);
  }

  public editExperiencia(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.post(this.URL + 'modificar/' + id, experiencia);
  }
}
