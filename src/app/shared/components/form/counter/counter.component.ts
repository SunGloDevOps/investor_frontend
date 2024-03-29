import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  digit: number = 1;

  @Input() total_cells?: number;

  @Output() number = new EventEmitter<number>()


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  purchasedCells(value: number){
    this.number.emit(value)
  }

  decrease(){
    if(this.digit !== 1){
      this.digit--
      this.purchasedCells(this.digit)
    }
  }

  increase(){
    if(this.total_cells){
      if(this.digit < this.total_cells){
        
        this.digit++
        this.purchasedCells(this.digit)
      }
    }
  }

}
