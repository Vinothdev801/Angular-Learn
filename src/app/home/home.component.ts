import { Subject } from 'rxjs';
import { Component, inject, Inject, Input } from '@angular/core';
import { HighlightDirective } from '../../HighlightDirective';
import { Api } from '../services/apiService';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SampleSubject } from '../SubjectExample';



@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [HighlightDirective, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  @Input() parentMsg: string=''

  api = inject(Api);

  data: any = [];

  private sub = new SampleSubject();
  constructor(){
    this.sub.sample.subscribe(value => {
      console.log("new subscriber", value);
    })

    this.sub.emitValue(12);
  }



  show(){
   this.api.getAllData().subscribe(data =>
    this.data = data
  );

  }
}
