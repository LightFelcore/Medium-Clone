/* Standard Modules */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Custom Components */
import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler.component';


@NgModule({
  declarations: [
    FeedTogglerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    FeedTogglerComponent
  ]
})
export class FeedTogglerModule { }
