import { Cards } from './card';
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'filter',
})
export class FilterCardPipe implements PipeTransform {
  transform(value: Cards[], filterString: string, property: string): Cards[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredCards: Cards[] = [];
    for (let card of value) {
      if (card[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredCards.push(card);
      }
    }
    return filteredCards;
  }
}


//let cards = [];
    // if(searchText == ''){
    //   return values
    // }
    // for(let card of values) {
    //   if(card.title == searchText){
    //     cards.push(card);
    //   }
    //   return cards;
    // }
