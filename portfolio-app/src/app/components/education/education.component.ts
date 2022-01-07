import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Educacion } from '../../Educacion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  estudios: Educacion[] = [];

  constructor(
    private eduService : PortfolioService
  ) { }

  ngOnInit(): void {
    this.eduService.getEdu().subscribe((estudios)=>[
      this.estudios = estudios
    ])
  }

}
