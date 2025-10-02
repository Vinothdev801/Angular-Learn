import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KebabCasePipe } from '../pipes/kebabCase.pipe';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-about.component',
  standalone: true,
  imports: [CommonModule, KebabCasePipe, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  dateon = 'hi av';
}
