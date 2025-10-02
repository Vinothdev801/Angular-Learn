import { CommonModule } from '@angular/common';
import { UserService } from './../services/UserService';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName: string = '';
  showMenu: boolean = false;

  constructor(private userService: UserService){
    this.userService.userName$.subscribe( name => {
      this.userName = name;
    })
  }

  toggleMenu(){
    console.log("entered toggle");
    
    this.showMenu = !this.showMenu;
  }

  logout(){
    this.userService.reset();
    
  }
}
