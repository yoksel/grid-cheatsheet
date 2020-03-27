import './js/tinylib.js';
import {data} from './js/data/specs.js';
import {groups} from './js/data/groups.js';
import {Nav} from './js/Nav.js';
import {DataSection} from './js/DataSection.js';
import './scss/styles.scss';

// console.log(data)

const doc = document;
const $ = tinyLib;

new Nav({
  groups,
  data,
  targetElem: doc.querySelector('.l-aside')
});

fillContent();

function fillContent() {
  const main = doc.querySelector('.l-main');

  for(let item of data){
    let section = new DataSection(item);
    main.append(section.sectionElem);
  }
}

const body = $.get('body');
const head = $.get('head');

const navHolder = $.create('ul').addClass('nav');
const contentHolder = $.create('div').addClass('content');
const stylesHolder = $.create('style').attr({'id':'grid'});


const sections = [];
const navItems = {};
const navItemCurrent = null;

const demoWrapper = $.get('.demo-wrapper');
const codeWrapper = $.get('.code-wrapper');

const demoValueClassCurrent = 'demo-values__control--current';
const codeOffset = '  ';
const demoElemClasses = {
  'demos': '.parent' ,
  'grid containers': '.parent' ,
  'grid items': '.child--featured'
};
const navItemCurrentClass = 'nav__item--current';
const localStorThemeKey = 'fbchTheme';

// console.log('hello')
