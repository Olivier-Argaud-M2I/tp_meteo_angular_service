import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { Formulaire2Component } from './formulaire2/formulaire2.component';
import { Formulaire3Component } from './formulaire3/formulaire3.component';
import { AdminComponent } from './admin/admin.component';
import { LoggedInGuardService } from './services/logged-in-guard.service';
import { LoginComponent } from './login/login.component';
import { MeteoComponent } from './meteo/meteo.component';
import { SnakeComponent } from './snake/snake.component';
import { PeopleComponent } from './starwar/people/people.component';
import { PlanetsComponent } from './starwar/planets/planets.component';
import { StarshipComponent } from './starwar/starship/starship.component';
import { StarwarComponent } from './starwar/starwar.component';

const routes: Routes = [
  
  { path: '',pathMatch: 'full', redirectTo:'/meteo'}, // redirection -> pathMatch permet de renvoyer d'eventuel option style ?name='toto'
  { path: 'login',        component: LoginComponent                                               },
  { path: 'meteo',        component: MeteoComponent                                               },
  { path: 'starwar',      component: StarwarComponent,      canActivate:[LoggedInGuardService]    },
  { path: 'people',       component: PeopleComponent,       canActivate:[LoggedInGuardService]    },
  { path: 'people/:id',   component: PeopleComponent,       canActivate:[LoggedInGuardService]    },
  { path: 'planets',      component: PlanetsComponent,      canActivate:[LoggedInGuardService]    },
  { path: 'starships',    component: StarshipComponent,     canActivate:[LoggedInGuardService]    },
  { path: 'formulaire',   component: FormulaireComponent                                          },
  { path: 'formulaire2',  component: Formulaire2Component                                         },
  { path: 'formulaire3',  component: Formulaire3Component,  canDeactivate:[LoggedInGuardService]  },
  { path: 'snake',        component: SnakeComponent,                                              },
  // { path: 'snake',        component: SnakeComponent,        canActivate:[LoggedInGuardService]    },
  { path: 'admin',        component: AdminComponent,        canActivate:[LoggedInGuardService]    },
  { path: '**',           component: MeteoComponent                                               }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
