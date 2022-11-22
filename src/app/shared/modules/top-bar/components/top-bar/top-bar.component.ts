/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* Interfaces */
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

/* Store */
import { select, Store } from '@ngrx/store';

/* Selectors */
import { isLoggedInSelector, isAnonymousSelector, currentUserSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean | null>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(){
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
