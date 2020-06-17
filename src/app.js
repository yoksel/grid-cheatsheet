import { groups } from './js/data/groups';
import { Nav } from './js/components/nav';
import { ThemeSwitcher } from './js/components/theme-switcher';
import { MainContainer } from './js/components/main-container';

import './scss/styles.scss';

const main = document.querySelector('.l-main');

const themeSwitcher = new ThemeSwitcher();
themeSwitcher.setTheme();
const mainContainer = new MainContainer({ container: main, groups });
const asideContentElement = document.querySelector('.l-aside__content');
const nav = new Nav({ groups, sectionsComponents: mainContainer.getSectionsComponents() });

asideContentElement.prepend(nav.element);
nav.moveMarker();

checkLinks();

function checkLinks () {
  const elemsWithId = Array.from(document.querySelectorAll('[id]'));
  const elemsById = elemsWithId.reduce((prev, item) => {
    prev[item.id] = item;
    return prev;
  }, {});
  const links = document.querySelectorAll('a[href*="#"]');
  let counter = 1;

  links.forEach((link) => {
    const href = link.getAttribute('href');
    const isExternal = href.includes('http');
    const hrefTail = link.getAttribute('href').split('#')[1];

    if (isExternal) {
      if (elemsById[hrefTail] &&
        (href.includes('css3-grid-layout') || href.includes('css-grid-1'))) {
        console.log('external, id exist in doc: ', hrefTail);
        link.classList.add('marked-link');
}
    } else if (!elemsById[hrefTail]) {
      console.log(`id not exist ${hrefTail}`);
      link.classList.add('marked-link');
      counter++;
    }
  });

  console.log(`Total: ${counter}`);
}
