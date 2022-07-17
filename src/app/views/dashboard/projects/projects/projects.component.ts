import { Component, OnInit } from '@angular/core';
import IProjects from 'src/app/models/Projects/IProject';
import IProject, { IProjectResponse } from 'src/app/models/Projects/IProject';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';
import { TokenService } from 'src/app/repositories/token/token.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: IProjects[] = [];

  constructor(
    private projectService: ProjectsService,
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {
  
    this.projectService.getAllProject().subscribe(
      (res: IProjectResponse) => {
        
        if(res.status === 200) {
            
          this.projects = res.data
    
            
        }
      }

    )
  }

}
