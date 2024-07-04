import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from 'src/reducers/newsReducer/news.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from 'src/effects/fetch-news/fetch-news.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewsModule } from './news/news.module';
import { NavigationModule } from './navigation/navigation.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SportsComponent } from './sports/sports.component';
import { sportsReducer } from '../reducers/sportsReducer/sports.reducer';
import { SportsNewsEffects } from 'src/effects/fetch-news/fetch-sports-news.effects';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NewsModule,
    NavigationModule,
    DashboardModule,
    StoreModule.forRoot({
      data: newsReducer,
      sports: sportsReducer
    }),
    EffectsModule.forRoot(
      [DataEffects, SportsNewsEffects]
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // retains last 25 states,
      logOnly: !isDevMode()
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
