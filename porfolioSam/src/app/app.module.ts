import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SnowComponent } from './components/snow/snow.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MenuHamburguesaComponent } from './components/menu-hamburguesa/menu-hamburguesa.component';
import { EducationComponent } from './components/education/education.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BannerComponent,
    AcercaDeComponent,
    SnowComponent,
    ExperienceComponent,
    MenuHamburguesaComponent,
    EducationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
