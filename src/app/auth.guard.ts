import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from './admin/services/auth.service';

export const authGuardContractor: CanActivateFn = (route, state) => {
  if(inject(AuthService).session && inject(AuthService).role === 'CONTRACTOR'){
    return true;
  }
  inject(Router).navigateByUrl('/login')
  return false;
};

export const authGuardSubContractor: CanActivateFn = (route, state) => {
if(inject(AuthService).session && inject(AuthService).role === 'SUBCONTRACTOR'){
    return true;
  }
  inject(Router).navigateByUrl('/')
  return false;
};
