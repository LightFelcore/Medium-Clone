/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/get-feed.actions';

/* Interfaces */
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface';

/* Selectors */
import { dataFeedSelector, errorsFeedSelector, isLoadingFeedSelector } from 'src/app/shared/modules/feed/store/selector';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>
  feedData$: Observable<GetFeedResponseInterface | null>

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }
  
  ngAfterViewInit(): void {

  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingFeedSelector))
    this.errors$ = this.store.pipe(select(errorsFeedSelector))
    this.feedData$ = this.store.pipe(select(dataFeedSelector))
  }
}
