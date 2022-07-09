import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UsersService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  persona: Persona[] = [];
  isLogged: Boolean = this.portfolioService.isLogged();
  
  constructor(
    private personaServices: PersonaService,
    private portfolioService: PortfolioService ,
    private router: Router

    ) { }
  
  goToForm() {
    this.router.navigate(['/form-about'])
  }


  ngOnInit(): void {
    this.personaServices.getPersona().subscribe((data) => {
      this.persona = data;
    })
  }

}
