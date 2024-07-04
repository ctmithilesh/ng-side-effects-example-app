import { createAction, props } from "@ngrx/store";


export const loadData = createAction('Load Data')
export const loadDataSuccess = createAction('Load Data success', props<{ data: any }>())
export const LoadDataFailure = createAction('Load Data Failure', props<{ error: any }>())



