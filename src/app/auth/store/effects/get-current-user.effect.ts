/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { getCurrentUserAction, getCurrentUserActionFailure, getCurrentUserActionSuccess } from 'src/app/auth/store/actions/get-current-user.action';

/* Services */
import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

/* Interfaces */
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentUserEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) { }

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
      ofType(getCurrentUserAction),
      exhaustMap(() => {

        // Return a failure in case of missing accessToken in localStorage
        if(!this.persistanceService.get('accessToken')) return of(getCurrentUserActionFailure());

        // wrapping the success action to an observable with pipe rxjs operator
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserActionSuccess({currentUser})
          }),
          catchError(() => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(getCurrentUserActionFailure())
          })
        )
      })
    )
  )

}
