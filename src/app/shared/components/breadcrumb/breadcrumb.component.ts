import { Component, OnInit, Input } from '@angular/core';
import { page } from '../../models/Pages';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() pagetitle: page;

  @Input() routings: page[];

  constructor() { }

  ngOnInit(): void {
  }

}

