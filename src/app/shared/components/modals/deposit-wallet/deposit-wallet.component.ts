import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-deposit-wallet',
  templateUrl: './deposit-wallet.component.html',
  styleUrls: ['./deposit-wallet.component.css']
})
export class DepositWalletComponent implements OnInit {

  @Input() close: any;

  constructor() { }

  ngOnInit(): void {
  }

}
