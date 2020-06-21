export default {
  name: 'grid-auto-columns',

  customValues: [
    {
      name: '75px',
      current: true
    },
    {
      name: '150px'
    },
    {
      name: '1fr'
    }

  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': '50px',
      'grid-auto-columns': '75px',
      'grid-auto-flow': 'column'
    }
  }]
};
