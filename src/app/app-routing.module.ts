import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { Page404Component } from './shared/pages/page-404/page404/page404.component';
import { TownComponent } from './shared/pages/town/town/town.component';
import { AccommodationComponent } from './shared/pages/accommodation/accommodation/accommodation.component';
import { HowToGetHerComponent } from './shared/pages/how-to-get-here/how-to-get-her/how-to-get-her.component';
import { ExibitionComponent } from './shared/pages/exibition/exibition/exibition.component';
import { MapComponent } from './shared/pages/map/map/map.component';
import { ScheduleComponent } from './shared/pages/schedule/schedule/schedule.component';
import { TalksComponent } from './shared/pages/talks/talks/talks.component';
import { LoginComponent } from './shared/pages/login/login/login.component';
import { InscriptionComponent } from './shared/pages/inscription/inscription/inscription.component';

const routes: Routes = [
  {
    path: "inicio", component: HomeComponent
  },
  {
    path: "localidad", component: TownComponent
  },
  {
    path: "programa", component: ScheduleComponent
  },
  {
    path: "alojamiento", component: AccommodationComponent
  },
  {
    path: "como-llegar", component: HowToGetHerComponent
  },
  {
    path: "exposicion", component: ExibitionComponent
  },
  {
    path: "conferencias", component: TalksComponent
  },

  {
    path: "inscriptos", component: InscriptionComponent
  },
  {
    path: "mapa", component: MapComponent
  },
  {
    path: "login", component: LoginComponent
  },

  {
    path: "", redirectTo: "inicio", pathMatch: 'full'
  },

  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
