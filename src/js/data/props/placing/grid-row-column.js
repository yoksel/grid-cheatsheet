import gridRow from './grid-row';
import gridColumn from './grid-column';

export default {
  name: 'grid-row, grid-column',
  alias: 'grid-row-column',

  link: 'https://www.w3.org/TR/css-grid-1/#placement-shorthands',

  initValue: 'see individual properties',

  appliesTo: '<a href="#grid-item">grid items</a> and absolutely-positioned boxes whose containing block is a <a href="#grid-container">grid container</a>',

  desc: `<p>The <a href="#grid-row">grid-row</a> and <a href="#grid-column">grid-column</a> properties are shorthands for <a href="#grid-row-start">grid-row-start</a>/<a href="#grid-row-end">grid-row-end</a> and <a href="#grid-column-start">grid-column-start</a>/<a href="#grid-column-end">grid-column-end</a>, respectively.</p>

<p>If two <a href="#typedef-grid-row-start-grid-line" title="Expands to: <custom-ident> | auto | span &amp;&amp; [ <integer> || <custom-ident> ] | <integer> &amp;&amp; <custom-ident>?">&lt;grid-line&gt;</a> values are specified,
the <a href="#grid-row-start">grid-row-start</a>/<a href="#grid-column-start">grid-column-start</a> longhand is set to the value before the slash,
and the <a href="#grid-row-end">grid-row-end</a>/<a href="#grid-column-end">grid-column-end</a> longhand is set to the value after the slash.</p>

<p>When the second value is omitted,
if the first value is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,
the <a href="#grid-row-end">grid-row-end</a>/<a href="#grid-column-end">grid-column-end</a> longhand is also set to that <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>;
otherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>`,

  values: [
    {
      name: '&lt;grid-line&gt; [ / &lt;grid-line&gt; ] ?',
      alias: 'grid-line-grid-line',
      desc: ''
    }
  ],

  customValues: [
    {
      name: 'center',
      current: true
    },
    {
      name: 'stretch'
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': '1fr 1fr',
        'justify-items': 'auto'
      }
    }
  ],

  demos: [
    gridRow,
    gridColumn
  ]
};
