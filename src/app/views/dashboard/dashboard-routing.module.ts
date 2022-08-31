import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/guards/authguard/authguard.service';
import { StarterComponent } from 'src/app/shared/components/layouts/starter/starter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentRoutingModule } from './investment/investment-routing.module';
import { ProjectsRoutingModule } from './projects/projects-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { WalletRoutingModule } from './wallet/wallet-routing.module';

const routes: Routes = [
  {
    path: 'app',
    component: StarterComponent,
    
    children: [
      {
        path: 'app',
        redirectTo: '/app/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthguardService],
      },
      {
        path: 'projects',
        loadChildren: () => import('../dashboard/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'investments',
        loadChildren: () => import('../dashboard/investment/investment.module').then(m => m.InvestmentModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../dashboard/wallet/wallet.module').then(m => m.WalletModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../dashboard/user/user.module').then(m => m.UserModule)
      },
     
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProjectsRoutingModule,
    InvestmentRoutingModule,
    WalletRoutingModule,
    UserRoutingModule
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
