export default {
  name: 'repeat()',
  alias: 'repeat',
  propDemoName: 'grid-template-columns',

  link: 'https://www.w3.org/TR/css3-grid-layout/#repeat-notation',

  desc: `<p>The <dfn id="funcdef-repeat">repeat()</dfn> notation represents a repeated fragment of the <a href="#track-list">track list</a>,
allowing a large number of columns or rows that exhibit a recurring pattern
to be written in a more compact form.</p>

<p>The generic form of the <a href="#funcdef-repeat">repeat()</a> syntax is, approximately,</p>

<pre>
  <code>repeat( [ <a href="">&lt;positive-integer&gt;</a> <a href="https://www.w3.org/TR/css3-values/#comb-one">|</a> auto-fill <a href="https://www.w3.org/TR/css3-values/#comb-one">|</a> auto-fit ] <a href="https://www.w3.org/TR/css3-values/#comb-comma">,</a> <a href="#typedef-track-list">&lt;track-list&gt;</a> )</code>
</pre>

<p>The first argument specifies the number of repetitions.
The second argument is a <a href="#track-list">track list</a>,
which is repeated that number of times.
However, there are some restrictions:</p>

<ul>
    <li>
     <p class="">The <a href="#funcdef-repeat">repeat()</a> notation can’t be nested.</p>
  </li><li>
     <p class="">Automatic repetitions (<a href="#valdef-repeat-auto-fill">auto-fill</a> or <a href="#valdef-repeat-auto-fit">auto-fit</a>)
cannot be combined with <a href="#intrinsic-sizing-function">intrinsic</a> or <a href="#flexible-sizing-function">flexible</a> sizes.</p>
  </li>
</ul>

<p>If the <a href="#funcdef-repeat">repeat()</a> function ends up placing two <a href="#typedef-line-names">&lt;line-names&gt;</a> adjacent to each other,
the name lists are merged.
For example, <span class="css">repeat(2, [a] 1fr [b])</span> is equivalent to <span class="css">[a] 1fr [b a] 1fr [b]</span>.</p>

<p>When <dfn id="valdef-repeat-auto-fill">auto-fill</dfn> is given as the repetition number,
if the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> size or max size in the relevant axis,
then the number of repetitions is the largest possible positive integer
that does not cause the <a href="#grid">grid</a> to overflow its <a href="#grid-container">grid container</a> (treating each track as its <a href="#max-track-sizing-function">max track sizing function</a> if that is <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> or as its minimum track sizing function otherwise,
and taking <a href="https://www.w3.org/TR/css3-align/#gap">gap</a> into account);
if any number of repetitions would overflow,
then 1 repetition.
Otherwise, if the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> min size in the relevant axis,
the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement.
Otherwise, the specified <a href="#track-list">track list</a> repeats only once.</p>

<p>The <dfn id="valdef-repeat-auto-fit">auto-fit</dfn> keyword behaves the same as <a href="#valdef-repeat-auto-fill">auto-fill</a>,
except that after <a href="#auto-placement-algo">grid item placement</a> any empty repeated tracks are <a href="#collapsed-track">collapsed</a>.
An empty track is one with no in-flow grid items placed into or spanning across it.
(This can result in <em>all</em> tracks being <a href="#collapsed-track">collapsed</a>,
if they’re all empty.)</p>

<p>A <dfn id="collapsed-track">collapsed track</dfn> is treated as having
a fixed <a href="#grid-template-rows-track-sizing-function">track sizing function</a> of <span class="css">0px</span>,
and the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a> on either side of it—<wbr>including any space allotted through <a href="https://www.w3.org/TR/css3-align/#distributed-alignment">distributed alignment</a>—<wbr><a href="#collapsed-gutter">collapse</a>.</p>

<p>For the purpose of finding the number of auto-repeated tracks,
the UA must floor the track size to a UA-specified value
to avoid division by zero.
It is suggested that this floor be <span class="css">1px</span>.</p>`,

  customValues: [
    {
      name: 'repeat(5, 1fr)',
      current: true
    },
    {
      name: 'repeat(auto-fill, minmax(75px, 1fr))'
    },
    {
      name: 'repeat(auto-fit, minmax(75px, 1fr))'
    }
  ],

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': 'repeat(4, 1fr)'
    }
  }]
};
