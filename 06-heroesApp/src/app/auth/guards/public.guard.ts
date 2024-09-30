import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })

export class PublicGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  private checkLogin(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication()
      .pipe(
        tap(
          isAuthenticated => {
            if (isAuthenticated) this.router.navigate(['./'])
          }
        ),
        map(
          isAuthenticated => !isAuthenticated
        )
      )
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    // console.log('CanMatch');

    // console.log({route, segments});
    return this.checkLogin();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // console.log('CanActivated');
    // console.log({route, state});
    // throw new Error('Method not implemented.');
    return this.checkLogin();
  }



}
