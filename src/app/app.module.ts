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
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
