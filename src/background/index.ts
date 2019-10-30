import { browser } from 'webextension-polyfill-ts';
import SettingRepository from './SettingRepository';

let settingRepository = new SettingRepository();

browser.runtime.onMessage.addListener(async (msg: any) => {
  switch (msg.type) {
  case 'get.link.defs':
    return settingRepository.getLinkDefs();
  }
  return Promise.resolve();
});
