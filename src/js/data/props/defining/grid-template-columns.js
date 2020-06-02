export default {
  name: 'grid-template-columns',

  link: 'https://www.w3.org/TR/css3-grid-layout/#track-sizing',

  initValue: 'none',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: `<p>These properties specify,
    as a space-separated <dfn>track list</dfn>,
    the line names and <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> of the <a href="#grid">grid</a>.
    The <a href="#grid-template-columns">grid-template-columns</a> property specifies the <a href="#track-list">track list</a> for the grid’s columns,
    while <a href="#grid-template-rows">grid-template-rows</a> specifies the <a href="#track-list">track list</a> for the grid’s rows.</p>`,

  values: [
    {
      name: 'none',
      desc: `<p>Indicates that no <a href="#explicit-grid">explicit</a> grid tracks are created by this property
    (though <a href="#explicit-grid">explicit grid</a> tracks could still be created by <a href="#grid-template-areas">grid-template-areas</a>).</p>

     <p class="note" role="note"><span>Note:</span> In the absence of an <a href="#explicit-grid">explicit grid</a> any rows/columns will be <a href="#implicit-grids">implicitly generated</a>,
      and their size will be determined by the <a href="#grid-auto-rows">grid-auto-rows</a> and <a href="#grid-auto-columns">grid-auto-columns</a> properties.</p>`
    },
    {
      name: '&lt;track-list> | &lt;auto-track-list>',
      desc: `Specifies the <a href="#track-list">track list</a> as a series of <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> and line names.
      Each <dfn data-lt="track sizing function|sizing function">track sizing function</dfn> can be specified as a length,
      a percentage of the <a href="#grid-container">grid container</a>’s size,
      a measurement of the contents occupying the column or row,
      or a fraction of the free space in the grid.
      It can also be specified as a range using the <a href="#valdef-grid-template-columns-minmax">minmax()</a> notation,
      which can combine any of the previously mentioned mechanisms
      to specify separate <a href="#min-track-sizing-function">min</a> and <a href="#max-track-sizing-function">max track sizing functions</a> for the column or row.`
    }
  ],

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
      id: 'named-lines',
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
      valueId: 'named-lines'
    },
    {
      selector: '.child:nth-child(2)',
      props: {
        'grid-column': 'content'
      },
      valueId: 'named-lines'
    }
  ]
};
