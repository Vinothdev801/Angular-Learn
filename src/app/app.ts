import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Counter } from './counter/counter';
import { ContactComponent } from "./contact/contact.component";
import { Example } from './example';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Example],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo_app');

}
