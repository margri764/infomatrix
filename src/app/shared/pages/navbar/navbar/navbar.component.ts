import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;

  phone :  boolean = false;
  width : number = 100;

  constructor(
              )
   { 

    (screen.width <= 600) ? [this.phone = true , this.width = 80] : [this.phone = false, this.width = 100]
   }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  closeNavbar() {
    this.isNavbarCollapsed = true;
  }

}