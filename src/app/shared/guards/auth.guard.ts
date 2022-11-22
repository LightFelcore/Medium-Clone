import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.store.pipe(
        select(isLoggedInSelector as any),
        tap((isLoggedIn: boolean) => {
          if(isLoggedIn === false) {
            this.route.navigateByUrl('/login');
          }
        })
      )
  }
  
}
