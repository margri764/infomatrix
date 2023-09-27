import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { TalksService } from 'src/app/shared/services/talks/talks.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  passwordVisible = false;
  confirm : boolean = false;
  noMatch : boolean = false;
  isLoading : boolean = false;

  constructor(
              private fb: FormBuilder,
              private talksService : TalksService,
              private router : Router
  ) { 

    this.myForm = this.fb.group({
      user:     [ '', [Validators.required] ],
      password:  [ '', [Validators.required]],
    });
    
  }

  ngOnInit(): void {

        this.myForm.get('user')?.valueChanges.subscribe(newValue => {
              this.noMatch = false;
        });
        this.myForm.get('password')?.valueChanges.subscribe(newValue => {
          this.noMatch = false;
    });
  }


  login() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.confirm = true;
    
    
    this.talksService.login(this.myForm.value)
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud HTTP:', error);
          this.noMatch = true;
     
          return of(); 
        })
      )
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
        this.talksService.showInscriptions$.emit(true);
        this.router.navigateByUrl('/inicio')

      });
  }
  
  togglePasswordVisibility(value : string) : void {
    (value == "password") ? this.passwordVisible = !this.passwordVisible : '';
  }
  
  validField( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
}

}
