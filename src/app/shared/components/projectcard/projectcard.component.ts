import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {

  @Input() title: string = "Untitled Project";

  @Input() description: string = "No description provided";

  @Input() cost: string = "0.0";

  @Input() id: string = "jvufhviufhuubiuh biubf"

  value: string = "~ USD " + this.cost;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewDetail(id: string): void {
    this.router.navigate(['/app/projects/', id])
  }

}
