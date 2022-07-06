import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { PortfolioService } from 'src/app/services/portfolio.service';

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
    this.experienciaService.getExpe().subscribe(data=>{
      this.experiencias = data;
    })
  }

}
