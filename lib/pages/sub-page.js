import { renderNavigation } from '../components/navigation.js';
import { el } from '../elements.js';
import { fetcher } from '../fetcher.js';
import { render } from '../../main.js'; // Import render from main.js


export async function renderSubpage(root, indexJson, type) {
  const headerElement = el('header', {}, el('h1', {}, indexJson.title));

  headerElement.appendChild(renderNavigation(indexJson.navigation, root));

  let foundType = null;

  if (indexJson.navigation.find((i) => i.slug === type)) {
    foundType = type;
  }

  let mainElement;
  if (!foundType) {
    mainElement = el('main', {}, el('p', {}, 'Fannst ekki'));
  } else {
    const contentJsonFile = `data/${type}/index.json`;
    const contentJson = await fetcher(contentJsonFile);

    const content = contentJson.content;
    const contentElement = document.createElement('div');
    contentElement.classList.add("buttons-container")

    for (const item of content) {

      const button = document.createElement('button');
      button.textContent = item.title;
      button.addEventListener('click', (e) => {
        if (!e) {
          return;
        }
        const slug = item.slug;
        const newUrl = `${window.location.search}&content=${slug}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
        render(root);
      });


      contentElement.appendChild(button);
    }

    mainElement = el('main', {}, contentElement);
  }

  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}
