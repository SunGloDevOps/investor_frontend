import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit {

  @Input() className?: string;

  @Input() label?: string;

  @Input() icon?: string;

  @Input() borderStyle?: string;

  @Input() borderWidth?: string;

  @Input() borderColor?: string;

  @Input() backgroundColor?: string;

  @Input() borderRadius?: string;

  @Input() fullwidth?: boolean;

  @Input() primarybtnone?: boolean;

  @Input() size1?: boolean;

  @Input() size2?: boolean;

  @Input() size3?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
