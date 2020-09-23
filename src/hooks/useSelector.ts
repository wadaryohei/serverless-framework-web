import * as reduxSelector from 'react-redux'
import { RootState } from '../stores/reducers'
import { authState } from '../stores/auth/model'
import { uiState } from '../stores/ui/model'


//------------------------------
// Type
//------------------------------
export type useSelectorType = {
  userState: () => authState
  uiState: () => uiState
}

//------------------------------
// Hooks
//------------------------------
export const useSelector = (): useSelectorType => {
  const userSelector = reduxSelector.useSelector((state: RootState) => state.auth)
  const uiSelector = reduxSelector.useSelector((state: RootState) => state.ui)

  /**
   * Userのストアを返す
   */
  const userState = (): authState => {
    return {
      auth: userSelector.auth,
      username: userSelector.username,
      email: userSelector.email,
      isAuth: userSelector.isAuth
    }
  }

  /**
   * UIのストアを返す
   */
  const uiState = (): uiState => {
    return uiSelector
  }

  return { userState, uiState }
}