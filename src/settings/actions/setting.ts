import * as actions from './index';

const add = (): actions.SettingAction => {
  return {
    type: actions.SETTING_ADD,
  };
};

const remove = (index: number): actions.SettingAction => {
  return {
    type: actions.SETTING_REMOVE,
    index,
  }
}

const updatePrefix = (index: number, prefix: string): actions.SettingAction => {
  return {
    type: actions.SETTING_UPDATE_PREFIX,
    index, prefix,
  }
}

const updatePlaceholder = (index: number, placeholder: string): actions.SettingAction => {
  return {
    type: actions.SETTING_UPDATE_PLACEHOLDER,
    index, placeholder,
  }
}

const load = async(): Promise<any> => {
  // TODO
  return { type: 'todo' };
}

const save = async(map: object): Promise<any> => {
  map = map;
  // TODO
  return { type: 'todo' };
};

export { add, remove, updatePrefix, updatePlaceholder, load, save };
