import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TalksService } from 'src/app/shared/services/talks/talks.service';
import { GenericSuccessComponent } from '../../generic-success/generic-success/generic-success.component';
import { GenericErrorComponent } from '../../generic-error/generic-error/generic-error.component';
import { catchError, of } from 'rxjs';
import { saveDataLS } from 'src/app/shared/Storage';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit, OnDestroy {

  talks : any [] = [];
  isLoading : boolean = false;
  private arrCards: any[] = [];
  private tempArrayCard :any []= [];
  quantity : number = 0;
  selectedTalks : boolean = false;
  myForm!: FormGroup;
  passwordVisible = false;
  confirm : boolean = false;
  showSelectedClass : boolean = false;

  constructor(
              private talkService : TalksService,
              private router : Router,
              private fb: FormBuilder,
              private modalService: NgbModal 
  ) { 

    this.myForm = this.fb.group({
      fullName:     [ '', [Validators.required] ],
      type:  [ ''],
    });
  
  }

  ngOnInit(): void {

    this.getInitialData();

    if(!this.isLoading){
      this.selectedTalks = true;
    }

  }

  getInitialData(){

    this.isLoading = true;
    
  

    this.talkService.getAllTalks()
    .pipe(
      catchError((error) => {
        console.error('Error en la solicitud HTTP:', error);
        this.openErrorModal('Ups algo salió mal reintenta mas tarde');
        this.isLoading = false;
        this.arrCards = [];
        setTimeout(()=>{
          this.router.navigateByUrl('/inicio')
      },1000)
        return of(); 
      })
    )
    .subscribe(
      ({courses})=>{
        this.isLoading = false;
        this.selectedTalks = true;
        if(courses.length !== 0){
          this.talks = courses;
          this.talks = this.talks.map(talk => ({ ...talk, class: false }));
          console.log(this.talks);
          // this.isLoading = false;

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

  continue(){
    this.selectedTalks = false;
  }

  delCard( card:any ){

    const isIncluded = this.arrCards.indexOf( card._id);
    if(isIncluded === -1){return}

    this.arrCards= this.arrCards.filter((item:any) => item !== card._id )
    this.quantity --;
    card.class = false;;
    

  }

  saveTalks(fullName : string, type : string){

    console.log(this.arrCards);

     let studentBoolean : boolean = false;
     let teacherBoolean : boolean = false;
    if(type === 'student'){
      studentBoolean = true;
      teacherBoolean = false;
    }else if(type === 'teacher'){
      teacherBoolean = true;
      studentBoolean = false;
    }

    this.isLoading = true;
    const body = {
          fullName: fullName,
          student: studentBoolean,
          teacher: teacherBoolean,
          inscription: this.arrCards
    }

    console.log(body);

    this.talkService.createInscription(body)
    .pipe(
      catchError((error) => {
        console.error('Error en la solicitud HTTP:', error);
        this.openErrorModal('Ups algo salió mal reintenta mas tarde');
        this.isLoading = false;
        this.arrCards = [];
        setTimeout(()=>{
          this.router.navigateByUrl('/inicio')
      },1000)
        return of(); 
      })
    ).subscribe( 
      ({success})=>{
        if(success){
          this.openModal("Inscripción creada con éxito!!");
          this.arrCards = [];
           this.isLoading = false;
          setTimeout(()=>{
            this.router.navigateByUrl('/inicio')
          },1000)
        }
      })

  }


  onSaveForm(){

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.confirm = true;
    const fullName = this.myForm.get('fullName')?.value;
    const type = this.myForm.get('type')?.value;
    this.saveTalks( fullName, type );

  }

  openModal(data : string) {

    const modalOptions: NgbModalOptions = {
      centered: true
    };
  
    const modalRef = this.modalService.open(GenericSuccessComponent, modalOptions);
    modalRef.componentInstance.data =  data;
  }

  
  openErrorModal(data : string) {

    const modalOptions: NgbModalOptions = {
      centered: true
    };
  
    const modalRef = this.modalService.open(GenericErrorComponent, modalOptions);
    modalRef.componentInstance.data =  data;
  }


  
  validField( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

ngOnDestroy(): void {
 if(this.arrCards.length !== 0){
   this.talkService.openInscription$.emit(true);
  }
}




}
