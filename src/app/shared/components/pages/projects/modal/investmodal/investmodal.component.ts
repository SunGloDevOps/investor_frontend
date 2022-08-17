import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { UsersRepository } from 'src/app/repositories/users/users.service';
import { WalletService } from 'src/app/repositories/wallet/wallet.service';


@Component({
  selector: 'app-investmodal',
  templateUrl: './investmodal.component.html',
  styleUrls: ['./investmodal.component.css']
})
export class InvestmodalComponent implements OnInit {

  @Output() payBank = new EventEmitter<boolean>()

  @Output() payCrypto = new EventEmitter<boolean>();

  @Input() price?: number;

  @Input() no_of_cell?: number;

  //pay crypto loading status
  @Input() cryptoisLoading: boolean = false

  //pay crypto loading status
  @Input() bankisLoading: boolean = false

  bank_balance: number = 0;

  crypto_balance: number = 0;

  capital: number = 0;

  user?: any;

  constructor(
    private wallet: WalletService,
    private userRepository: UsersRepository
  ) { }

  ngOnInit(): void {
    this.user = this.userRepository.getUser();
   
    this.getWalletBalance()
  }

  getWalletBalance(): void {
    this.wallet.getWalletDetails(this.user.id).subscribe(
      res => {
        console.log(res.data)
        this.bank_balance = res.data.wallet.bank_balance;
        this.crypto_balance = res.data.wallet.crypto_balance;
        console.log(this.bank_balance)
        console.log(this.crypto_balance)
      }
    )
  }

  payWithBank() {
    //check balance 
    if(this.no_of_cell && this.price){
      this.capital = this.price * this.no_of_cell
      if(this.capital > this.bank_balance){
        this.payBank.emit(false)
      }
      else{
        //prompt investing
        this.payBank.emit(true)
      }
    }
  }

  payWithCrypto(){
    //check balance 
    if(this.no_of_cell && this.price){
      const capital = this.price * this.no_of_cell
        if(capital> this.crypto_balance){
          this.payCrypto.emit(false)
         
        }
        else{
          //withdraw from balance 
          this.payCrypto.emit(true)
          
        }
    }
  }

}
