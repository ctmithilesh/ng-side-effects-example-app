import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { LoadDataFailure, loadData, loadDataSuccess } from "src/actions/fetch-news/fetch-news.action";




@Injectable()
export class SportsNewsEffects {


  private api_endpoint: string = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=5497647da2114041ad647eba8e002d6f'
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {

  }

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      mergeMap(() =>
        this.http.get(this.api_endpoint).pipe(map((data) => loadDataSuccess({ data })),
          catchError((error) => of(LoadDataFailure({ error })))

        )

      )
    ))

}
