export default {
  title: 'Placing Grid Items',
  desc: `<p>Every <a href="#grid-item">grid item</a> is associated with a <a href="#grid-area">grid area</a>,
  a rectangular set of adjacent <a href="#grid-cell">grid cells</a> that the <a href="#grid-item">grid item</a> occupies.
  This <a href="#grid-area">grid area</a> defines the <a href="https://www.w3.org/TR/css-display-3/#containing-block">containing block</a> for the <a href="#grid-item">grid item</a> within which the self-alignment properties (<a href="https://www.w3.org/TR/css3-align/#justify-self">justify-self</a> and <a href="https://www.w3.org/TR/css3-align/#align-self">align-self</a>) determine their actual position.
  The cells that a <a href="#grid-item">grid item</a> occupies also influence the sizing of the grid’s rows and columns,
  defined in <a href="#layout-algorithm">§11 Grid Sizing</a>.</p>

  <p>The location of a <a href="#grid-item">grid item’s</a> <a href="#grid-area">grid area</a> within the <a href="#grid">grid</a> is defined by its <dfn>placement</dfn>,
  which consists of a <a href="#grid-position">grid position</a> and a <a href="#grid-span">grid span</a>:</p>

  <dl>
    <dt><dfn>grid position</dfn>
    </dt><dd> The <a href="#grid-item">grid item</a>’s location in the <a href="#grid">grid</a> in each axis.
      A <a href="#grid-position">grid position</a> can be either <dfn>definite</dfn> (explicitly specified)
      or <dfn>automatic</dfn> (determined by <a href="#auto-placement">auto-placement</a>).
    </dd><dt><dfn>grid span</dfn>
    </dt><dd> How many <a href="#grid-track">grid tracks</a> the <a href="#grid-item">grid item</a> occupies in each axis.
      A <a href="#grid-item">grid item</a>’s <a href="#grid-span">grid span</a> is always <dfn>definite</dfn>,
      defaulting to 1 in each axis if it can’t be otherwise determined for that axis.
   </dd></dl>

   <p>The <dfn>grid-placement properties</dfn>—<wbr>the longhands <a href="#grid-row-start">grid-row-start</a>, <a href="#grid-row-end">grid-row-end</a>, <a href="#grid-column-start">grid-column-start</a>, <a href="#grid-column-end">grid-column-end</a>, and their shorthands <a href="#grid-row">grid-row</a>, <a href="#grid-column">grid-column</a>, and <a href="#grid-area">grid-area</a>—<wbr>allow the author to specify a <a href="#grid-item">grid item</a>’s <a href="#grid-placement">placement</a> by providing any (or none) of the following six pieces of information:</p>

  <table>
    <thead>
     <tr>
        <td></td>
        <th>Row</th>
        <th>Column</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><var>Start</var></th>
        <td>row-start line</td>
        <td>column-start line</td>
        </tr>
      <tr>
        <th><var>End</var></th>
        <td>row-end line</td>
        <td>column-end line</td>
      </tr>
      <tr>
        <th><var>Span</var></th>
        <td>row span</td>
        <td>column span</td>
      </tr>
    </tbody>
  </table>
   `,
  items: []
};
