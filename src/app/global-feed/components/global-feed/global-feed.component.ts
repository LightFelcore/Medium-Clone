/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Selectors */
import { isLoadingFeedSelector } from 'src/app/shared/modules/feed/store/selector';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {

  apiUrl: string = '/articles'
  isFeedLoading$: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.isFeedLoading$ = this.store.pipe(select(isLoadingFeedSelector))
  }

}
