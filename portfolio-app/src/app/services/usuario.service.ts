import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../model/Usuario";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  Logged: Boolean = false;

  url = 'http://localhost:8080/usuario/auth';
  constructor(private http: HttpClient) { }

  login(user: Usuario): Observable<any> {
    return this.http.post(this.url, user);
  }

  setLogged(value: Boolean) {
    this.Logged = value;
  }

  getLogged(): Boolean {
    return this.Logged;
  }
}