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
import { HysSkillsComponent } from './components/hys-skills/hys-skills.component';
import { SoftSkillsComponent } from './components/hys-skills/soft-skills/soft-skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    HysSkillsComponent,
    SoftSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
