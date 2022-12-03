/* Standard Modules */
import { Injectable } from '@angular/core';
import { catchError, concatMap, map, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

/* Store */
import { createEffect, Actions, ofType } from '@ngrx/effects';

/* Custom Actions */
import { createArticleAction, createArticleActionSuccess, createArticleActionFailure } from 'src/app/create-article/store/actions/create-articles.actions';

/* Services */
import { CreateArticleService } from 'src/app/create-article/services/create-article.service';

/* Interfaces */
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleEffect {

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) { }

  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleAction),
    concatMap(({ articleInput }) => {
      console.log(articleInput)
      // wrapping the success action to an observable with pipe rxjs operator
      return this.createArticleService.createArticle(articleInput).pipe(
        map((article: ArticlesInterface) => {
          return createArticleActionSuccess({ article })
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          console.log(errorResponse.error)
          // wrapping the failure action to an observable with of rxjs operator
          return of(createArticleActionFailure({ errors: errorResponse.error.errors })
          )
        })
      )
    })
  )
  )

  redirectAfterCreateArticle$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleActionSuccess),
    tap(({ article }) => {
      this.router.navigate(['/articles', article.slug]);
    })
  ),
    { dispatch: false } // prevent dispatching and make Angular hang in an infinite loop
  )
}
