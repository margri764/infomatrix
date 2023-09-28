import { Component, OnInit } from '@angular/core';
import { TalksService } from 'src/app/shared/services/talks/talks.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  arrInscriptions : any [] = []
  // talks : any [] = [];
  isLoading = false;
  subject1 : number = 0;
  subject2 : number = 0;

  constructor(
              private talkService : TalksService
  ) {

    // this.talkService.getAllTalks().subscribe(
    //   ({courses})=>{
    //     if(courses.length !== 0){
    //       // this.talks = courses;
    //       // this.talks = this.talks.map(talk => ({ ...talk, class: false }));
    //       // console.log(this.talks);
    //       this.isLoading = false;

    //     }
    //   })
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


  talks: any[] = [];
  selectedTalk: string | null = null;


  getInscriptions(inscriptions: any) {

    const talkDictionary: { [subject: string]: any[] } = {};
  
    inscriptions.forEach((element: any) => {
      element.inscription.forEach((item: any) => {
        if (item.subject) {
          if (!talkDictionary[item.subject]) {
            talkDictionary[item.subject] = [element];
          } else {
            talkDictionary[item.subject].push(element);
          }
        }
      });
    });
  
    // Convierte el diccionario en una matriz de objetos
    this.talks = Object.keys(talkDictionary).map((subject) => ({
      subject,
      data: talkDictionary[subject],
    }));
  
    console.log(this.talks);
  }

  showAssistant(subject: string) {
    if (this.selectedTalk === subject) {
      // Si el card ya está seleccionado, deselecciónalo
      this.selectedTalk = null;
    } else {
      // Si se hace clic en un card, selecciónalo
      this.selectedTalk = subject;
    }
  }
  
  

}
