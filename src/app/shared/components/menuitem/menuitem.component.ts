import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input() label?: string;

  @Input() icon?: string;

  path: string = "../../../../assets/images/icons/";

  @Input() url?: string;

  @Input() mobile?: boolean;

  constructor() { }

  ngOnInit(): void {
    
  }

}
