import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTh'
})
export class FilterByThPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (!value) { return []; }
    if (!arg) { return value; }

    return value.filter(tableData => tableData.th === arg);
  }

}
