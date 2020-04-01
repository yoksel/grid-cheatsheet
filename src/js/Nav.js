import { createElement } from './helpers/index.js';

export class Nav {
  constructor ({
    groups,
    targetElem
  }) {
    this.groups = groups;
    this.current = null;

    const navMarkup = this.getNavMarkup();

    this.navElem = createElement(`<nav class="nav">${navMarkup}</nav>`);
    this.markerElem = createElement('<span class="nav__marker"></span>');

    targetElem.prepend(this.navElem);
    this.navElem.prepend(this.markerElem);

    this.setCurrentItem();

    this.navElem.addEventListener('click', (ev) => {
      const navItem = ev.target.closest('.nav__item');

      if (!navItem) {
        return;
      }
      this.setCurrentItem(navItem);
    });
  }

  getNavMarkup () {
    const itemsList = Object.entries(this.groups)
      .map(([id, { title, items }]) => {
        let markup = '';

        if (title) {
          markup += `<h2 class="nav__subheader">${title}</h2>`;
        }
        const itemsMarkup = this.getListMarkup(items);
        markup += `<ul class="nav__list">${itemsMarkup.join('')}</ul>`;

        return markup;
      });

    return itemsList.join('');
  }

  getListMarkup (items) {
    return items.map(({ name }) => {
      const itemClass = this.getItemClass(name);

      return `<li
          class="${itemClass}"
          data-name="${name}"
        ><a
            href="#${name}"
            data-parent-nav-item="${name}"
            class="nav__link"
          >${name}</a></li>`;
    });
  }

  getItemClass (name) {
    const classList = ['nav__item'];

    const namesList = name.split(',');

    for (const name of namesList) {
      classList.push('nav__item--' + name.trim());
    }

    return classList.join(' ');
  }

  setCurrentItem (elem) {
    if (!elem) {
      elem = document.querySelector('.nav__item');
    }

    if (this.currentElem) {
      this.currentElem.classList.remove('nav__item--current');
    }

    this.markerElem.style.top = `${elem.offsetTop}px`;

    elem.classList.add('nav__item--current');

    this.currentElem = elem;
  }
}
