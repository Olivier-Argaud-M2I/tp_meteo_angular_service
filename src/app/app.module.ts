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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeteoComponent,
    StarwarComponent,
    MeteoDetailComponent,
    ForecastComponent
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
