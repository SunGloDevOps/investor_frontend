import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersRepository } from 'src/app/repositories/users/users.service';
import { WalletService } from 'src/app/repositories/wallet/wallet.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  @Output() addBankaddress = new EventEmitter<boolean>()

  user?: any;

  isLoading: boolean = false;

  @Input() bank_name?: string;
  @Input() account_name?: string;
  @Input() account_no?: string;
  
  addBankDetailsForm = this.fb.group({
    account_name: [ ' ', Validators.required ],
    bank_name: [ ' ', Validators.required ],
    account_no: [' ', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private walletRepository: WalletService,
    private userRepository: UsersRepository
  ) { }

  ngOnInit(): void {
    this.user = this.userRepository.getUser();

    this.getWalletDetails()

    this.walletRepository.refreshRequired.subscribe(
      (res: any) => {
       this.getWalletDetails()
      }
    );
  }

  addDetails() {
    this.isLoading = true
    const account_name: string = this.addBankDetailsForm.controls['account_name'].value;
    const account_no: string = this.addBankDetailsForm.controls['account_no'].value;
    const bank_name: string = this.addBankDetailsForm.controls['bank_name'].value;
    
    const payload = {
      bank_account_name: account_name,
      bank_account_no: account_no,
      bank_account_bank: bank_name
    }

    this.walletRepository.addBankDetails(this.user.id, payload).subscribe(
      res => {

        if(res.status === 200){
          this.isLoading = false
          this.addBankaddress.emit(true)
        }

        if(res.status === 500){
          this.isLoading = false
          this.addBankaddress.emit(false)
        }

      }
    )
    
    
  }

  getWalletDetails(): void {
    this.walletRepository.getWalletDetails(this.user.id).subscribe(
      res => {
        
        if(res.status == 200){

          const naccount_no = res.data.wallet.bank_account_no;
          const naccount_name = res.data.wallet.bank_account_name;
          const naccount_bank = res.data.wallet.bank_account_bank;

          this.addBankDetailsForm.setValue({
            account_name: naccount_name ? naccount_name : "",
            bank_name: naccount_bank ? naccount_bank : "",
            account_no: naccount_no ? naccount_no : null
          })
        }

      }
    )
  }

}
