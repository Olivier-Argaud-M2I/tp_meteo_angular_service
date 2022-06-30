import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from './meteo/meteo.component';
import { StarwarComponent } from './starwar/starwar.component';

const routes: Routes = [

  { path: 'meteo', component: MeteoComponent },
  { path: 'starwar', component: StarwarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
