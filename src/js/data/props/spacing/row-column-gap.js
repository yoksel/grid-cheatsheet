import columnGap from './column-gap';
import rowGap from './row-gap';
import gapValues from './gap-values';

export default {
  name: 'row-gap, column-gap',

  link: 'https://www.w3.org/TR/css-align-3/#column-row-gap',

  initValue: 'normal',

  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="https://www.w3.org/TR/css-grid-1/#grid-container">grid containers</a>',

  desc: `<p>These properties specify fixed-length <dfn id="gutter">gutters</dfn> between items in the container,
adding space between them—<wbr>in a manner to the <a href="#valdef-align-content-space-between">space-between</a> keyword
of the <a href="#content-distribution-properties">content-distribution properties</a>,
but of a fixed size instead of as a fraction of remaining space.
The <a href="#column-gap">column-gap</a> property specifies spacing between “columns”,
separating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-axis">inline axis</a> similar to <span>inline-axis</span> margin;
while <a href="#row-gap">row-gap</a> indicates spacing between “rows”,
separating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#block-axis">block axis</a>.</p>

<p>Gutters effect a minimum spacing between items:
additional spacing may be added by <a href="#justify-content">justify-content</a>/<a href="#align-content">align-content</a>.
Such additional space effectively increases the size of these <a href="#gutter">gutters</a>.</p>
  `,

  values: [
    {
      name: 'normal | &lt;length-percentage>',
      desc: ''
    }
  ],

  children: [
    gapValues
  ],

  demos: [
    rowGap,
    columnGap
  ]
};
