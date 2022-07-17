import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiletopnav',
  templateUrl: './mobiletopnav.component.html',
  styleUrls: ['./mobiletopnav.component.css']
})
export class MobiletopnavComponent implements OnInit {

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
