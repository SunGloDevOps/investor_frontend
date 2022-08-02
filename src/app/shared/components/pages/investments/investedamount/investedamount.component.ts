import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-investedamount',
  templateUrl: './investedamount.component.html',
  styleUrls: ['./investedamount.component.css']
})
export class InvestedamountComponent implements OnInit {

  @Input() naira?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
