import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './depositbank.component.html',
  styleUrls: ['./depositbank.component.css']
})
export class DepositbankComponent implements OnInit {

  showWallet: boolean = true;

  showCrypto: boolean = false;

  @Output() verifyWithdrawal = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  showverifyWithdrawal(){
    this.verifyWithdrawal.emit(true)
  }

  showWalletTab(): void{
    this.showCrypto = false;
    this.showWallet = true;
  }

  showCryptoTab(): void{
    this.showCrypto = true;
    this.showWallet = false;
  }

}
