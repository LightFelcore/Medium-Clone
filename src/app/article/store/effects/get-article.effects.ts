/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { getArticleAction, getArticleActionSuccess, getArticleActionFailure } from 'src/app/article/store/actions/get-article.actions';

/* Services */
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';

/* Interfaces */
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

@Injectable({
  providedIn: 'root'
})
export class GetArticleEffect {

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) { }

  getArticleEffect$ = createEffect(() => this.actions$.pipe(
      ofType(getArticleAction),
      exhaustMap(({slug}) => {
        // wrapping the success action to an observable with pipe rxjs operator
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticlesInterface) => {
            return getArticleActionSuccess({article})
          }),
          catchError((e) => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(getArticleActionFailure(e))
          })
        )
      })
    )
  )

}
