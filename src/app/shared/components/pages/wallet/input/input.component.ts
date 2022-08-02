import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() textCenter?: boolean;

  @Input() placeholder?: string;

  @Input() type?: string;

  @Input() formControlName: any;

  constructor() { }

  ngOnInit(): void {
  }

}
