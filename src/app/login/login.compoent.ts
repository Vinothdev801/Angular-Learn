import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login.compoent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.compoent.html',
  styleUrl: './login.compoent.css'
})
export class LoginCompoent {
  email: String = '';
  password: String = '';
  errorMsg = '';

  constructor(private router: Router){
    const user=[{
      email: 'test@gmail.com',
      password: '1234',
    }]
    localStorage.setItem('users', JSON.stringify(user))
  }

  onSubmit() {

    if(this.email == '' || this.password == ''){
      this.errorMsg = 'all fields are required.'
    }
    else{
      this.login();
    }
  }

  login(){
    // get users form localStorage
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // check credentials is available in local
    const user = users.find(u => this.email === u.email && this.password === u.password);

    if(user){
      this.router.navigate(['/home'])
    }
    else{
      this.errorMsg = 'Invalid email or password.';
    }
  }

}
