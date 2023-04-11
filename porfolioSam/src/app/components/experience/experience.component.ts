import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  titulo = 'Mi experiencia';
  experiences = [
    {
      title: 'Desarrolladora Web Front-end',
      company: 'ABC Company',
      logo: 'assets/logo-abc.jpg',
      description: 'Desarrollo de aplicaciones web con Angular y TypeScript',
      startDate: 'Enero 2023',
    },
    {
      title: 'Diseñadora Web',
      company: 'XYZ Company',
      logo: 'assets/logo-xyz.jpg',
      description:
        'Iinterfaces visuales atractivas, funcionales y responsivas para sitios web',
      startDate: 'Octubre 2022',
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
