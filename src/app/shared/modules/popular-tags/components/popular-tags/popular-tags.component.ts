/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Custom Actions */
import { getPopularTagsAction } from 'src/app/shared/modules/popular-tags/store/actions/get-popular-tags.action';

/* Selectors */
import { isLoadingPopularTagsSelector, errorPopularTagsSelector, dataPopularTagsSelector } from 'src/app/shared/modules/popular-tags/store/selectors';

/* Custom Types */
import { PopularTagType } from 'src/app/shared/types/popular-tags.type';

/* Custom Interfaces */
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  isLoading$: Observable<boolean>;
  errors$: Observable<BackendErrorsInterface | null>;
  popularTagsData$: Observable<PopularTagType[] | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.isLoading$ = of(false)
    this.errors$ = of(null);
    this.popularTagsData$ = of(null);
  }
  
  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingPopularTagsSelector))
    this.errors$ = this.store.pipe(select(errorPopularTagsSelector))
    this.popularTagsData$ = this.store.pipe(select(dataPopularTagsSelector))
  }

}
