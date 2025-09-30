import { CommonModule } from '@angular/common';
import { Component, ViewChild} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { User } from '../../User';
import { UserService } from '../services/UserService';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  // view child accessing navbar(here navbar is child.)
  @ViewChild(NavbarComponent)
  navbar!: NavbarComponent;

  email: String = '';
  password: String = '';
  errorMsg = '';

  constructor(private router: Router, private userService: UserService){
    // const user=[
    //   {
    //     name: 'Rabi',
    //     email: 'test@gmail.com',
    //     password: '1234',
    //   },
    //   {
    //     name: 'Sang',
    //     email: 'Sangking@gmail.com',
    //     password: 'Sang@123',
    //   }
    // ]
    // localStorage.setItem('users', JSON.stringify(user))
  }

  ngAfterViewInit(){
    if(this.navbar)
      console.log(this.navbar);
    else
      console.log('Navbar is not accessed.');

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
      this.userService.updateUserName(user.name);
      this.router.navigate(['/home'])
    }
    else{
      this.errorMsg = 'Invalid email or password.';
    }
  }

}
