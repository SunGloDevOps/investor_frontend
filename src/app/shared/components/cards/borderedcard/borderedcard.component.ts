import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-borderedcard',
  templateUrl: './borderedcard.component.html',
  styleUrls: ['./borderedcard.component.css']
})
export class BorderedcardComponent implements OnInit  {

  @Input() label?: string;

  @Input() value?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
