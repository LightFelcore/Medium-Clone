/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

/* Query-String library */
import { stringify, parseUrl } from 'query-string';

/* Store */
import { select, Store } from '@ngrx/store';

/* Interfaces */
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { GetGlobalFeedResponseInterface } from 'src/app/global-feed/types/get-global-feed-response.interface';

/* Selectors */
import { dataGlobalFeedSelector, errorsGlobalFeedSelector, isLoadingGlobalFeedSelector } from 'src/app/global-feed/store/selectors';

/* Custom Actions */
import { getGlobalFeedAction } from 'src/app/global-feed/store/actions/get-global-feed.actions';

/* Services */
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {

  queryParamsSubscription: Subscription;

  currentPage: number;
  limit: number = environment.limit;
  
  apiArticlesURL: string = '/articles';
  
  isLoading$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>
  feedData$: Observable<GetGlobalFeedResponseInterface | null>
  totalArticlesCount$: Observable<GetGlobalFeedResponseInterface | null>;
  
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private sharedService: SharedService,
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
    const parsedUrl = parseUrl(this.apiArticlesURL)
    const stringifiedParams = stringify({
      limit: this.limit,
      offset: offset,
      ...parsedUrl.query
    })
    const apiUrlWithQureyParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getGlobalFeedAction({ url: apiUrlWithQureyParams }))
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingGlobalFeedSelector))
    this.errors$ = this.store.pipe(select(errorsGlobalFeedSelector))
    this.feedData$ = this.store.pipe(select(dataGlobalFeedSelector))
  }

  initializeListeners(){
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = params['page'] || 1;
      this.fetchData();
    })
  }

  
}
