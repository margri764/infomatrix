import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  showInscriptions$ : EventEmitter<boolean> = new EventEmitter<boolean>;
  openInscription$ : EventEmitter<boolean> = new EventEmitter<boolean>;

  private baseUrl = environment.baseUrl;

  constructor(
              private http : HttpClient
  )
   {

    }

login (body : any ){

  return this.http.post<any>(`${this.baseUrl}api/login`, body) 
  .pipe(
    tap( ({success}) =>{
                    if(success){
                        localStorage.setItem('user', "true")
                    }           
              }  
    ),            
    map( res => {res; console.log('desde login: ', res);} )
  )
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

getAllInscription( ){
  return this.http.get<any>(`${this.baseUrl}api/courses/inscription`)
  .pipe(
    tap( (res) => { 
                  console.log(' desde getAllInscription', res );
                } 
    ),
    map( res =>  res )
  )
}
}
