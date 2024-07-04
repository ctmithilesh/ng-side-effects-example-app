import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sports-news', component: SportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
