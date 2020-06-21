export default {
  name: 'grid-row',
  alias: 'grid-row',

  isFeaturedHighlighted: true,

  customValues: [
    {
      name: '2',
      current: true
    },
    {
      name: '1/2'
    },
    {
      name: '1/4'
    },
    {
      name: '2/4'
    },
    {
      name: '-1/-3'
    },
    {
      name: 'span 2/-1'
    },
    {
      name: '1/span 2'
    },
    {
      name: 'b-start'
    },
    {
      name: 'a-start/b-end'
    },
    {
      name: 'a-start/c-end'
    },
    {
      name: 'b-start/c-end'
    },
    {
      name: 'main-top'
    },
    {
      name: 'header-top/main-bottom'
    },
    {
      name: 'header-top/footer-bottom'
    },
    {
      name: 'main-top/footer-bottom'
    },
    {
      name: 'auto/auto'
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
        'grid-row': '1'
      }
    }
  ]
};
