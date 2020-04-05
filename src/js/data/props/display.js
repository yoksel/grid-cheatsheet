export default {
  name: 'display',

  link: 'https://www.w3.org/TR/css3-grid-layout/#grid-model',

  initValue: '',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: 'all elements',

  desc: `<p>A <dfn>grid container</dfn> establishes a new <dfn>grid formatting context</dfn> for its contents.
  This is the same as establishing a block formatting context,
  except that grid layout is used instead of block layout:
  floats do not intrude into the grid container,
  and the grid container’s margins do not collapse with the margins of its contents.
  The contents of a <a href="#grid-container">grid container</a> are laid out into a <a href="#grid">grid</a>,
  with <a href="#grid-line">grid lines</a> forming the boundaries of each <a href="#grid-item">grid items</a>’ containing block.
  The <a href="https://www.w3.org/TR/css-overflow-3/#overflow">overflow</a> property applies to <a href="#grid-container">grid containers</a>.</p>

  <p>Grid containers are not block containers,
  and so some properties that were designed with the assumption of block layout
  don’t apply in the context of grid layout.
  In particular:</p>

  <ul>
    <li> <a href="https://www.w3.org/TR/CSS22/visuren.html#float">float</a> and <a href="https://www.w3.org/TR/CSS22/visuren.html#clear">clear</a> have no effect on a <a href="#grid-item">grid item</a>.
      However, the <a href="https://www.w3.org/TR/CSS22/visuren.html#float">float</a> property still affects the computed value of <a href="https://www.w3.org/TR/css-ruby-1/#display">display</a> on children of a grid container,
      as this occurs <em>before</em> <a href="#grid-item">grid items</a> are determined.
    </li>
    <li> <a href="https://www.w3.org/TR/css-inline-3/#vertical-align">vertical-align</a> has no effect on a grid item.
    </li>
    <li> the <a href="https://www.w3.org/TR/css-pseudo-4/#selectordef-first-line">::first-line</a> and <a href="https://www.w3.org/TR/css-pseudo-4/#selectordef-first-letter">::first-letter</a> pseudo-elements do not apply to <a href="#grid-container">grid containers</a>,
      and <a href="#grid-container">grid containers</a> do not contribute a first formatted line or first letter to their ancestors.
     </li>
  </ul>

  <p>If an element’s specified <a href="https://www.w3.org/TR/css-ruby-1/#display">display</a> is <a href="#valdef-display-inline-grid">inline-grid</a> and the element is floated or absolutely positioned,
  the computed value of <a href="https://www.w3.org/TR/css-ruby-1/#display">display</a> is <a href="#valdef-display-grid">grid</a>.
  The table in <a href="https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo">CSS 2.1 Chapter 9.7</a> is thus amended
  to contain an additional row,
  with <a href="#valdef-display-inline-grid">inline-grid</a> in the "Specified Value" column
  and <a href="#valdef-display-grid">grid</a> in the "Computed Value" column.</p>`,

  values: [
    {
      name: 'grid',
      desc: 'This value causes an element to generate a block-level <a href="#grid-container">grid container</a> box.',
      current: true
    },
    {
      name: 'inline-grid',
      desc: 'This value causes an element to generate an inline-level <a href="#grid-container">grid container</a> box.'
    }
  ],

  // htmlMarkup: `<div class="parent">
  //   <div class="child"></div>
  //   <div class="child"></div>
  //   <div class="child"></div>
  // </div>`,

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid'
    }
  }],

  demoBefore: 'Some text'
};
