import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successmodal',
  templateUrl: './successmodal.component.html',
  styleUrls: ['./successmodal.component.css']
})
export class SuccessmodalComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewProjects(){
    this.router.navigate(['/projects/home'])
  }

  continue(){
    this.router.navigate(['/investments','hgj'])
  }

}
