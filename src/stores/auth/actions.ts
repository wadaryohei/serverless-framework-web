import { actionCreatorFactory } from 'typescript-fsa'
import { ActionType } from 'typesafe-actions'
import * as AUTH from './types'
import { authState } from './model'

//--------------------------------
// Action Creators
//--------------------------------
const actionCreator = actionCreatorFactory()

//--------------------------------
// Actions
//--------------------------------
export const AuthActions = {
  authenticated: actionCreator<authState>(AUTH.AUTHENTICATED)
}

//--------------------------------
// Actions Types
//--------------------------------
export type ActionsType = ActionType<typeof AuthActions>