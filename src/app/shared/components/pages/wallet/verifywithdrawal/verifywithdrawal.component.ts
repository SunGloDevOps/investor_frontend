import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-verifywithdrawal',
  templateUrl: './verifywithdrawal.component.html',
  styleUrls: ['./verifywithdrawal.component.css']
})
export class VerifywithdrawalComponent implements OnInit {

  @Output() verifyWithdrawal = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  Withdraw(){
    this.verifyWithdrawal.emit(true)
  }

}
