import gridAutoRows from './grid-auto-rows';
import gridAutoColumns from './grid-auto-columns';

export default {
  name: 'grid-auto-columns, grid-auto-rows',
  alias: 'auto-tracks',

  link: 'https://www.w3.org/TR/css-grid-1/#auto-tracks',

  initValue: 'auto',

  appliesTo: '<a href="#grid-container">grid containers</a>',

  desc: `<p>If a grid item is positioned into a row or column that is not explicitly sized
by <a href="#section-grid-template-rows">grid-template-rows</a> or <a href="#section-grid-template-columns">grid-template-columns</a>, <a href="#implicit-grid-track">implicit grid tracks</a> are created to hold it.
This can happen either by explicitly positioning into a row or column that is out of range,
or by the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> creating additional rows or columns.
The <a href="#section-grid-auto-columns">grid-auto-columns</a> and <a href="#section-grid-auto-rows">grid-auto-rows</a> properties specify the size of such implicitly-created tracks.</p>

<p>If multiple track sizes are given, the pattern is repeated as necessary
to find the size of the implicit tracks.
The first <a href="#implicit-grid-track">implicit grid track</a> after the <a href="#explicit-grid">explicit grid</a> receives the first specified size, and so on forwards;
and the last <a href="#implicit-grid-track">implicit grid track</a> before the <a href="#explicit-grid">explicit grid</a> receives the last specified size, and so on backwards.</p>`,

  values: [
    {
      name: '&lt;track-size>+',
      alias: 'autotracks-track-size',
      desc: ''
    }
  ],

  customValues: [
    {
      name: '100px',
      current: true
    },
    {
      name: '150px'
    },
    {
      name: '1fr'
    }

  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-rows': '50px',
      'grid-auto-rows': '100px'
    }
  }],

  demos: [
    gridAutoRows,
    gridAutoColumns
  ]
};
