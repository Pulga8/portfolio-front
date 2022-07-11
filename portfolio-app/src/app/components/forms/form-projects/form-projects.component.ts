import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-form-projects',
  templateUrl: './form-projects.component.html',
  styleUrls: ['./form-projects.component.sass']
})
export class FormProjectsComponent implements OnInit {

  proyecto: Proyecto[] = [];

  constructor(
    private eduService: ProyectoService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.getListPro();
  }

  /*
    ---------------------------------------
    Métodos para navegar entre componentes.
    ---------------------------------------
  */
  goToAmb() {
    this.route.navigate(['/abm-projects'])
  }

  goToEdit(id: number | any, proyecto: Proyecto) {
    this.route.navigate(['/upgrade-projects', id, proyecto])
  }
  
  goToHome() {
    this.route.navigate(['/portfolio'])
  }

  goToDelete(id: number | any) {
    this.eduService.deleteProyecto(id).subscribe((dato) => {
      this.getListPro();
    });
  }
  
  /* 
    ----------------------------------------------
    Genera una lista de la entidad, nos sirve para 
    traer los datos desde el back.
    ----------------------------------------------
  */
  private getListPro() {
    this.eduService.getProyecto().subscribe((data) => [
      this.proyecto = data
    ])
  }
}
