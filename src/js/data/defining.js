import explicitGridSizing from './props/defining/explicit-grid-sizing';
import gridAutoFlow from './props/defining/grid-auto-flow';
import gridTemplateAreas from './props/defining/grid-template-areas';
import gridTemplate from './props/defining/grid-template';
import gridAutoTracks from './props/defining/grid-auto-tracks';

export default {
  title: 'Defining the grid',

  link: 'https://www.w3.org/TR/css-grid-1/#grid-definition',

  desc: `<h3>Explicit grid</h3>

  <p>The three properties <a href="#section-grid-template-rows">grid-template-rows</a>, <a href="#section-grid-template-columns">grid-template-columns</a>, and <a href="#section-grid-template-areas">grid-template-areas</a> together define the <dfn id="explicit-grid">explicit grid</dfn> of a <a href="#grid-container">grid container</a>.
The final grid may end up larger due to <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> placed outside the <a href="#explicit-grid">explicit grid</a>;
in this case implicit tracks will be created,
these implicit tracks will be sized by the <a href="#section-grid-auto-rows">grid-auto-rows</a> and <a href="#section-grid-auto-columns">grid-auto-columns</a> properties.</p>

<p>The size of the <a href="#explicit-grid">explicit grid</a> is determined by the larger of
the number of rows/columns defined by <a href="#section-grid-template-areas">grid-template-areas</a> and the number of rows/columns sized by <a href="#section-grid-template-rows">grid-template-rows</a>/<a href="#section-grid-template-columns">grid-template-columns</a>.
Any rows/columns defined by <a href="#section-grid-template-areas">grid-template-areas</a> but not sized by <a href="#section-grid-template-rows">grid-template-rows</a>/<a href="#section-grid-template-columns">grid-template-columns</a> take their size from the <a href="#section-grid-auto-rows">grid-auto-rows</a>/<a href="#section-grid-auto-columns">grid-auto-columns</a> properties.
If these properties don’t define <em>any</em> <a href="#explicit-grid">explicit</a> tracks
the <a href="#explicit-grid">explicit grid</a> still contains one <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid line</a> in each axis.</p>

<p>Numeric indexes in the <a href="#grid-placement-property">grid-placement properties</a> count from the edges of the <a href="#explicit-grid">explicit grid</a>.
Positive indexes count from the <a href="https://www.w3.org/TR/css-writing-modes-3/#start">start</a> side
(starting from 1 for the <a href="https://www.w3.org/TR/css-writing-modes-3/#start">start</a>-most <a href="#explicit-grid">explicit</a> line),
while negative indexes count from the <a href="https://www.w3.org/TR/css-writing-modes-3/#end">end</a> side
(starting from -1 for the <a href="https://www.w3.org/TR/css-writing-modes-3/#end">end</a>-most <a href="#explicit-grid">explicit</a> line).</p>

<p>The <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> and <a href="#section-grid-template">grid-template</a> properties are a <a href="https://www.w3.org/TR/css-cascade-4/#shorthand-property">shorthands</a> that can be used to set all three <dfn id="explicit-grid-properties">explicit grid properties</dfn> (<a href="#section-grid-template-rows">grid-template-rows</a>, <a href="#section-grid-template-columns">grid-template-columns</a>, and <a href="#section-grid-template-areas">grid-template-areas</a>)
at the same time.
The <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> shorthand also resets properties controlling the <a href="#implicit-grid">implicit grid</a>,
whereas the <a href="#section-grid-template">grid-template</a> property leaves them unchanged.</p>

<h3>Implicit grid</h3>

<p>The <a href="#section-grid-template-rows">grid-template-rows</a>, <a href="#section-grid-template-columns">grid-template-columns</a>, and <a href="#section-grid-template-areas">grid-template-areas</a> properties define a fixed number
of tracks that form the <a href="#explicit-grid">explicit grid</a>.
When <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> are positioned outside of these bounds,
the <a href="#grid-container">grid container</a> generates <dfn id="implicit-grid-track">implicit grid tracks</dfn> by adding <dfn id="implicit-grid-lines">implicit grid lines</dfn> to the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a>.
These lines together with the <a href="#explicit-grid">explicit grid</a> form the <dfn id="implicit-grid">implicit grid</dfn>.
The <a href="#section-grid-auto-rows">grid-auto-rows</a> and <a href="#section-grid-auto-columns">grid-auto-columns</a> properties size these <a href="#implicit-grid-track">implicit grid tracks</a>.</p>

<p>The <a href="#section-grid-auto-flow">grid-auto-flow</a> property controls auto-placement of <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> without an explicit position.
Once the <a href="#explicit-grid">explicit grid</a> is filled
(or if there is no <a href="#explicit-grid">explicit grid</a>)
auto-placement will also cause the generation of <a href="#implicit-grid-track">implicit grid tracks</a>.</p>

<p>The <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> <a href="https://www.w3.org/TR/css-cascade-4/#shorthand-property">shorthand</a> property can set the <dfn id="implicit-grid-properties">implicit grid properties</dfn> (<a href="#section-grid-auto-flow">grid-auto-flow</a>, <a href="#section-grid-auto-rows">grid-auto-rows</a>, and <a href="#section-grid-auto-columns">grid-auto-columns</a>)
together with the <a href="#explicit-grid-properties">explicit grid properties</a> in a single declaration.</p>`,

  items: [
    explicitGridSizing,
    gridAutoTracks,
    gridAutoFlow,
    gridTemplateAreas,
    gridTemplate
  ]
};
