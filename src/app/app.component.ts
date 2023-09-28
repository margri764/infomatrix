import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TalksService } from './shared/services/talks/talks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infomatrix';
  showLabel : boolean = false;


  constructor(
              public router : Router,
              private talkService :TalksService
  ){
    this.talkService.openInscription$.subscribe( (emmited)=>{if(emmited){ this.showLabel = true}} )

  }

 

  continue(){
    this.showLabel = false;
    this.router.navigateByUrl('/conferencias');
  }
}
