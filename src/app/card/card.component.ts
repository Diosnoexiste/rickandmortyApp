import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card!: Card;
  @Input()
  isDetail: boolean;

  constructor() { 
    this.isDetail = false;
  }

  ngOnInit(): void {
  }

}
