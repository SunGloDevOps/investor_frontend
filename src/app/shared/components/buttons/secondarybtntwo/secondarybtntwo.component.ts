import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondarybtntwo',
  templateUrl: './secondarybtntwo.component.html',
  styleUrls: ['./secondarybtntwo.component.css']
})
export class SecondarybtntwoComponent implements OnInit {

  @Input() label?: string;

  @Input() icon?: string;

  @Input() fullwidth?: boolean;

  @Input() size1?: boolean;

  @Input() size2?: boolean;

  @Input() size3?: boolean;

  @Input() size4?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
