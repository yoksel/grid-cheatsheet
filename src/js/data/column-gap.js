export default {
  name: 'column-gap',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-column-gap',

  initValue: 'normal',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="https://www.w3.org/TR/css-grid-1/#grid-container">grid containers</a>',

  desc: `See description in <a href="#desc-row-gap">row-gap</a>.
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
