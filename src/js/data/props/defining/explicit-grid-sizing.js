import gridTemplateRows from './grid-template-rows';
import gridTemplateColumns from './grid-template-columns';
import gridTemplateValues from './track-list-values';
import repeat from './repeat';
import namedLines from './named-lines';

export default {
  name: 'grid-template-columns, grid-template-rows',
  alias: 'track-sizing',

  link: 'https://www.w3.org/TR/css-grid-1/#track-sizing',

  initValue: 'none',

  appliesTo: '<a href="#grid-container">grid containers</a>',

  desc: `<p>These properties specify,
as a space-separated <dfn id="track-list">track list</dfn>,
the line names and <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> of the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a>.
The <a href="#section-grid-template-columns">grid-template-columns</a> property specifies the <a href="#track-list">track list</a> for the grid’s columns,
while <a href="#section-grid-template-rows">grid-template-rows</a> specifies the <a href="#track-list">track list</a> for the grid’s rows.</p>

<p class="note" role="note"><span>Note:</span> The size of the grid is not purely the sum of the track sizes,
as <a href="https://www.w3.org/TR/css3-align/#row-gap">row-gap</a>, <a href="https://www.w3.org/TR/css3-align/#column-gap">column-gap</a> and <a href="#section-justify-content">justify-content</a>, <a href="#section-align-content">align-content</a> can add additional space between tracks.</p>`,

  values: [
    {
      name: 'none',
      desc: `Indicates that no <a href="#explicit-grid">explicit</a> grid tracks are created by this property
(though <a href="#explicit-grid">explicit grid</a> tracks could still be created by <a href="#section-grid-template-areas">grid-template-areas</a>).
     <p class="note" role="note"><span>Note:</span> In the absence of an <a href="#explicit-grid">explicit grid</a> any rows/columns will be <a href="https://www.w3.org/TR/css-grid-1/#implicit-grids">implicitly generated</a>,
and their size will be determined by the <a href="#section-grid-auto-rows">grid-auto-rows</a> and <a href="#section-grid-auto-columns">grid-auto-columns</a> properties.</p>`
    },
    {
      name: '&lt;track-list> | &lt;auto-track-list>',
      alias: 'track-listing',
      desc: `Specifies the <a href="#track-list">track list</a> as a series of <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> and line names.
Each <dfn id="grid-template-rows-track-sizing-function">track sizing function</dfn> can be specified as a length,
a percentage of the <a href="#grid-container">grid container</a>’s size,
a measurement of the contents occupying the column or row,
or a fraction of the free space in the grid.
It can also be specified as a range using the <a href="#valdef-grid-template-columns-minmax">minmax()</a> notation,
which can combine any of the previously mentioned mechanisms
to specify separate <a href="https://www.w3.org/TR/css-grid-1/#min-track-sizing-function">min</a> and <a href="https://www.w3.org/TR/css-grid-1/#max-track-sizing-function">max track sizing functions</a> for the column or row.`
    }
  ],
  children: [
    gridTemplateValues,
    namedLines,
    repeat
  ],
  demos: [
    gridTemplateRows,
    gridTemplateColumns
  ]
};
