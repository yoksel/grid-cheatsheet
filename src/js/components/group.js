import { createElement } from '../helpers';

export class Group {
  constructor (data) {
    this.data = data;
    const id = this.data.id;
    const title = this.getTitle();
    const desc = this.getDesc();
    const link = this.getLink();
    const container = createElement('<div class="group__intro container"></div>');

    const elems = [
      title,
      link,
      desc
    ];

    elems.forEach(elem => container.append(elem));

    this.elem = createElement(`<section class="group" id="group-${id}"></section>`);

    this.elem.append(container);
  }

  getTitle () {
    const { title, hideTitle } = this.data;

    if (!title) {
      return '';
    }

    let className = 'group__title';

    if (hideTitle) {
      className = 'visually-hidden';
    }

    return createElement(`<h2 class="${className}">${title}</h2>`);
  }

  getDesc () {
    const { desc } = this.data;

    if (!desc) {
      return '';
    }

    return createElement(`<div class="group__desc">${desc}</div>`);
  }

  getLink () {
    if (!this.data.link) {
      return '';
    }

    var text = this.data.link.replace('http://www.', '');

    return createElement(`<a class="group__link" href="${this.data.link}">${text}</a>`);
  }
}
