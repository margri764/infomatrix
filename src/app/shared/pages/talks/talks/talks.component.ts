import { Component, OnInit } from '@angular/core';
import { TalksService } from 'src/app/shared/services/talks/talks.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {

  talks : any [] = [];
  isLoading : boolean = false;
  constructor(
              private talkService : TalksService
  ) { }

  ngOnInit(): void {

    this.isLoading = true;

    this.talkService.getAllTalks().subscribe(
      ({courses})=>{
        if(courses.length !== 0){
          this.talks = courses;
          this.isLoading = false;

        }
      })
  }




}
