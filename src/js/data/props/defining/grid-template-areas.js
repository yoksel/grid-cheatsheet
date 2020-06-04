export default {
  name: 'grid-template-areas',

  link: 'https://www.w3.org/TR/css3-grid-layout/#grid-template-areas-property',

  initValue: 'none',

  target: 'grid containers',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: `<p>This property specifies <dfn id="named-grid-area">named grid areas</dfn>,
  which are not associated with any particular <a href="https://www.w3.org/TR/css3-grid-layout/#grid-item">grid item</a>,
  but can be referenced from the <a href="#grid-placement-property">grid-placement properties</a>.
  The syntax of the <a href="#grid-template-areas">grid-template-areas</a> property also provides a visualization
  of the structure of the <a href="https://www.w3.org/TR/css3-grid-layout/#grid">grid</a>,
  making the overall layout of the <a href="#grid-container">grid container</a> easier to understand.</p>`,

  values: [
    {
      name: 'none',
      desc: `<p>Indicates that no <a href="#named-grid-area">named grid areas</a>,
      and likewise no <a href="#explicit-grid">explicit grid</a> tracks,
      are defined by this property
      (though <a href="#explicit-grid">explicit grid</a> tracks could still be created by <a href="#grid-template-columns">grid-template-columns</a> or <a href="#grid-template-rows">grid-template-rows</a>).</p>

     <p class="note" role="note"><span>Note:</span> In the absence of an <a href="#explicit-grid">explicit grid</a> any rows/columns will be <a href="https://www.w3.org/TR/css3-grid-layout/#implicit-grids">implicitly generated</a>,
      and their size will be determined by the <a href="#grid-auto-rows">grid-auto-rows</a> and <a href="#grid-auto-columns">grid-auto-columns</a> properties.</p>
    `
    },
    {
      name: '&lt;string&gt;+',
      alias: 'grid-template-areas-string',
      desc: `<p>A row is created for every separate string listed for the <a href="#grid-template-areas">grid-template-areas</a> property,
      and a column is created for each cell in the string,
      when parsed as follows:</p>

      <p>Tokenize the string into a list of the following tokens,
      using longest-match semantics:</p>

      <ul>
        <li> A sequence of <a href="https://www.w3.org/TR/css-syntax-3/#name-code-point">name code points</a>,
            representing a <dfn id="grid-template-areas-named-cell-token">named cell token</dfn> with a name consisting of its code points.
        </li>
        <li> A sequence of one or more "." (U+002E FULL STOP),
            representing a <dfn id="grid-template-areas-null-cell-token">null cell token</dfn>.
        </li>
        <li> A sequence of <a href="https://www.w3.org/TR/css-syntax-3/#whitespace">whitespace</a>,
            representing nothing
            (do not produce a token).
        </li>
        <li> A sequence of any other characters,
            representing a <dfn id="grid-template-areas-trash-token">trash token</dfn>.
        </li>
      </ul>

      <p class="note" role="note"><span>Note:</span> These rules can produce cell names that do not match the <a href="https://www.w3.org/TR/css3-values/#typedef-ident">&lt;ident&gt;</a> syntax,
      such as "1st 2nd 3rd",
      which requires escaping when referencing those areas by name in other properties,
      like <a href="https://www.w3.org/TR/css3-grid-layout/#grid-row">grid-row: \\3 1st;</a> to reference the area named <span class="css">1st</span>.</p>

      <ul>
        <li> A <a href="#grid-template-areas-null-cell-token">null cell token</a> represents an unnamed area in the <a href="#grid-container">grid container</a>.
        </li>
        <li> A <a href="#grid-template-areas-named-cell-token">named cell token</a> creates a <a href="#named-grid-area">named grid area</a> with the same name.
          Multiple <a href="#grid-template-areas-named-cell-token">named cell tokens</a> within and between rows
          create a single <a href="#named-grid-area">named grid area</a> that spans the corresponding <a href="https://www.w3.org/TR/css3-grid-layout/#grid-cell">grid cells</a>.
        </li>
        <li> A <a href="#grid-template-areas-trash-token">trash token</a> is a syntax error,
            and makes the declaration invalid.
        </li>
      </ul>

     <p>All strings must have the same number of columns,
      or else the declaration is invalid.
      If a <a href="#named-grid-area">named grid area</a> spans multiple <a href="https://www.w3.org/TR/css3-grid-layout/#grid-cell">grid cells</a>,
      but those cells do not form a single filled-in rectangle,
      the declaration is invalid.</p>

     <p class="note" role="note"><span>Note:</span> Non-rectangular or disconnected regions may be permitted in a future version of this module.</p>`
    }
  ],

  customValues: [
    {
      name: `"head head"
            "aside main"
            "foot foot"`,
      current: true
    },
    {
      name: `"head aside"
             "main main"
             "foot foot"`
    },
    {
      name: `"head aside"
             "main aside"
             "foot aside"`
    },
    {
      name: `"head"
             "main"
             "aside"
             "foot"`
    },
    {
      name: 'none'
    }
  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <header class="child header">Header</header>
    <main class="child main">Main</main>
    <aside class="child aside">Aside</aside>
    <footer class="child footer">Footer</footer>
  </div>`,

  cssRules: [
    {
      selector: '.parent',
      props: {
        display: 'grid',
        'grid-template-areas': `"head head"
                                "aside main"
                                "foot foot"`
      }
    },
    {
      selector: '.header',
      props: {
       'grid-area': 'head'
      }
    },
    {
      selector: '.aside',
      props: {
       'grid-area': 'aside'
      }
    },
    {
      selector: '.main',
      props: {
       'grid-area': 'main'
      }
    },
    {
      selector: '.footer',
      props: {
       'grid-area': 'foot'
      }
    }
  ]
};
