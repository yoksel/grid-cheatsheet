import justifySelf from './justify-self';
import justifyItems from './justify-items';
import alignValues from './alignment-values';

export default {
  name: 'Row-axis: justify-self, justify-items',
  alias: 'row-align',

  link: 'https://www.w3.org/TR/css3-grid-layout/#row-align',

  desc: `<p><a href="#grid-item">Grid items</a> can be aligned in the inline dimension
by using the <a href="https://www.w3.org/TR/css3-align/#justify-self">justify-self</a> property on the <a href="#grid-item">grid item</a> or <a href="https://www.w3.org/TR/css3-align/#justify-items">justify-items</a> property on the <a href="#grid-container">grid container</a>,
as defined in <a href="#biblio-css-align-3">[CSS-ALIGN-3]</a>.</p>

<p>If <a href="https://www.w3.org/TR/css3-align/#baseline-alignment">baseline alignment</a> is specified on a <a href="#grid-item">grid item</a> whose size in that axis depends on the size of an intrinsically-sized track
(whose size is therefore dependent on both the item’s size and baseline alignment,
creating a cyclic dependency),
that item does not participate in baseline alignment,
and instead uses its <a href="https://www.w3.org/TR/css3-align/#fallback-alignment">fallback alignment</a>.</p>`,

  demos: [
    justifySelf,
    justifyItems
  ],

  children: [
    alignValues
  ]
};
