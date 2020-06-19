export default {
  name: 'grid-area',
  alias: 'grid-area',

  link: 'https://www.w3.org/TR/css-grid-1/#propdef-grid-area',

  initValue: 'see individual properties',

  appliesTo: '<a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> and absolutely-positioned boxes whose containing block is a <a href="#grid-container">grid container</a>',

  desc: `<p>If four <a href="#section-grid-line-values" title="Expands to: <custom-ident> | auto | span &amp;&amp; [ <integer> || <custom-ident> ] | <integer> &amp;&amp; <custom-ident>?">&lt;grid-line&gt;</a> values are specified, <a href="#section-grid-row-start">grid-row-start</a> is set to the first value, <a href="#section-grid-column-start">grid-column-start</a> is set to the second value, <a href="#section-grid-row-end">grid-row-end</a> is set to the third value,
and <a href="#section-grid-column-end">grid-column-end</a> is set to the fourth value.</p>

<p>When <a href="#section-grid-column-end">grid-column-end</a> is omitted,
if <a href="#section-grid-column-start">grid-column-start</a> is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>, <a href="#section-grid-column-end">grid-column-end</a> is set to that <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>;
otherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>

<p>When <a href="#section-grid-row-end">grid-row-end</a> is omitted,
if <a href="#section-grid-row-start">grid-row-start</a> is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>, <a href="#section-grid-row-end">grid-row-end</a> is set to that <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>;
otherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>

<p>When <a href="#section-grid-column-start">grid-column-start</a> is omitted,
if <a href="#section-grid-row-start">grid-row-start</a> is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,
all four longhands are set to that value.
Otherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>

<p class="note" role="note"><span>Note:</span> The resolution order for this shorthand is row-start/column-start/row-end/column-end,
which goes CCW for LTR pages,
the opposite direction of the related 4-edge properties using physical directions, like <a href="https://www.w3.org/TR/CSS21/box.html#margin">margin</a>.</p>`,

  isFeaturedHighlighted: true,

  values: [
    {
      name: '<a href="#section-grid-line-values">&lt;grid-line&gt;</a> [ / <a href="#section-grid-line-values">&lt;grid-line&gt;</a> ]{0,3}',
      alias: 'grid-line-grid-line',
      desc: ''
    }
  ],

  customValues: [
    {
      name: '1',
      current: true
    },
    {
      name: '2/2'
    },
    {
      name: '1/2/3/4'
    },
    {
      name: 'a'
    },
    {
      name: 'b'
    },
    {
      name: 'c'
    },
    {
      name: 'd'
    },
    {
      name: 'b-start'
    },
    {
      name: 'b-start/main-begin'
    },
    {
      name: 'b-start/main-begin/c-end'
    },
    {
      name: 'b-start/main-begin/c-end/d-end'
    }
  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child child--featured"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': '[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]',
        'grid-template-rows': 'repeat(3, 1fr)',
        'grid-template-areas': '"a a d" \n "b b d" \n "c c d"'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'grid-area': '1'
      }
    }
  ]
};
