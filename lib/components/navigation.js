import { el } from '../elements.js';
import { render } from '../../main.js';

export function renderNavigation(navigation, root) {
  const navigationElement = el('ul', { class: 'navigation__list' });

  for (const item of navigation) {
    const { title, slug } = item;
    const href = `?type=${slug}`;

    const navItemElement = el('li', { class: 'navigation__item' });
    const linkElement = el('a', {
      href,
      class: 'navigation__link'
    }, title);

    linkElement.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', href);
      render(root);
    });

    navItemElement.appendChild(linkElement);
    navigationElement.appendChild(navItemElement);
  }

  return el('nav', { class: 'navigation' }, navigationElement);
}
