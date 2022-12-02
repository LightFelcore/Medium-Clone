/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { getTagFeedAction, getTagFeedActionSuccess, getTagFeedActionFailure } from 'src/app/tag-feed/store/actions/get-tag-feed.actions';

/* Services */
import { TagFeedService } from 'src/app/tag-feed/services/tag-feed.service';
import { SharedService } from 'src/app/shared/services/shared.service';

/* Interfaces */
import { GetTagFeedResponseInterface } from 'src/app/tag-feed/types/get-tag-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetTagFeedEffect {

  constructor(
    private actions$: Actions,
    private tagFeedService: TagFeedService,
    private sharedService: SharedService
  ) { }

  getTagFeedEffect$ = createEffect(() => this.actions$.pipe(
      ofType(getTagFeedAction),
      exhaustMap(({url}) => {
        // wrapping the success action to an observable with pipe rxjs operator
        return this.tagFeedService.getTagFeed(url).pipe(
          map((tagFeed: GetTagFeedResponseInterface) => {
            // Send tag feed state to feed level - child component
            this.sharedService.setTagFeedState(tagFeed);
            return getTagFeedActionSuccess({tagFeed})
          }),
          catchError((e) => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(getTagFeedActionFailure(e))
          })
        )
      })
    )
  )

}
