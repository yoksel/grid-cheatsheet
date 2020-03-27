import { data } from './js/data/specs.js';
import { groups } from './js/data/groups.js';
import { Nav } from './js/Nav.js';
import { DataSection } from './js/DataSection.js';
import './scss/styles.scss';

const doc = document;

new Nav({
  groups,
  data,
  targetElem: doc.querySelector('.l-aside')
});

fillContent();

function fillContent () {
  const main = doc.querySelector('.l-main');

  for (const item of data) {
    const section = new DataSection(item);
    main.append(section.sectionElem);
  }
}

// const localStorThemeKey = 'fbchTheme';
