import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  showGeneral: boolean = true;

  showImportant: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showGeneralTab(): void{
    this.showImportant = false;
    this.showGeneral = true;
  }

  showImportantTab(): void{
    this.showImportant = true;
    this.showGeneral = false;
  }

}
