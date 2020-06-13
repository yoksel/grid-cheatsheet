import alignSelf from './align-self';
import alignItems from './align-items';

export default {
  name: 'Column-axis: align-self, align-items',
  alias: 'column-align',

  link: 'https://www.w3.org/TR/css3-grid-layout/#column-align',

  desc: `<p><a href="#grid-item">Grid items</a> can also be aligned in the block dimension
(perpendicular to the inline dimension)
by using the <a href="https://www.w3.org/TR/css3-align/#align-self">align-self</a> property on the <a href="#grid-item">grid item</a> or <a href="https://www.w3.org/TR/css3-align/#align-items">align-items</a> property on the <a href="#grid-container">grid container</a>,
as defined in <a href="#biblio-css-align-3">[CSS-ALIGN-3]</a>.</p>

<p>If <a href="https://www.w3.org/TR/css3-align/#baseline-alignment">baseline alignment</a> is specified on a <a href="#grid-item">grid item</a> whose size in that axis depends on the size of an intrinsically-sized track
(whose size is therefore dependent on both the item’s size and baseline alignment,
creating a cyclic dependency),
that item does not participate in baseline alignment,
and instead uses its <a href="https://www.w3.org/TR/css3-align/#fallback-alignment">fallback alignment</a>.</p>`,

  demos: [
    alignSelf,
    alignItems
  ]
};
