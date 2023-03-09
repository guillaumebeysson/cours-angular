import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetcharPipe implements PipeTransform {

  transform(value: string, i:number=0): string {
    return value[i];
  }

}
