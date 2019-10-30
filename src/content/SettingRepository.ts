import { browser } from 'webextension-polyfill-ts';
import LinkDef from './LinkDef';

export default class SettingRepository {
  async getLinkDefs(): Promise<LinkDef[]> {
    let defs = await browser.runtime.sendMessage({ type: 'get.link.defs' });
    return Object.keys(defs).map(key => new LinkDef(key, defs[key]));
  }
}
