import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/guards/authguard/authguard.service';
import { StarterComponent } from 'src/app/shared/components/layouts/starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'app',
    component: StarterComponent,
    children: [
      {
        path: '',
        redirectTo: '/app/user/profile',
        pathMatch: 'full'
      },
      {
        path: 'user/profile',
        component: ProfileComponent,
        // canActivate: [AuthguardService],
      },
      {
        path: 'user/settings',
        component: SettingsComponent,
        // canActivate: [AuthguardService],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
