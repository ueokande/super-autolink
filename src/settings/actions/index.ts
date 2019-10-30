import { Entry } from '../Entry';

// Settings
export const SETTING_ADD = 'setting.add';
export const SETTING_REMOVE = 'setting.remove';
export const SETTING_UPDATE_PREFIX = 'setting.update.prefix';
export const SETTING_UPDATE_PLACEHOLDER = 'setting.update.placeholder';
export const SETTING_LOAD = 'setting.load';
export const SETTING_SAVE = 'setting.save';

interface SettingAddAction {
  type: typeof SETTING_ADD;
}

interface SettingRemoveAction {
  type: typeof SETTING_REMOVE;
  index: number;
}

interface SettingUpdatePrefixAction {
  type: typeof SETTING_UPDATE_PREFIX;
  index: number;
  prefix: string;
}

interface SettingUpdatePlaceholderAction {
  type: typeof SETTING_UPDATE_PLACEHOLDER;
  index: number;
  placeholder: string;
}

interface SettingLoadAction {
  type: typeof SETTING_LOAD;
  entries: Entry[];
}

interface SettingSaveAction {
  type: typeof SETTING_SAVE;
}

export type SettingAction =
  SettingAddAction | SettingRemoveAction | SettingUpdatePrefixAction | SettingUpdatePlaceholderAction |
  SettingLoadAction | SettingSaveAction;
