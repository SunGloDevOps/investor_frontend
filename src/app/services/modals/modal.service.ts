import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  showDepositModal: boolean = true;

  constructor() { }

  showDeposit(): void {
    this.showDepositModal = true;
  }

  hideDeposit(): void {
    this.showDepositModal = false;
  }
}
