import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() borderColor?: string;

  @Input() backgroundColor?: string;

  @Input() fullwidth?: boolean;

  @Input() fitcontent?: boolean;

  @Input() borderRadius?: string

  constructor() { }

  ngOnInit(): void {
  }

}
