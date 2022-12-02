/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

/* Query-String library */
import { stringify, parseUrl } from 'query-string';

/* Store */
import { select, Store } from '@ngrx/store';

/* Interfaces */
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { GetTagFeedResponseInterface } from 'src/app/tag-feed/types/get-tag-feed-response.interface';

/* Selectors */
import { dataTagFeedSelector, errorsTagFeedSelector, isLoadingTagFeedSelector } from 'src/app/tag-feed/store/selectors';

/* Custom Actions */
import { getTagFeedAction } from 'src/app/tag-feed/store/actions/get-tag-feed.actions';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit {

  queryParamsSubscription: Subscription;

  currentPage: number;
  limit: number = environment.limit;

  tagName: string;
  apiTagArticlesFeedURL: string;

  isLoading$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>
  feedData$: Observable<GetTagFeedResponseInterface | null>
  totalArticlesCount$: Observable<GetTagFeedResponseInterface | null>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }

  fetchData(): void {
    // Pass query params to url for pagination
    const offset = (this.currentPage * this.limit) - this.limit;
    const parsedUrl = parseUrl(this.apiTagArticlesFeedURL)
    const stringifiedParams = stringify({
      limit: this.limit,
      offset: offset,
      ...parsedUrl.query
    })
    const apiUrlWithQureyParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getTagFeedAction({ url: apiUrlWithQureyParams }))
  }

  initializeValues(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug') as string;
    this.apiTagArticlesFeedURL = `/articles?tag=${this.tagName}`;
    this.isLoading$ = this.store.pipe(select(isLoadingTagFeedSelector))
    this.errors$ = this.store.pipe(select(errorsTagFeedSelector))
    this.feedData$ = this.store.pipe(select(dataTagFeedSelector))
  }

  initializeListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = params['page'] || 1;
      this.fetchData();
    })

    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'] as string
      this.apiTagArticlesFeedURL = `/articles?tag=${this.tagName}`;
      this.fetchData();
    })
  }




}
