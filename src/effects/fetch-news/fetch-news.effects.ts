import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { loadSportsData, loadSportsDataFailture, loadSportsDataSuccess } from "src/actions/fetch-news/fetch-sports.action";




@Injectable()
export class DataEffects {


  private api_endpoint: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5497647da2114041ad647eba8e002d6f'
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {

  }

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSportsData),
      mergeMap(() =>
        this.http.get(this.api_endpoint).pipe(map((data) => loadSportsDataSuccess({ data })),
          catchError((error) => of(loadSportsDataFailture({ error })))

        )

      )
    ))

}
