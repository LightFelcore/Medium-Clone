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
export class NotAuthGuard implements CanActivate {

  constructor(
    private route: Router,
    private store: Store<AppStateInterface>
  ) { }

  // For login and register routes

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedInAuthSelector as any),
      // isLoggedIn can be null, so we filter that out
      filter((isLoggedIn) => isLoggedIn != null),
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.route.navigate(['/']);
          return false;
        }
        return true;
      })
    )
  }

}
