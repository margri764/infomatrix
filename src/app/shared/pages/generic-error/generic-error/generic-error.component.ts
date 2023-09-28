import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss']
})
export class GenericErrorComponent implements OnInit {

  @Input() data!: string;
  msg : string = 'Ups algo salió mal!!';
  
  constructor(
    private modalService: NgbModal 
  ) { }

  ngOnInit(): void {

    console.log(this.data);
    this.msg = this.data;
  }
  
  closeModal(){
    this.modalService.dismissAll()
  }

}
