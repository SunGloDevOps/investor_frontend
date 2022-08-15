import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-primarybtnone',
  templateUrl: './primarybtnone.component.html',
  styleUrls: ['./primarybtnone.component.css']
})
export class PrimarybtnoneComponent implements OnInit {
  
  @Input() label?: string;

  @Input() icon?: string;

  @Input() fullwidth?: boolean;

  @Input() size1?: boolean;

  @Input() size2?: boolean;

  @Input() size3?: boolean;

  @Input() disabled?: boolean;

  @Input() notLoading: boolean = false

  constructor() {
 
  }

  ngOnInit(): void {
  }

}
