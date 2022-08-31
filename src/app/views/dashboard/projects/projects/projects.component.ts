import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs';
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

  activeProjects: IProjects[] = [];

  nowAvailable: boolean = true;

  nowGenerating: boolean = false;

  showInsufficientModal: boolean = false;

  //current loading status of page
  pageLoading: boolean = false;

  constructor(
    private projectService: ProjectsService,
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    this.getProjects()

    this.pageLoading = false
  }

  getProjects(): void {
  
    this.projectService.getAllProject().subscribe(
      (res: IProjectResponse) => {
        
        if(res.status === 200) {
            
          res.data.map((projects: any) => {
          
            if(projects.availability === "Now Available"){
                this.projects.push(projects)
            }

            if(projects.availability !== "Now Available"){
              this.activeProjects.push(projects)
            }

          })
    
            
        }
        this.pageLoading = false
      },
      complete => {
        
      }

    )
  }

  viewNowAvailable(){
  
    this.nowAvailable = true;
    this.nowGenerating = false
    
  }

  viewNowGenerating(){
  
    this.nowAvailable = false;
    this.nowGenerating = true
    
  }



}
