import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  URL = 'http://localhost:8080/experiencia/traer';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL);
  }
}
