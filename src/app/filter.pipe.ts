// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Cards } from './card';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Array<Cards>, searchText: string): Array<Cards> {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase()

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
