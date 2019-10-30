import * as actions from '../actions';
import { Entry } from '../Entry';

export type State = {
  entries: Entry[],
}

const defaultState: State = {
  entries: [],
};

export default function reducer(
  state = defaultState,
  action: actions.SettingAction,
): State {
  switch (action.type) {
  case actions.SETTING_ADD:
    return {
      entries: state.entries.concat({ prefix: '', placeholder: '' }),
    };
  case actions.SETTING_REMOVE:
    return {
      entries: state.entries.slice(0, action.index).concat(state.entries.slice(action.index + 1)),
    };
  case actions.SETTING_UPDATE_PREFIX:
    state.entries[action.index].prefix = action.prefix;
    return {
      entries: state.entries.concat([]),
    };
  case actions.SETTING_UPDATE_PLACEHOLDER:
    state.entries[action.index].placeholder = action.placeholder;
    return {
      entries: state.entries.concat([]),
    };
  case actions.SETTING_LOAD:
    return {
      entries: action.entries,
    }
  default:
    return state;
  }
}
