export default {
  name: 'align-items',

  link: 'https://www.w3.org/TR/css-align-3/#align-items-property',

  initValue: 'normal',

  appliesTo: 'all elements',

  desc: `<p>This property specifies the default <a href="#section-align-self">align-self</a> for all of the child boxes (including anonymous boxes) participating in this box’s formatting context.</p>

<p>Values have no special handling and are merely referenced by <a href="#section-align-self">align-self</a>.</p>`,

  values: [
    {
      name: 'normal | stretch | &lt;baseline-position> | [ &lt;overflow-position>? &lt;self-position> ]',
      alias: 'align-items-value',
      desc: ''
    }
  ],

  customValues: [
    /* Basic keywords */
    {
      name: 'normal',
      current: true
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
    <div class="child">Ut enim ad minim veniam commodo consequat exercitation ullamco</div>
    <div class="child">Duis aute irure dolor</div>
    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut</div>
    <div class="child">Excepteur</div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template': '150px 150px / 150px 150px',
        'align-items': 'auto'
      }
    }
  ]
};
