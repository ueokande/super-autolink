// Settings
export const SETTING_ADD = 'setting.add'
export const SETTING_REMOVE = 'setting.remove';
export const SETTING_UPDATE_PREFIX = 'setting.update.prefix'
export const SETTING_UPDATE_PLACEHOLDER = 'setting.update.placeholder'

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


export type SettingAction =
  SettingAddAction | SettingRemoveAction | SettingUpdatePrefixAction | SettingUpdatePlaceholderAction;

