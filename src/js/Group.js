import { createElement } from './helpers';

export class Group {
  constructor ({ id, title, hideTitle, desc, items }) {
    const titleMarkup = this.getTitleMarkup(title, hideTitle);
    const descMarkup = this.getDescMarkup(desc);
    const intro = this.getIntroMarkup(titleMarkup, descMarkup);

    this.elem = createElement(`<section class="group" id="group-${id}">
      ${intro}
    </section>`);
  }

  getTitleMarkup (title, hideTitle) {
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
