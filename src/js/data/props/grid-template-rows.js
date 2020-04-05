export default {
  name: `grid-template-rows`,

  link: `https://www.w3.org/TR/css3-grid-layout/#track-sizing`,

  initValue: `none`,

  target: `grid containers`,

  targetForDemo: `grid containers`,
  appliesTo: `grid containers`,

  desc: `<p>These properties specify,
    as a space-separated <dfn>track list</dfn>,
    the line names and <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> of the <a href="#grid">grid</a>.
    The <a href="#grid-template-columns">grid-template-columns</a> property specifies the <a href="#track-list">track list</a> for the grid’s columns,
    while <a href="#grid-template-rows">grid-template-rows</a> specifies the <a href="#track-list">track list</a> for the grid’s rows.</p>`,

  values: [
    {
      'name': `none`,
      'desc': `<p>Indicates that no <a href="#explicit-grid">explicit</a> grid tracks are created by this property
    (though <a href="#explicit-grid">explicit grid</a> tracks could still be created by <a href="#grid-template-areas">grid-template-areas</a>).</p>

     <p class="note" role="note"><span>Note:</span> In the absence of an <a href="#explicit-grid">explicit grid</a> any rows/columns will be <a href="#implicit-grids">implicitly generated</a>,
      and their size will be determined by the <a href="#grid-auto-rows">grid-auto-rows</a> and <a href="#grid-auto-columns">grid-auto-columns</a> properties.</p>`
    },
    {
      'name': `&lt;track-list> | &lt;auto-track-list>`,
      'desc': `Specifies the <a href="#track-list">track list</a> as a series of <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> and line names.
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
      name: '1fr auto',
      current: true
    },
    {
      name: '1fr 1fr',
    },
    {
      name: '150px 1fr',
    },
    {
      name: '1fr max-content',
    },
    {
      name: 'repeat(2, 3fr 1fr)',
    },
    {
      name: 'none',
    },
  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <div class="child">Ut enim ad minim veniam</div>
    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
    <div class="child">Duis aute irure dolor</div>
    <div class="child">Excepteur</div>
    <div class="child">Commodo consequat</div>
    <div class="child">Fugiat nulla pariatur</div>
  </div>`,

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': '1fr 1fr',
      'grid-template-rows': '1fr auto'
    }
  }],
}
