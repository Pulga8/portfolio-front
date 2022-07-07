import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  URL = 'http://localhost:8080/progreso/traer';

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.URL);
  }
}
