export default {
  name: 'Named lines',
  alias: 'named-lines',
  propDemoName: 'grid-template-columns',

  link: 'https://www.w3.org/TR/css-grid-1/#named-lines',

  desc: `<p>While <a href="#grid-line">grid lines</a> can always be referred to by their numerical index, <dfn id="named-line">named lines</dfn> can make the <a href="#grid-placement-property">grid-placement properties</a> easier to understand and maintain.
Lines can be explicitly named in the <a href="#grid-template-rows">grid-template-rows</a> and <a href="#grid-template-columns">grid-template-columns</a> properties,
or <a href="#implicit-named-lines">implicitly named</a> by creating <a href="#named-grid-area">named grid areas</a> with the <a href="#grid-template-areas">grid-template-areas</a> property.</p>

<p>A line name cannot be <span class="css">span</span>,
i.e. the <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a> in the <a href="#typedef-line-names">&lt;line-names&gt;</a> production
excludes the keyword <span class="css">span</span>.</p>`,

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  customValues: [
    {
      name: `[first nav-start] 150px
             [main-start] 1fr [last]`,
      current: true
    },
    {
      name: `[first nav-start] 150px
             [main-start] 3fr
             [main-end aside-start] 1fr
             [last]`
    }
  ],

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-columns': `[first nav-start] 150px
                                  [main-start] 1fr [last]`,
        'grid-template-rows': `[first header-start] 50px
                              [main-start] 1fr
                              [footer-start] 50px [last]`
      }
    },
    {
      selector: '.child:nth-child(1)',
      props: {
        'grid-column': 'first / last'
      }
    },
    {
      selector: '.child:nth-child(2)',
      props: {
        'grid-row': 'main-start / last'
      }
    }
  ]
};
