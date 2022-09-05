import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intevestmentcard',
  templateUrl: './intevestmentcard.component.html',
  styleUrls: ['./intevestmentcard.component.css']
})
export class IntevestmentcardComponent implements OnInit {

  @Input() id?: string;

  @Input() title?: string;

  @Input() cost?: number;

  @Input() ngn: string = "0.0";

  @Input() start_date?: Date;

  @Input() end_date?: Date

  @Input() progress: number = 100

  @Input() availability?: string;

  link?: string;

  days_left?: number;

  constructor(private router: Router) { }

  ngOnInit(): void {

    if(this.start_date && this.end_date){

      var time_difference = this.start_date.getTime() - this.end_date.getTime();

      var total_period = time_difference/(1000 * 60 * 60 * 24)

      var time_left = new Date().getTime() - this.end_date.getTime();

      this.days_left = time_left / (1000 * 60 * 60 * 24)

      this.progress = (this.days_left/total_period)*100

    }else {
      this.progress = 0
    }
    //setting investment card links
    this.link = "/app/investments/"+this.id
  }

  viewDetails(){
    this.router.navigate(['/investments', this.id]);
  }

}
