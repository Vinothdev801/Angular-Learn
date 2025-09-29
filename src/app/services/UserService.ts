import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService{

 private userNameSubject = new BehaviorSubject<string | any>('');
 userName$ = this.userNameSubject.asObservable();

 updateUserName(name: string | any){
  this.userNameSubject.next(name);
 }
}
