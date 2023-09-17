import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  private baseUrl = environment.baseUrl;

  constructor(
              private http : HttpClient
  )
   {

    }

getAllTalks(){
  return this.http.get<any>(`${this.baseUrl}api/courses`)
  .pipe(
    tap( (res) => { 
                  console.log(' desde getAllTalks', res );
                } 
    ),
    map( res =>  res )
  )
}

createInscription( body:any){
  return this.http.post<any>(`${this.baseUrl}api/courses/inscription`, body)
  .pipe(
    tap( (res) => { 
                  console.log(' desde createInscription', res );
                } 
    ),
    map( res =>  res )
  )
}
}
