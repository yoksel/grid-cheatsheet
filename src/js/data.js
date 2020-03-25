var accentColor = 'khaki';
var data = [];


data[data.length] = {
    name: 'display',

    link: 'https://www.w3.org/TR/css3-grid-layout/#grid-model',

    initValue: '',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'all elements',

    desc: `<p>A <dfn >grid container</dfn> establishes a new <dfn >grid formatting context</dfn> for its contents. This is the same as establishing a block formatting context, except that grid layout is used instead of block layout: floats do not intrude into the grid container, and the grid container’s margins do not collapse with the margins of its contents. The contents of a <i>grid container</i> are laid out into a <i>grid</i>, with <i>grid lines</i> forming the boundaries of each <i>grid items</i>’ containing block. The <a href=\'https://www.w3.org/TR/css-overflow-3/#propdef-overflow\' >overflow</a> property applies to <i>grid containers</i>.</p><p>Grid containers are not block containers, and so some properties that were designed with the assumption of block layout don’t apply in the context of grid layout. In particular:</p>

      <ul>
        <li><code>float</code> and <code>clear</code> have no effect on a <dfn>grid item</dfn>.
          However, the <code>float</code> property still affects the computed value of <code>display</code> on children of a grid container,
          as this occurs <em>before</em> <dfn>grid items</dfn> are determined.
        </li>
        <li><code>vertical-align</code> has no effect on a grid item.
        </li>
        <li>the <code>::first-line</code> and <code>::first-letter</code> pseudo-elements do not apply to <dfn>grid containers</dfn>,
          and <dfn>grid containers</dfn> do not contribute a first formatted line or first letter to their ancestors.
        </li>
     </ul>

    <p>If an element’s specified <code>display</code> is <i>inline-grid</i> and the element is floated or absolutely positioned, the computed value of <code>display</code> is <i>grid</i>. The table in <a href='https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo'>CSS 2.1 Chapter 9.7</a> is thus amended to contain an additional row, with <i>inline-grid</i> in the 'Specified Value' column and <i>grid</i> in the 'Computed Value' column.</p>`,

    values: [
      {
        'name': 'grid',
        'desc': 'This value causes an element to generate a block-level <i>grid container</i> box.',
        current: true
      },
      {
        'name': 'inline-grid',
        'desc': 'This value causes an element to generate an inline-level <i>grid container</i> box.'
      }
    ],

    htmlMarkup: `<div class="parent">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>`,

    cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'grid',
      }
    }],

    demoBefore: 'Some text'
};
