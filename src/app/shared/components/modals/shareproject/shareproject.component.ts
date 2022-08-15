import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-shareproject',
  templateUrl: './shareproject.component.html',
  styleUrls: ['./shareproject.component.css']
})
export class ShareprojectComponent implements OnInit {

  @Input() shareLink?: string;

  linkForm = this.fb.group({
    link: [' ']
  })

  constructor(
    private fb: FormBuilder,
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
    this.linkForm.controls['link'].setValue({
      link: this.shareLink
    })
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.linkForm.controls['link'].value)
  }

}
