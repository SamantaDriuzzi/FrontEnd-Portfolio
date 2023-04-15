import { Component } from '@angular/core';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css'],
})
export class HysSkillsComponent {
  titulo = 'Mis habilidades';
  skills = [
    {
      tecnology: 'HTML',
      percent: 90,
      logo: 'assets/html5.svg',
    },
    {
      tecnology: 'CSS',
      percent: 80,
      logo: 'assets/css3.svg',
    },
    {
      tecnology: 'JS',
      percent: 70,
      logo: 'assets/js.svg',
    },
    {
      tecnology: 'TS',
      percent: 70,
      logo: 'assets/t-solid.svg',
    },
  ];
}
