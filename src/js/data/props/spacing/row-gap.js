export default {
  name: 'row-gap',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-row-gap',

  customValues: [
    {
      name: '50px',
      current: true
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
      'row-gap': '20px'
    }
  }]
};
