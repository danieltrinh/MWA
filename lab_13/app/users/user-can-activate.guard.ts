import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService} from '../data.service';

@Injectable()
export class UserCanActivateGuard implements CanActivate {
  
  constructor(private dataService : DataService, private router : Router)
  {

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next.params.id);
    if(this.dataService.validateUser(next.params.id))
    {
      return true;
    }
    else{
      this.router.navigate(['/error'])
      return false;
    }
  }
}
