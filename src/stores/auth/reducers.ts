import { authState } from './model';
import * as ACTIONS from './actions'
import { reducerWithInitialState } from 'typescript-fsa-reducers';

//------------------------------
// initialState
//------------------------------
export const initialState: authState = {
  auth: null,
  id: '',
  email: '',
  username: '',
  isAuth: false
}

//------------------------------
// Reducers
//------------------------------
export const AuthReducers = reducerWithInitialState<authState>(initialState)

  /**
   * ユーザーの認証情報をステート管理する
   */
  .case(ACTIONS.AuthActions.authenticated, (state = initialState, payload) => {
    return {
      ...state, ...payload
    }
  })