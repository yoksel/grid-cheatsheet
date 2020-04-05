import { createElement } from './helpers/index.js';
import { StylesController } from './StylesController.js';

const demoTmpl = document.querySelector('#demo-tmpl').content.firstElementChild;
const demoElemClasses = {
  demos: '.parent',
  'grid containers': '.parent',
  'grid items': '.child--featured'
};

export class Demo {
  constructor (data) {
    this.data = data;
    this.targetElemSelector = demoElemClasses[this.data.targetForDemo];
    this.values = this.data.customValues || this.data.values;
    this.classList = this.getClassList();
    this.elem = this.getElem();
    this.codesElem = this.elem.querySelector('.demo__code');
    this.current = this.getCurrent();

    this.stylesController = new StylesController({
      data,
      current: this.current,
      codesElem: this.codesElem,
      classList: this.classList
    });

    this.addControls();
  }

  getElem () {
    const demo = demoTmpl.cloneNode(true);
    const demoContentElem = demo.querySelector('.demo__content');
    demoContentElem.classList.add(...this.classList);
    const viewElem = demo.querySelector('.demo__view');

    if (this.data.htmlMarkup) {
      viewElem.innerHTML = this.data.htmlMarkup;
    }

    if (this.data.demoBefore) {
      viewElem.insertAdjacentHTML('afterbegin', this.data.demoBefore);
    }

    return demo;
  }

  // ---------------------------------------------

  getClassList () {
    const classList = [];
    const name = this.data.name
      .trim()
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/\(\)/g, '');

    classList.push('demo__content--prop-' + name);

    if (this.targetElemSelector.search('featured') > -1) {
      classList.push('demo__content--has-featured');
    }

    return classList;
  }

  // ---------------------------------------------

  addControls () {
    const controls = this.getControlsMarkup();

    const elem = createElement(`<div class="demo__controls">${controls}</div>`);

    elem.addEventListener('click', (ev) => {
      this.controlsOnClick(ev);
    });

    this.elem.prepend(elem);
    this.current.control = elem.querySelector('.demo__control--current');
  }

  // ---------------------------------------------

  getControlsMarkup () {
    const controlsList = [];

    if (!this.values) {
      return;
    }

    for (const { id, name, current } of this.values) {
      const classList = ['demo__control'];

      if (current || name === this.currentValueId) {
        classList.push('demo__control--current');
      }

      controlsList.push(`<button
        type="button"
        class="${classList.join(' ')}"
        data-value-id="${id || name}">${name}</button>`);
    }

    return controlsList.join(' ');
  }

  // ---------------------------------------------

  getCurrent () {
    if (!this.values) {
      return;
    }

    let currentValue;
    let currentValueId;

    for (const { id, name, current } of this.values) {
      if (current) {
        currentValueId = id || name;
        currentValue = name;
      }
    }

    if (!currentValueId) {
      currentValueId = this.values[0].id || this.values[0].name;
      currentValue = this.values[0].name;
    }

    return {
      id: currentValueId,
      value: currentValue,
      control: null
    };
  }

  // ---------------------------------------------

  controlsOnClick (ev) {
    const control = ev.target.closest('.demo__control');

    if (!control) {
      return;
    }

    this.current.control.classList.remove('demo__control--current');
    control.classList.add('demo__control--current');

    this.current.control = control;
    this.current.id = control.dataset.valueId;
    this.current.value = control.innerHTML;

    this.stylesController.update(this.current);
  }
}
