import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/guards/authguard/authguard.service';
import { StarterComponent } from 'src/app/shared/components/layouts/starter/starter.component';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentdetailComponent } from './investmentdetail/investmentdetail.component';

const routes: Routes = [
  {
    path: 'app',
    component: StarterComponent,
    children: [
      {
        path: '',
        redirectTo: '/app/investments',
        pathMatch: 'full'
      },
      {
        path: 'investments',
        component: InvestmentComponent,
        canActivate: [AuthguardService],
      },
      {
        path: 'investments/:id',
        component: InvestmentdetailComponent,
        canActivate: [AuthguardService],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
