import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TalksService } from 'src/app/shared/services/talks/talks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm!: FormGroup;
  passwordVisible = false;
  confirm : boolean = false;

  constructor(
              private fb: FormBuilder,
              private talksService : TalksService
  ) { 

    this.myForm = this.fb.group({
      user:     [ '', [Validators.required] ],
      password:  [ '', [Validators.required]],
    });
    
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.myForm.value); 
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.confirm = true;
    this.talksService.login( this.myForm.value ).subscribe()
  }

  togglePasswordVisibility(value : string) : void {
    (value == "password") ? this.passwordVisible = !this.passwordVisible : '';
  }
  
  validField( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
}

  
    
    
  }