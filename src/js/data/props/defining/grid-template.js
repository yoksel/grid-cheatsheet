export default {
  name: 'grid-template',
  group: 'alignment',

  link: 'https://www.w3.org/TR/css3-grid-layout/#explicit-grid-shorthand',

  initValue: 'see individual properties',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: `<p>The <i>grid-template</i> property is a <a href='https://www.w3.org/TR/css-cascade-4/#shorthand-property' >shorthand</a> for setting <i>grid-template-columns</i>,
  <i>grid-template-rows</i>, and <i>grid-template-areas</i> in a single declaration. It has several distinct syntax forms:</p>
    <p role='note'><span>Note:</span> The <i>grid</i> shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Unless authors want those to cascade in separately, it is therefore recommended to use <i>grid</i> instead of <i>grid-template</i>.</p>`,

  values: [
    {
      name: 'none',
      desc: 'Sets all three properties to their initial values (<i>none</i>).'
    },
    {
      name: '<‘grid-template-rows’> / <‘grid-template-columns’>',
      desc: `<p>Sets <i>grid-template-rows</i> and <i>grid-template-columns</i> to the specified values, respectively, and sets <i>grid-template-areas</i> to <i>none</i>.</p>

        <code>
          <pre>grid-template: auto 1fr / auto 1fr auto;</pre>
        </code>

        <p>is equivalent to</p>

        <code>
          <pre>grid-template-rows: auto 1fr;
          grid-template-columns: auto 1fr auto;
          grid-template-areas: none; </pre>
        </code>`
    },
    {
      name: '[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?',
      desc: `<ul> <li>
        <p>Sets <i>grid-template-areas</i> to the strings listed.</p> </li>
          <li> <p>Sets <i>grid-template-rows</i> to the <i>&lt;track-size&gt;</i>s following each string (filling in <i>auto</i> for any missing sizes), and splicing in the named lines defined before/after each size.</p> </li>
          <li > <p>Sets <i>grid-template-columns</i> to the track listing specified after the slash (or <i>none</i>, if not specified).</p> </li>
        </ul>
        <p>This syntax allows the author to align track names and sizes inline with their respective grid areas.</p>
        <div>
        <code>
          <pre>
            grid-template:
              [header-top] 'a a a' [header-bottom]
              [main-top] 'b b b' 1fr [main-bottom] / auto 1fr auto;
          </pre>
        </code>
        <p>is equivalent to</p>
        <code>
          <pre>
            grid-template-areas: 'a a a' 'b b b';
            grid-template-rows: [header-top] auto [header-bottom main-top] 1fr [main-bottom];
            grid-template-columns: auto 1fr auto;
          </pre>
        </code>
        <p>and creates the following grid:</p>
        <figure> <object data='images/grid-shorthand.svg' type='image/svg+xml'></object>
        <ul>
          <li>
            Three columns, sized <i>auto</i>, <span >1fr</span>, and <i>auto</i>, respectively
          </li>
          <li>
            Two rows sized as <i>auto</i> and <span >1fr</span>, respectively.
          </li>
          <li>
            A line named both “header-top” and “a-start” at the top, a line with four names—<wbr>“header-bottom”, “main-top”, “a-end”, and “b-start”—<wbr>in the middle, a line named “main-bottom” and “b-end” at the bottom.
          </li>
          <li>A line named “a-start” and “b-start” on the left edge, and a line named “a-end” and “b-end” on the right edge.
          </li>
          </ul>
          <figcaption>

          The grid created by the declarations above. (The “a/b-start/end” names are created <i>implicitly</i> by the <i>named grid areas</i>.) </figcaption> </figure> </div> <p role='note'><span>Note:</span> Note that the <i>repeat()</i> function isn’t allowed in these track listings, as the tracks are intended to visually line up one-to-one with the rows/columns in the “ASCII art”.</p>`
    }
  ],

  customValues: [
    {
      id: 'autofr',
      name: 'auto 1fr / auto 1fr',
      current: true
    },
    {
      id: 'named-areas-template',
      name: `[header-top] 'a a a' [header-bottom]
  [main-top] 'b b b' 1fr [main-bottom]
  / auto 1fr auto`
    }
  ],

  htmlMarkup: `<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template': 'auto 1fr / auto 1fr'
      }
    },
    {
      selector: '.child:nth-child(1)',
      props: {
        'grid-row': 'header-top / main-bottom'
      },
      valueId: 'named-areas-template'
    },
    {
      selector: '.child:nth-child(3)',
      props: {
        'grid-row': 'a-start / b-end',
        'grid-column': 3
      },
      valueId: 'named-areas-template'
    }
  ]
};
