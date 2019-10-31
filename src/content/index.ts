import SettingRepository from './SettingRepository';
import LinkDef from './LinkDef';

const mutateTextNode = (node: Text, defs: LinkDef[]) => {
  let targets: Array<string | { name: string, href: string }> = [node.wholeText];

  for (let def of defs) {
    let regexp = new RegExp('\\b' + def.prefix + '(\\d+)\\b', 'g');

    for (let i = 0; i < targets.length; ++i) {
      let target = targets[i];
      if (typeof target !== 'string') {
        continue;
      }

      let matches;
      let last = 0;
      while ((matches = regexp.exec(target)) !== null) {
        let no = matches[1];
        let name = def.label(no);
        let href = def.link(no);
        let before = target.slice(last).slice(0, matches.index - last);
        last = matches.index + matches[0].length;

        targets[i] = before;
        targets.splice(i + 1, 0, { name, href });
        i += 2;
        console.log(targets);
      }
      if (last > 0) {
        targets.push(target.slice(last));
        console.log(targets);
      }
    }
  }

  let elements = targets.map((target) => {
    if (typeof target === 'string') {
      return document.createTextNode(target);
    } else {
      let a = document.createElement('a');
      a.textContent = target.name;
      a.href = target.href;
      return a;
    }
  });
  let parent = node.parentNode!!;
  let next = node.nextSibling;
  elements.forEach(n => parent.insertBefore(n, next))
  node.remove();
}

const init = async() => {
  let settingRepository = new SettingRepository();
  let defs = await settingRepository.getLinkDefs();
  
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var node;
  var nodes = [];

  while(node = walker.nextNode()) {
    nodes.push(node as Text);
  }
  nodes.forEach(n => mutateTextNode(n, defs));
}


init();
