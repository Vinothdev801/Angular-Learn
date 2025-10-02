import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { inject } from '@angular/core';
import { UserService } from '../services/UserService';
import { Form } from '../regForm/form';



export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const userService = inject(UserService);

  let isLoggedIn: boolean = false;

  userService.userName$.subscribe(name => {
    if(name) isLoggedIn = true;
  })

  if(isLoggedIn){
     return true;
  }

  else{
    router.navigate(['/login'])
    return false;
  }

};

 export const unsavedChangesGuard: CanDeactivateFn<Form> = (component: Form, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
   return component.checkChanges() ? component.notify() : true;
 }
