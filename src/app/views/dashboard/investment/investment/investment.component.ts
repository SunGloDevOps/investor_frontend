import { Component, OnInit } from '@angular/core';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  investments: any[] = []

  constructor(
    private investmentService: InvestmentService,
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    
  }

  getInvestments(): void {

    const user = this.userService.getUser()
    const id: string = user.indexOf.toString()

    this.investmentService.getInvestments(id).subscribe(
      res => {
        this.investments = res.data
      }
    )
  }

}
