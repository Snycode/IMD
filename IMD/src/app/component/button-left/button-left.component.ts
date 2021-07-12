import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-left',
  templateUrl: './button-left.component.html',
  styleUrls: ['./button-left.component.scss']
})
export class ButtonLeftComponent implements OnInit {

  @Output() state = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  moveToLeft(){ 
      this.state.emit(0);
}
  

}
