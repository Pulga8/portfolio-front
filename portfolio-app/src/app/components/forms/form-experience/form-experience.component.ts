import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.sass']
})
export class FormExperienceComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(
    private expeService: ExperienciaService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getListExpe();
  }

  /*
    ---------------------------------------
    Métodos para navegar entre componentes.
    ---------------------------------------
  */

  goToAbm() {
    this.route.navigate(['/abm-experience'])
  }

  goToEdit(id: number | any, experiencia: Experiencia) {
    this.route.navigate(['/upgrade-experience', id, experiencia])
  }

  goToHome() {
    this.route.navigate(['/portfolio'])
  }

  goToDelete(id: number | any) {
    this.expeService.deleteExperiencia(id).subscribe(() => {
      this.getListExpe();
    })
  }

  /* 
    ----------------------------------------------
    Genera una lista de la entidad, nos sirve para 
    traer los datos desde el back.
    ----------------------------------------------
  */
  private getListExpe() {
    this.expeService.getExperiencia().subscribe((data) => [
      this.experiencia = data
    ])
  }

}
