import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Experiencia } from 'src/app/Experiencia';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  experiencias: Experiencia[] = [];

  constructor(
    private experienciaService: PortfolioService
  ) { }

  ngOnInit(): void {
    // Escuchamos al método get expe, promesas.
    this.experienciaService.getExpe().subscribe((experiencias)=>[
      this.experiencias = experiencias
    ]);
  }

}
