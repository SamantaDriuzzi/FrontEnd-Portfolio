import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  nombre = 'Samanta';
  saludo = 'Hola! Yo soy';
  titulo = 'Full Stack Developer Jr';
}
