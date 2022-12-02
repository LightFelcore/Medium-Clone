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
import { GetYourFeedResponseInterface } from 'src/app/your-feed/types/get-your-feed-response.interface';

/* Selectors */
import { dataYourFeedSelector, errorsYourFeedSelector, isLoadingYourFeedSelector } from 'src/app/your-feed/store/selectors';

/* Custom Actions */
import { getYourFeedAction } from 'src/app/your-feed/store/actions/get-your-feed.actions';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss']
})
export class YourFeedComponent implements OnInit {

  queryParamsSubscription: Subscription;

  currentPage: number;
  limit: number = environment.limit;
  
  apiYourArticlesFeedURL: string = '/articles/feed';
  
  isLoading$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>
  feedData$: Observable<GetYourFeedResponseInterface | null>
  totalArticlesCount$: Observable<GetYourFeedResponseInterface | null>;
  
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
    const parsedUrl = parseUrl(this.apiYourArticlesFeedURL)
    const stringifiedParams = stringify({
      limit: this.limit,
      offset: offset,
      ...parsedUrl.query
    })
    const apiUrlWithQureyParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getYourFeedAction({ url: apiUrlWithQureyParams }))
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingYourFeedSelector))
    this.errors$ = this.store.pipe(select(errorsYourFeedSelector))
    this.feedData$ = this.store.pipe(select(dataYourFeedSelector))
  }

  initializeListeners(){
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = params['page'] || 1;
      this.fetchData();
    })
  }

  
}
