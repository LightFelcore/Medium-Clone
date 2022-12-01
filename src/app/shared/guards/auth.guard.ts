import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Selectors */
import { isLoggedInAuthSelector } from 'src/app/auth/store/selectors';

/* Interfaces */
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';

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
    return this.store.pipe(
      select(isLoggedInAuthSelector as any),
      // isLoggedIn can be null, so we filter that out
      filter((isLoggedIn) => isLoggedIn != null),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.route.navigate(['/login'])
          return false;
        }
        return true;
      })
    )
  }

}
