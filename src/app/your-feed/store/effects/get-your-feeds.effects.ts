/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { getYourFeedAction, getYourFeedActionSuccess, getYourFeedActionFailure } from 'src/app/your-feed/store/actions/get-your-feed.actions';

/* Services */
import { YourFeedService } from 'src/app/your-feed/services/your-feed.service';
import { SharedService } from 'src/app/shared/services/shared.service';

/* Interfaces */
import { GetYourFeedResponseInterface } from 'src/app/your-feed/types/get-your-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetYourFeedEffect {

  constructor(
    private actions$: Actions,
    private yourFeedService: YourFeedService,
    private sharedService: SharedService
  ) { }

  getYourFeedEffect$ = createEffect(() => this.actions$.pipe(
      ofType(getYourFeedAction),
      exhaustMap(({url}) => {
        // wrapping the success action to an observable with pipe rxjs operator
        return this.yourFeedService.getYourFeed(url).pipe(
          map((yourFeed: GetYourFeedResponseInterface) => {
            // Send your feed state to feed level - child component
            this.sharedService.setYourFeedState(yourFeed);
            return getYourFeedActionSuccess({yourFeed})
          }),
          catchError((e) => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(getYourFeedActionFailure(e))
          })
        )
      })
    )
  )

}
