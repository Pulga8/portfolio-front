import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmEducationComponent } from './components/forms/amb/abm-education/abm-education.component';
import { UpgradeEducationComponent } from './components/forms/amb/abm-education/upgrade-education/upgrade-education.component';
import { AbmExperienceComponent } from './components/forms/amb/abm-experience/abm-experience.component';
import { UpgradeExperienceComponent } from './components/forms/amb/abm-experience/upgrade-experience/upgrade-experience.component';
import { FormAboutComponent } from './components/forms/form-about/form-about.component';
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
  { path: 'form-about', component: FormAboutComponent },
  { path: 'form-experience', component: FormExperienceComponent },
  { path: 'form-projects', component: FormProjectsComponent },
  { path: 'form-skills', component: FormSkillsComponent },
  { path: 'abm-education', component: AbmEducationComponent },
  { path: 'upgrade-education/:id', component: UpgradeEducationComponent },
  { path: 'abm-experience', component: AbmExperienceComponent },
  { path: 'upgrade-experience/:id', component: UpgradeExperienceComponent },

//  { path: 'abm-projects', component: AbmProjectsComponent },
//  { path: 'abm-skills', component: AbmSkillsComponent },
//  { path: 'abm-about', component: AbmAboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
