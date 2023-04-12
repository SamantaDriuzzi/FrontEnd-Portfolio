import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  titulo = 'Mi educacion';
  experiences = [
    {
      title: 'Full Stack Developer Jr',
      company: 'Argentina Programa 4.0',
      logo: 'assets/argentinaprograma.png',
      description:
        'Conocimientos sobre programación, testing y habilidades digitales',
      startDate: 'Septiembre 2022',
    },
    {
      title: 'Responsive Web Design',
      company: 'FreeCodeCamp',
      logo: 'assets/FreeCodeCamp_logo.png',
      description:
        'Filosofía de diseño y desarrollo adaptable de las páginas web al dispositivo que se esté utilizando.',
      startDate: 'Enero 2023',
    },
  ];
  getExperienceDuration(startDate: string): string {
    const today = new Date();
    const start = new Date(startDate);
    const years = today.getFullYear() - start.getFullYear();
    const months = today.getMonth() - start.getMonth();

    if (months < 0) {
      return `${years - 1} años y ${12 + months} meses`;
    } else if (months > 0) {
      return `${years} años y ${months} meses`;
    } else {
      return `${years} años`;
    }
  }
}
