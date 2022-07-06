import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../model/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  proyectos: Proyecto[] = []

  constructor(
    private proService: ProyectoService
  ) { }

  ngOnInit(): void {
    this.proService.getProyecto().subscribe((proyectos)=>[
      this.proyectos = proyectos
    ])
  }

}
