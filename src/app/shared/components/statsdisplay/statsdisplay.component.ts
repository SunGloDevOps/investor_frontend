import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statsdisplay',
  templateUrl: './statsdisplay.component.html',
  styleUrls: ['./statsdisplay.component.css']
})
export class StatsdisplayComponent implements OnInit {

  @Input() label?: string;

  @Input() value?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
