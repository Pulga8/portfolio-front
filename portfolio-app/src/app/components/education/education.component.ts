import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from '../../model/Educacion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(
    private eduService: EducacionService
  ) { }

  ngOnInit(): void {
    this.eduService.getEducacion().subscribe((data) => [
      this.educacion = data
    ])
  }

}
