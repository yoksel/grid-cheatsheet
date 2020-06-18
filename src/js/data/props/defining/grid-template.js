export default {
  name: 'grid-template',
  group: 'alignment',

  link: 'https://www.w3.org/TR/css-grid-1/#explicit-grid-shorthand',

  initValue: 'see individual properties',

  appliesTo: '<a href="#grid-container">grid containers</a>',

  desc: `<p>The <i>grid-template</i> property is a <a href='https://www.w3.org/TR/css-cascade-4/#shorthand-property' >shorthand</a> for setting <i>grid-template-columns</i>,
  <i>grid-template-rows</i>, and <i>grid-template-areas</i> in a single declaration. It has several distinct syntax forms:</p>
    <p role='note'><span>Note:</span> The <i>grid</i> shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Unless authors want those to cascade in separately, it is therefore recommended to use <i>grid</i> instead of <i>grid-template</i>.</p>`,

  values: [
    {
      name: 'none',
      alias: 'valdef-grid-template-none',
      desc: 'Sets all three properties to their initial values (<a href="#track-sizing-none">none</a>).'
    },

    {
      name: '&lt;‘grid-template-rows’&gt; / &lt;‘grid-template-columns’&gt;',
      alias: 'grid-template-rowcol',
      desc: `Sets <a href="#section-grid-template-rows">grid-template-rows</a> and <a href="#section-grid-template-columns">grid-template-columns</a> to the specified values, respectively,
and sets <a href="#section-grid-template-areas">grid-template-areas</a> to <a href="#valdef-grid-template-areas-none">none</a>.`
    },

    {
      name: '[ &lt;line-names&gt;? &lt;string&gt; &lt;track-size&gt;? &lt;line-names&gt;? ]+ [ / &lt;explicit-track-list&gt; ]?',
      alias: 'grid-template-ascii',
      desc: `<ul>
      <li>
       <p>Sets <a href="#section-grid-template-areas">grid-template-areas</a> to the strings listed.</p>
  </li><li>
       <p>Sets <a href="#section-grid-template-rows">grid-template-rows</a> to the <a href="https://www.w3.org/TR/css-grid-1/#typedef-track-size">&lt;track-size&gt;</a>s following each string
(filling in <a href="#track-list-values-auto">auto</a> for any missing sizes),
and splicing in the named lines defined before/after each size.</p>
  </li><li>
       <p>Sets <a href="#section-grid-template-columns">grid-template-columns</a> to the track listing specified after the slash
(or <a href="#track-sizing-none">none</a>, if not specified).</p>
  </li>
</ul>
     <p>This syntax allows the author to align track names and sizes inline with their respective grid areas.</p>

     <p class="note" role="note"><span>Note:</span> Note that the <a href="#funcdef-repeat">repeat()</a> function isn’t allowed in these track listings,
as the tracks are intended to visually line up one-to-one with the rows/columns in the “ASCII art”.</p>`
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
