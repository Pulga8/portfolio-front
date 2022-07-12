import { Component, OnInit } from '@angular/core';
import { inject, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-upgrade-about',
  templateUrl: './upgrade-about.component.html',
  styleUrls: ['./upgrade-about.component.sass']
})
export class UpgradeAboutComponent implements OnInit {

  form: FormGroup;
  formsend: Boolean = false;
  id: number = 0;
  nombre: String = "";
  apellido: String = "";
  profesion: String = "";
  about: String = "";
  img_portada: String = "";
  persona: Persona = new Persona("", "", "", "", "");


  constructor(
    private peService: PersonaService,
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(Validators.required, Validators.minLength(0)),
      apellido: new FormControl(Validators.required, Validators.minLength(0)),
      profesion: new FormControl(Validators.required, Validators.minLength(0)),
      about: new FormControl(Validators.required, Validators.minLength(0)),
      img_portada: new FormControl(Validators.required, Validators.minLength(0))
    });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.peService.getPersonaPorId(this.id).subscribe((dato) => {
      this.persona = dato
      this.setValues()
    });
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Apellido() {
    return this.form.get('apellido');
  }

  get Profesion() {
    return this.form.get('profesion');
  }

  get About() {
    return this.form.get('about');
  }

  get Img_portada() {
    return this.form.get('img_portada');
  }

  setValues() {
    this.form.patchValue({ nombre: this.persona.nombre });
    this.form.patchValue({ apellido: this.persona.apellido });
    this.form.patchValue({ profesion: this.persona.profesion });
    this.form.patchValue({ about: this.persona.about });
    this.form.patchValue({ img_portada: this.persona.img_portada });
  }
  onSent(event: Event) {
    event.preventDefault;
    this.peService.editPersona(this.id, this.form.value).subscribe();
    this.formsend = true;
  }

  goToHome() {
    this.route.navigate(['/portfolio'])
  }

}
