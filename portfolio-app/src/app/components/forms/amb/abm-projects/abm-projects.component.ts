import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-abm-projects',
  templateUrl: './abm-projects.component.html',
  styleUrls: ['./abm-projects.component.sass']
})
export class AbmProjectsComponent implements OnInit {
  form: FormGroup;
  formsend: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private proyService: ProyectoService,
    private route: Router,
  ) {
    this.form = this.formBuilder.group(
      {
        titulo: ['', [Validators.required], Validators.minLength(0)],
        descripcion: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(0)]],
      }
    )
  }

  ngOnInit(): void {
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Descripcion() {
    return this.form.get('descripcion');
  }

  onSent(event: Event) {
    event.preventDefault;
    this.proyService.setProyecto(this.form.value).subscribe()
    this.formsend = true;
    this.form.reset();
  }

  goToForm() {
    this.route.navigate(['/form-projects'])
  }
}
