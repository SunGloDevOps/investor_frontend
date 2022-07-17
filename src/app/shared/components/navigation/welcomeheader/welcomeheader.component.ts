import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcomeheader',
  templateUrl: './welcomeheader.component.html',
  styleUrls: ['./welcomeheader.component.css']
})
export class WelcomeheaderComponent implements OnInit {

  @Input() showSalution: boolean = false;

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
    if(this.showModal){
      this.showModal = false
    }else{
      this.showModal = true
    }
  }

}
