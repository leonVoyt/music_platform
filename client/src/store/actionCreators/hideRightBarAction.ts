import { Dispatch } from 'redux'
import {
  HIDE_RIGHT_BARAction,
  HIDE_RIGHT_BARActionTypes,
} from '../types/hideRightBar'

export const setIsHide = (prop: boolean) => {
  return async (dispatch: Dispatch<HIDE_RIGHT_BARAction>) => {
    dispatch({
      type: HIDE_RIGHT_BARActionTypes.FETCH_HIDE_RIGHT_BAR_SUCCESS,
      payload: prop,
    })
  }
}
