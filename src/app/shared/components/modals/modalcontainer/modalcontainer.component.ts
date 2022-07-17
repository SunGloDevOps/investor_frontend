import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/repositories/modals/modal.service';
@Component({
  selector: 'app-modalcontainer',
  templateUrl: './modalcontainer.component.html',
  styleUrls: ['./modalcontainer.component.css']
})
export class ModalcontainerComponent implements OnInit {

  @Input() show?: boolean;

  @Input() position?: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  
  }



  

}
