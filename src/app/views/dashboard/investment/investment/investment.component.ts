import { Component, OnInit } from '@angular/core';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  investments: any[] = [];

  user?: any;

  money_invested: number = 0;

  active_investment: number = 0;

  completed_investment: number = 0;

  //current loading status of page
  pageLoading: boolean = false;

  constructor(
    private investmentService: InvestmentService,
    private projectService: ProjectsService,
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    this.user =  this.userService.getUser()
    this.getInvestments()
    this.pageLoading = true;
  }

  getInvestments(): void {

    this.investmentService.getInvestments(this.user.id).subscribe(
      res => {
        this.investments = res.data;
        this.investments.map((e)=>{ this.money_invested += e.capital})

        const completed = this.investments.filter((e)=>{

          var time_left = new Date().getTime() - e.end_date.getTime();

          let days_left = time_left / (1000 * 60 * 60 * 24)

          return days_left <= 0
        })

        this.completed_investment = completed.length

        const active = this.investments.filter((e)=>{

          var time_left = new Date().getTime() - e.end_date.getTime();

          let days_left = time_left / (1000 * 60 * 60 * 24)

          return days_left > 0
        })

        this.completed_investment = active.length

      },
      complete => {
        this.pageLoading = false
      }
    )
  }

  getProjects(id: string): void {
    this.projectService.getProject(id).subscribe(
      res => {
        return res
      }
    )
  }

}
