import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-hamburguesa',
  templateUrl: './menu-hamburguesa.component.html',
  styleUrls: ['./menu-hamburguesa.component.css'],
})
export class MenuHamburguesaComponent {
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
