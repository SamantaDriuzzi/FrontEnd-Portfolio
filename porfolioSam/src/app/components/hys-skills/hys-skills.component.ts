import { Component } from '@angular/core';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css'],
})
export class HysSkillsComponent {
  titulo = 'Mis habilidades';
  Hskills = [
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
  Sskills = [
    {
      name: 'Trabajo en Equipo',
      percent: 50,
      logo: 'assets/trabajo-en-equipo.svg',
    },
    {
      name: 'Comunicación',
      percent: 50,
      logo: 'assets/comunicación.svg',
    },
    {
      name: 'Aprendizaje',
      percent: 90,
      logo: 'assets/aprendizaje.svg',
    },
    {
      name: 'Compromiso',
      percent: 100,
      logo: 'assets/compromiso.svg',
    },
  ];
}
