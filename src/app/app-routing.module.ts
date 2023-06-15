import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { Page404Component } from './shared/pages/page-404/page404/page404.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "", redirectTo: "home", pathMatch: 'full'
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
