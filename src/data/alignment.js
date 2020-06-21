import rowAlign from './props/alignment/row-align';
import gridAlign from './props/alignment/grid-align';
import columnAlign from './props/alignment/column-align';

export default {
  title: 'Alignment',

  link: 'https://www.w3.org/TR/css-grid-1/#alignment',

  desc: `<p>After a <a href="#grid-container">grid container</a>’s <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a> have been sized,
and the dimensions of all <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> are finalized, <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> can be aligned within their <a href="#section-grid-area">grid areas</a>.</p>

<p>The <a href="https://www.w3.org/TR/CSS21/box.html#margin">margin</a> properties can be used to align items in a manner similar to
what margins can do in block layout. <a href="https://www.w3.org/TR/css-grid-1/#grid-item">Grid items</a> also respect the <a href="https://www.w3.org/TR/css3-align/#box-alignment-properties">box alignment properties</a> from the <a href="https://www.w3.org/TR/css-align/">CSS Box Alignment Module</a> <a href="https://www.w3.org/TR/css-grid-1/#biblio-css-align-3">[CSS-ALIGN-3]</a>,
which allow easy keyword-based alignment of items in both the <a href="https://www.w3.org/TR/css-grid-1/#row-axis">row axis</a> and <a href="https://www.w3.org/TR/css-grid-1/#column-axis">column axis</a>.</p>

<p>By default, <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> stretch to fill their <a href="#section-grid-area">grid area</a>.
However, if <a href="#section-justify-self">justify-self</a> or <a href="https://www.w3.org/TR/css3-align/#align-self">align-self</a> compute to a value other than <a href="https://www.w3.org/TR/css3-align/#valdef-justify-self-stretch">stretch</a> or margins are auto, <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> will auto-size to fit their contents.</p>`,

  items: [
    rowAlign,
    columnAlign,
    gridAlign
  ]
};
