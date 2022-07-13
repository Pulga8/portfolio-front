import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeAboutComponent } from './components/forms/amb/abm-about/upgrade-about/upgrade-about.component';
import { AbmEducationComponent } from './components/forms/amb/abm-education/abm-education.component';
import { UpgradeEducationComponent } from './components/forms/amb/abm-education/upgrade-education/upgrade-education.component';
import { AbmExperienceComponent } from './components/forms/amb/abm-experience/abm-experience.component';
import { UpgradeExperienceComponent } from './components/forms/amb/abm-experience/upgrade-experience/upgrade-experience.component';
import { AbmProjectsComponent } from './components/forms/amb/abm-projects/abm-projects.component';
import { UpgradeProjectsComponent } from './components/forms/amb/abm-projects/upgrade-projects/upgrade-projects.component';
import { AbmSkillsComponent } from './components/forms/amb/abm-skills/abm-skills.component';
import { UpgradeSkillsComponent } from './components/forms/amb/abm-skills/upgrade-skills/upgrade-skills.component';
import { FormEducationComponent } from './components/forms/form-educaction/form-education.component';
import { FormExperienceComponent } from './components/forms/form-experience/form-experience.component';
import { FormProjectsComponent } from './components/forms/form-projects/form-projects.component';
import { FormSkillsComponent } from './components/forms/form-skills/form-skills.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  // Agregar el canActivate hace que no pueda ver la pág
  { path: 'portfolio', component: PortfolioComponent, /*canActivate:[GuardGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: '', component: PortfolioComponent },
  { path: 'form-education', component: FormEducationComponent },
  { path: 'form-experience', component: FormExperienceComponent },
  { path: 'form-projects', component: FormProjectsComponent },
  { path: 'form-skills', component: FormSkillsComponent },
  { path: 'abm-education', component: AbmEducationComponent },
  { path: 'upgrade-education/:id', component: UpgradeEducationComponent },
  { path: 'abm-experience', component: AbmExperienceComponent },
  { path: 'upgrade-experience/:id', component: UpgradeExperienceComponent },
  { path: 'abm-projects', component: AbmProjectsComponent },
  { path: 'upgrade-projects/:id', component: UpgradeProjectsComponent },
  { path: 'abm-skills', component: AbmSkillsComponent },
  { path: 'upgrade-skills/:id', component: UpgradeSkillsComponent },
  { path: 'upgrade-about/:id', component: UpgradeAboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
