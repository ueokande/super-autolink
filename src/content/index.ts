import SettingRepository from './SettingRepository';
import LinkDef from './LinkDef';

const mutateTextNode = (node: Text, defs: LinkDef[]) => {
  for (let def of defs) {
    let regexp = new RegExp('\\b' + def.prefix + '(\\d+)\\b', 'g');
    let content = node.wholeText;
    let matches;

    let replaced = [];
    while ((matches = regexp.exec(content)) !== null) {
      matches = matches;
      let index = matches.index
      let before = content.slice(0, index);
      let no = matches[1];
      let a = document.createElement('a');
      a.href = def.link(no);
      a.textContent = def.label(no);
      replaced.push(document.createTextNode(before), a);
    }

    if (replaced.length > 0) {
      let next = node.nextSibling;
      let parent = node.parentNode!!;
      replaced.forEach(n => parent.insertBefore(n, next))
      node.remove();
    }
  }
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
