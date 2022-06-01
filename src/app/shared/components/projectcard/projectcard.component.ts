import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {

  @Input() title?: string;

  @Input() description?: string;

  @Input() cost?: number;

  value: string = "~ USD " + this.cost;

  constructor() { }

  ngOnInit(): void {
  }

}
