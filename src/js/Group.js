import { createElement } from './helpers';

export class Group {
  constructor (data) {
    this.data = data;
    const id = this.data.id;

    this.elem = createElement(`<section class="group" id="group-${id}">
      ${this.getIntroMarkup()}
    </section>`);
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

    return `<h2 class="${className}">${title}</h2>`;
  }

  getDescMarkup (desc) {
    if (!desc) {
      return '';
    }

    return `<div class="group__desc">${desc}</div>`;
  }

  getIntroMarkup (title, desc) {
    if (!title && !desc) {
      return '';
    }

    return `<div class="group__intro container">${title}${desc}</div>`;
  }
}
