import { renderNavigation } from '../components/navigation';
import { el } from '../elements';
import { fetcher } from '../fetcher';
export async function renderContentPage(root, indexJson, type, content) {
  console.log('rendering content page', root, indexJson.title);
  console.log("contentinto" + content)

  const contentJson = await fetcher(`data/${type}/${content}.json`);
  const headerElement = el('header', {}, el('h1', {}, indexJson.title));
  headerElement.appendChild(renderNavigation(indexJson.navigation, root));

  if (content === "lectures") {
    console.log("lectures IF")

    // renderLectures();
  }
  if (content === "keywords") {
    console.log("keywords IF")
    // renderKeywrords();
  }

  const mainElement = el(
    'main',
    {},
    el(
      'section',
      {},
      el('p', {}, indexJson.description),
      el(
        'p',
        {},
        'Ég er content page, þetta er contentið mitt',
      ),
      renderNavigation(indexJson.navigation),
    ),
  );
  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}
