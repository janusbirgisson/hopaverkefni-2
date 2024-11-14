import { renderNavigation } from '../components/navigation';
import { el } from '../elements';
import { fetcher } from '../fetcher';
import { renderLectures } from './lectures-page';

export async function renderContentPage(root, indexJson, type, content) {
  console.log('rendering content page', root, indexJson.title);
  console.log("contentinto" + content)

  const contentJson = await fetcher(`data/${type}/${content}.json`);
  console.log(contentJson.lectures)
  const headerElement = el('header', {}, el('h1', {}, indexJson.title));
  headerElement.appendChild(renderNavigation(indexJson.navigation, root));


  if (content === "keywords") {
    console.log("keywords IF")
    // renderKeywrords();
  }

  const mainElement = el(
    'main',
    {},
  );
  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);

  if (content === "lectures") {
    console.log("lectures IF")
    renderLectures(root, contentJson);
  }
}
