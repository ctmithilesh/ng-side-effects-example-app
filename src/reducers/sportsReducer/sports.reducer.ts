import { createReducer, on } from "@ngrx/store";
import { loadSportsData, loadSportsDataFailture, loadSportsDataSuccess } from "src/actions/fetch-news/fetch-sports.action";


export interface DataState {
  data: any;
  loading: boolean;
  error: any
}

export const initialState: DataState = {
  data: null,
  loading: false,
  error: null
}

export const sportsReducer = createReducer(
  initialState,
  on(loadSportsData, (state) => ({ ...state, loading: true })),
  on(loadSportsDataSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(loadSportsDataFailture, (state, { error }) => ({ ...state, error, loading: false }))
)
