import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  saludo = 'Hola!';
  persona: persona = new persona('', '', '', '', '');
  constructor(public PersonaService: PersonaService) {}

  ngOnInit(): void {
    this.PersonaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }
}
