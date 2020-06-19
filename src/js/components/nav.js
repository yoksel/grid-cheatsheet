import { createElement, isVisible, debounce } from '../helpers';

export class Nav {
  constructor ({
    groups,
    sectionsComponents
  }) {
    this._groups = groups;
    // While get marker position
    // need to handle first the last of sections
    this._sectionsComponents = sectionsComponents.reverse();
    this._current = null;
    this._isWindowScrolling = false;

    this.element = this._getNavElement();

    this._markerElement = createElement('<span class="nav__marker"></span>');
    this.element.prepend(this._markerElement);

    this._navItemsBySectionId = this._getItemsBySectionId();

    this._navClickHandler = this._navClickHandler.bind(this);
    this.moveMarker = this.moveMarker.bind(this);
    this._windowScrollHandler = this._windowScrollHandler.bind(this);
    this._windowScrollEndHandler = this._windowScrollEndHandler.bind(this);

    this.element.addEventListener('click', this._navClickHandler);

    window.addEventListener('scroll', this._windowScrollHandler);
    window.addEventListener('scrollend', this._windowScrollEndHandler);
  }

  setCurrentItem (element) {
    if (element === this._currentElement) {
      return;
    }

    if (this._currentElement) {
      this._currentElement.classList.remove('nav__item--current');
    }

    this._markerElement.style.top = `${element.offsetTop}px`;

    element.classList.add('nav__item--current');

    this._currentElement = element;

    this._isWindowScrolling = true;
  }

  _getItemsBySectionId () {
    const navItems = Array.from(this.element.querySelectorAll('.nav__item, .nav__subheader'));

    const navItemsById = navItems.reduce((prev, item) => {
      prev[item.dataset.name] = item;

      return prev;
    }, {});

    return this._sectionsComponents.reduce((prev, item) => {
      const sectionId = `section-${item.id}`;
      let navItem = navItemsById[sectionId];

      if (!navItem) {
        navItem = navItemsById[`section-${item.parentId}`];
      }

      prev[sectionId] = navItem;

      return prev;
    }, {});
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
          markup += `<h3
            class="nav__subheader"
            data-name="section-${id}"
          >
            <a
              class="nav__subheader-link"
              href="#section-${id}"
              >${title}</a>
          </h3>`;
        }

        markup += this._getListMarkup(id, items);

        return markup;
      });

    return itemsList.join('');
  }

  _getListMarkup (parentId, items, customClass = '') {
    const itemsList = items.map(({ alias, name, children }) => {
      const itemClass = 'nav__item';
      let itemsMarkup = '';
      const id = alias || name;

      if (children) {
        itemsMarkup = this._getListMarkup(id, children, 'nav__list--inner');
      }

      return `<li
          class="${itemClass}"
          data-name="section-${id}"
          data-parent-name="section-${parentId}"
        ><a
            href="#section-${id}"
            class="nav__link"
          >${name}</a>${itemsMarkup}</li>`;
    });

    return `<ul class="nav__list ${customClass}">${itemsList.join('')}</ul>`;
  }

  _navClickHandler (ev) {
    const navItem = ev.target.closest('.nav__item, .nav__subheader');

    if (!navItem) {
      return;
    }

    this.setCurrentItem(navItem);
  }

  moveMarker () {
    for (const section of this._sectionsComponents) {
      const navItemById = this._navItemsBySectionId[`section-${section.id}`];

      if (isVisible(section.element) && navItemById) {
        this.setCurrentItem(navItemById);
        break;
      }
    }
  }

  _windowScrollHandler () {
    if (this._isWindowScrolling) {
      return;
    }

    debounce(this.moveMarker, 500)();
  }

  _windowScrollEndHandler () {
    // Prevent running _windowScrollHandler
    // when scroll was initiated by click
    this._isWindowScrolling = false;
  }
}
