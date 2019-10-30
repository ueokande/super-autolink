import { browser } from 'webextension-polyfill-ts';

export default class SettingRepository {
  async getLinkDefs(): Promise<object> {
    let { links } = await browser.storage.local.get('links');
    return links || {};
  }
}

