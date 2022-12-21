import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Cards } from './card';
import { ComponentService } from './component.service';
import { Observable } from 'rxjs'

const API = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() cards !: Cards;

  searchText = '';

  constructor(private cardService: ComponentService, private http: HttpClient){
    this.getAllCards();
  }

  getAllCards(){
    this.cardService.getCards().subscribe(result => {
      this.cards = result
    })
  }
}
