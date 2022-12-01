/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { getGlobalFeedAction, getGlobalFeedActionSuccess, getGlobalFeedActionFailure } from 'src/app/global-feed/store/actions/get-global-feed.actions';

/* Services */
import { GlobalFeedService } from 'src/app/global-feed/services/global-feed.service';
import { SharedService } from 'src/app/shared/services/shared.service';

/* Interfaces */
import { GetGlobalFeedResponseInterface } from 'src/app/global-feed/types/get-global-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetGlobalFeedEffect {

  constructor(
    private actions$: Actions,
    private globalFeedService: GlobalFeedService,
    private sharedService: SharedService
  ) { }

  getGlobalFeedEffect$ = createEffect(() => this.actions$.pipe(
      ofType(getGlobalFeedAction),
      exhaustMap(({url}) => {
        // wrapping the success action to an observable with pipe rxjs operator
        return this.globalFeedService.getGlobalFeed(url).pipe(
          map((globalFeed: GetGlobalFeedResponseInterface) => {
            // Send global feed state to feed level - child component
            this.sharedService.setGlobalFeedState(globalFeed);
            return getGlobalFeedActionSuccess({globalFeed})
          }),
          catchError((e) => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(getGlobalFeedActionFailure(e))
          })
        )
      })
    )
  )

}
