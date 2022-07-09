import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  @Input() label?: string;

  @Input() verifiedlabel?: string;

  @Input() isVerified: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
