/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { getPopularTagsAction, getPopularTagsActionSuccess, getPopularTagsActionFailure } from 'src/app/shared/modules/popular-tags/store/actions/get-popular-tags.action';

/* Services */
import { PopularTagsService } from 'src/app/shared/modules/popular-tags/services/popular-tags.service';

/* Types */
import { PopularTagType } from 'src/app/shared/types/popular-tags.type';

@Injectable({
  providedIn: 'root'
})
export class GetPopularTagsEffect {

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) { }

  getPopularTagsEffect$ = createEffect(() => this.actions$.pipe(
      ofType(getPopularTagsAction),
      exhaustMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsActionSuccess({popularTags})
          }),
          catchError((e) => {
            return of(getPopularTagsActionFailure(e))
          })
        )
      })
    )
  )

}
