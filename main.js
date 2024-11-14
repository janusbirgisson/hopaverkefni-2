import { fetcher } from './lib/fetcher.js';
import { renderContentPage } from './lib/pages/content-page.js';
import { renderIndexPage } from './lib/pages/index-page.js';
import { renderSubpage } from './lib/pages/sub-page.js';
import { empty } from './lib/elements.js';

export async function render(root) {
  empty(root);

  const mainIndexJson = await fetcher('data/index.json');

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const content = params.get('content');

  console.log(type, content);

  if (type && !content) {
    return renderSubpage(root, mainIndexJson, type);;

  }

  if (content && type) {
    return renderContentPage(root, mainIndexJson, type, content);
  }

  renderIndexPage(root, mainIndexJson);
}

const root = document.querySelector('#app');

window.onpopstate = () => {
  render(root);
};



// Athugum í byrjun hvað eigi að birta.
render(root);