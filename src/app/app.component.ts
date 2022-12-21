import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Cards } from './card';
import { ComponentService } from './component.service';
import { Observable } from 'rxjs'
import { removeAllListeners } from 'process';

const API = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cards : Cards;
  filterBy = '';
  buttonCard: boolean = false
  timeout: any;

  constructor(private cardService: ComponentService, private http: HttpClient){
    this.getAllCards();
  }

  ngOnInit(): void {

  }

  getAllCards(){
    this.cardService.getCards().subscribe(result => {
      this.cards = result
    })
  }
  remove(card) {
    let index = this.cards.indexOf(card);
    this.cards.splice(index, 1);
  }
  filter() {
  }
}


// const cardsArray = this.cards
// cardsArray.filter(()=>{})
