import * as actions from './index';
import { Entry } from '../Entry';
import SettingRepository from './SettingRepository';

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

const load = async(): Promise<actions.SettingAction> => {
  let settingRepository = new SettingRepository();
  let entries = await settingRepository.loadSettings();
  if (entries.length === 0) {
    entries = [{ prefix: '', placeholder: '' }];
  }
  return {
    type: actions.SETTING_LOAD,
    entries,
  }
}

const save = async(entries: Entry[]): Promise<actions.SettingAction> => {
  let settingRepository = new SettingRepository();
  await settingRepository.saveSettings(entries);
  return {
    type: actions.SETTING_SAVE,
  };
};

export { add, remove, updatePrefix, updatePlaceholder, load, save };
