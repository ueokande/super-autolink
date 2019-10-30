import { browser } from 'webextension-polyfill-ts';

type Entry = {
  prefix: string,
  placeholder: string,
}

export default class SettingRepository {
  async getLinkDefs(): Promise<object> {
    let { links: entries } = await browser.storage.local.get('links');
    if (!entries) {
      return {}
    }
    return entries.reduce((o: any, entry: Entry) => {
      o[entry.prefix] = entry.placeholder
      return o;
    }, {});
  }
}

