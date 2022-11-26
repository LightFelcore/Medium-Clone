/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* Interfaces */
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

/* Store */
import { select, Store } from '@ngrx/store';

/* Selectors */
import { isLoggedInAuthSelector, isAnonymousAuthSelector, currentUserAuthSelector } from 'src/app/auth/store/selectors';

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
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInAuthSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousAuthSelector));
    this.currentUser$ = this.store.pipe(select(currentUserAuthSelector));
  }

}
