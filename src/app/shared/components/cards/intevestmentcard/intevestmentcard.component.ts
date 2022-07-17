import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intevestmentcard',
  templateUrl: './intevestmentcard.component.html',
  styleUrls: ['./intevestmentcard.component.css']
})
export class IntevestmentcardComponent implements OnInit {

  @Input() title?: string;

  @Input() cost?: number;

  @Input() ngn: string = "0.0";

  @Input() days: string = "0";

  @Input() progress: string = "100"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails(){
    this.router.navigate(['i']);
  }

}
