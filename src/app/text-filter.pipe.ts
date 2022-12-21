
import {Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'textFilter'
})
export class FilterTextPipe implements PipeTransform {
  transform(value: string, length: number){
    if(value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }
}
