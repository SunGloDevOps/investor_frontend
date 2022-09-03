import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activitycard',
  templateUrl: './activitycard.component.html',
  styleUrls: ['./activitycard.component.css']
})
export class ActivitycardComponent implements OnInit {

  isVerified: boolean = false;

  idVerified: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
