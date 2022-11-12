import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortDirection = args[1];
    let multiplier = 1;
    let sortFieldsArray = args[0].split('.');
    var length = sortFieldsArray.length;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    value.sort((a: any, b: any) => {    
        //find the target property in the nested object
        var i = 0;
        while( i < length ) {
            a = a[sortFieldsArray[i]];
            b = b[sortFieldsArray[i]];
            i++;
        }        

        if (a < b) {
            return -1 * multiplier;
        } else if (a > b) {
            return 1 * multiplier;
        } else {
            return 0;
        }
    });

    return value;
  }
}