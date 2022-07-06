import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educacion/traer';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL);
  }
}
