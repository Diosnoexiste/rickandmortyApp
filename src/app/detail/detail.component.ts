import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/Card';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input()
  isDetail: boolean;
  @Output()
  detailState = new EventEmitter;
  @Input()
  cardDetail!: Card;

  constructor() { 
    this.isDetail = false;
  }

  ngOnInit(): void {
  }

  closeDetail(){
    this.isDetail = false;
    this.detailState.emit();
  }

  closeModalOut(event: any){
    let modal = document.getElementById("modalDetail");
    if(modal == event.target){
      this.closeDetail();
    }

  }

}
