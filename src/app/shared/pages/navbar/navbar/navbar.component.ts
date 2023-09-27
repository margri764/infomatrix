import { Component, HostListener, OnInit } from '@angular/core';
import { TalksService } from 'src/app/shared/services/talks/talks.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;

  phone :  boolean = false;
  width : number = 100;
  inscription : boolean = false;

  constructor(
              private talksService : TalksService
              )
   { 

    (screen.width <= 600) ? [this.phone = true , this.width = 80] : [this.phone = false, this.width = 100];
    const user = localStorage.getItem('user');
    if(user === "true" ){
      this.inscription = true;
    }
   }

  ngOnInit(): void {

    this.talksService.showInscriptions$.subscribe((emmited)=>{if(emmited){this.inscription = true;}})
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  closeNavbar() {
    this.isNavbarCollapsed = true;
  }

  logout(){
    localStorage.removeItem('user');
    this.inscription = false;
  }

}
