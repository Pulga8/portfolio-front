import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './services/portfolio.service';
import { FormAboutComponent } from './components/forms/form-about/form-about.component';
import { FormEducationComponent } from './components/forms/form-educaction/form-education.component';
import { FormExperienceComponent } from './components/forms/form-experience/form-experience.component';
import { FormSkillsComponent } from './components/forms/form-skills/form-skills.component';
import { FormProjectsComponent } from './components/forms/form-projects/form-projects.component';
import { AbmEducationComponent } from './components/forms/amb/abm-education/abm-education.component';
import { AbmAboutComponent } from './components/forms/amb/abm-about/abm-about.component';
import { AbmExperienceComponent } from './components/forms/amb/abm-experience/abm-experience.component';
import { AbmProjectsComponent } from './components/forms/amb/abm-projects/abm-projects.component';
import { AbmSkillsComponent } from './components/forms/amb/abm-skills/abm-skills.component';
import { UpgradeEducationComponent } from './components/forms/amb/abm-education/upgrade-education/upgrade-education.component';
import { UpgradeExperienceComponent } from './components/forms/amb/abm-experience/upgrade-experience/upgrade-experience.component';
import { UpgradeSkillsComponent } from './components/forms/amb/abm-skills/upgrade-skills/upgrade-skills.component';
import { UpgradeProjectsComponent } from './components/forms/amb/abm-projects/upgrade-projects/upgrade-projects.component';
import { UpgradeAboutComponent } from './components/forms/amb/abm-about/upgrade-about/upgrade-about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    PortfolioComponent,
    FormAboutComponent,
    FormEducationComponent,
    FormExperienceComponent,
    FormSkillsComponent,
    FormProjectsComponent,
    AbmEducationComponent,
    AbmAboutComponent,
    AbmExperienceComponent,
    AbmProjectsComponent,
    AbmSkillsComponent,
    UpgradeEducationComponent,
    UpgradeExperienceComponent,
    UpgradeSkillsComponent,
    UpgradeProjectsComponent,
    UpgradeAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PortfolioService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
