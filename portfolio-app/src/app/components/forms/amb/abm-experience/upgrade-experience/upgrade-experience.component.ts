import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-upgrade-experience',
  templateUrl: './upgrade-experience.component.html',
  styleUrls: ['./upgrade-experience.component.sass']
})
export class UpgradeExperienceComponent implements OnInit {

  form: FormGroup;
  formsend: Boolean = false;
  notformsend: Boolean = false;
  id: number = 0;
  titulo: String = "";
  descripcion: String = "";
  experiencia: Experiencia = new Experiencia("","");
  
  /*
    La inicialización de este formulario es distintas pues
    es un formulario reactivo, y no estático o de template,
    como el usado en abm.
  */
  constructor(
    private expeService: ExperienciaService,
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      titulo: new FormControl('',[Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]),
      descripcion: new FormControl('',[Validators.required, Validators.minLength(0),Validators.pattern("\(?!\\s).+")])
    });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.titulo = this.router.snapshot.params['titulo'];
    this.descripcion = this.router.snapshot.params['descripcion'];
    this.experiencia = new Experiencia(this.titulo, this.descripcion);
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
    if(this.form.valid){
      this.expeService.editExperiencia(this.id, this.form.value).subscribe();
      this.formsend = true;
    }else{
      this.notformsend = true;
      this.form.markAllAsTouched();
    }
  }

  goToForm() {
    this.route.navigate(['/form-experience'])
  }

}
