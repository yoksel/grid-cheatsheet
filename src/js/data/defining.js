import gridTemplateRows from './props/grid-template-rows.js';
import gridTemplateColumns from './props/grid-template-columns.js';
import gridTemplateAreas from './props/grid-template-areas.js';
import gridTemplate from './props/grid-template.js';
import gridTemplateValues from './props/grid-template-values.js';
import repeat from './props/repeat.js';

export default {
  title: 'Defining the grid',
  desc: `<p>The three properties <a href="#grid-template-rows">grid-template-rows</a>, <a href="#grid-template-columns">grid-template-columns</a>, and <a href="#grid-template-areas">grid-template-areas</a> together define the <dfn>explicit grid</dfn> of a <a href="#grid-container">grid container</a>.
The final grid may end up larger due to <a href="#grid-item">grid items</a> placed outside the <a href="https://www.w3.org/TR/css3-grid-layout/#explicit-grid">explicit grid</a>;
in this case implicit tracks will be created,
these implicit tracks will be sized by the <a href="#grid-auto-rows">grid-auto-rows</a> and <a href="#grid-auto-columns">grid-auto-columns</a> properties.</p>

<p>The size of the <a href="https://www.w3.org/TR/css3-grid-layout/#explicit-grid">explicit grid</a> is determined by the larger of
the number of rows/columns defined by <a href="#grid-template-areas">grid-template-areas</a> and the number of rows/columns sized by <a href="#grid-template-rows">grid-template-rows</a>/<a href="#grid-template-columns">grid-template-columns</a>.
Any rows/columns defined by <a href="#grid-template-areas">grid-template-areas</a> but not sized by <a href="#grid-template-rows">grid-template-rows</a>/<a href="#grid-template-columns">grid-template-columns</a> take their size from the <a href="#grid-auto-rows">grid-auto-rows</a>/<a href="#grid-auto-columns">grid-auto-columns</a> properties.
If these properties don’t define <em>any</em> <a href="https://www.w3.org/TR/css3-grid-layout/#explicit-grid">explicit</a> tracks
the <a href="https://www.w3.org/TR/css3-grid-layout/#explicit-grid">explicit grid</a> still contains one <a href="#grid-line">grid line</a> in each axis.</p>

<p>Numeric indexes in the <a href="#grid-placement-property">grid-placement properties</a> count from the edges of the <a href="https://www.w3.org/TR/css3-grid-layout/#explicit-grid">explicit grid</a>.
Positive indexes count from the <a href="https://www.w3.org/TR/css-writing-modes-3/#start">start</a> side
(starting from 1 for the <a href="https://www.w3.org/TR/css-writing-modes-3/#start">start</a>-most <a href="https://www.w3.org/TR/css3-grid-layout/#explicit-grid">explicit</a> line),
while negative indexes count from the <a href="https://www.w3.org/TR/css-writing-modes-3/#end">end</a> side
(starting from -1 for the <a href="https://www.w3.org/TR/css-writing-modes-3/#end">end</a>-most <a href="https://www.w3.org/TR/css3-grid-layout/#explicit-grid">explicit</a> line).</p>

<p>The <a href="#grid">grid</a> and <a href="#grid-template">grid-template</a> properties are a <a href="https://www.w3.org/TR/css-cascade-4/#shorthand-property">shorthands</a> that can be used to set all three <dfn>explicit grid properties</dfn> (<a href="#grid-template-rows">grid-template-rows</a>, <a href="#grid-template-columns">grid-template-columns</a>, and <a href="#grid-template-areas">grid-template-areas</a>)
at the same time.
The <a href="#grid">grid</a> shorthand also resets properties controlling the <a href="https://www.w3.org/TR/css3-grid-layout/#implicit-grid">implicit grid</a>,
whereas the <a href="#grid-template">grid-template</a> property leaves them unchanged.</p>`,
  items: [
    gridTemplateRows,
    gridTemplateColumns,
    gridTemplateAreas,
    gridTemplate,
    gridTemplateValues,
    repeat
  ]
};
