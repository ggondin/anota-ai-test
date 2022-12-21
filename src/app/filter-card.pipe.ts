import { Cards } from './card';
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'filterCard',
})
export class FilterCardPipe implements PipeTransform {
  transform(values: any, search:string){
    let cards = [];
    if(search == ''){
      return values
    }
    for(let card of values) {
      if(card.title == search){
        cards.push(card);
      }
      return cards;
    }
  }
}
