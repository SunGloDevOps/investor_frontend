import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-investmodal',
  templateUrl: './investmodal.component.html',
  styleUrls: ['./investmodal.component.css']
})
export class InvestmodalComponent implements OnInit {

  @Output() payBank = new EventEmitter<boolean>()

  @Output() payCrypto = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  payWithBank() {
    this.payBank.emit(true)
  }

  payWithCrypto(){
    this.payBank.emit(false)
  }

}
