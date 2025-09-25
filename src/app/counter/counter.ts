import { Component, inject } from '@angular/core';
import { MyService } from '../services/Di.example';



@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  //constructor(public service: MyService){}
  // or
  public service = inject(MyService);


}

