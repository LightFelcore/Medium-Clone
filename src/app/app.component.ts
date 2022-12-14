/* Standard Modules */
import { Component, OnInit } from '@angular/core';

/* Store */
import { Store } from '@ngrx/store';

/* Custom Actions */
import { getCurrentUserAction } from 'src/app/auth/store/actions/get-current-user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(getCurrentUserAction())
  }
  
}