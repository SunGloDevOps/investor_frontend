import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singletopnav',
  templateUrl: './singletopnav.component.html',
  styleUrls: ['./singletopnav.component.css']
})
export class SingletopnavComponent implements OnInit {

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
