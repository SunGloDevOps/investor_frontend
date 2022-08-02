import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabsitem',
  templateUrl: './tabsitem.component.html',
  styleUrls: ['./tabsitem.component.css']
})
export class TabsitemComponent implements OnInit {

  @Input() description?: string;

  @Input() time?: Date;

  constructor() { }

  ngOnInit(): void {
    console.log(this.description)
    // this.calculatingTime()
  }

  calculatingTime(){

    if(this.time){
      // let timer = ((this.time.getTime() - new Date().getTime())/1000)
      // console.log(this.tme)
    }
  }

  read(): void {
    
  }

}
