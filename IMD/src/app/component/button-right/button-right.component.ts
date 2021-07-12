import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-right',
  templateUrl: './button-right.component.html',
  styleUrls: ['./button-right.component.scss']
})
export class ButtonRightComponent implements OnInit {
  
  @Output() state = new EventEmitter<number>();


  constructor() { }


  ngOnInit(): void {
  }


  moveToRight(){   
      this.state.emit(1);
  }

 
}
