import { createElement } from '../helpers';

export class Nav {
  constructor ({
    groups,
    targetElement
  }) {
    this._groups = groups;
    this._current = null;

    const navElement = this._getNavElement();
    const firstNavItem = navElement.querySelector('.nav__item');

    this._markerElement = createElement('<span class="nav__marker"></span>');
    navElement.prepend(this._markerElement);

    targetElement.prepend(navElement);

    this.setCurrentItem(firstNavItem);

    this._navClickHandler = this._navClickHandler.bind(this);

    navElement.addEventListener('click', this._navClickHandler);
  }

  setCurrentItem (element) {
    if (this._currentElement) {
      this._currentElement.classList.remove('nav__item--current');
    }

    this._markerElement.style.top = `${element.offsetTop}px`;

    element.classList.add('nav__item--current');

    this._currentElement = element;
  }

  _getNavElement () {
    const navMarkup = this._getNavContentMarkup();

    return createElement(`<nav class="nav">
      <h2 class="visually-hidden">Navigation</h2>
      ${navMarkup}
    </nav>`);
  }

  _getNavContentMarkup () {
    const itemsList = Object.entries(this._groups)
      .map(([id, { title, items }]) => {
        let markup = '';

        if (title) {
          markup += `<h3 class="nav__subheader">
            <a
              class="nav__subheader-link"
              href="#group-${id}"
              >${title}</a>
          </h3>`;
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

  _navClickHandler (ev) {
    const navItem = ev.target.closest('.nav__item');

    if (!navItem) {
      return;
    }

    this.setCurrentItem(navItem);
  }
}
