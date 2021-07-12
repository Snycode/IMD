import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IMD';
  state = 1;


  changeBackgroudColor(action:number){
    debugger;
    if(action === 0){
      this.state = (this.state===1) ? this.state : this.state -1;      
    }
  
    else{
      this.state = (this.state === 3) ? this.state: this.state +1;
    }
    
  }

}
