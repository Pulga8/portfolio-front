import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  persona: Persona[] = [];

  constructor(
    private personaServices:PortfolioService
  ) { }

  ngOnInit(): void {
    this.personaServices.getAce().subscribe(data=>{
      this.persona = data;
    })
  }

}
