import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/guards/authguard/authguard.service';
import { StarterComponent } from 'src/app/shared/components/starter/starter.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {
    path: 'projects',
    component: StarterComponent,
    children: [
      {
        path: '',
        redirectTo: '/projects/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: ProjectsComponent,
        // canActivate: [AuthguardService],
      },
      {
        path: ':id',
        component: ProjectComponent,
        // canActivate: [AuthguardService],
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
