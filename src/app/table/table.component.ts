import { Component, OnInit } from '@angular/core';
import { tableData } from './mock-data';
import { tableHeader } from './mock-data';
import { status } from './mock-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  tableHeader = tableHeader;
  tableData = tableData;
  statusList = status;
  statusLists: any;
  selectedTh: string;

  ngOnInit() {
    this.statusLists = this.statusList.map(type => {
      return { status: type, selected: false };
    });
  }

  get selectedStatus(): any {
    const statusList = this.statusLists.filter(status => status.selected === true)
    if (statusList.length === 0) {
      const data = this.statusLists.map(type => {
        return type.status
      });
      return data;
    } else {
      const data = this.statusLists.reduce((types, type) => {
        if (type.selected) {
          types.push(type.status);
        }
        return types;
      }, []);
      return data;
    }
  }

  onChange(selectedValue: string): void {
    this.selectedTh = selectedValue;
  }

}
