import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MeteoComponent } from './meteo/meteo.component';
import { StarwarComponent } from './starwar/starwar.component';
import { MeteoDetailComponent } from './meteo/meteo-detail/meteo-detail.component';
import { ForecastComponent } from './meteo/forecast/forecast.component';
import { PeopleComponent } from './starwar/people/people.component';
import { PlanetsComponent } from './starwar/planets/planets.component';
import { StarshipComponent } from './starwar/starship/starship.component';
import { StarwarHeaderComponent } from './starwar/starwar-header/starwar-header.component';
import { PeopleDetailComponent } from './starwar/people/people-detail/people-detail.component';
import { PlanetsDetailComponent } from './starwar/planets/planets-detail/planets-detail.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { Formulaire2Component } from './formulaire2/formulaire2.component';
import { Formulaire3Component } from './formulaire3/formulaire3.component';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeteoComponent,
    StarwarComponent,
    MeteoDetailComponent,
    ForecastComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipComponent,
    StarwarHeaderComponent,
    PeopleDetailComponent,
    PlanetsDetailComponent,
    AdminComponent,
    LoginComponent,
    FormulaireComponent,
    Formulaire2Component,
    Formulaire3Component,
    SnakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // ,
    // RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
