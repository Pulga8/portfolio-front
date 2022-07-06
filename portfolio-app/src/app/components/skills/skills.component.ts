import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe((skills) => [
      this.skills = skills
    ])
  }

}
