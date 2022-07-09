import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modals/modal.service';
import { ModalcontainerComponent } from '../../modals/modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-modalcard',
  templateUrl: './modalcard.component.html',
  styleUrls: ['./modalcard.component.css']
})
export class ModalcardComponent implements OnInit  {

  @Input() title: string = "Untitled Modal";

  @Input() close: any;

  modal: ModalcontainerComponent = new ModalcontainerComponent(this.modalService);
  
  constructor(
    private modalService: ModalService
  ) {
   
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modal.show = false
  }

}
