export default {
  name: 'justify-content',

  link: 'https://www.w3.org/TR/css-align-3/#propdef-justify-content',

  initValue: 'normal',

  appliesTo: 'multicol containers, flex containers, and grid containers',

  desc: '',

  values: [
    {
      name: 'normal | &lt;content-distribution> | &lt;overflow-position>? [ &lt;content-position> | left | right ]',
      alias: 'justify-content-value',
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
    {
      name: 'left'
    },
    {
      name: 'right'
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
        'justify-content': 'auto'
      }
    }
  ]
};
