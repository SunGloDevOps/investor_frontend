import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/guards/authguard/authguard.service';
import { StarterComponent } from 'src/app/shared/components/layouts/starter/starter.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: 'app/projects',
    component: StarterComponent,
    children: [
      {
        path: '',
        redirectTo: 'app/projects/home',
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
      {
        path: '/search/:keyword',
        component: SearchComponent,
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
