import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
// import { RouterModule } from '@angular/router';

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
    PlanetsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // ,
    // RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
