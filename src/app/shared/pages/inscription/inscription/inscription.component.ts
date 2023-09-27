import { Component, OnInit } from '@angular/core';
import { TalksService } from 'src/app/shared/services/talks/talks.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  arrInscriptions : any [] = []
  talks : any [] = [];
  isLoading = false;
  subject1 : number = 0;
  subject2 : number = 0;

  constructor(
              private talkService : TalksService
  ) {

    this.talkService.getAllTalks().subscribe(
      ({courses})=>{
        if(courses.length !== 0){
          this.talks = courses;
          // this.talks = this.talks.map(talk => ({ ...talk, class: false }));
          // console.log(this.talks);
          this.isLoading = false;

        }
      })
  }
   

  ngOnInit(): void {

    this.talkService.getAllInscription().subscribe( 
      ({inscription})=>{
        if(inscription){
          // this.arrInscriptions = inscription;
          this.getInscriptions(inscription);
        }
      });
  }

  getInscriptions( inscriptions : any ){
  
  inscriptions.map( (element:any)=>{ element.inscription.forEach( (item:any) => {
          if(item.subject === "Programación y robotica"){
              this.subject1 ++;
          }else if(item.subject === "Programación y robotica especializada"){
              this.subject2 ++;
          }
    
  });})
  }

}
