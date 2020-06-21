export default {
  name: 'column-gap',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-column-gap',

  customValues: [
    {
      name: '100px',
      current: true
    },
    {
      name: '50%'
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
      'column-gap': '20px'
    }
  }]
};
