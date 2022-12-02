/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Custom Selectors */
import { isLoggedInAuthSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {

  @Input('tagName') tagNameProps: string;

  isLoggedIn$: Observable<boolean | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInAuthSelector))
  }

}
