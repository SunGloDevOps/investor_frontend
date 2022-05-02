import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../../shared/shared.module';
import { WalletComponent } from './wallet/wallet.component';
import { InvestmentComponent } from './investment/investment.component';
import { ProfileComponent } from './profile/profile.component';
import { InvestmentdetailComponent } from './investmentdetail/investmentdetail.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    DashboardComponent,
    OrderComponent,
    CheckoutComponent,
    WalletComponent,
    InvestmentComponent,
    ProfileComponent,
    InvestmentdetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
