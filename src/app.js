import { groups } from './js/data/groups';
import { Nav } from './js/components/nav';
import { Group } from './js/components/group';
import { PropSection } from './js/components/prop-section';
import { ThemeSwitcher } from './js/components/theme-switcher';
import { isVisible, debounce } from './js/helpers';

import './scss/styles.scss';

const sections = [];
let nav;

init();

// ---------------------------------------------

function init () {
  const themeSwitcher = new ThemeSwitcher();
  themeSwitcher.setTheme();

  nav = new Nav({
    groups,
    targetElem: document.querySelector('.l-aside__content')
  });

  fillContent();
  addNavMarkerMove();

  checkLinks();
}

// ---------------------------------------------

function fillContent () {
  const main = document.querySelector('.l-main');

  for (const [id, data] of Object.entries(groups)) {
    const groupElem = new Group({ id, ...data }).elem;

    for (const item of data.items) {
      const section = new PropSection(item);
      sections.push(section.sectionElem);

      groupElem.append(section.sectionElem);

      if (item.demos) {
        for (const innerDemo of item.demos) {
          const innerSection = new PropSection(innerDemo, { isChild: true });
          sections.push(innerSection.sectionElem);

          groupElem.append(innerSection.sectionElem);
        }
      }

      if (item.children) {
        for (const child of item.children) {
          const innerSection = new PropSection(child, { isChild: true });
          sections.push(innerSection.sectionElem);

          groupElem.append(innerSection.sectionElem);
        }
      }
    }

    sections.push(groupElem);
    main.append(groupElem);
  }

  // Add semitransparent grids to demos
  document.dispatchEvent(new Event('pageFilled'));
}

// ---------------------------------------------

function addNavMarkerMove () {
  const navItems = document.querySelectorAll('.nav__item');
navItems.reduce = [].reduce;
  const navItemsById = navItems.reduce((prev, item) => {
    prev[item.dataset.name] = item;
    return prev;
  }, {});

  const moveNavMarker = debounce(function () {
    for (const section of sections) {
      if (isVisible(section) && navItemsById[section.id]) {
          nav.setCurrentItem(navItemsById[section.id]);
      }
    }
  }, 100);

  window.addEventListener('scroll', moveNavMarker);
}

// ---------------------------------------------

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
