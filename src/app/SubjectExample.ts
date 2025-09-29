import { Subject } from "rxjs";

export class SampleSubject{
  public sample = new Subject<number>();

  constructor(){
    this.sample.subscribe( value => {
      console.log('observer 1', value);
    })

    this.sample.subscribe(value => console.log('observer 2', value));
  }

  emitValue(value: number){
    this.sample.next(value);
  }

}
