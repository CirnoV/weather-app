import {
  createReducer,
  createAction,
  ActionType,
} from 'typesafe-actions';

import { updateKey } from '../utils/common';

const TOGGLE = 'toolTip/TOGGLE';

export interface toolTipState {
  hide: boolean;
};

export const toggle = createAction(TOGGLE)<void>();

const toolTipActions = {
  toggle,
}

const initialState: toolTipState = {
  hide: false,
};

type RootAction = ActionType<typeof toolTipActions>;

const toolTip = createReducer<toolTipState, RootAction>(initialState, {
  [TOGGLE]: (state, action) => {
    return updateKey(state, 'hide', !state.hide);
  },
});

export default toolTip;