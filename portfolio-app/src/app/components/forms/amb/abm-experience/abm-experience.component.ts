import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-abm-experience',
  templateUrl: './abm-experience.component.html',
  styleUrls: ['./abm-experience.component.sass']
})
export class AbmExperienceComponent implements OnInit {

  form: FormGroup;
  formsend: Boolean = false;
  notformsend: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private expeService: ExperienciaService,
    private route: Router,
  ) {
    this.form = this.formBuilder.group(
      {
        titulo: ['', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]],
        descripcion: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(0), Validators.pattern("\(?!\\s).+")]],
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
    if (this.form.valid) {
      this.expeService.setExperiencia(this.form.value).subscribe()
      this.formsend = true;
      this.form.reset();
    } else {
      this.notformsend = true;
      this.form.markAllAsTouched();
    }
  }

  goToForm() {
    this.route.navigate(['/form-experience'])
  }
}
