import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://ancient-atoll-13346.herokuapp.com/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + 'traer');
  }

  public setEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<Educacion>(this.URL + 'crear', educacion);
  }

  public deleteEducacion(id: number): Observable<Object> {
    return this.http.delete<Educacion>(this.URL + 'delete/' + id);
  }

  public editEducacion(id: number, educacion: Educacion): Observable<any> {
    return this.http.post(this.URL + 'modificar/' + id, educacion);
  }
}
