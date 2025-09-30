import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/UserService';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
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
    console.log('entered auth guard else')
    router.navigate(['/login'])
    return false;
  }

};
