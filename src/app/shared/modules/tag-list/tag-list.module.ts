/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Custom Components */
import { TagListComponent } from './components/tag-list/tag-list.component';



@NgModule({
  declarations: [
    TagListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TagListComponent
  ]
})
export class TagListModule { }
