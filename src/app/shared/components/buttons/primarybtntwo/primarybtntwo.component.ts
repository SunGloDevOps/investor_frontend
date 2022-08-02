import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primarybtntwo',
  templateUrl: './primarybtntwo.component.html',
  styleUrls: ['./primarybtntwo.component.css']
})
export class PrimarybtntwoComponent implements OnInit {

  @Input() label?: string;

  @Input() icon?: string;

  @Input() fullwidth?: boolean;

  @Input() size1?: boolean;

  @Input() size2?: boolean;

  @Input() size3?: boolean;

  @Input() size4?: boolean;

  @Input() disabled?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
