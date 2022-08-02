import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/repositories/token/token.service';
import { TransactionService } from 'src/app/repositories/transaction/transaction.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';
import { WalletService } from 'src/app/repositories/wallet/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  bank_balance: string = "0";

  crypto_balance: string = "0";

  account_no?: string;
  account_name?: string;
  account_bank?: string;

  crypto_address?: string;

  user?: any;

  transactions: any[] = [];

  showdepositModal: boolean = false;

  showverifyWithdrawalModal: boolean = false;

  showaddBankModal: boolean = false;

  showaddCryptoModal: boolean = false;

  showSuccessModal: boolean = false;

  transactionStatus: boolean = true;

  successText?: string;

  constructor(
    private userService: UsersRepository,
    private wallet: WalletService
  ) { }

  ngOnInit(): void {
    
    this.user = this.userService.getUser()

    this.getWalletDetails();

    this.wallet.refreshRequired.subscribe(
      (res: any) => {
        this.getWalletDetails()
      }
    );

  }

  getWalletDetails(): void {
    this.wallet.getWalletDetails(this.user.id).subscribe(
      res => {
        
        if(res.status == 200){
          this.bank_balance = res.data.wallet.bank_balance;
          this.crypto_balance = res.data.wallet.crypto_balance;
          this.account_no = res.data.wallet.bank_account_no;
          this.account_name = res.data.wallet.bank_account_name;
          this.account_bank = res.data.wallet.bank_account_bank;
          this.crypto_address = res.data.wallet.crypto_address;
          this.transactions = res.data.transaction
        }

      }
    )
  }

  //function prompts users to verify their withdrawal
  verifyWithdrawal(){
      this.closeDepositModal(false);
      this.openverifyWithdrawalModal()
  }

  //this function sends withdrawal request and shows response
  withdraw(data: boolean){
    if(this.transactionStatus === data){
      this.closeverifyWithdrawalModal(false);
      this.setSuccessText('Withdrawal Successful')
      this.openSuccessModal()
    }
  }

  //gets response from add crypto component and shows response
  addCrypto(value: boolean){
    if(value===true){
      this.closeaddCryptoModal(false)
      this.setSuccessText('Crypto Addresss Saved');
      this.openSuccessModal()
    }else{
      this.closeaddBankModal(false)
      this.setSuccessText('Crypto Addresss Not added');
      this.openSuccessModal()
    }
  }

  //gets response from add bank component and shows response
  addBank(value: boolean){
    if(value === true){
      this.closeaddBankModal(false)
      this.setSuccessText('Bank Addresss Saved');
      this.openSuccessModal()
    }else{
      this.closeaddBankModal(false)
      this.setSuccessText('Bank Addresss Not added');
      this.openSuccessModal()
    }
  }

  //closes deposit modal
  closeDepositModal(data: boolean): void {
    this.showdepositModal = data
  }

  //opens deposit modal
  openDepositModal(): void {
    this.showdepositModal = true
  }

  //shows success modal
  openSuccessModal(): void {
    this.showSuccessModal = true
  }

  //closes success modal
  closeSuccessModal(data: boolean): void {
    this.showSuccessModal = data
  }

  //opens modal to verify withdrawal
  openverifyWithdrawalModal(): void {
    this.showverifyWithdrawalModal = true
  }

  //closes modal to verify withdrawal
  closeverifyWithdrawalModal(data: boolean): void {
    this.showverifyWithdrawalModal = data
  }

  //opens add bank details modal
  openaddBankModal(): void {
    this.showaddBankModal = true
  }

  //closes add bank details modal
  closeaddBankModal(data: boolean): void {
    this.showaddBankModal = data
  }

  //opens add crypto address modal
  openaddCryptoModal(): void {
    this.showaddCryptoModal = true;
  }

  //closes add crypto address modal
  closeaddCryptoModal(data: boolean): void {
    this.showaddCryptoModal = data
  }

  //changes text on success modal
  setSuccessText(value: string): void{
    this.successText = value
  }

}
