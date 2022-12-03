/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, map, Observable, Subscription } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Custom Actions */
import { getArticleAction } from 'src/app/article/store/actions/get-article.actions';
import { deleteArticleAction } from 'src/app/article/store/actions/delete-article.actions';

/* Interfaces */
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

/* Selectors */
import { dataArticleSelector, errorsArticleSelector, isLoadingArticleSelector } from 'src/app/article/store/selectors';
import { currentUserAuthSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<ArticlesInterface | null>;
  
  // Article properties
  slugFromUrl: string;
  isAuthor$: Observable<boolean>;

  // Article state properties
  isLoading$: Observable<boolean>;
  errors$: Observable<BackendErrorsInterface | null>;
  
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData()
  }

  initializeValues(): void {
    this.slugFromUrl = this.route.snapshot.paramMap.get('slug') as string;
    
    // Initialize state values
    this.article$ = this.store.pipe(select(dataArticleSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingArticleSelector));
    this.errors$ = this.store.pipe(select(errorsArticleSelector));

    // Determine isAuthor$ of an article. Combine latest returns an array
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(dataArticleSelector)),
      this.store.pipe(select(currentUserAuthSelector))
    ]).pipe(map(([article, currentUser]: [ArticlesInterface | null, CurrentUserInterface | null]) => {
        if(!article || !currentUser) return false;
        return currentUser.username === article.author.username;
    }))
  }

  initializeListeners() {
    this.route.params.subscribe((params: Params) => {
      this.slugFromUrl = params['slug'];
    })
      
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slugFromUrl}));
  }

  deleteArticle(){
    this.store.dispatch(deleteArticleAction({slug: this.slugFromUrl}))
  }

}
