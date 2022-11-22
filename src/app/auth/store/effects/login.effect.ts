/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, concatMap, map, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { loginAction, loginActionFailure, loginActionSuccess } from 'src/app/auth/store/actions/login.action';

/* Services */
import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

/* Interfaces */
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) { }

  login$ = createEffect(() => this.actions$.pipe(
      ofType(loginAction),
      concatMap(({request}) => {
        // wrapping the success action to an observable with pipe rxjs operator
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return loginActionSuccess({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(
              loginActionFailure({
                errors: errorResponse.error.errors
              })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(loginActionSuccess),
      tap(() => {
        this.router.navigateByUrl('/');
      })
    ),
    { dispatch: false } // prevent dispatching and make Angular hang in an infinite loop
  )
}
