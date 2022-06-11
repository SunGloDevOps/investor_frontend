import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/guards/authguard/authguard.service';
import { StarterComponent } from 'src/app/shared/components/starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'user',
    component: StarterComponent,
    children: [
      {
        path: '',
        redirectTo: '/user/profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: [AuthguardService],
      },
      {
        path: 'settings',
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
