import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { Card } from '../models/Card';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  cardList: Card[];
  nameCh: string;
  totalCards: number;
  pages: number;
  next: string;
  isDetail: boolean;
  cardDetail: Card;

  @ViewChild('child')
  private messageComp: MessageComponent = new MessageComponent;

  constructor(private rickService: RickapiService, private cd: ChangeDetectorRef) { 
    this.cardList = [];
    this.nameCh = '';
    this.totalCards = 0;
    this.pages = 0;
    this.next = "";
    this.isDetail = false;
    this.cardDetail = new Card;
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.rickService.getCharacters().subscribe(
      response => {
        this.cardList = response.results;
        this.totalCards = response.info.count;
        this.pages = response.info.pages;
        this.next = response.info.next;
      },
      error => {
        this.setError(error);
      }
    )
  }

  getCharacterByName(){
    this.rickService.getCharacter(this.nameCh).subscribe(
      response => {
        this.cardList = response.results;
        this.totalCards = response.info.count;
        this.pages = response.info.pages;
        this.next = response.info.next;
      },
      error => { 
        this.setError(error);
      }
    )
  }
  

  getPagination(){
    this.rickService.getCharacterPag(this.next.split('?')[1]).subscribe(
      response => {
        let listPag : Card[] = response.results;
        this.cardList = this.cardList.concat(listPag);
        this.next = response.info.next;
      },
      error => {
        this.setError(error);
      }
    )
  }

  openDetail(card:Card){
    this.isDetail = true;
    this.cardDetail = card;
  }

  toggleDetailModal(){
    this.isDetail = !this.isDetail;
  }

  setError(error: any){
    this.cardList = [];
    this.cd.detectChanges();
    this.messageComp.message = error.error.error;
  }

}
