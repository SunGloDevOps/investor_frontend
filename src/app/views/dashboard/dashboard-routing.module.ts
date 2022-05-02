import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from 'src/app/shared/components/starter/starter.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentdetailComponent } from './investmentdetail/investmentdetail.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: 'app',
    component: StarterComponent,
    children: [
      {
        path: '',
        redirectTo: '/app/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'projects/i',
        component: ProjectComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
      {
        path: 'investment',
        component: InvestmentComponent
      },
      {
        path: 'investment/i',
        component: InvestmentdetailComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
