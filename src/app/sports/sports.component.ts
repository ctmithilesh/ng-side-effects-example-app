import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from 'src/actions/fetch-news/fetch-news.action';
import { DataState } from 'src/reducers/sportsReducer/sports.reducer';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {


  data$: Observable<any>
  loading$: Observable<boolean>
  error$: Observable<any>
  constructor(
    private store: Store<{ data: DataState }>
  ) {


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
