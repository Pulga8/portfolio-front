import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/Skill';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []
  isLogged: Boolean = this.portfolioService.isLogged();


  constructor(
    private skillService: SkillService,
    private portfolioService: PortfolioService,
    private router: Router

  ) { }

  goToForm() {
    this.router.navigate(['/form-skills'])
  }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe((skills) => [
      this.skills = skills
    ])
  }

}
