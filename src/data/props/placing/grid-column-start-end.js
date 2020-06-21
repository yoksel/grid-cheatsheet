export default {
  name: 'grid-column-start + grid-column-end',
  alias: 'grid-column-start-end',

  isFeaturedHighlighted: true,

  customValues: [
    {
      name: '1/2',
      current: true
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
      name: 'a-start/b-end'
    },
    {
      name: 'a-start/c-end'
    },
    {
      name: 'b-start/c-end'
    },
    {
      name: 'aside-begin/main-end'
    },
    {
      name: 'aside-begin/aside2-end'
    },
    {
      name: 'main-begin/aside2-end'
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
        'grid-template-columns': '[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]',
        'grid-template-rows': 'repeat(3, 1fr)',
        'grid-template-areas': '"a b c" \n "a b c" \n "a b c"'
      }
    },
    {
      selector: '.child--featured',
      props: {
        'grid-column-start': '1',
        'grid-column-end': '-1'
      }
    }
  ]
};
