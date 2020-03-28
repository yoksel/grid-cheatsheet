import { data } from './js/data/specs.js';
import { groups } from './js/data/groups.js';
import { Nav } from './js/Nav.js';
import { DataSection } from './js/DataSection.js';
import { ThemeSwitcher } from './js/ThemeSwitcher.js';
import { createElement, isVisible, debounce } from './js/helpers/index.js';

import './scss/styles.scss';

const sections = [];
let nav;

init();

// ---------------------------------------------

function init() {
  const themeSwitcher = new ThemeSwitcher();
  themeSwitcher.setTheme();

  nav = new Nav({
    groups,
    data,
    targetElem: document.querySelector('.l-aside__content')
  });

  fillContent();
  addNavMarkerMove();
}

// ---------------------------------------------

function fillContent () {
  const main = document.querySelector('.l-main');

  for (const item of data) {
    const section = new DataSection(item);
    sections.push(section.sectionElem);

    main.append(section.sectionElem);
  }
}

// ---------------------------------------------

function addNavMarkerMove() {
  const navItems = document.querySelectorAll('.nav__item');
navItems.reduce = [].reduce;
  const navItemsById = navItems.reduce((prev, item)=> {
    prev[item.id] = item
    return prev;
  }, {});

  const moveNavMarker = debounce(function () {
    for(let section of sections) {
      if (isVisible(section) && navItemsById[section.id]) {
          nav.setCurrentItem(navItemsById[section.id]);
      }
    }
  }, 100);

  window.addEventListener('scroll', moveNavMarker);
}
