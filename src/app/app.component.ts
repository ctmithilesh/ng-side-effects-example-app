import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from 'src/actions/fetch-news/fetch-news.action';
import { DataState } from 'src/reducers/newsReducer/news.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ng-side-effects-example-app';

  data$: Observable<any>
  loading$: Observable<boolean>
  error$: Observable<any>

  constructor(private store: Store<{ data: DataState }>) {

    this.data$ = this.store.select((state) => state.data.data)
    this.loading$ = this.store.select((state) => state.data.loading)
    this.error$ = this.store.select((state) => state.data.error)

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.store.dispatch(loadData())

    console.log(this.data$)
    console.log(this.loading$)

  }
}
