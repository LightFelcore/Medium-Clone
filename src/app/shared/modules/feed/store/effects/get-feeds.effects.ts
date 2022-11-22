/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { getFeedAction, getFeedActionSuccess, getFeedActionFailure } from 'src/app/shared/modules/feed/store/actions/get-feed.actions';

/* Services */
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';

/* Interfaces */
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetFeedEffect {

  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) { }


    // 19.45



  getFeedEffect$ = createEffect(() => this.actions$.pipe(
      ofType(getFeedAction),
      exhaustMap(({url}) => {
        // wrapping the success action to an observable with pipe rxjs operator
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedActionSuccess({feed})
          }),
          catchError((e) => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(getFeedActionFailure(e))
          })
        )
      })
    )
  )

}
