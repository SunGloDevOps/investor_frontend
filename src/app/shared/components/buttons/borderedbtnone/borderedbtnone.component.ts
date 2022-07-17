import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-borderedbtnone',
  templateUrl: './borderedbtnone.component.html',
  styleUrls: ['./borderedbtnone.component.css']
})
export class BorderedbtnoneComponent implements OnInit {

  @Input() label?: string;

  @Input() icon?: string;

  @Input() fullwidth?: boolean;

  @Input() size1?: boolean;

  @Input() size2?: boolean;

  @Input() size3?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
