import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-upgrade-projects',
  templateUrl: './upgrade-projects.component.html',
  styleUrls: ['./upgrade-projects.component.sass']
})
export class UpgradeProjectsComponent implements OnInit {
  form: FormGroup;
  formsend: Boolean = false;
  id: number = 0;
  titulo: String = "";
  descripcion: String = "";
  proyecto: Proyecto = new Proyecto("", "");


  constructor(
    private proyService: ProyectoService,
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
    this.proyecto = new Proyecto(this.titulo, this.descripcion);
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
    this.proyService.editProyecto(this.id, this.form.value).subscribe();
    this.formsend = true;
  }

  goToForm() {
    this.route.navigate(['/form-projects'])
  }

}
