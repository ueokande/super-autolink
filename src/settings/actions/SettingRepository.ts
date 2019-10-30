import { browser } from 'webextension-polyfill-ts';
import { Entry } from '../Entry';

export default class SettingRepository {
  async loadSettings(): Promise<Entry[]> {
    let { links } = await browser.storage.local.get('links');
    return links || [];
  }

  async saveSettings(entries: Entry[]): Promise<void> {
    await browser.storage.local.set({ links: entries });
  }
}


