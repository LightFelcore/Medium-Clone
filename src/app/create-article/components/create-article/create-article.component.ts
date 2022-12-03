/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

/* Custom Interfaces */
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

/* Custom Selectors */
import { isSubmittingCreateArticleSelector, validationErrorsCreateArticleSelector } from 'src/app/create-article/store/selectors';

/* Custom Actions */
import { createArticleAction } from 'src/app/create-article/store/actions/create-articles.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingCreateArticleSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsCreateArticleSelector));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
