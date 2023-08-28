export enum HIDE_RIGHT_BARActionTypes {
  FETCH_HIDE_RIGHT_BAR_SUCCESS = 'FETCH_HIDE_RIGHT_BAR_SUCCESS',
}

interface FetchHide_Right_BarSuccessAction {
  type: HIDE_RIGHT_BARActionTypes.FETCH_HIDE_RIGHT_BAR_SUCCESS
  payload: boolean
}

export interface Hide_Right_BarState {
  isHide: boolean
  loading: boolean
  error: null | string
}

export type HIDE_RIGHT_BARAction = FetchHide_Right_BarSuccessAction
