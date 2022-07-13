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
  notformsend: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private proyService: ProyectoService,
    private route: Router,
  ) {
    this.form = this.formBuilder.group(
      {
        titulo: ['', [Validators.required, Validators.minLength(0),Validators.pattern("\(?!\\s).+")]],
        descripcion: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(0),Validators.pattern("\(?!\\s).+")]],
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
    if(this.form.valid){
      this.proyService.setProyecto(this.form.value).subscribe()
      this.formsend = true;
      this.form.reset();
    }else{
      this.notformsend = true;
      this.form.markAllAsTouched();
    }
  }

  goToForm() {
    this.route.navigate(['/form-projects'])
  }
}
