/* Standard Components */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Custom Components */
import { BannerComponent } from 'src/app/shared/modules/banner/components/banner/banner.component';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
