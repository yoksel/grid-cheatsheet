export default {
  name: 'grid-auto-columns',

  link: 'https://www.w3.org/TR/css3-grid-layout/#auto-tracks',

  initValue: 'auto',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: `<p>If a grid item is positioned into a row or column that is not explicitly sized by <a href="#grid-template-rows">grid-template-rows</a> or <a href="#grid-template-columns">grid-template-columns</a>, <a href="#implicit-grid-track">implicit grid tracks</a> are created to hold it. This can happen either by explicitly positioning into a row or column that is out of range, or by the <a href="#grid-item-placement-algorithm">auto-placement algorithm</a> creating additional rows or columns.
  The <a href="#grid-auto-columns">grid-auto-columns</a> and <a href="#grid-auto-rows">grid-auto-rows</a> properties specify the size of such implicitly-created tracks.</p>

  <p>If multiple track sizes are given, the pattern is repeated as necessary to find the size of the implicit tracks. The first <a href="#implicit-grid-track">implicit grid track</a> after the <a href="#explicit-grid">explicit grid</a> receives the first specified size, and so on forwards; and the last <a href="#implicit-grid-track">implicit grid track</a> before the <a href="#explicit-grid">explicit grid</a> receives the last specified size, and so on backwards.</p>`,

  customValues: [
    {
      name: '75px',
      current: true
    },
    {
      name: '150px'
    }

  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': '30px',
      'grid-auto-columns': '75px',
      'grid-auto-flow': 'column'
    }
  }]
};
