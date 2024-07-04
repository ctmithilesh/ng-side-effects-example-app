import { createReducer, on } from "@ngrx/store";
import { LoadDataFailure, loadData, loadDataSuccess } from "src/actions/fetch-news/fetch-news.action";


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

export const newsReducer = createReducer(
  initialState,
  on(loadData, (state) => ({ ...state, loading: true })),
  on(loadDataSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(LoadDataFailure,(state, { error })=> ({...state, error, loading: false}))
)
