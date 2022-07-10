import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.sass']
})
export class FormEducationComponent implements OnInit {

  educacion: Educacion[] = [];
  formsend: Boolean = false;


  constructor(
    private eduService: EducacionService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.getListEdu();
  }

  goToAmb() {
    this.route.navigate(['/abm-education'])
  }

  goToDelete(id: number | any) {
    this.eduService.deleteEducacion(id).subscribe((dato) => {
      console.log(dato);
      this.getListEdu();
    });
  }

  private getListEdu() {
    this.eduService.getEducacion().subscribe((data) => [
      this.educacion = data
    ])
  }

  goToEdit(id: number | any, educacion: Educacion) {
    /*Implementar método en el back*/
  }


  goToHome() {
    this.route.navigate(['/portfolio'])
  }

}
