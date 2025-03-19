import { Component } from '@angular/core';

@Component({
  selector: 'app-myfies',
  imports: [],
  templateUrl: './myfies.component.html',
  styleUrl: './myfies.component.css'
})
export class MyfiesComponent { 
  count = 0;

  inc() {
    this.count++;
  }
  
  dec() {
    if (this.count>0)
    this.count--;
  }
}
