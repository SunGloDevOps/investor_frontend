import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectinfocard',
  templateUrl: './projectinfocard.component.html',
  styleUrls: ['./projectinfocard.component.css']
})
export class ProjectinfocardComponent implements OnInit {

  @Input() title?: string;

  @Input() value?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
