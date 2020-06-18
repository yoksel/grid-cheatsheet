import gap from './props/spacing/gap';
import rowColumnGap from './props/spacing/row-column-gap';

export default {
  title: 'Spacing',

  link: 'https://www.w3.org/TR/css-grid-1/#gutters',

  desc: `<p>The <a href="https://www.w3.org/TR/css3-align/#row-gap">row-gap</a> and <a href="https://www.w3.org/TR/css3-align/#column-gap">column-gap</a> properties
(and their <a href="https://www.w3.org/TR/css3-align/#gap">gap</a> shorthand),
when specified on a <a href="#grid-container">grid container</a>,
define the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a> between <a href="#section-grid-row">grid rows</a> and <a href="#section-grid-column">grid columns</a>.
Their syntax is defined in <a href="https://www.w3.org/TR/css3-align/#gaps">CSS Box Alignment 3 §8 Gaps Between Boxes</a>.</p>

<p>The effect of these properties
is as though the affected <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> acquired thickness:
the <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a> between two <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> is the space between the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a> that represent them.
For the purpose of <a href="https://www.w3.org/TR/css-grid-1/#algo-track-sizing">track sizing</a>,
each <a href="https://www.w3.org/TR/css3-align/#gutter">gutter</a> is treated as an extra, empty track of the specified size.</p>

<p class="note" role="note"><span>Note:</span> Additional spacing may be added between tracks
due to <a href="#section-justify-content">justify-content</a>/<a href="#section-align-content">align-content</a>.
See <a href="https://www.w3.org/TR/css-grid-1/#algo-overview">§11.1 Grid Sizing Algorithm</a>.
This space effectively increases the size of the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a>.</p>

<p>If a <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> is <a href="https://www.w3.org/TR/css3-break/#fragment">fragmented</a> between tracks,
the <a href="https://www.w3.org/TR/css3-align/#gutter">gutter</a> spacing between those tracks must be suppressed.</p>

<p class="note">Note that gutters are suppressed even after forced breaks, <a href="https://www.w3.org/TR/css-break-3/#break-margins">unlike margins</a>.</p>

<p><a href="https://www.w3.org/TR/css3-align/#gutter">Gutters</a> only appear <em>between</em> tracks of the <a href="#implicit-grid">implicit grid</a>;
there is no gutter before the first track or after the last track.
(In particular, there is no <a href="https://www.w3.org/TR/css3-align/#gutter">gutter</a> between the first/last track of the <a href="#implicit-grid">implicit grid</a> and the “auto” lines in the <a href="https://www.w3.org/TR/css-grid-1/#augmented-grid">augmented grid</a>.)</p>

<p>When a <a href="#collapsed-track">collapsed track</a>’s gutters <dfn id="collapsed-gutter">collapse</dfn>,
they coincide exactly—<wbr>the two gutters overlap so that their start and end edges coincide.
If one side of a <a href="#collapsed-track">collapsed</a> track does not have a gutter
(e.g. if it is the first or last track of the <a href="#implicit-grid">implicit grid</a>),
then collapsing its gutters results in no gutter
on either “side” of the <a href="#collapsed-track">collapsed track</a>.</p>`,

  items: [
    rowColumnGap,
    gap
  ]
};
