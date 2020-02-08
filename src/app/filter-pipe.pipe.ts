import { Pipe, PipeTransform, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  tableData: any;

  transform(tableData, status?: any): any {
    return tableData.filter(statusList => status.includes(statusList.status));
  }
}
