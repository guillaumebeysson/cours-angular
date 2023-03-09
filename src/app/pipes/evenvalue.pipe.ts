import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenvalue'
})
export class EvenvaluePipe implements PipeTransform {

  transform(tab: number[]): number[] {    
    return tab.filter(n => n % 2 === 0);
  }

}