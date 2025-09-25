import { Component } from '@angular/core';
import { HighlightDirective } from '../../HighlightDirective';


@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
 istrue: boolean = false;
  color=''

  show(){
   // alert('hello event trigged.')
   
   this.istrue = confirm('enter name')
  }
}
