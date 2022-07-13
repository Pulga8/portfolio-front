import { Component, OnInit } from '@angular/core';
import { inject, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
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
  notformsend: Boolean = false;

  id: number = 0;
  nombre: String = "";
  apellido: String = "";
  profesion: String = "";
  about: String = "";
  img_perfil: String = "";
  img_portada: String = "";
  persona: Persona = new Persona("", "", "", "", "", "");


  constructor(
    private peService: PersonaService,
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]),
      profesion: new FormControl('', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]),
      about: new FormControl('', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]),
      img_perfil: new FormControl('', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]),
      img_portada: new FormControl('', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")])
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

  get Img_perfil() {
    return this.form.get('img_perfil');
  }

  get Img_portada() {
    return this.form.get('img_portada');
  }

  setValues() {
    this.form.patchValue({ nombre: this.persona.nombre });
    this.form.patchValue({ apellido: this.persona.apellido });
    this.form.patchValue({ profesion: this.persona.profesion });
    this.form.patchValue({ about: this.persona.about });
    this.form.patchValue({ img_perfil: this.persona.img_perfil });
    this.form.patchValue({ img_portada: this.persona.img_portada });
  }
  onSent(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.peService.editPersona(this.id, this.form.value).subscribe();
      this.formsend = true;
    } else {
      this.notformsend = true;
      this.form.markAllAsTouched();
    }
  }

  goToHome() {
    this.route.navigate(['/portfolio'])
  }

}
