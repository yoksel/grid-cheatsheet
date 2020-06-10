import linePlacement from './props/placing/line-placement';

export default {
  title: 'Placing Grid Items',

  link: 'https://www.w3.org/TR/css-grid-1/#placement',

  desc: `<p>Every <a href="#grid-item">grid item</a> is associated with a <a href="#grid-area">grid area</a>,
a rectangular set of adjacent <a href="#grid-cell">grid cells</a> that the <a href="#grid-item">grid item</a> occupies.
This <a href="#grid-area">grid area</a> defines the <a href="https://www.w3.org/TR/css-display-3/#containing-block">containing block</a> for the <a href="#grid-item">grid item</a> within which the self-alignment properties (<a href="https://www.w3.org/TR/css3-align/#justify-self">justify-self</a> and <a href="https://www.w3.org/TR/css3-align/#align-self">align-self</a>) determine their actual position.
The cells that a <a href="#grid-item">grid item</a> occupies also influence the sizing of the grid’s rows and columns,
defined in <a href="#layout-algorithm">§11 Grid Sizing</a>.</p>

<p>The location of a <a href="#grid-item">grid item’s</a> <a href="#grid-area">grid area</a> within the <a href="#grid">grid</a> is defined by its <dfn id="grid-placement">placement</dfn>,
which consists of a <a href="#grid-position">grid position</a> and a <a href="#grid-span">grid span</a>:</p>

<dl>

  <dt>
    <dfn id="grid-position">grid position</dfn>

  </dt>
  <dd>
    The <a href="#grid-item">grid item</a>’s location in the <a href="#grid">grid</a> in each axis.
A <a href="#grid-position">grid position</a> can be either <dfn id="definite-grid-position">definite</dfn> (explicitly specified)
or <dfn id="automatic-grid-position">automatic</dfn> (determined by <a href="#auto-placement">auto-placement</a>).

  </dd>
  <dt>
    <dfn id="grid-span">grid span</dfn>

  </dt>
  <dd>
    How many <a href="#grid-track">grid tracks</a> the <a href="#grid-item">grid item</a> occupies in each axis.
A <a href="#grid-item">grid item</a>’s <a href="#grid-span">grid span</a> is always <dfn id="definite-grid-span">definite</dfn>,
defaulting to 1 in each axis if it can’t be otherwise determined for that axis.

  </dd>
</dl>

<p>The <dfn id="grid-placement-property">grid-placement properties</dfn>—<wbr>the longhands <a href="#grid-row-start">grid-row-start</a>, <a href="#grid-row-end">grid-row-end</a>, <a href="#grid-column-start">grid-column-start</a>, <a href="#grid-column-end">grid-column-end</a>, and their shorthands <a href="#grid-row">grid-row</a>, <a href="#grid-column">grid-column</a>, and <a href="#grid-area">grid-area</a>—<wbr>allow the author to specify a <a href="#grid-item">grid item</a>’s <a href="#grid-placement">placement</a> by providing any (or none) of the following six pieces of information:</p>

<table class="data">
  <thead>
    <tr>
    <td>
    </td><th>Row
    </th><th>Column
  </th></tr></thead><tbody>
    <tr>
    <th><var>Start</var>
    </th><td>row-start line
    </td><td>column-start line
    </td></tr><tr>
    <th><var>End</var>
    </th><td>row-end line
    </td><td>column-end line
    </td></tr><tr>
    <th><var>Span</var>
    </th><td>row span
    </td><td>column span
  </td></tr></tbody>
</table>

<p>A definite value for any two of <var>Start</var>, <var>End</var>, and <var>Span</var> in a given dimension implies a definite value for the third.</p>

<p>The following table summarizes the conditions under which a grid position or span is <i data-lt="">definite</i> or <i data-lt="">automatic</i>:</p>

<table class="data">
  <thead>
    <tr>
    <td>
    </td><th>Position
    </th><th>Span
  </th></tr></thead><tbody>
    <tr>
    <th>Definite
    </th><td>At least one specified line
    </td><td>Explicit, implicit, or defaulted span.
    </td></tr><tr>
    <th>Automatic
    </th><td>No lines explicitly specified
    </td><td>N/A
  </td></tr></tbody>
</table>

<p>The <a href="#grid-placement-property">grid-placement property</a> longhands are organized into three shorthands:</p>

<table class="data" id="grid-property-breakdown">
  <tbody>
    <tr>
    <td colspan="4"><a href="#grid-area">grid-area</a>
    </td></tr><tr>
    <td colspan="2"><a href="#grid-column">grid-column</a>
    </td><td colspan="2"><a href="#grid-row">grid-row</a>
    </td></tr><tr>
    <td><a href="#grid-column-start">grid-column-start</a>
    </td><td><a href="#grid-column-end">grid-column-end</a>
    </td><td><a href="#grid-row-start">grid-row-start</a>
    </td><td><a href="#grid-row-end">grid-row-end</a>
  </td></tr></tbody>
</table>
   `,

  items: [
    linePlacement
  ]
};
