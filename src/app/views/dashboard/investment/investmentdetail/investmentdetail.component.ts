import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';

@Component({
  selector: 'app-investmentdetail',
  templateUrl: './investmentdetail.component.html',
  styleUrls: ['./investmentdetail.component.css']
})
export class InvestmentdetailComponent implements OnInit {

  investment?: any;

  days_left: number = 0;

  progress: number = 0;

  showShareModal: boolean = false;

  //page loading status
  pageLoading: boolean = false;

  constructor(
    private investmentService: InvestmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.pageLoading = true;

    this.getInvestment()

    if(this.investment.project.start_date && this.investment.project.end_date){

      var time_difference = this.investment.project.start_date.getTime() - this.investment.project.end_date.getTime();

      var total_period = time_difference/(1000 * 60 * 60 * 24)

      var time_left = new Date().getTime() - this.investment.project.end_date.getTime();

      this.days_left = time_left / (1000 * 60 * 60 * 24)

      this.progress = (this.days_left/total_period)*100

    }else {
      this.progress = 0
    }

  }

  async getInvestment(): Promise<void> {

    const id = this.route.snapshot.params['id']

    this.investmentService.viewInvestment(id).subscribe(
      res => {
        this.investment = res.data
      },
      complete => {
        this.pageLoading = false
      }
    )
  }

  openShareModal(): void {
    this.showShareModal = true
  }

  closeShareModal(data: boolean): void {
    this.showShareModal = data
  }

  async reInvest(){
    this.router.navigate(['/projects', this.investment.project._id])
  }

}
