import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLocalAuth = !!localStorage.getItem("data");
    if (isLocalAuth) {
      this.router.navigateByUrl("");
      return false;
    } else {
      return true;
    }
  }

}
