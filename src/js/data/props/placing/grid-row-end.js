export default {
  name: 'grid-row-end',

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
      name: 'a-end'
    },
    {
      name: 'b-end'
    },
    {
      name: 'c-end'
    },
    {
      name: 'header-bottom'
    },
    {
      name: 'main-bottom'
    },
    {
      name: 'footer-bottom'
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
        'grid-template-rows': '[header-top] 1fr [header-bottom main-top] 1fr [main-bottom footer-top] 1fr [footer-bottom]',
        'grid-template-columns': 'repeat(3, 1fr)',
        'grid-template-areas': '"a a a" \n "b b b" \n "c c c"'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'grid-row-end': '1'
      }
    }
  ]
};
