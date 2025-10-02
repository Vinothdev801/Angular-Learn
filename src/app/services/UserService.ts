import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService{

 constructor(private router: Router){}

 private userNameSubject = new BehaviorSubject<string>('');
 userName$ = this.userNameSubject.asObservable();

 updateUserName(name: string){
  this.userNameSubject.next(name);
 }

 reset(){
  this.userNameSubject.next('');
  this.router.navigate(['/login'])
 }
}
