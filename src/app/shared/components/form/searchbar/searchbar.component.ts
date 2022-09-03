import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() show?: boolean;

  @Input() project: boolean = false;

  @Input() investment: boolean = false;

  searchKeyword = this.fb.group({
    keyword: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  //onSubmit
  search(){

    const keyword = this.searchKeyword.controls['keyword'].value.toString().trim()

    if(this.investment === true){
      this.router.navigate(['/app/investments/search/', keyword])
    }

    if(this.project === true){
      this.router.navigate(['/app/projects/search/', keyword])
    }
  }



}
