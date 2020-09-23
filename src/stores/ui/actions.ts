import { actionCreatorFactory } from 'typescript-fsa'
import { ActionType } from 'typesafe-actions'
import * as UI from './types'

//--------------------------------
// Action Creators
//--------------------------------
const actionCreator = actionCreatorFactory()

//--------------------------------
// Actions
//--------------------------------
export const UIActions = {
  uiModalToggle: actionCreator(UI.UI_MODAL_TOGGLE)
}

//--------------------------------
// Actions Types
//--------------------------------
export type ActionsType = ActionType<typeof UIActions>