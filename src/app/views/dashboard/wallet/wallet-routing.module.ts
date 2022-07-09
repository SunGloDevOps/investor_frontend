import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/guards/authguard/authguard.service';
import { StarterComponent } from 'src/app/shared/components/layouts/starter/starter.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: 'wallet',
    component: StarterComponent,
    children: [
      {
        path: '',
        redirectTo: '/wallet/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: WalletComponent,
        // canActivate: [AuthguardService],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
