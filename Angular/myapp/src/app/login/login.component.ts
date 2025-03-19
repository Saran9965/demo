import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    name: string = '';
    password: string = '';
  
    onSubmit() {
      console.log('Name:', this.name);
      console.log('Password:', this.password);
    }
  }
