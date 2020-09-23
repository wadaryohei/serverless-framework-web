import { combineReducers } from 'redux'
import { AuthReducers } from './auth/reducers'
import { UIReducers } from './ui/reducers'
import { uiState } from './ui/model'
import { authState } from './auth/model'

//------------------------------
// States
//------------------------------
export type RootState = {
  auth: authState
  ui: uiState
}

//------------------------------
// Reducers
//------------------------------
export const reducers = combineReducers({
  auth: AuthReducers,
  ui: UIReducers,
})