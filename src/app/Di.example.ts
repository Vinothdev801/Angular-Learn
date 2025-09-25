import { Injectable, InjectionToken } from "@angular/core";

@Injectable({ providedIn:'root' })
export class MyService{
    count: number = 0;

    increment(){
        this.count++;
    }

    decrement(){
        this.count--;
    }

    reset(){
        this.count = 0;
    }
}

