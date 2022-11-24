import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Selectors */
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

/* Interfaces */
import { AppStateInterface } from '../types/app-state-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private route: Router,
    private store: Store<AppStateInterface>
  ) { }

  // For home route

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      console.log('Auth Guard')
      return this.store.pipe(
        select(isLoggedInSelector as any),
        // isLoggedIn can be null, so we filter that out
        filter((isLoggedIn) => isLoggedIn != null),
        tap((isLoggedIn: boolean) => {
          if(!isLoggedIn) {
            this.route.navigate(['/login'])
          }
        })
      )
  }
  
}
