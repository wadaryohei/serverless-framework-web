import { uiState } from './model';
import * as ACTIONS from './actions'
import { reducerWithInitialState } from 'typescript-fsa-reducers';

//------------------------------
// initialState
//------------------------------
export const initialState: uiState = {
  open: false
}

//------------------------------
// Reducers
//------------------------------
export const UIReducers = reducerWithInitialState<uiState>(initialState)

  /**
   * モーダルの開閉をステート管理する
   */
  .case(ACTIONS.UIActions.uiModalToggle, (state = initialState) => {
    return !state.open ? { open: true } : { open: false }
  })