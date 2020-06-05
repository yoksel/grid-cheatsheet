export default {
  name: 'grid-template-columns',

  target: 'grid containers',

  targetForDemo: 'grid containers',

  customValues: [
    {
      name: '1fr 1fr',
      current: true
    },
    {
      name: '1fr 2fr'
    },
    {
      name: '50px 100px 1fr'
    },
    {
      name: 'repeat(2, 1fr auto)'
    },
    {
      id: 'columns-named-lines',
      name: '[aside-start] 1fr [aside-end content-start] 3fr [content-end]'
    },
    {
      name: 'none'
    }
  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': '1fr auto'
      }
    },
    {
      selector: '.child:nth-child(1)',
      props: {
        'grid-column': 'aside-start / content-end'
      },
      valueId: 'columns-named-lines'
    },
    {
      selector: '.child:nth-child(2)',
      props: {
        'grid-column': 'content'
      },
      valueId: 'columns-named-lines'
    }
  ]
};
