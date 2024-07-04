import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessNewsComponent } from './business-news/business-news.component';



@NgModule({
  declarations: [
    BusinessNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusinessNewsComponent
  ]
})
export class NewsModule { }
