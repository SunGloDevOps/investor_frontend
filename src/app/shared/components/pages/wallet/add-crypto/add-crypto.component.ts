import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersRepository } from 'src/app/repositories/users/users.service';
import { WalletService } from 'src/app/repositories/wallet/wallet.service';

@Component({
  selector: 'app-add-crypto',
  templateUrl: './add-crypto.component.html',
  styleUrls: ['./add-crypto.component.css']
})
export class AddCryptoComponent implements OnInit {

  @Output() addCryptoaddress = new EventEmitter<boolean>()

  @Input() address?: string;

  isLoading: boolean = false;

  user?: any;

  addCryptoAddressForm = this.fb.group({
    address: [ ' ', Validators.required ],
  })

  constructor(
    private fb: FormBuilder,
    private walletRepository: WalletService,
    private userRepository: UsersRepository
  ) { 
   
    this.user = this.userRepository.getUser()

  }

  ngOnInit(): void {
    console.log(this.address)

    this.getWalletDetails()
    
    this.walletRepository.refreshRequired.subscribe(
      (res: any) => {
       this.getWalletDetails()
      }
    );
  }

  addAddress() {

    this.isLoading = true

    const address: string = this.addCryptoAddressForm.controls['address'].value;
    
    const payload = {
      crypto_address: address
    }

    this.walletRepository.addCryptoAddress(this.user.id, payload).subscribe(
      res => {
        
        if(res.status === 200){  
          this.isLoading = false
          this.addCryptoaddress.emit(true)
        }

        if(res.status === 500){
          this.isLoading = false
          this.addCryptoaddress.emit(false)
        }

      }
    )

  }

  getWalletDetails(): void {
    this.walletRepository.getWalletDetails(this.user.id).subscribe(
      res => {
        
        if(res.status == 200){ 
          const crypto_address = res.data.wallet.crypto_address
          this.addCryptoAddressForm.setValue({
            address:  crypto_address ? crypto_address : ""
          })
        }

      }
    )
  }

}
