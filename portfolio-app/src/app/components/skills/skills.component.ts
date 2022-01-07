import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Skill } from 'src/app/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []

  constructor(
    private skillService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe((skills)=>[
      this.skills = skills
    ])
  }

}
