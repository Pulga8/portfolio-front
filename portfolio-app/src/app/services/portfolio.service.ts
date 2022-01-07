import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'; // Nos permite leer desde el json, Con ésto logramos hacer peticiones de GET,Post al puerto 5000 que es donde levantamos la bd.
import { Experiencia } from '../Experiencia';
import { Educacion } from '../Educacion';
import { Proyecto } from '../Proyecto';
import { Acerca } from '../Acerca';
import { Skill } from '../Skill';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl_expe = 'http://localhost:5000/Experiencias'
  private apiUrl_edu = 'http://localhost:5000/Educaciones'
  private apiUrl_ace = 'http://localhost:5000/Acerca'
  private apiUrl_ski = 'http://localhost:5000/Skills'
  private apiUrl_pro = 'http://localhost:5000/Proyectos'

  
  constructor(
    private http:HttpClient
  ) { }
  
  /* Devuelve las experiencias del archivo db.json en una lista */
  getExpe():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl_expe)
  }
  /* Devuelve las educaciones del archivo db.json en una lista */
  getEdu():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl_edu)
  }

  /* Devuelve los proyectos del archivo db.json en una lista */
  getPro():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl_pro)
  }

  /* Devuelve el Acerca de del archivo db.json en una lista */
  // getAce():Observable<Acerca>{
  //   return this.http.get<Acerca>(this.apiUrl_ace)
  // }

  /* Devuelve los skills del archivo db.json en una lista */
  getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiUrl_ski)
  }
  
}
