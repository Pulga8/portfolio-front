import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../Proyecto';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  proyectos: Proyecto[] = []

  constructor(
    private proService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.proService.getPro().subscribe((proyectos)=>[
      this.proyectos = proyectos
    ])
  }

}
