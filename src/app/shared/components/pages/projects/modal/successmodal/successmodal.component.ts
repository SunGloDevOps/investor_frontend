import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successmodal',
  templateUrl: './successmodal.component.html',
  styleUrls: ['./successmodal.component.css']
})
export class SuccessmodalComponent implements OnInit {

  @Input() leftBtn?: string;
  @Input() rightBtn?: string;
  @Input() text?: string;
  @Input() leftRoute: any[] = [];
  @Input() rightRoute: any[] = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewProjects(){
    this.router.navigate(this.leftRoute)
  }

  continue(){
    this.router.navigate(this.rightRoute)
  }

}
