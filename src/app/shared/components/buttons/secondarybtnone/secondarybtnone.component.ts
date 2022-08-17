import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondarybtnone',
  templateUrl: './secondarybtnone.component.html',
  styleUrls: ['./secondarybtnone.component.css']
})
export class SecondarybtnoneComponent implements OnInit {

  @Input() label?: string;

  @Input() icon?: string;

  @Input() fullwidth?: boolean;

  @Input() size1?: boolean;

  @Input() size2?: boolean;

  @Input() size3?: boolean;

  @Input() notLoading: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
