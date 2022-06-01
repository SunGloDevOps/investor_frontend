import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/services/authguard/authguard.service';
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
        component: DashboardComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'projects/:id',
        component: ProjectComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'wallet',
        component: WalletComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'investment',
        component: InvestmentComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'investment/i',
        component: InvestmentdetailComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'order',
        component: OrderComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthguardService],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
