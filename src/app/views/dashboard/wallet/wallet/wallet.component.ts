import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/repositories/token/token.service';
import { TransactionService } from 'src/app/repositories/transaction/transaction.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

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

  crypto_address?:string;

  user: any = {};

  transactions: any[] = [];

  showdepositModal: boolean = false;

  constructor(
    private userService: UsersRepository,
    private tokenService: TokenService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.user = this.tokenService.getTokenBody();
    this.showdepositModal = false;
  }

  getTransactionHistory(): void {
    const payload = {
      user_id: this.user.id
    }
    this.transactionService.getAllUserTransaction(payload).subscribe(
      res => {
        if(res.status === 200) {
          let data = res.data;
          data.map((e: any)=> {
            this.transactions.push(e)
          })
        }
      }
    )
  }

  getWalletDetails(): void {
    this.userService.getUserDetails(this.user.id).subscribe(
      res => {
        if(res.status == 200){
          // this.bank_balance = res.data.bank_balance;
          // this.crypto_balance = res.data.crypto_balance;
          // this.account_no = res.data.bank_account_no;
          // this.account_name = res.data.bank_account_name;
          // this.account_bank = res.data.bank_account_bank;
          // this.crypto_address = res.data.crypto_address;
        }
      }
    )
  }

  closeDepositModal(data: boolean): void {
    this.showdepositModal = data
  }

  openDepositModal(): void {
    this.showdepositModal = true
  }

}
