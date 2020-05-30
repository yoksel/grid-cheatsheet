import { groups } from './js/data/groups.js';
import { Nav } from './js/Nav.js';
import { Group } from './js/Group.js';
import { DataSection } from './js/DataSection.js';
import { ThemeSwitcher } from './js/ThemeSwitcher.js';
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
}

// ---------------------------------------------

function fillContent () {
  const main = document.querySelector('.l-main');

  for (const [id, data] of Object.entries(groups)) {
    const groupElem = new Group({ id, ...data }).elem;

    for (const item of data.items) {
      const section = new DataSection(item);
      sections.push(section.sectionElem);

      groupElem.append(section.sectionElem);

      if (item.items) {
        for (const innerItem of item.items) {
          const innerSection = new DataSection(innerItem);
          sections.push(innerSection.sectionElem);

          groupElem.append(innerSection.sectionElem);
        }
      }
    }

    sections.push(groupElem);
    main.append(groupElem);
  }
}

// ---------------------------------------------

function addNavMarkerMove () {
  const navItems = document.querySelectorAll('.nav__item');
navItems.reduce = [].reduce;
  const navItemsById = navItems.reduce((prev, item) => {
    prev[item.id] = item;
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
