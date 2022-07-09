import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Educacion } from '../../model/Educacion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  educacion: Educacion[] = [];
  isLogged: Boolean = this.portfolioService.isLogged();


  constructor(
    private eduService: EducacionService,
    private portfolioService: PortfolioService,
    private router: Router

  ) { }

  goToForm() {
    this.router.navigate(['/form-education'])
  }

  ngOnInit(): void {
    this.eduService.getEducacion().subscribe((data) => [
      this.educacion = data
    ])
  }

}
