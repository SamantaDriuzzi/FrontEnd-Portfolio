import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: ` <app-snow></app-snow>
    <button (click)="stopSnow()">Detener nieve</button>`,
})
export class HomeComponent {
  showSnow: boolean = true;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0 && this.showSnow) {
        this.showSnow = false;
      } else if (scrollPosition === 0 && !this.showSnow) {
        this.showSnow = true;
      }
    });
  }
}
