import {
  HIDE_RIGHT_BARAction,
  HIDE_RIGHT_BARActionTypes,
  Hide_Right_BarState,
} from './../types/hideRightBar'

const initialState: Hide_Right_BarState = {
  isHide: false,
  loading: false,
  error: null,
}

export const hideBarReducer = (
  state = initialState,
  action: HIDE_RIGHT_BARAction
): Hide_Right_BarState => {
  switch (action.type) {
    case HIDE_RIGHT_BARActionTypes.FETCH_HIDE_RIGHT_BAR_SUCCESS:
      return { loading: false, error: null, isHide: action.payload }

    default:
      return state
  }
}
