import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'; // Nos permite leer desde el json, Con ésto logramos hacer peticiones de GET,Post al puerto 5000 que es donde levantamos la bd.
import { Experiencia } from '../model/Experiencia';
import { Educacion } from '../model/Educacion';
import { Proyecto } from '../model/Proyecto';
import { Persona } from '../model/Persona';
import { Skill } from '../model/Skill';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl_expe = 'http://localhost:5000/Experiencias'
  private apiUrl_edu = 'http://localhost:5000/Educaciones'
  private apiUrl_ace = 'http://localhost:5000/Persona'
  private apiUrl_ski = 'http://localhost:5000/Skills'
  private apiUrl_pro = 'http://localhost:5000/Proyectos'

  url:string="http://localhost:5000/"
  
  constructor(
    private http:HttpClient
  ) { }
  
  // getData():Observable<any>{
  //   return this.http.get<any>(this.url+"Persona")
  // }

  /* Devuelve las experiencias del archivo db.json en una lista */
  getExpe():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl_expe)
  }
  /* Devuelve las educaciones del archivo db.json en una lista */
  // getEdu():Observable<Educacion[]>{
  //   return this.http.get<Educacion[]>(this.apiUrl_edu)
  // }

  /* Devuelve los proyectos del archivo db.json en una lista */
  getPro():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl_pro)
  }

  /* Devuelve la Persona de del archivo db.json en una lista */
  getAce():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl_ace)
  }

  /* Devuelve los skills del archivo db.json en una lista */
  getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiUrl_ski)
  }
  
}
