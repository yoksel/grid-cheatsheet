import { createElement } from '../helpers';

export class Group {
  constructor (data) {
    this._data = data;
    const container = createElement('<div class="group__intro container"></div>');

    const elements = [
      this._getTitleElement(),
      this._getLinkElement(),
      this._getDescElement()
    ];

    elements.forEach(element => container.append(element));

    this.element = createElement(`<section class="group" id="group-${this._data.id}"></section>`);

    this.element.append(container);
  }

  _getTitleElement () {
    const { title, hideTitle } = this._data;

    if (!title) {
      return '';
    }

    let className = 'group__title';

    if (hideTitle) {
      className = 'visually-hidden';
    }

    return createElement(`<h2 class="${className}">${title}</h2>`);
  }

  _getDescElement () {
    const { desc } = this._data;

    if (!desc) {
      return '';
    }

    return createElement(`<div class="group__desc">${desc}</div>`);
  }

  _getLinkElement () {
    const { link } = this._data;

    if (!link) {
      return '';
    }

    var text = link.replace('http://www.', '');

    return createElement(`<a class="group__link" href="${link}">${text}</a>`);
  }
}
