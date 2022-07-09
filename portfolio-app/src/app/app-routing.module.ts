import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  // Agregar el canActivate hace que no pueda ver la pág
  { path: 'portfolio', component: PortfolioComponent, /*canActivate:[GuardGuard]*/},
  { path: 'login', component: LoginComponent },
  { path: '', component: PortfolioComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
