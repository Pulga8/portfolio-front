import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../model/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  proyectos: Proyecto[] = []
  isLogged: Boolean = this.portfolioService.isLogged();


  constructor(
    private proService: ProyectoService,
    private portfolioService: PortfolioService,
    private router: Router

  ) { }

  goToForm() {
    this.router.navigate(['/form-projects'])
  }

  ngOnInit(): void {
    this.proService.getProyecto().subscribe((proyectos)=>[
      this.proyectos = proyectos
    ])
  }

}
