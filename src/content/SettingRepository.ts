import LinkDef from './LinkDef';

export default class SettingRepository {
  async getLinkDefs(): Promise<LinkDef[]> {
    let links = [
      new LinkDef('KUBERNETES-', 'https://github.com/kubernetes/kubernetes/pulls/{}'),
    ]
    return Promise.resolve(links);
  }
}
