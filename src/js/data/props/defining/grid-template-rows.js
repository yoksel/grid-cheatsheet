export default {
  name: 'grid-template-rows',

  target: 'grid containers',

  targetForDemo: 'grid containers',

  customValues: [
    {
      name: '1fr 1fr',
      current: true
    },
    {
      name: '1fr 150px'
    },
    {
      name: 'repeat(2, 2fr  1fr)'
    },
    {
      id: 'rows-named-lines',
      name: '[header-start] 1fr [header-end content-start] min-content [content-end footer-start] 1fr [footer-end]'
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
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': 'repeat(3, 1fr)',
        'grid-template-rows': '1fr auto'
      }
    },
    {
      selector: '.child:nth-child(1)',
      props: {
        'grid-row': 'header-start / footer-end'
      },
      valueId: 'rows-named-lines'
    },
    {
      selector: '.child:nth-child(2)',
      props: {
        'grid-row': 'header-start / content-end'
      },
      valueId: 'rows-named-lines'
    }
  ]
};
