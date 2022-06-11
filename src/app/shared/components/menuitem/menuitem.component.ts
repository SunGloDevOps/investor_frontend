import { Component, OnInit, Input } from '@angular/core';


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
