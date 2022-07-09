import { Injectable } from '@angular/core';
import { UsersService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private userService: UsersService
  ) { }


  isLogged(): Boolean {
    return this.userService.getLogged();
  }

}
