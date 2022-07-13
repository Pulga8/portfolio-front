import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-upgrade-skills',
  templateUrl: './upgrade-skills.component.html',
  styleUrls: ['./upgrade-skills.component.sass']
})
export class UpgradeSkillsComponent implements OnInit {

  form: FormGroup;
  formsend: Boolean = false;
  notformsend: Boolean = false;
  id: number = 0;
  titulo: String = "";
  progreso: number = 0;
  skill: Skill = new Skill("", 0);

  /*
    La inicialización de este formulario es distintas pues
    es un formulario reactivo, y no estático o de template,
    como el usado en abm.
  */
  constructor(
    private skillService: SkillService,
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      titulo: new FormControl('',[Validators.required, Validators.minLength(0),Validators.pattern("\(?!\\s).+")]),
      progreso: new FormControl('',[Validators.required, Validators.minLength(0),Validators.pattern("\(?!\\s).+")])
    });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.titulo = this.router.snapshot.params['titulo'];
    this.progreso = this.router.snapshot.params['progreso'];
    this.skill = new Skill(this.titulo, this.progreso);
    this.setValues();
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Progreso() {
    return this.form.get('progreso');
  }

  setValues() {
    this.form.patchValue({ titulo: this.titulo });
    this.form.patchValue({ progreso: this.progreso });
  }

  onSent(event: Event) {
    event.preventDefault;
    if(this.form.valid){
      this.skillService.editSkill(this.id, this.form.value).subscribe();
      this.formsend = true;
    }else{
      this.notformsend = true;
      this.form.markAllAsTouched();
    }
  }

  goToForm() {
    this.route.navigate(['/form-skills'])
  }

}
