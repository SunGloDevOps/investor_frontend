import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shareproject',
  templateUrl: './shareproject.component.html',
  styleUrls: ['./shareproject.component.css']
})
export class ShareprojectComponent implements OnInit {

  @Input() shareLink: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
