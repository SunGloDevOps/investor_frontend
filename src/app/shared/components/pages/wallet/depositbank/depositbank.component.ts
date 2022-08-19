import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './depositbank.component.html',
  styleUrls: ['./depositbank.component.css']
})
export class DepositbankComponent implements OnInit {

  showWallet: boolean = true;

  showCrypto: boolean = false;

  @Output() verifyWithdrawal = new EventEmitter<boolean>()

  cryptoWithdrawalForm = this.fb.group({
    amount: [' ', Validators.required]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  showverifyWithdrawal(){
    this.verifyWithdrawal.emit(true)
  }

  showWalletTab(): void{
    this.showWallet = !this.showWallet;
  }

  showCryptoTab(): void{
    this.showCrypto = true;
    this.showWallet = false;
  }

}
