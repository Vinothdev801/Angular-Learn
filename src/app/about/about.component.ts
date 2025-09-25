import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KebabCasePipe } from '../../pipes/kebabCase.pipe';

@Component({
  selector: 'app-about.component',
  standalone: true,
  imports: [CommonModule, KebabCasePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
dateon='hi av';
}
