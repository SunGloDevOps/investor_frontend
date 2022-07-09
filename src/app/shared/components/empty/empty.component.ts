import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  @Input() label?: string;

  @Input() buttonLabel?: string;

  @Input() image?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
