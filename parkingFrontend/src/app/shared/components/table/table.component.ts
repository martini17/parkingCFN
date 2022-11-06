import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  @Input() itemsTable: any[] = [
    {
      tipo: 'Camioneta',
      tipox: 'Camioneta',
    }
  ]

  constructor() { }

  ngOnInit(): void { }



  public get header(): string[] {
    return (this.validateTable()) ? Object.keys(this.itemsTable[0]) : []
  }


  public get value(): any[] {
    return (this.validateTable()) ? this.itemsTable.map<any>((itemTable) => Object.values(itemTable)) : [];
  }


  validateTable() {
    return this.itemsTable.length > 0;
  }

}
