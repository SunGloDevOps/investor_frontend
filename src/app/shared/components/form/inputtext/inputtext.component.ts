import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {

  @Input() type?: string;

  @Input() placeholder?: string;

  @Input() icon?: string;

  @Input() formControlName?: any;

  path: string = "../../../../assets/images/icons/";

  constructor() { }

  ngOnInit(): void {
  }

}
