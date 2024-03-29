import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-abm-skills',
  templateUrl: './abm-skills.component.html',
  styleUrls: ['./abm-skills.component.sass']
})
export class AbmSkillsComponent implements OnInit {

  form: FormGroup;
  formsend: Boolean = false;
  notformsend: Boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private skillService: SkillService,
    private route: Router,
  ) {
    this.form = this.formBuilder.group(
      {
        titulo: ['', [Validators.required, Validators.minLength(0),Validators.pattern("\(?!\\s).+")]],
        progreso: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(0),Validators.pattern("\(?!\\s).+"), Validators.pattern("\^[0-9]*$")]],
      }
    )
  }

  ngOnInit(): void {
  }

  get Titulo() {
    return this.form.get('titulo');
  }

  get Progreso() {
    return this.form.get('progreso');
  }

  onSent(event: Event) {
    event.preventDefault;
    if(this.form.valid){
      this.skillService.setSkill(this.form.value).subscribe()
      this.formsend = true;
      this.form.reset();
    }else{
      this.notformsend = true;
      this.form.markAllAsTouched();
    }
  }

  goToForm() {
    this.route.navigate(['/form-skills'])
  }
}
