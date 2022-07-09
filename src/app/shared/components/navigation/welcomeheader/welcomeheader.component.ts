import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcomeheader',
  templateUrl: './welcomeheader.component.html',
  styleUrls: ['./welcomeheader.component.css']
})
export class WelcomeheaderComponent implements OnInit {

  @Input() showSalution: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
