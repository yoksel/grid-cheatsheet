export default {
  name: `repeat()`,
  propDemoName: 'grid-template-columns',

  link: `https://www.w3.org/TR/css3-grid-layout/#repeat-notation`,

  // target: `grid containers`,

  targetForDemo: `grid containers`,

  desc: `<p>The generic form of the <a href="#funcdef-repeat">repeat()</a> syntax is, approximately:</p>

  <code><pre class="prod">repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ], <a href="#typedef-track-list">&lt;track-list&gt;</a> )
  </pre></code>

  <p>The first argument specifies the number of repetitions.
    The second argument is a <a href="#track-list">track list</a>,
    which is repeated that number of times.
    However, there are some restrictions:</p>

  <ul>
    <li>
     <p>The <code>repeat()</code> notation can’t be nested.</p>
    </li>
    <li>
       <p>Automatic repetitions (<a href="#repeat-auto-fill">auto-fill</a> or <code>auto-fit</code>)
  cannot be combined with <a href="#intrinsic-sizing-function">intrinsic</a> or <a href="#flexible-sizing-function">flexible</a> sizes.</p>
     </li>
  </ul>

  <p>When <code>auto-fill</code> is given as the repetition number,
  if the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> size or max size in the relevant axis,
  then the number of repetitions is the largest possible positive integer
  that does not cause the <a href="#grid">grid</a> to overflow its <a href="#grid-container">grid container</a> (treating each track as its <a href="#max-track-sizing-function">max track sizing function</a> if that is <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> or as its minimum track sizing function otherwise,
  and taking <a href="https://www.w3.org/TR/css3-align/#gap">gap</a> into account);
  if any number of repetitions would overflow,
  then 1 repetition.
  Otherwise, if the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> min size in the relevant axis,
  the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement.
  Otherwise, the specified <a href="#track-list">track list</a> repeats only once.</p>

  <p>The <code>auto-fit</code> keyword behaves the same as <code>auto-fill</code>,
  except that after <a href="#auto-placement-algo">grid item placement</a> any empty repeated tracks are <a href="#collapsed-track">collapsed</a>.
  An empty track is one with no in-flow grid items placed into or spanning across it.
  (This can result in <em>all</em> tracks being <a href="#collapsed-track">collapsed</a>,
  if they’re all empty.)</p>`,

  customValues: [
    {
      name: 'repeat(5, 1fr)',
      current: true
    },
    {
      name: 'repeat(auto-fill, minmax(75px, 1fr))',
    },
    {
      name: 'repeat(auto-fit, minmax(75px, 1fr))',
    },
  ],

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': 'repeat(4, 1fr)'
    }
  }],
}


