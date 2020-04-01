import { createElement } from './helpers/index.js';

const codeOffset = '  ';

export class StylesController {
  constructor ({
    data,
    current,
    codesElem,
    classList
  }) {
    this.data = data;
    this.current = current;
    this.classList = classList;
    this.stylesElem = this.getStylesElem();
    this.codesElem = codesElem;

    this.setStyles();
  }

  getStylesElem () {
    const elem = createElement(`<style id="style-${this.data.name}"></style>`);
    document.head.append(elem);

    return elem;
  }

  getStyles () {
    const rules = this.data.cssRules;
    const parentClass = `.${this.classList.join(' ')}`;
    let visibleStyles = '';
    let hiddenStyles = '';

    if (!rules) {
      return {};
    }

    for (const { selector, props, valueId } of rules) {
      let propsListHidden = [];
      let propsListVisible = [];
      const hiddenSelector = [parentClass, selector].join(' ');

      if (valueId && valueId !== this.current.id) {
        continue;
      }

      for (let [name, value] of Object.entries(props)) {
        if (name === this.data.name) {
          value = this.current.value;
        }

        let propString = `${name}: ${value};\n`;

        propsListHidden.push(propString);

        if (name === this.data.name) {
          propString = `<mark>${propString}</mark>`;
        }

        propsListVisible.push(propString);
      }

      propsListVisible = propsListVisible
        .map(prop => {
          return (
            `<div class="demo__code-prop">${prop}</div>`
          )
        });

      hiddenStyles += `${hiddenSelector} {\n${propsListHidden.join('')}}\n`;
      visibleStyles += `${selector} {${propsListVisible.join('')}}<br><br>`;
    }

    return {
      visibleStyles,
      hiddenStyles
    };
  }

  setStyles () {
    this.styles = this.getStyles();
    this.stylesElem.innerHTML = this.styles.hiddenStyles;
    this.codesElem.innerHTML = this.styles.visibleStyles;
  }

  update (current) {
    this.current = current;
    this.setStyles();
  }
}
