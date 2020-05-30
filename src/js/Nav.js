import { createElement } from './helpers';

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
          markup += `<h2 class="nav__subheader">
            <a
              class="nav__subheader-link"
              href="#group-${id}"
              >${title}</a>
          </h2>`;
        }

        markup += this.getListMarkup(items);

        return markup;
      });

    return itemsList.join('');
  }

  getListMarkup (items, customClass = '') {
    const itemsList = items.map(({ name, items }) => {
      const itemClass = this.getItemClass(name);
      let itemsMarkup = '';

      if (items) {
        itemsMarkup = this.getListMarkup(items, 'nav__list--inner');
      }

      return `<li
          class="${itemClass}"
          data-name="${name}"
        ><a
            href="#${name}"
            data-parent-nav-item="${name}"
            class="nav__link"
          >${name}</a>${itemsMarkup}</li>`;
    });

    return `<ul class="nav__list ${customClass}">${itemsList.join('')}</ul>`;
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
