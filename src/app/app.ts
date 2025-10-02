import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example } from './example';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet /*, Example */],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo_app');

}
