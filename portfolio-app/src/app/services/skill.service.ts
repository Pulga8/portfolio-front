import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  URL = 'http://localhost:8080/progreso/';

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.URL +'traer');
  }

  public setSkill(skill: Skill): Observable<any> {
    return this.http.post<Skill>(this.URL + 'crear', skill);
  }

  public deleteSkill(id: number): Observable<Object> {
    return this.http.delete<Skill>(this.URL + 'delete/' + id);
  }

  public editSkill(id: number, skill: Skill): Observable<any> {
    return this.http.post(this.URL + 'modificar/' + id, skill);
  }
}
