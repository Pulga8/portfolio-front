import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  experiencias: Experiencia[] = [];
  isLogged: Boolean = this.portfolioService.isLogged();


  constructor(
    private expeService: ExperienciaService,
    private portfolioService: PortfolioService,
    private router: Router

  ) { }

  goToForm() {
    this.router.navigate(['/form-experience'])
  }

  ngOnInit(): void {
    this.expeService.getExperiencia().subscribe((data) => {
      this.experiencias = data;
    })
  }

}
