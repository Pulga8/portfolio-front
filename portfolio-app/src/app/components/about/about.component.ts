import { Component, OnInit } from '@angular/core';
import { Acerca } from 'src/app/Acerca';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  acerca: Acerca[] = [];

  constructor(
    private acercaServices:PortfolioService
  ) { }

  ngOnInit(): void {
    this.acercaServices.getAce().subscribe(data=>{
      this.acerca = data;
    })
  }

}
