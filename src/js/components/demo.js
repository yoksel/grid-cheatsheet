import { createElement, getCellsQuantity } from '../helpers';
import { StylesController } from './styles-controller';

const demoTmpl = document.querySelector('#demo-tmpl').content.firstElementChild;

export class Demo {
  constructor (data) {
    this._data = data;
    this._id = this._data.alias || this._data.name;
    this._propNames = this._getPropNames();
    this._values = this._getValues();
    this._baseClass = `demo__content--prop-${this._id}`;
    this._current = this._getCurrent();
    this._cellsQuantity = 0;
    this._parentElem = null;
    this._parentCopy = null;
    this._parentElemMarkup = '';
    this.elem = this._getElement();
    const codesElem = this.elem.querySelector('.demo__code');

    this._stylesController = new StylesController({
      data,
      current: this._current,
      codesElem,
      classList: [this._baseClass]
    });

    this._addControls();

    this._hightlightGrid = this._hightlightGrid.bind(this);

    document.addEventListener('pageFilled', this._hightlightGrid);
  }

  _getElement () {
    const demo = demoTmpl.cloneNode(true);
    const demoContentElem = demo.querySelector('.demo__content');
    demoContentElem.classList.add(...this._getClassList());
    const viewElem = demo.querySelector('.demo__view');

    if (this._data.htmlMarkup) {
      viewElem.innerHTML = this._data.htmlMarkup;
    }

    if (this._data.demoBefore) {
      viewElem.insertAdjacentHTML('afterbegin', this._data.demoBefore);
    }

    this._parentElem = viewElem.querySelector('.parent');
    this._parentElemMarkup = this._parentElem.outerHTML;

    return demo;
  }

  _getValues () {
    const values = this._data.customValues || this._data.values;

    return values.map((item, index) => {
      return {
        ...item,
        id: item.id || `${this._id}-control-${index}`
      };
    });
  }

  _getClassList () {
    const list = [`demo__content--prop-${this._id}`];

    if (this._data.isFeaturedHighlighted) {
      list.push('demo__content--highlight-featured');
    }

    return list;
  }

  _addControls () {
    const controls = this.getControlsMarkup();

    const elem = createElement(`<div class="demo__controls">${controls}</div>`);

    elem.addEventListener('click', (ev) => {
      this._controlsOnClick(ev);
    });

    this.elem.prepend(elem);
    this._current.control = elem.querySelector('.demo__control--current');
  }

  getControlsMarkup () {
    const controlsList = [];

    if (!this._values) {
      return;
    }

    for (const { id, name, current } of this._values) {
      const classList = ['demo__control'];

      if (current || name === this._currentValueId) {
        classList.push('demo__control--current');
      }

      controlsList.push(`<button
        type="button"
        class="${classList.join(' ')}"
        id="${id}">${name}</button>`);
    }

    return controlsList.join(' ');
  }

  _getPropNames () {
    const propName = this._data.propDemoName || this._data.name;

    if (!propName.includes('+')) {
      return [propName];
    }

    return propName
      .split('+')
      .map(item => item.trim());
  }

  _getCurrent () {
    if (!this._values) {
      return;
    }

    let currentValue;
    let currentValueId;

    for (const { id, name, current } of this._values) {
      if (current) {
        currentValueId = id;
        currentValue = name;
      }
    }

    if (!currentValueId) {
      currentValueId = this._values[0].id;
      currentValue = this._values[0].name;
    }

    return {
      id: currentValueId,
      propNames: this._propNames,
      // Need for double props (prop + prop)
      valuesByKey: this._getValuesByKey(currentValue)
    };
  }

  _getValuesByKey (currentValue) {
    let valuesByKey = { [this._propNames[0]]: currentValue };

    if (currentValue.includes('/')) {
      const values = currentValue.split('/');

      if (values.length === this._propNames.length) {
        valuesByKey = this._propNames.reduce((prev, item, index) => {
          prev[item] = values[index];
          return prev;
        }, {});
      }
    }

    return valuesByKey;
  }

  _controlsOnClick (ev) {
    const control = ev.target.closest('.demo__control');

    if (!control) {
      return;
    }

    this._current.control.classList.remove('demo__control--current');
    control.classList.add('demo__control--current');

    this._current.control = control;
    this._current.id = control.id;
    this._current.valuesByKey = this._getValuesByKey(control.innerHTML);

    this._stylesController.updateStyles(this._current);

    this._hightlightGrid();
  }

  _getHightlightedGridItems (quantity) {
    let itemsMarkup = '';

    for (let i = 0; i < quantity; i++) {
      itemsMarkup += '<div class="child"></div>';
    }

    return itemsMarkup;
  }

  _hightlightGrid () {
    const parentElemStyles = getComputedStyle(this._parentElem);
    const oldCellsQuantity = this._cellsQuantity;
    this._cellsQuantity = getCellsQuantity(parentElemStyles);

    if (oldCellsQuantity === this._cellsQuantity) {
      return;
    }

    const oldParentCopy = this._parentCopy;
    this._parentCopy = createElement(this._parentElemMarkup);
    this._parentCopy.classList.add('parent--grid-view');
    const restCellsQuantity = this._cellsQuantity - this._parentCopy.children.length;
    const parentItemsMarkup = this._getHightlightedGridItems(restCellsQuantity);
    this._parentCopy.insertAdjacentHTML('beforeEnd', parentItemsMarkup);

    if (oldParentCopy) {
      oldParentCopy.replaceWith(this._parentCopy);
    } else {
      this._parentElem.append(this._parentCopy);
    }
  }
}
