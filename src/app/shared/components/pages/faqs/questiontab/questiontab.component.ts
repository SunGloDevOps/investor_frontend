import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questiontab',
  templateUrl: './questiontab.component.html',
  styleUrls: ['./questiontab.component.css']
})
export class QuestiontabComponent implements OnInit {

  toggle: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleHandler(){
    this.toggle = !this.toggle
  }

}
