/* Standard Modules */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { deleteArticleAction, deleteArticleActionSuccess, deleteArticleActionFailure } from 'src/app/article/store/actions/delete-article.actions';

/* Services */
import { ArticleService } from 'src/app/article/services/article.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteArticleEffect {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) { }

  deleteArticleEffect$ = createEffect(() => this.actions$.pipe(
      ofType(deleteArticleAction),
      exhaustMap(({slug}) => {
        // wrapping the success action to an observable with pipe rxjs operator
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleActionSuccess()
          }),
          catchError((e) => {
            // wrapping the failure action to an observable with of rxjs operator
            return of(deleteArticleActionFailure(e))
          })
        )
      })
    )
  )

  // Whenever a user deletes an article, should be redirected to '/' page.
  redirectAfterArticleDelete$ = createEffect(
    () => this.actions$.pipe(
        ofType(deleteArticleActionSuccess),
        tap(() => {
            this.router.navigateByUrl('/')
        }),
    ),
    { dispatch: false }
  )

}
