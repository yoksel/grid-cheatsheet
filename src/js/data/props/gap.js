export default {
  name: 'gap',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-gap',

  initValue: 'normal',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="https://www.w3.org/TR/css-grid-1/#grid-container">grid containers</a>',

  desc: `<p>This property is a shorthand that sets row-gap and column-gap in one declaration. If &lt;‘column-gap’> is omitted, it’s set to the same value as &lt;‘row-gap’>.</p>

  <p class="note">
  Note: The gap property is only one component of the visible “gutter” or “alley” created between boxes. Margins, padding, or the use of distributed alignment may increase the visible separation between boxes beyond what is specified in gap.
  </p>
  `,

  customValues: [
    {
      name: '20px',
      current: true
    },
    {
      name: '150px 20px'
    },
    {
      name: '10%'
    },
    {
      name: 'normal'
    }
  ],

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template': '1fr 1fr/ 1fr 1fr',
      gap: '20px'
    }
  }]
};
