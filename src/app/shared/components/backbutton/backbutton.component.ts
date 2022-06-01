import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent implements OnInit {

  constructor(
    private _location: Router
  ) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.navigate(["../"]);
  }

}
