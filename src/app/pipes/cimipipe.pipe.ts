import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cimipipe'
})
export class CimipipePipe implements PipeTransform {

  transform(value: string):string {
    return "cimi "+value;
  }

}
