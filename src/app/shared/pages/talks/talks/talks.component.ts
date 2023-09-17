import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { TalksService } from 'src/app/shared/services/talks/talks.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {

  talks : any [] = [];
  isLoading : boolean = false;
  private arrCards: any[] = [];
  private tempArrayCard :any []= [];
  quantity : number = 0;

  constructor(
              private talkService : TalksService,
              private router : Router
  ) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.talkService.getAllTalks().subscribe(
      ({courses})=>{
        if(courses.length !== 0){
          this.talks = courses;
          this.talks = this.talks.map(talk => ({ ...talk, class: false }));
          console.log(this.talks);
          this.isLoading = false;

        }
      })
  }

  selectCard(card : any){
    if(!this.arrCards.includes(card._id)){
      this.arrCards.push(card._id);
    }else{
      return
    }
    this.quantity ++;
    card.class = !card.class;


  }

  delCard( card:any ){

    const isIncluded = this.arrCards.indexOf( card._id);
    if(isIncluded === -1){return}

    this.arrCards= this.arrCards.filter((item:any) => item !== card._id )
    this.quantity --;
    card.class = false;;
    

  }

  saveTalks(){

    console.log(this.arrCards);

    const body = {
          firstName: "Vanina",
          lastName: "Garay",
          student: true,
          teacher: false,
          inscription: [this.arrCards]
    }

    this.talkService.createInscription(body).subscribe( 
      ({success})=>{
        if(success){
          alert("Exito");
          this.arrCards = [];
          this.router.navigateByUrl('/inicio')
        }
      })

  }
  showSelectedClass : boolean = false;




}
