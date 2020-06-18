export default {
  name: 'justify-self',

  link: 'https://www.w3.org/TR/css-align-3/#justify-self-property',

  initValue: 'auto',

  isFeaturedHighlighted: true,

  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="#grid-container">grid containers</a>',

  desc: `<p>Justifies the box (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subject</a>)
within its containing block (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>)
along the inline/row/main axis of the alignment container:
the box’s outer edges are aligned within its alignment container <a href="https://www.w3.org/TR/css-align-3/#alignment-values">as described by its alignment value</a>.</p>

<p class="note" role="note"><span>Note:</span> <code>auto</code> margins,
because they effectively adjust the size of the margin area,
take precedence over <a href="#section-justify-self">justify-self</a>.</p>`,

  values: [
    {
      name: 'auto | normal | stretch | &lt;baseline-position&gt; | &lt;overflow-position&gt; ? [ &lt;self-position&gt; | left | right ]',
      alias: 'justify-self-value',
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
    <div class="child child--featured child--rtl"><code>direction: rtl</code></div>
    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
    <div class="child child--featured">Duisauteiruredolorenimminimveniam</div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': '1fr 1fr'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'justify-self': 'auto'
      }
    }
  ]
};
