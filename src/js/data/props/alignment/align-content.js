export default {
  name: 'align-content',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-align-content',

  initValue: 'normal',

  appliesTo: 'block containers, multicol containers, flex containers, and grid containers',

  desc: '',

  values: [
    {
      name: 'normal | &lt;baseline-position> | &lt;content-distribution> | &lt;overflow-position>? &lt;content-position>',
      alias: 'align-content-value',
      desc: ''
    }
  ],

  customValues: [
    /* Basic keywords */
    {
      name: 'normal',
      current: true
    },
    {
      name: 'stretch'
    },
    /* Positional alignment */
    {
      name: 'center'
    },
    {
      name: 'start'
    },
    {
      name: 'end'
    },
    /* Baseline alignment */
    {
      name: 'space-around'
    },
    {
      name: 'space-between'
    },
    {
      name: 'space-evenly'
    },
    /* Overflow alignment (for positional alignment only) */
    {
      name: 'safe center'
    },
    {
      name: 'unsafe center'
    }

  ],

  htmlMarkup: `<div class="parent">
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
        'grid-template': '100px 100px / 100px 100px',
        height: '250px',
        'align-content': 'auto'
      }
    }
  ]
};
