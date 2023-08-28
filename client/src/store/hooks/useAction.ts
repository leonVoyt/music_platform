import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import action from '../actionCreators/mainAction'

export const useAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(action, dispatch)
}
