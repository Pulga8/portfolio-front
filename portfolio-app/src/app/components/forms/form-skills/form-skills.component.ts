import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.sass']
})
export class FormSkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    private skillService: SkillService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getListSkill();
  }

  /*
    ---------------------------------------
    Métodos para navegar entre componentes.
    ---------------------------------------
  */

  goToAbm() {
    this.route.navigate(['/abm-skills'])
  }

  goToEdit(id: number | any, skill: Skill) {
    this.route.navigate(['/upgrade-skills', id, skill])
  }

  goToHome() {
    this.route.navigate(['/portfolio'])
  }

  goToDelete(id: number | any) {
    this.skillService.deleteSkill(id).subscribe(() => {
      this.getListSkill();
    })
  }

  /* 
    ----------------------------------------------
    Genera una lista de la entidad, nos sirve para 
    traer los datos desde el back.
    ----------------------------------------------
  */
  private getListSkill() {
    this.skillService.getSkill().subscribe((data) => [
      this.skill = data
    ])
  }


}
