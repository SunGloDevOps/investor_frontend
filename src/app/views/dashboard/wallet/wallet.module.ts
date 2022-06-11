import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule
  ]
})
export class WalletModule { }
