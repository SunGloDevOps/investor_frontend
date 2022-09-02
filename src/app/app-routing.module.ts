import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './views/dashboard/dashboard-routing.module';
import { HomeComponent } from './views/home/home.component';
import { AuthenticationRoutingModule } from './views/authentication/authentication-routing.module';
import { FaqsComponent } from './views/faqs/faqs.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog/blog.component';
import { BlogsComponent } from './views/blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/views/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'app',
    loadChildren: () => import('../app/views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogs/:id',
    component: BlogComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
      ),
    DashboardRoutingModule,
    AuthenticationRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
