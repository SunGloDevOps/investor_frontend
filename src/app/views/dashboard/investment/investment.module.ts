import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentdetailComponent } from './investmentdetail/investmentdetail.component';
@NgModule({
  declarations: [
    InvestmentComponent,
    InvestmentdetailComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    SharedModule
  ]
})
export class InvestmentModule { }
