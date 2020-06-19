import columnGap from './column-gap';
import rowGap from './row-gap';

export default {
  name: 'row-gap, column-gap',

  alias: 'row-column-gap',

  link: 'https://www.w3.org/TR/css-align-3/#column-row-gap',

  initValue: 'normal',

  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="#grid-container">grid containers</a>',

  desc: `<p>These properties specify fixed-length <dfn id="gutter">gutters</dfn> between items in the container,
adding space between them—<wbr>in a manner to the <a href="#valdef-align-content-space-between">space-between</a> keyword
of the <a href="https://www.w3.org/TR/css-align-3/#content-distribution-properties">content-distribution properties</a>,
but of a fixed size instead of as a fraction of remaining space.
The <a href="#section-column-gap">column-gap</a> property specifies spacing between “columns”,
separating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-axis">inline axis</a> similar to inline-axis margin;
while <a href="#section-row-gap">row-gap</a> indicates spacing between “rows”,
separating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#block-axis">block axis</a>.</p>

<p>Gutters effect a minimum spacing between items:
additional spacing may be added by <a href="#section-justify-content">justify-content</a>/<a href="#section-align-content">align-content</a>.
Such additional space effectively increases the size of these <a href="#gutter">gutters</a>.</p>
  `,

  values: [
    {
      name: '&lt;length-percentage>',
      alias: 'typedef-length-percentage',
      desc: `<p class="">Specifies a gap between “rows” or “columns”,
as defined by the layout modes to which it applies;
see subsections below for details.</p>
     <p>Negative values are invalid. <a href="https://www.w3.org/TR/css-sizing-3/#percentage-sizing">As in the min size properties and margins/paddings</a> <a href="https://www.w3.org/TR/css-grid-1/#biblio-css-sizing-3">[CSS-SIZING-3]</a>,
percentages resolve against zero
for determining intrinsic size contributions,
but resolve against the box’s content box
when laying out the box’s contents.</p>`
    },

    {
      name: 'normal',
      alias: 'valdef-row-gap-normal',
      desc: `<p>The <a href="#valdef-row-gap-normal">normal</a> represents
a used value of <code>1em</code> on <a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>,
and a used value of <code>0px</code> in all other contexts.</p>`
    }
  ],

  demos: [
    rowGap,
    columnGap
  ]
};
