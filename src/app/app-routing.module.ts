import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './header/admin/admin.component';
import { LoggedInGuardService } from './logged-in-guard.service';
import { LoginComponent } from './login/login.component';
import { MeteoComponent } from './meteo/meteo.component';
import { PeopleComponent } from './starwar/people/people.component';
import { PlanetsComponent } from './starwar/planets/planets.component';
import { StarshipComponent } from './starwar/starship/starship.component';
import { StarwarComponent } from './starwar/starwar.component';

const routes: Routes = [
  // { path: '', component: MeteoComponent },
  
  { path: '',pathMatch: 'full', redirectTo:'/starwar'}, // redirection -> pathMatch permet de renvoyer d'eventuel option style ?name='toto'
  { path: 'login', component: LoginComponent,canDeactivate:[LoggedInGuardService] },
  { path: 'meteo', component: MeteoComponent },
  { path: 'starwar', component: StarwarComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'starships', component: StarshipComponent },
  { path: 'admin', component: AdminComponent, canActivate:[LoggedInGuardService] },
  { path: '**',component: MeteoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
