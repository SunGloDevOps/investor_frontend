import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles:  [`

    `
  ]
})
export class TableComponent implements OnInit {

  @Input() headers: any[];

  @Input() datas: any[];

  @Input() name: any;

  @Input() button: Button;

  @Input() button_menu: Button[];

  products: any;

  selectedProducts4: any[];

  constructor() { }

  ngOnInit() {
    this.products = this.datas
  }
}

export interface  Button {
   name: String;
   url: String
}
