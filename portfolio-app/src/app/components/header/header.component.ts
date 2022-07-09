import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/login'])
  }

  logout() {
    this.userService.setLogged(false);
    this.router.navigate(['/login'])
  }

  isLogged(): Boolean {
    return this.userService.getLogged();
  }
}
