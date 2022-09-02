import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {

  @Input() title?: string;

  @Input() description?: string;

  @Input() cost?: string;

  @Input() id?: string;

  @Input() thumbnail?: string;

  @Input() status?: string;

  value?: string;

  shareLink?: string;

  showShareModal: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.value = "~ USD " + this.cost ;
    this.shareLink = `https://sunglo.io/products/${this.title}`
  }

  viewDetail(): void {
    this.router.navigate(['/app/projects/', this.id])
  }

  closeShareModal(data: boolean): void {
    this.showShareModal = data
  }

  openShareModal(): void {
    this.showShareModal = true
  }

}
