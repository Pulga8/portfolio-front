import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio-app';
  faCoffee = faCoffee;
  data ={}
  constructor(
    private aceService: PortfolioService
  ) { }

  // ngOnInit(): void{
  //   this.aceService.getProfile().subscribe((data)=>{
  //     this.data = data
  //   });
  //}
}
