import gridLineValues from './grid-line-values';
import gridRowStart from './grid-row-start';
import gridColumnStart from './grid-column-start';
import gridRowEnd from './grid-row-end';
import gridRowStartEnd from './grid-row-start-end';
import gridColumnStartEnd from './grid-column-start-end';
import gridColumnEnd from './grid-column-end';

export default {
  name: 'grid-row-start, grid-column-start, grid-row-end, grid-column-end',
  alias: 'line-placement',

  link: 'https://www.w3.org/TR/css-grid-1/#line-placement',

  initValue: 'auto',

  appliesTo: '<a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> and absolutely-positioned boxes whose containing block is a <a href="#grid-container">grid container</a>',

  desc: `<p>The <a href="#section-grid-row-start">grid-row-start</a>, <a href="#section-grid-column-start">grid-column-start</a>, <a href="#section-grid-row-end">grid-row-end</a>, and <a href="#section-grid-column-end">grid-column-end</a> properties
determine a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s size and location within the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> by contributing a line, a span, or nothing (automatic)
to its <a href="#grid-placement">grid placement</a>,
thereby specifying the <a href="https://www.w3.org/TR/css-writing-modes-3/#inline-start">inline-start</a>, <a href="https://www.w3.org/TR/css-writing-modes-3/#block-start">block-start</a>, <a href="https://www.w3.org/TR/css-writing-modes-3/#inline-end">inline-end</a>, and <a href="https://www.w3.org/TR/css-writing-modes-3/#block-end">block-end</a> edges of its <a href="#section-grid-area">grid area</a>.</p>`,

  values: [
    {
      name: '&lt;grid-line&gt;',
      alias: 'grid-line-value',
      desc: ''
    }
  ],

  demos: [
    gridRowStart,
    gridRowEnd,
    gridRowStartEnd,
    gridColumnStart,
    gridColumnEnd,
    gridColumnStartEnd
  ],

  children: [
    gridLineValues
  ]
};
