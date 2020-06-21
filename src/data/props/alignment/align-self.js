export default {
  name: 'align-self',

  link: 'https://www.w3.org/TR/css-align-3/#align-self-property',

  initValue: 'auto',

  isFeaturedHighlighted: true,

  appliesTo: 'flex items, grid items, and absolutely-positioned boxes',

  desc: `<p>Aligns the box (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subject</a>)
within its containing block (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>)
along the block/column/cross axis of the alignment container:
the box’s outer edges are aligned within its alignment container <a href="https://www.w3.org/TR/css-align-3/#alignment-values">as described by its alignment value</a></p>

<p class="note" role="note"><span>Note:</span> <code>auto</code> margins,
because they effectively adjust the size of the margin area,
take precedence over <a href="#section-align-self">align-self</a>.</p>`,

  values: [
    {
      name: '<a href="#justify-self-auto">auto</a> | <a href="#justify-self-normal">normal</a> | <a href="#justify-self-stretch">stretch</a> | <a href="#baseline-position">&lt;baseline-position></a> | <a href="#overflow-position">&lt;overflow-position></a> ? <a href="#self-position">&lt;self-position></a>',
      alias: 'align-self-value',
      desc: ''
    }
  ],

  customValues: [
    /* Basic keywords */
    {
      name: 'auto',
      current: true
    },
    {
      name: 'normal'
    },
    {
      name: 'stretch'
    },
    /* Positional alignment */
    {
      name: 'center'
    },
    {
      name: 'start'
    },
    {
      name: 'end'
    },
    {
      name: 'self-start'
    },
    {
      name: 'self-end'
    },
    /* Baseline alignment */
    {
      name: 'baseline'
    },
    {
      name: 'first baseline'
    },
    {
      name: 'last baseline'
    }

  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <div class="child">Ut enim ad minim veniam commodo consequat exercitation</div>
    <div class="child child--featured">Duis aute irure dolor</div>
    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut</div>
    <div class="child">Excepteur</div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template': '150px 150px / 120px 120px'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'align-self': 'auto'
      }
    }
  ]
};
