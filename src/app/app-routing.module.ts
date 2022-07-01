import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from './meteo/meteo.component';
import { PeopleComponent } from './starwar/people/people.component';
import { PlanetsComponent } from './starwar/planets/planets.component';
import { StarshipComponent } from './starwar/starship/starship.component';
import { StarwarComponent } from './starwar/starwar.component';

const routes: Routes = [
  { path: '', component: MeteoComponent },
  { path: 'meteo', component: MeteoComponent },
  { path: 'starwar', component: StarwarComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'starships', component: StarshipComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
