import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProject from 'src/app/models/Projects/IProject';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  projects: IProject[] = [];

  //page loading status
  pageLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.pageLoading = true;
    this.searchProjects(this.route.snapshot.params['keyword'])
  }

   //search projects 
   searchProjects(keyword: string){
    this.projectService.searchProject(keyword).subscribe(
      res => {
        this.projects = res.data
        this.pageLoading = false
      }
    )

    this.pageLoading = false;
  }

}
