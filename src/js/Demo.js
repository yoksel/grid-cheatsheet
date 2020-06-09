import { createElement } from './helpers';
import { StylesController } from './StylesController';

const demoTmpl = document.querySelector('#demo-tmpl').content.firstElementChild;

export class Demo {
  constructor (data) {
    this.data = data;
    this.id = this.data.alias || this.data.name;
    this.values = this.getValues();
    this.isFeaturedHighlighted = this.data.isFeaturedHighlighted || false;
    this.baseClass = `demo__content--prop-${this.id}`;
    this.elem = this.getElem();
    this.current = this.getCurrent();
    const codesElem = this.elem.querySelector('.demo__code');

    this.stylesController = new StylesController({
      data,
      current: this.current,
      codesElem,
      classList: [this.baseClass]
    });

    this.addControls();
  }

  getElem () {
    const demo = demoTmpl.cloneNode(true);
    const demoContentElem = demo.querySelector('.demo__content');
    demoContentElem.classList.add(...this.getClassList());
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

  getValues () {
    const values = this.data.customValues || this.data.values;

    return values.map((item, index) => {
      return {
        ...item,
        id: item.id || `${this.id}-control-${index}`
      };
    });
  }

  // ---------------------------------------------

  getClassList () {
    const list = [`demo__content--prop-${this.id}`];

    if (this.isFeaturedHighlighted) {
      list.push('demo__content--highlight-featured');
    }

    return list;
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
        id="${id}">${name}</button>`);
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
        currentValueId = id;
        currentValue = name;
      }
    }

    if (!currentValueId) {
      currentValueId = this.values[0].id;
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
    this.current.id = control.id;
    this.current.value = control.innerHTML;

    this.stylesController.update(this.current);
  }
}
