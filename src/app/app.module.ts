import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/pages/navbar/navbar/navbar.component';
import { FooterComponent } from './shared/pages/footer/footer/footer.component';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { Page404Component } from './shared/pages/page-404/page404/page404.component';
import { TownComponent } from './shared/pages/town/town/town.component';
import { AccommodationComponent } from './shared/pages/accommodation/accommodation/accommodation.component';
import { HowToGetHerComponent } from './shared/pages/how-to-get-here/how-to-get-her/how-to-get-her.component';
import { ExibitionComponent } from './shared/pages/exibition/exibition/exibition.component';
import { MapComponent } from './shared/pages/map/map/map.component';
import { ScheduleComponent } from './shared/pages/schedule/schedule/schedule.component';
import { TalksComponent } from './shared/pages/talks/talks/talks.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/pages/login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './shared/pages/inscription/inscription/inscription.component';
import { FormComponent } from './shared/pages/form/form/form.component';
import { GenericSuccessComponent } from './shared/pages/generic-success/generic-success/generic-success.component';
import { GenericErrorComponent } from './shared/pages/generic-error/generic-error/generic-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    TownComponent,
    AccommodationComponent,
    HowToGetHerComponent,
    ExibitionComponent,
    MapComponent,
    ScheduleComponent,
    TalksComponent,
    LoginComponent,
    InscriptionComponent,
    FormComponent,
    GenericSuccessComponent,
    GenericErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
