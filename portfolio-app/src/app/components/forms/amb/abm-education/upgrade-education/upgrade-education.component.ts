import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-upgrade-education',
  templateUrl: './upgrade-education.component.html',
  styleUrls: ['./upgrade-education.component.sass']
})
export class UpgradeEducationComponent implements OnInit {
  form: FormGroup;
  formsend: Boolean = false;
  id: number = 0;
  titulo: String = "";
  descripcion: String = "";
  educacion: Educacion = new Educacion("", "");

  constructor(
    private formBuilder: FormBuilder,
    private eduService: EducacionService,
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      titulo: new FormControl(Validators.required,Validators.minLength(0)),
      descripcion: new FormControl(Validators.required, Validators.minLength(0))
    });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.titulo = this.router.snapshot.params['titulo'];
    this.descripcion = this.router.snapshot.params['descripcion'];
    this.educacion = new Educacion(this.titulo, this.descripcion);
    this.setValues();
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Descripcion() {
    return this.form.get('descripcion');
  }

  setValues(){
    this.form.patchValue({titulo: this.titulo});
    this.form.patchValue({ descripcion:this.descripcion});
  }

  onSent(event: Event) {
    event.preventDefault;
    this.eduService.editEducacion(this.id, this.form.value).subscribe();
    this.formsend = true;
  }

  goToForm() {
    this.route.navigate(['/form-education'])
  }

}
