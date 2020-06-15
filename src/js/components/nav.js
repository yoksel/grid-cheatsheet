import { createElement } from '../helpers';

export class Nav {
  constructor ({
    groups,
    targetElem
  }) {
    this._groups = groups;
    this._current = null;

    const navMarkup = this._getNavMarkup();

    const navElem = createElement(`<nav class="nav">${navMarkup}</nav>`);
    this._markerElem = createElement('<span class="nav__marker"></span>');

    targetElem.prepend(navElem);
    navElem.prepend(this._markerElem);

    const firstNavItem = navElem.querySelector('.nav__item');

    this.setCurrentItem(firstNavItem);

    navElem.addEventListener('click', (ev) => {
      const navItem = ev.target.closest('.nav__item');

      if (!navItem) {
        return;
      }
      this.setCurrentItem(navItem);
    });
  }

  setCurrentItem (elem) {
    if (this._currentElem) {
      this._currentElem.classList.remove('nav__item--current');
    }

    this._markerElem.style.top = `${elem.offsetTop}px`;

    elem.classList.add('nav__item--current');

    this._currentElem = elem;
  }

  _getNavMarkup () {
    const itemsList = Object.entries(this._groups)
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

        markup += this._getListMarkup(items);

        return markup;
      });

    return itemsList.join('');
  }

  _getListMarkup (items, customClass = '') {
    const itemsList = items.map(({ alias, name, children }) => {
      const itemClass = 'nav__item';
      let itemsMarkup = '';
      const id = alias || name;

      if (children) {
        itemsMarkup = this._getListMarkup(children, 'nav__list--inner');
      }

      return `<li
          class="${itemClass}"
          data-name="section-${id}"
        ><a
            href="#section-${id}"
            class="nav__link"
          >${name}</a>${itemsMarkup}</li>`;
    });

    return `<ul class="nav__list ${customClass}">${itemsList.join('')}</ul>`;
  }
}
