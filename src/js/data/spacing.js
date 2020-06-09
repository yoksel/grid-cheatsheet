import rowGap from './props/row-gap';
import columnGap from './props/column-gap';
import gap from './props/gap';

export default {
  title: 'Spacing',

  desc: `<p>While margin and padding can be used to specify visual spacing around individual boxes, it’s sometimes more convenient to globally specify spacing between adjacent boxes within a given layout context, particularly when the spacing is different between boxes as opposed to between the first/last box and the container’s edge.</p>

  <p>The <a href="#gap">gap</a> property, and its <a href="#row-gap">row-gap</a> and <a href="#column-gap">column-gap</a> sub-properties, provide this functionality for multi-column, flex, and grid layout.</p>

  <p>The row-gap and column-gap properties (and their gap shorthand), when specified on a grid container, define the gutters between grid rows and grid columns. Their syntax is defined in <a href="https://www.w3.org/TR/css3-align/#gaps">CSS Box Alignment 3 §8 Gaps Between Boxes</a>.</p>

  <p>The effect of these properties is as though the affected <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> acquired thickness: the grid track between two <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> is the space between the gutters that represent them. For the purpose of track sizing, each gutter is treated as an extra, empty track of the specified size.</p>

  <p class="note">Note: Additional spacing may be added between tracks due to justify-content/align-content. See <a href="https://www.w3.org/TR/css-grid-1/#algo-overview">§11.1 Grid Sizing Algorithm.</a> This space effectively increases the size of the gutters.</p>

  <p>If a grid is fragmented between tracks, the gutter spacing between those tracks must be suppressed. Note that gutters are suppressed even after forced breaks, unlike margins.</p>

  <p>Gutters only appear between tracks of the <a href="https://www.w3.org/TR/css-grid-1/#implicit-grid">implicit grid</a>; there is no gutter before the first track or after the last track. (In particular, there is no gutter between the first/last track of the <a href="https://www.w3.org/TR/css-grid-1/#implicit-grid">implicit grid</a> and the “auto” lines in the augmented grid.)</p>

  <p>When a <a href="https://www.w3.org/TR/css-grid-1/#collapsed-track">collapsed track</a>’s gutters collapse, they coincide exactly—the two gutters overlap so that their start and end edges coincide. If one side of a <a href="https://www.w3.org/TR/css-grid-1/#collapsed-track">collapsed track</a> does not have a gutter (e.g. if it is the first or last track of the <a href="https://www.w3.org/TR/css-grid-1/#implicit-grid">implicit grid</a>), then collapsing its gutters results in no gutter on either “side” of the <a href="https://www.w3.org/TR/css-grid-1/#collapsed-track">collapsed track</a>.</p>`,

  items: [
    rowGap,
    columnGap,
    gap
  ]
};
