import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generic-success',
  templateUrl: './generic-success.component.html',
  styleUrls: ['./generic-success.component.scss']
})
export class GenericSuccessComponent implements OnInit {


  @Input() data!: string;
  msg : string = 'Operación exitosa!!';
  
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
