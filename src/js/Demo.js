import { createElement, getCellsQuantity } from './helpers';
import { StylesController } from './StylesController';

const demoTmpl = document.querySelector('#demo-tmpl').content.firstElementChild;

export class Demo {
  constructor (data) {
    this.data = data;
    this.id = this.data.alias || this.data.name;
    this.propNames = this.getPropNames();
    this.values = this.getValues();
    this.baseClass = `demo__content--prop-${this.id}`;
    this.elem = this.getElem();
    this.current = this.getCurrent();
    const codesElem = this.elem.querySelector('.demo__code');
    this.cellsQuantity = 0;

    this.stylesController = new StylesController({
      data,
      current: this.current,
      codesElem,
      classList: [this.baseClass]
    });

    this.addControls();

    this.hightlightGrid = this.hightlightGrid.bind(this);

    document.addEventListener('pageFilled', this.hightlightGrid);
  }

  getElem () {
    const demo = demoTmpl.cloneNode(true);
    const demoContentElem = demo.querySelector('.demo__content');
    demoContentElem.classList.add(...this.getClassList());
    this.viewElem = demo.querySelector('.demo__view');

    if (this.data.htmlMarkup) {
      this.viewElem.innerHTML = this.data.htmlMarkup;
    }

    if (this.data.demoBefore) {
      this.viewElem.insertAdjacentHTML('afterbegin', this.data.demoBefore);
    }

    this.parentElem = this.viewElem.querySelector('.parent');
    this.parentElemMarkup = this.parentElem.outerHTML;

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

    if (this.data.isFeaturedHighlighted) {
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

  getPropNames () {
    const propName = this.data.propDemoName || this.data.name;

    if (!propName.includes('+')) {
      return [propName];
    }

    return propName
      .split('+')
      .map(item => item.trim());
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
      propNames: this.propNames,
      // Need for double props (prop + prop)
      valuesByKey: this.getValuesByKey(currentValue)
    };
  }

  // ---------------------------------------------

  getValuesByKey (currentValue) {
    let valuesByKey = { [this.propNames[0]]: currentValue };

    if (currentValue.includes('/')) {
      const values = currentValue.split('/');

      if (values.length === this.propNames.length) {
        valuesByKey = this.propNames.reduce((prev, item, index) => {
          prev[item] = values[index];
          return prev;
        }, {});
      }
    }

    return valuesByKey;
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
    this.current.valuesByKey = this.getValuesByKey(control.innerHTML);

    this.stylesController.update(this.current);

    this.hightlightGrid();
  }

  // ---------------------------------------------

  getHightlightedGridItems (quantity) {
    let itemsMarkup = '';

    for (let i = 0; i < quantity; i++) {
      itemsMarkup += '<div class="child"></div>';
    }

    return itemsMarkup;
  }

  // ---------------------------------------------

  hightlightGrid () {
    const parentElemStyles = getComputedStyle(this.parentElem);
    const oldCellsQuantity = this.cellsQuantity;
    this.cellsQuantity = getCellsQuantity(parentElemStyles);

    if (oldCellsQuantity === this.cellsQuantity) {
      return;
    }

    const oldParentCopy = this.parentCopy;
    this.parentCopy = createElement(this.parentElemMarkup);
    this.parentCopy.classList.add('parent--grid-view');
    const restCellsQuantity = this.cellsQuantity - this.parentCopy.children.length;
    const parentItemsMarkup = this.getHightlightedGridItems(restCellsQuantity);
    this.parentCopy.insertAdjacentHTML('beforeEnd', parentItemsMarkup);

    if (oldParentCopy) {
      oldParentCopy.replaceWith(this.parentCopy);
    } else {
      this.parentElem.append(this.parentCopy);
    }
  }
}
