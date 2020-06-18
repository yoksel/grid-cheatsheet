export default {
  name: 'Grid line values',

  alias: 'grid-line-values',

  link: 'https://www.w3.org/TR/css-grid-1/#typedef-grid-row-start-grid-line',

  values: [
    {
      name: '&lt;custom-ident&gt;',
      alias: 'grid-placement-slot',
      desc: `First attempt to match the <a href="#section-grid-area">grid area</a>’s edge to a <a href="#named-grid-area">named grid area</a>:
if there is a <a href="#named-line">named line</a> with the name '<a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>-start<span class="css"> (for grid-*-start) / </span><a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>-end' (for grid-*-end),
contributes the first such line to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a>.
     <p class="note" role="note"><span>Note:</span> <a href="#named-grid-area">Named grid areas</a> automatically generate <a href="https://www.w3.org/TR/css-grid-1/#implicit-named-line">implicit named lines</a> of this form,
so specifying <a href="#section-grid-row-start">grid-row-start: foo</a> will choose the start edge of that <a href="#named-grid-area">named grid area</a> (unless another line named <code>foo-start</code> was explicitly specified before it).</p>
     <p>Otherwise,
treat this as if the integer <code>1</code> had been specified along with the <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>.</p>`
    },

    {
      name: '&lt;integer&gt; &amp;&amp; &lt;custom-ident&gt;?',
      alias: 'grid-placement-int',
      desc: `Contributes the <var>N</var>th <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid line</a> to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a>.
If a negative integer is given,
it instead counts in reverse,
starting from the end edge of the <a href="#explicit-grid">explicit grid</a>.
     <p>If a name is given as a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,
only lines with that name are counted.
If not enough lines with that name exist,
all <a href="#implicit-grid-lines">implicit grid lines</a> are assumed to have that name for the purpose of finding this position.</p>
     <p>An <a href="https://www.w3.org/TR/css3-values/#integer-value">&lt;integer&gt;</a> value of zero makes the declaration invalid.</p>`
    },

    {
      name: 'span &amp;&amp; [ &lt;integer&gt; || &lt;custom-ident&gt; ]',
      alias: 'grid-placement-span-int',
      desc: `Contributes a <a href="#grid-span">grid span</a> to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a> such that the corresponding edge of the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#section-grid-area">grid area</a> is <var>N</var> lines from its opposite edge
in the corresponding direction.
For example, <a href="#section-grid-column-end">grid-column-end: span 2</a> indicates the second grid line in the endward direction
from the <a href="#section-grid-column-start">grid-column-start</a> line.
     <p>If a name is given as a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,
only lines with that name are counted.
If not enough lines with that name exist,
all <a href="#implicit-grid-lines">implicit grid lines</a> on the side of the <a href="#explicit-grid">explicit grid</a> corresponding to the search direction
are assumed to have that name for the purpose of counting this span.</p>

     <p>If the <a href="https://www.w3.org/TR/css3-values/#integer-value">&lt;integer&gt;</a> is omitted, it defaults to <code>1</code>.
Negative integers or zero are invalid.</p>`
    },

    {
      name: 'auto',
      alias: 'grid-placement-auto',
      desc: `The property contributes nothing to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a>,
indicating <a href="#section-grid-auto-flow">auto-placement</a> or a default span of one.
(See <a href="#section-placing">§8 Placing Grid Items</a>, above.)`
    }
  ]
};
