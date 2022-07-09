import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../model/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

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
    private portfolioService: PortfolioService 

  ) { }

  ngOnInit(): void {
    this.proService.getProyecto().subscribe((proyectos)=>[
      this.proyectos = proyectos
    ])
  }

}
