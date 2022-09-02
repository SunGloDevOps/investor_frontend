import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IProjects from 'src/app/models/Projects/IProject';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';
import { WalletService } from 'src/app/repositories/wallet/wallet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects: IProjects[] = [];

  //current user detail
  user?: any;

  bank_balance: number = 0;

  crypto_balance: number = 0;

  total_cells: number = 0;

  total_projects: number = 0;

  pageLoading: boolean = false;

  constructor(
    private router: Router,
    private projectService: ProjectsService,
    private investmentService: InvestmentService,
    private walletService: WalletService,
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    this.pageLoading = true;
    this.getProjects();
    this.user = this.userService.getUser();
    this.getWalletDetails(this.user.id)
    this.getInvestmentDetails(this.user.id)
  }

  gotoWallet(): void {
    this.router.navigate(['/app/wallet/home'])
  }

  gotoProfile(): void {
    this.router.navigate(['/app/user/profile'])
  }

  gotoProjects(): void {
    this.router.navigate(['/app/projects/home'])
  }

  getProjects(): void {
    this.projectService.getAllProject().subscribe(
      res => {
          res.data.map((project: any)=> {
            if(project.availability === "Now Available"){
              this.projects.push(project)
            }
          })
      }
    )
  }

  getWalletDetails(id: string): void {
    this.walletService.getWalletDetails(id).subscribe(
      res => {
        this.bank_balance = res.data.wallet.bank_balance;
        this.crypto_balance = res.data.wallet.crypto_balance;
        console.log(res.data)
      }
    )
  }

  getInvestmentDetails(id: string): void {
    this.investmentService.getInvestments(id).subscribe(
      res => {
        let cells = 0;
        res.data.map((investment: any)=>{  
            this.total_projects++ 
            cells =+ investment.total_cell
        })
        this.total_cells = cells
        this.pageLoading = false
      }
    )
  }

}
