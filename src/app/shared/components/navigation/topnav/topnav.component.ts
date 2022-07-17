import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  @Input() showSearch: boolean = false;

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
