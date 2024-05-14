import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {


  const authService = inject( AuthService );

  if( authService.authStatus() === AuthStatus.authenticated){
    return true;
  }

  const router = inject( Router );
  // const url = state.url;
  // localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login')

  return false;
};
