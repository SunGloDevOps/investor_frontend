import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css']
})
export class LandingNavComponent implements OnInit {

  @Input() show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(): void {
    this.show = true
  }

  hideMenu(): void {
    this.show = false
  }

}
