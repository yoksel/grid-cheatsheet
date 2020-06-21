export default {
  name: 'grid-column-start',

  isFeaturedHighlighted: true,

  customValues: [
    {
      name: '1',
      current: true
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: 'span 2'
    },
    {
      name: 'a-start'
    },
    {
      name: 'b-start'
    },
    {
      name: 'c-start'
    },
    {
      name: 'aside-begin'
    },
    {
      name: 'main-begin'
    },
    {
      name: 'aside2-begin'
    },
    {
      name: 'auto'
    }
  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child child--featured"></div>
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
        'grid-template-columns': '[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]',
        'grid-template-rows': 'repeat(3, 1fr)',
        'grid-template-areas': '"a b c" \n "a b c" \n "a b c"'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'grid-column-start': '1'
      }
    }
  ]
};
