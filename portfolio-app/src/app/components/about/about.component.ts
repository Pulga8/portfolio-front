import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  persona: Persona[] = [];

  constructor(
    private personaServices: PersonaService
  ) { }

  ngOnInit(): void {
    this.personaServices.getPersona().subscribe((data) => {
      this.persona = data;
    })
  }

}
