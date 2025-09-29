import { Component } from '@angular/core';
import { SampleSubject } from '../SubjectExample';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contact.component',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 constructor(){const sample = new SampleSubject(); sample.emitValue(10)}

}
