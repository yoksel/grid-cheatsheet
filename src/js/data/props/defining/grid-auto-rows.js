export default {
  name: 'grid-auto-rows',

  target: 'grid containers',

  targetForDemo: 'grid containers',

  customValues: [
    {
      name: '100px',
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
      'grid-template-rows': '50px',
      'grid-auto-rows': '100px'
    }
  }]
};
