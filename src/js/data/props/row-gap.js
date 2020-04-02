export default {
  name: 'row-gap',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-row-gap',

  initValue: 'normal',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="https://www.w3.org/TR/css-grid-1/#grid-container">grid containers</a>',

  desc: `<p>These properties specify fixed-length <dfn>gutters</dfn> between items in the container,
  adding space between them—<wbr>in a manner to the <dfn>space-between</dfn> keyword
  of the <dfn>content-distribution properties</dfn>,
  but of a fixed size instead of as a fraction of remaining space.
  The <b>column-gap</b> property specifies spacing between “columns”,
  separating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-axis">inline axis</a> similar to inline-axis margin;
  while <b>row-gap</b> indicates spacing between “rows”,
  separating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#block-axis">block axis</a>.</p>
  `,

  customValues: [
    {
      name: '50px',
      current: true
    },
    {
      name: '10%',
    },
    {
      name: 'normal',
    },
  ],

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template': '1fr 1fr/ 1fr 1fr',
      'row-gap': '20px'
    }
  }],
};
