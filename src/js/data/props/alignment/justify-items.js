export default {
  name: 'justify-items',

  link: 'https://www.w3.org/TR/css-align-3/#justify-items-property',

  initValue: 'legacy',

  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="#grid-container">grid containers</a>',

  desc: '<p>This property specifies the default <a href="#section-justify-self">justify-self</a> for all of the child boxes (including anonymous boxes) participating in this box’s formatting context.</p>',

  values: [
    {
      name: '<a href="#justify-self-normal">normal</a> | <a href="#justify-self-stretch">stretch</a> | <a href="#baseline-position">&lt;baseline-position></a> | <a href="#overflow-position">&lt;overflow-position></a> ? [ <a href="#self-position">&lt;self-position></a> | left | right ] | <a href="#justify-items-legacy">legacy</a> | <a href="#justify-items-legacy">legacy</a> && [ left | right | center ]',
      alias: 'justify-items-value',
      desc: ''
    }
  ],

  customValues: [
    {
      name: 'legacy',
      current: true
    },
    /* Basic keywords */
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
    /* Overflow alignment (for positional alignment only) */
    {
      name: 'safe center'
    },
    {
      name: 'unsafe center'
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
    {
      name: 'left'
    },
    {
      name: 'right'
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
    <div class="child">Ut enim ad minim veniam</div>
    <div class="child child--rtl"><code>direction: rtl</code></div>
    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
    <div class="child child--featured">Duisauteiruredolorenimminimveniam</div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': '1fr 1fr',
        'justify-items': 'auto'
      }
    }
  ]
};
