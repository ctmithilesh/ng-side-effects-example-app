import { createAction, props } from "@ngrx/store";


export const loadSportsData = createAction('Load Data')
export const loadSportsDataSuccess = createAction('Load Data success', props<{ data: any }>())
export const loadSportsDataFailture = createAction('Load Data Failure', props<{ error: any }>())



