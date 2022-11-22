/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Components */
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
