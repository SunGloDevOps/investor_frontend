import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/models/Projects/IProject';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project?: IProject;

  projectsoldpercentage: number = 0;

  number_of_cell: number = 1;

  showinvestModal: boolean = false;

  constructor(
    private projectService: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProjectData()
  }

  getProjectData(): void {
    this.projectService.getProject(this.route.snapshot.params['id']).subscribe(
      res => {
        if(res.status === 200) {
          this.project = res.data;
          this.projectsoldpercentage = this.soldProjectPercentage(res.data.sold_cell, res.data.total_cell);
        }
      }
    );
  }

  //calculating percentage of sold projects
  soldProjectPercentage(sold: number, total: number): number {
    return (sold/total)*100
  }

  //download information for porject
  downloadInformation(): void {

  }

  //getting number of cell from the counter
  getpurchasedCells(amount: number){
    this.number_of_cell = amount
  }

  closeInvestModal(data: boolean): void {
    this.showinvestModal = data
  }

  openInvestModal(): void {
    this.showinvestModal = true
  }

}
