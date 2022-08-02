import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/repositories/modals/modal.service';
@Component({
  selector: 'app-modalcontainer',
  templateUrl: './modalcontainer.component.html',
  styleUrls: ['./modalcontainer.component.css'],
  animations: [
    trigger('fade', [
      transition('* -> void', [
        style({opacity: 0}),
        animate(2000, style({opacity: 1, backgroundColor: 'red'}))
      ])
    ])
  ]
})
export class ModalcontainerComponent implements OnInit {

  @Input() show?: boolean;

  @Input() position?: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  
  }



  

}
