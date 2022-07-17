import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/repositories/modals/modal.service';
import { ModalcontainerComponent } from '../../modals/modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-modalcard',
  templateUrl: './modalcard.component.html',
  styleUrls: ['./modalcard.component.css']
})
export class ModalcardComponent implements OnInit  {

  @Input() title: string = "Untitled Modal";

  @Output() close = new EventEmitter();
  
  constructor(
    private modalService: ModalService
  ) {
   
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.close.emit(false)
  }

}
