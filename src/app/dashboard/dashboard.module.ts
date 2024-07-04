import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsModule } from '../news/news.module';
import { NavigationModule } from '../navigation/navigation.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NewsModule,
    NavigationModule
  ]
})
export class DashboardModule { }
