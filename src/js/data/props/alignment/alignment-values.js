export default {
  name: 'Align values',
  alias: 'align-values',

  link: 'https://www.w3.org/TR/css-align-3/#justify-self-auto',

  values: [
    {
      name: 'auto',
      alias: 'justify-self-auto',
      desc: `<p>Behaves as <a href="#justify-self-normal">normal</a> if the box has no parent,
or when determining the actual position of an absolutely positioned box.
It behaves as the computed <a href="#justify-items">justify-items</a> value of the parent box
(minus any <a href="#justify-items-legacy">legacy</a> keywords)
otherwise
(including when determining the <em>static</em> position
of an absolutely positioned box).</p>`
    },

    {
      name: 'normal',
      alias: 'justify-self-normal',
      desc: `<p>Represents the “default” alignment for the layout mode.
Its behavior depends on the layout mode, as described below.</p>`
    },

    {
      name: 'stretch',
      alias: 'justify-self-stretch',
      desc: `<p>When the box’s <a href="https://www.w3.org/TR/css-cascade-4/#computed-value">computed</a> <a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#height">height</a> (as appropriate to the axis)
is <a href="https://www.w3.org/TR/css-sizing-3/#width-auto">auto</a> and neither of its margins (in the appropriate axis) are <span class="css">auto</span>,
sets the box’s used size to the length necessary to make its outer size
as close to filling the <a href="#alignment-container">alignment container</a> as possible
while still respecting the constraints imposed by <a href="https://www.w3.org/TR/CSS21/visudet.html#min-height">min-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#min-width">min-width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-height">max-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-width">max-width</a>.</p>
     <p>Unless otherwise specified, this value falls back to <a href="#self-position-flex-start">flex-start</a> generally,
and to <a href="#self-position-self-start">self-start</a> or <a href="#self-position-self-end">self-end</a> if the box has also specified <a href="#first-baseline-set">first baseline</a> or <a href="#last-baseline-set">last baseline</a> <a href="#baseline-content-alignment">baseline content-alignment</a> (respectively)
in the same axis.</p>
     <p class="note" role="note"><span>Note:</span> The <a href="#justify-self-stretch">stretch</a> keyword can cause elements to shrink,
to fit their container.</p>`
    },

    {
      name: '&lt;baseline-position&gt;',
      alias: 'baseline-position',
      desc: `<p><dfn id="baseline-alignment">Baseline alignment</dfn> is a form of positional alignment
that aligns multiple <a href="#alignment-subject">alignment subjects</a> within a <a href="#shared-alignment-context">shared alignment context</a> (such as cells within a row)
by matching up their <a href="#alignment-baseline">alignment baselines</a>.
If the position of the <span id="ref-for-alignment-subject②②">alignment subjects</span> within a <a href="#baseline-sharing-group">baseline-sharing group</a> is not fully constrained by <a href="#baseline-alignment">baseline alignment</a> (i.e., they could be shifted within their respective <a href="#alignment-container">alignment containers</a> while maintaining baseline-alignment),
they are <a href="#fallback-alignment">fallback-aligned</a> insofar as possible while preserving their <span id="ref-for-baseline-alignment①">baseline alignment</span>.</p>

<p>The baseline alignment keywords are represented with the <a href="#typedef-baseline-position" title="Expands to: last | baseline | first">&lt;baseline-position&gt;</a> grammar term:</p>
<code>&lt;baseline-position&gt; = [ first | last ]? baseline</code>

      <p>The <a href="#justify-self-first-baseline">first</a> and <a href="#justify-self-last-baseline">last</a> values give a box a <dfn id="baseline-alignment-preference">baseline alignment preference</dfn>:
either “first” or “last”, respectively,
defaulting to “first”.</p>

<p>Values have the following meanings:</p>

<dl>
  <dt>
    <dfn id="justify-self-baseline">baseline</dfn>
  </dt>

  <dd>
    Computes to <a href="#justify-self-first-baseline">first baseline</a>, defined below.
  </dd>

  <dt>
    <dfn id="justify-self-first-baseline">first baseline</dfn>
  </dt>
  <dd>
    Specifies participation in <dfn id="first-baseline-alignment">first-baseline alignment</dfn>:
aligns the <a href="#alignment-baseline">alignment baseline</a> of the box’s <a href="#first-baseline-set">first baseline set</a> with the corresponding baseline
of its <a href="#baseline-sharing-group">baseline-sharing group</a>.
See <a href="#align-by-baseline">§ 9.3 Aligning Boxes by Baseline</a> for more details.
     <p>The <a href="#fallback-alignment">fallback alignment</a> for <a href="#justify-self-first-baseline">first baseline</a> is <span class="css">safe self-start</span> (for <a href="#self-align">self-alignment</a>)
or <span class="css">safe start</span> (for <a href="#content-distribute">content-distribution</a>).</p>
  </dd>

  <dt>
    <dfn id="justify-self-last-baseline">last baseline</dfn>
  </dt>
  <dd>
    Specifies participation in <dfn id="last-baseline-alignment">last-baseline alignment</dfn>:
aligns the <a href="#alignment-baseline">alignment baseline</a> of the box’s <a href="#last-baseline-set">last baseline set</a> with the corresponding baseline
of its <a href="#baseline-sharing-group">baseline-sharing group</a>.̣
See <a href="#align-by-baseline">§ 9.3 Aligning Boxes by Baseline</a> for more details.
     <p>The <a href="#fallback-alignment">fallback alignment</a> for <a href="#justify-self-last-baseline">last baseline</a> is <span class="css">safe self-end</span> (for <a href="#self-align">self-alignment</a>)
or <span class="css">safe end</span> (for <a href="#content-distribute">content-distribution</a>).</p>
  </dd>
</dl>

<p>When specified for <a href="#align-content">align-content</a>,
these values trigger <a href="#baseline-content-alignment">baseline content-alignment</a>,
shifting the content of the box within its content box,
and may also affect the sizing of the box itself.
See <a href="#baseline-align-content">§ 5.4 Baseline Content-Alignment</a>.</p>

<p>When specified for <a href="#align-self">align-self</a>/<a href="#justify-self">justify-self</a>,
these values trigger <a href="#baseline-self-alignment">baseline self-alignment</a>,
shifting the entire box within its container,
which may affect the sizing of its container.
See <a href="#baseline-align-self">§ 6.4 Baseline Self-Alignment</a>.</p>

<p>If both <a href="#baseline-content-alignment">baseline content-alignment</a> <em>and</em> <a href="#baseline-self-alignment">baseline self-alignment</a> are specified in the same axis on the same box,
only <span id="ref-for-baseline-self-alignment②">baseline self-alignment</span> is honored in that axis;
the content-alignment in that axis must be treated as <a href="#self-position-start">start</a>.</p>

<p>If a box does not belong to a <a href="#shared-alignment-context">shared alignment context</a>,
then the <a href="#fallback-alignment">fallback alignment</a> is used.
For example, <a href="#align-content">align-content: baseline</a> on a block box
falls back to <span class="css">start</span> alignment.
The <span id="ref-for-fallback-alignment④">fallback alignment</span> is also used to align the <a href="#baseline-sharing-group">baseline-sharing group</a> within its <a href="#alignment-container">alignment container</a>.</p>`
    },

    {
      name: '&lt;overflow-position&gt;',
      alias: 'overflow-position',
      desc: `<code>&lt;overflow-position&gt;</dfn> = unsafe | safe</code>

<dl>
  <dt>
    <dfn id="overflow-position-safe">safe</dfn>
  </dt>
  <dd>
    If the size of the <a href="#alignment-subject">alignment subject</a> overflows the <a href="#alignment-container">alignment container</a>,
the <span id="ref-for-alignment-subject④②">alignment subject</span> is instead aligned as if the alignment mode were <a href="#self-position-start">start</a>.
  </dd>

  <dt>
    <dfn id="overflow-position-unsafe">unsafe</dfn>
  </dt>
  <dd>
    Regardless of the relative sizes of the <a href="#alignment-subject">alignment subject</a> and <a href="#alignment-container">alignment container</a>,
the given alignment value is honored.
  </dd>

  <dt>
    <i>(no value specified)</i>
  </dt>
  <dd>
    If the <a href="#overflow-alignment">overflow alignment</a> isn’t explicitly specified,
the default <span>overflow alignment</span> is a blend of “safe” and “unsafe”
in that an overflowing <a href="#alignment-subject">alignment subject</a> is allowed to overflow its <a href="#alignment-container">alignment container</a>,
but if this would cause it to also overflow
the <a href="https://www.w3.org/TR/css-overflow-3/#scrollable-overflow-region">scrollable overflow region</a> of its nearest ancestor <a href="https://www.w3.org/TR/css-overflow-3/#scroll-container">scroll container</a> (thus extending into the “unscrollable” region),
then its overflow in that direction is limited
by biasing any remaining overflow to the opposite side.
  </dd>
</dl>`
    },
    {
      name: '&lt;self-position&gt;',
      alias: 'self-position',
      desc: `This set is used by <a href="#justify-self">justify-self</a> and <a href="#align-self">align-self</a> to align the box within its <a href="#alignment-container">alignment container</a>,
and also by <a href="#justify-items">justify-items</a> and <a href="#align-items">align-items</a> (to specify default values for <span class="property">justify-self</span> and <span class="property">align-self</span>).

<pre><code><dfn id="self-position">&lt;self-position&gt;</dfn> = center | start | end | self-start | self-end | flex-start | flex-end</code></pre>`
    },
    {
      name: '&lt;content-distribution&gt;',
      alias: 'content-distribution',
      desc: `<p>The <dfn id="distributed-alignment">distributed alignment</dfn> values are used by <a href="#justify-content">justify-content</a> and <a href="#align-content">align-content</a> to disperse a container’s extra space among its <a href="#alignment-subject">alignment subjects</a>.</p>

<p>When space cannot be distributed in this way,
these values behave as their <a href="#fallback-alignment">fallback alignment</a>.
Each distribution value has an associated default <span>fallback alignment</span>.
(A future level of this module may allow the <span>fallback alignment</span> to be specified explicitly.)</p>

<dl>
  <dt>
    <dfn id="valdef-align-content-space-between">space-between</dfn>
  </dt>
  <dd>
    The <a href="#alignment-subject">alignment subjects</a> are evenly distributed in the <a href="#alignment-container">alignment container</a>.
The first <span>alignment subject</span> is placed flush with the start edge of the <span>alignment container</span>,
the last <span>alignment subject</span> is placed flush with the end edge of the <span>alignment container</span>,
and the remaining <span>alignment subjects</span> are distributed so that the spacing between any two adjacent <span>alignment subjects</span> is the same.
     <p>The default <a href="#fallback-alignment">fallback alignment</a> for this value is <a href="#valdef-self-position-flex-start">flex-start</a>. </p>

     <p class="note">(For layout modes other than flex layout, <a href="#valdef-self-position-flex-start">flex-start</a> is identical to <a href="#valdef-self-position-start">start</a>.)</p>
  </dd>

  <dt>
    <dfn id="valdef-align-content-space-around">space-around</dfn>
  </dt>
  <dd>
    The <a href="#alignment-subject">alignment subjects</a> are evenly distributed in the <a href="#alignment-container">alignment container</a>,
with a half-size space on either end.
The <span>alignment subjects</span> are distributed so that the spacing between any two adjacent <span>alignment subjects</span> is the same,
and the spacing before the first and after the last <span>alignment subject</span> is half the size of the other spacing.
     <p>The default <a href="#fallback-alignment">fallback alignment</a> for this value is <a href="#valdef-self-position-center">center</a>.</p>
  </dd>

  <dt>
    <dfn id="valdef-align-content-space-evenly">space-evenly</dfn>
  </dt>
  <dd>
    The <a href="#alignment-subject">alignment subjects</a> are evenly distributed in the <a href="#alignment-container">alignment container</a>,
with a full-size space on either end.
The <span>alignment subjects</span> are distributed so that the spacing between any two adjacent <span>alignment subjects</span>,
before the first <span>alignment subject</span>,
and after the last <span>alignment subject</span> is the same.
     <p>The default <a href="#fallback-alignment">fallback alignment</a> for this value is <a href="#valdef-self-position-center">center</a>.</p>
  </dd>

  <dt>
    <dfn id="valdef-align-content-stretch">stretch</dfn>
  </dt>
  <dd>
    If the combined size of the <a href="#alignment-subject">alignment subjects</a> is less than the size of the <a href="#alignment-container">alignment container</a>,
any <span class="css">auto</span>-sized <span>alignment subjects</span> have their size increased equally (not proportionally),
while still respecting the constraints imposed by <a href="https://www.w3.org/TR/CSS21/visudet.html#max-height">max-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-width">max-width</a> (or equivalent functionality),
so that the combined size exactly fills the <span>alignment container</span>.
     <p>The default <a href="#fallback-alignment">fallback alignment</a> for this value is <a href="#valdef-self-position-flex-start">flex-start</a>. </p>

     <p class="note">(For layout modes other than flex layout, <a href="#valdef-self-position-flex-start">flex-start</a> is identical to <a href="#valdef-self-position-start">start</a>.)</p>
  </dd>
</dl>

<p>These values are represented with the <a href="#typedef-content-distribution" title="Expands to: stretch | space-between | space-around | space-evenly">&lt;content-distribution&gt;</a> grammar term:</p>

<pre class="prod"><dfn id="typedef-content-distribution">&lt;content-distribution&gt;</dfn> = space-between | space-around | space-evenly | stretch</pre>`
    },
    {
      name: 'legacy',
      alias: 'justify-items-legacy',
      desc: `This keyword causes the value to effectively inherit into descendants.
     <p>If the <a href="#justify-items-legacy">legacy</a> keyword appears on its own
(without an accompanying <a href="#justify-content-left">left</a>, <a href="#justify-content-right">right</a>, or <a href="#self-position-center">center</a> keyword):
if the <a href="https://www.w3.org/TR/css-cascade-4/#inherited-value">inherited value</a> of <span class="css">justify-items</span> includes the <span class="css" id="ref-for-justify-items-legacy⑤">legacy</span> keyword,
this value computes to the <span>inherited value</span>;
otherwise it computes to <span class="css">normal</span>.</p>
     <p>When <span class="css">justify-self:auto</span> references the value of <a href="#justify-items">justify-items</a>,
only the alignment keyword, not the <a href="#justify-items-legacy">legacy</a> keyword, is referenced by it.
It exists to implement the legacy alignment behavior of HTML’s <code>&lt;center&gt;</code> element and <code>align</code> attribute.</p>`
    }
  ]
};
