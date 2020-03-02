var accentColor = 'khaki';
var data = [];


data[data.length] = {
    name: 'display',

    link: 'https://www.w3.org/TR/css-flexbox-1/#display-property',

    initValue: '',

    target: '',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: '<p>A <dfn >grid container</dfn> establishes a new <dfn >grid formatting context</dfn> for its contents. This is the same as establishing a block formatting context, except that grid layout is used instead of block layout: floats do not intrude into the grid container, and the grid container’s margins do not collapse with the margins of its contents. The contents of a <i>grid container</i> are laid out into a <i>grid</i>, with <i>grid lines</i> forming the boundaries of each <i>grid items</i>’ containing block. The <a href=\'https://www.w3.org/TR/css-overflow-3/#propdef-overflow\' >overflow</a> property applies to <i>grid containers</i>.</p><p>Grid containers are not block containers, and so some properties that were designed with the assumption of block layout don’t apply in the context of grid layout. In particular:</p><p>If an element’s specified <a href=\'https://www.w3.org/TR/css-ruby-1/#propdef-display\' >display</a> is <i>inline-grid</i> and the element is floated or absolutely positioned, the computed value of <a href=\'https://www.w3.org/TR/css-ruby-1/#propdef-display\' >display</a> is <i>grid</i>. The table in <a href=\'https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo\'>CSS 2.1 Chapter 9.7</a> is thus amended to contain an additional row, with <i>inline-grid</i> in the \'Specified Value\' column and <i>grid</i> in the \'Computed Value\' column.</p>',

    values: [
    {
        'name': 'grid',
        'desc': 'This value causes an element to generate a block-level <i>grid container</i> box.'
    },
    {
        'name': 'inline-grid',
        'desc': 'This value causes an element to generate an inline-level <i>grid container</i> box.'
    }
]
};

data[data.length] = {
    name: 'grid-template-columns, grid-template-rows',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-template-columns, grid-template-rows-property',

    initValue: 'none',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: '<p>These properties specify, as a space-separated <dfn >track list</dfn>, the line names and <i>track sizing functions</i> of the <i>grid</i>. The <i>grid-template-columns</i> property specifies the <i>track list</i> for the grid’s columns, while <i>grid-template-rows</i> specifies the <i>track list</i> for the grid’s rows.</p><p>Values have the following meanings:</p><p>The syntax of a <i>track list</i> is:</p><p>Where:</p><p role=\'note\'><span>Note:</span> The size of the grid is not purely the sum of the track sizes, as <a href=\'https://www.w3.org/TR/css3-align/#propdef-row-gap\' >row-gap</a>, <a href=\'https://www.w3.org/TR/css3-align/#propdef-column-gap\' >column-gap</a> and <a href=\'https://www.w3.org/TR/css3-align/#propdef-justify-content\' >justify-content</a>, <a href=\'https://www.w3.org/TR/css3-align/#propdef-align-content\' >align-content</a> can add additional space between tracks.</p>',

    values: [
    {
        'name': 'none',
        'desc': 'Indicates that no <i>explicit</i> grid tracks are created by this property (though <i>explicit grid</i> tracks could still be created by <i>grid-template-areas</i>). <p role=\'note\'><span>Note:</span> In the absence of an <i>explicit grid</i> any rows/columns will be <i>implicitly generated</i>, and their size will be determined by the <i>grid-auto-rows</i> and <i>grid-auto-columns</i> properties.</p>'
    },
    {
        'name': '<track-list> | <auto-track-list>',
        'desc': 'Specifies the <i>track list</i> as a series of <i>track sizing functions</i> and line names. Each <dfn >track sizing function</dfn> can be specified as a length, a percentage of the <i>grid container</i>’s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid. It can also be specified as a range using the <i>minmax()</i> notation, which can combine any of the previously mentioned mechanisms to specify separate <i>min</i> and <i>max track sizing functions</i> for the column or row.'
    }
]
};

data[data.length] = {
    name: 'grid-template-areas',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-template-areas-property',

    initValue: 'none',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: '<p>This property specifies <dfn >named grid areas</dfn>, which are not associated with any particular <i>grid item</i>, but can be referenced from the <i>grid-placement properties</i>. The syntax of the <i>grid-template-areas</i> property also provides a visualization of the structure of the <i>grid</i>, making the overall layout of the <i>grid container</i> easier to understand.</p><p>Values have the following meanings:</p>',

    values: [
    {
        'name': 'none',
        'desc': 'Indicates that no <i>named grid areas</i>, and likewise no <i>explicit grid</i> tracks, are defined by this property (though <i>explicit grid</i> tracks could still be created by <i>grid-template-columns</i> or <i>grid-template-rows</i>). <p role=\'note\'><span>Note:</span> In the absence of an <i>explicit grid</i> any rows/columns will be <i>implicitly generated</i>, and their size will be determined by the <i>grid-auto-rows</i> and <i>grid-auto-columns</i> properties.</p>'
    },
    {
        'name': '<string>+',
        'desc': 'A row is created for every separate string listed for the <i>grid-template-areas</i> property, and a column is created for each cell in the string, when parsed as follows: <p>Tokenize the string into a list of the following tokens, using longest-match semantics:</p> <ul> <li> A sequence of <a href=\'https://www.w3.org/TR/css-syntax-3/#name-code-point\' >name code points</a>, representing a <dfn >named cell token</dfn> with a name consisting of its code points. </li><li> A sequence of one or more \'.\' (U+002E FULL STOP), representing a <dfn >null cell token</dfn>. </li><li> A sequence of <a href=\'https://www.w3.org/TR/css-syntax-3/#whitespace\' >whitespace</a>, representing nothing (do not produce a token). </li><li> A sequence of any other characters, representing a <dfn >trash token</dfn>. </li></ul> <p role=\'note\'><span>Note:</span> These rules can produce cell names that do not match the <a href=\'https://www.w3.org/TR/css3-values/#typedef-ident\' >&lt;ident&gt;</a> syntax, such as \'1st 2nd 3rd\', which requires escaping when referencing those areas by name in other properties, like <i>grid-row: \31st;</i> to reference the area named <span >1st</span>.</p> <ul> <li> A <i>null cell token</i> represents an unnamed area in the <i>grid container</i>. </li><li> A <i>named cell token</i> creates a <i>named grid area</i> with the same name. Multiple <i>named cell tokens</i> within and between rows create a single <i>named grid area</i> that spans the corresponding <i>grid cells</i>. </li><li> A <i>trash token</i> is a syntax error, and makes the declaration invalid. </li></ul> <p>All strings must have the same number of columns, or else the declaration is invalid. If a <i>named grid area</i> spans multiple <i>grid cells</i>, but those cells do not form a single filled-in rectangle, the declaration is invalid.</p> <p role=\'note\'><span>Note:</span> Non-rectangular or disconnected regions may be permitted in a future version of this module.</p>'
    }
]
};

data[data.length] = {
    name: 'grid-template',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-template-property',

    initValue: 'see individual properties',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: '<p>The <i>grid-template</i> property is a <a href=\'https://www.w3.org/TR/css-cascade-4/#shorthand-property\' >shorthand</a> for setting <i>grid-template-columns</i>, <i>grid-template-rows</i>, and <i>grid-template-areas</i> in a single declaration. It has several distinct syntax forms:</p><p role=\'note\'><span>Note:</span> The <i>grid</i> shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Unless authors want those to cascade in separately, it is therefore recommended to use <i>grid</i> instead of <i>grid-template</i>.</p>',

    values: [
      {
          'name': 'none',
          'desc': 'Sets all three properties to their initial values (<i>none</i>).'
      },
      {
          'name': '<‘grid-template-rows’> / <‘grid-template-columns’>',
          'desc': 'Sets <i>grid-template-rows</i> and <i>grid-template-columns</i> to the specified values, respectively, and sets <i>grid-template-areas</i> to <i>none</i>. <div >    <pre>grid-template: auto 1fr / auto 1fr auto;</pre> <p>is equivalent to</p> <pre>grid-template-rows: auto 1fr; grid-template-columns: auto 1fr auto; grid-template-areas: none; </pre> </div>'
      },
      {
          'name': '[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?',
          'desc': `<ul> <li>
            <p>Sets <i>grid-template-areas</i> to the strings listed.</p> </li>
              <li> <p>Sets <i>grid-template-rows</i> to the <i>&lt;track-size&gt;</i>s following each string (filling in <i>auto</i> for any missing sizes), and splicing in the named lines defined before/after each size.</p> </li>
              <li > <p>Sets <i>grid-template-columns</i> to the track listing specified after the slash (or <i>none</i>, if not specified).</p> </li>
            </ul>
            <p>This syntax allows the author to align track names and sizes inline with their respective grid areas.</p>
            <div >
            <pre>
              grid-template: [header-top] \'a a a\' [header-bottom] [main-top] \'b b b\' 1fr [main-bottom] / auto 1fr auto;
            </pre> <p>is equivalent to</p>
            <pre>
            grid-template-areas: \'a a a\' \'b b b\';
            grid-template-rows: [header-top] auto [header-bottom main-top] 1fr [main-bottom];
            grid-template-columns: auto 1fr auto;
            </pre>
            <p>and creates the following grid:</p>
            <figure> <object data=\'images/grid-shorthand.svg\' type=\'image/svg+xml\'></object>
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

              The grid created by the declarations above. (The “a/b-start/end” names are created <i>implicitly</i> by the <i>named grid areas</i>.) </figcaption> </figure> </div> <p role=\'note\'><span>Note:</span> Note that the <i>repeat()</i> function isn’t allowed in these track listings, as the tracks are intended to visually line up one-to-one with the rows/columns in the “ASCII art”.</p>`
      }
  ]
};

// Normal below

data[data.length] = {
    name: 'grid-auto-columns, grid-auto-rows',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-auto-columns, grid-auto-rows-property',

    initValue: 'auto',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: '<p>If a grid item is positioned into a row or column that is not explicitly sized by <i>grid-template-rows</i> or <i>grid-template-columns</i>, <i>implicit grid tracks</i> are created to hold it. This can happen either by explicitly positioning into a row or column that is out of range, or by the <i>auto-placement algorithm</i> creating additional rows or columns. The <i>grid-auto-columns</i> and <i>grid-auto-rows</i> properties specify the size of such implicitly-created tracks.</p><p>If multiple track sizes are given, the pattern is repeated as necessary to find the size of the implicit tracks. The first <i>implicit grid track</i> after the <i>explicit grid</i> receives the first specified size, and so on forwards; and the last <i>implicit grid track</i> before the <i>explicit grid</i> receives the last specified size, and so on backwards.</p>',

    values: []
};

data[data.length] = {
    name: 'grid-auto-flow',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-auto-flow-property',

    initValue: 'row',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: '<p><i>Grid items</i> that aren’t explicitly placed are automatically placed into an unoccupied space in the <i>grid container</i> by the <i>auto-placement algorithm</i>. <i>grid-auto-flow</i> controls how the <i>auto-placement algorithm</i> works, specifying exactly how auto-placed items get flowed into the grid. See <i>§8.5 Grid Item Placement Algorithm</i> for details on precisely how the auto-placement algorithm works.</p><p role=\'note\'><span>Note:</span> A future level of this module is expected to add a value that flows auto-positioned items together into a single “default” cell.</p><p>Auto-placement takes <i>grid items</i> in <a href=\'https://www.w3.org/TR/css-flexbox-1/#order-modified-document-order\' >order-modified document order</a>.</p>',

    values: [
    {
        'name': 'row',
        'desc': 'The <i>auto-placement algorithm</i> places items by filling each row in turn, adding new rows as necessary. If neither <i>row</i> nor <i>column</i> is provided, <i>row</i> is assumed.'
    },
    {
        'name': 'column',
        'desc': 'The <i>auto-placement algorithm</i> places items by filling each column in turn, adding new columns as necessary.'
    },
    {
        'name': 'dense',
        'desc': 'If specified, the <i>auto-placement algorithm</i> uses a “dense” packing algorithm, which attempts to fill in holes earlier in the grid if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items. <p>If omitted, a “sparse” algorithm is used, where the placement algorithm only ever moves “forward” in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear “in order”, even if this leaves holes that could have been filled by later items.</p>'
    }
]
};

data[data.length] = {
    name: 'grid',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-property',

    initValue: 'see individual properties',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: '<p>The <i>grid</i> property is a <a href=\'https://www.w3.org/TR/css-cascade-4/#shorthand-property\' >shorthand</a> that sets all of the <i>explicit grid properties</i> (<i>grid-template-rows</i>, <i>grid-template-columns</i>, and <i>grid-template-areas</i>), and all the <i>implicit grid properties</i> (<i>grid-auto-rows</i>, <i>grid-auto-columns</i>, and <i>grid-auto-flow</i>), in a single declaration. (It does not reset the <a href=\'https://www.w3.org/TR/css3-align/#gutter\' >gutter</a> properties.) Its syntax matches <i>grid-template</i>, plus an additional syntax form for defining auto-flow grids:</p><p role=\'note\'><span>Note:</span> Note that you can only specify the explicit <em>or</em> the implicit grid properties in a single <i>grid</i> declaration. The sub-properties you don’t specify are set to their initial value, as normal for <a href=\'https://www.w3.org/TR/css-cascade-4/#shorthand-property\' >shorthands</a>.</p>',

    values: [
    {
        'name': '<‘grid-template-rows’> / [ auto-flow && dense? ] <‘grid-auto-columns’>?'
    },
    {
        'name': '[ auto-flow && dense? ] <‘grid-auto-rows’>? / <‘grid-template-columns’>',
        'desc': 'Sets up auto-flow, by setting the tracks in one axis explicitly (setting either <i>grid-template-rows</i> or <i>grid-template-columns</i> as specified, and setting the other to <i>none</i>), and specifying how to auto-repeat the tracks in the other axis (setting either <i>grid-auto-rows</i> or <i>grid-auto-columns</i> as specified, and setting the other to <span >auto</span>). <i>grid-auto-flow</i> is also set to either <i>row</i> or <i>column</i> accordingly, with <i>dense</i> if it’s specified. <p>All other <i>grid</i> <a href=\'https://www.w3.org/TR/css-cascade-4/#longhand\' >sub-properties</a> are reset to their initial values.</p>'
    }
]
};

data[data.length] = {
    name: 'grid-row-start, grid-column-start, grid-row-end, grid-column-end',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-row-start, grid-column-start, grid-row-end, grid-column-end-property',

    initValue: 'auto',

    target: 'grid items',

    targetForDemo: 'grid items',
    appliesTo: 'grid items',

    desc: '<p>The <i>grid-row-start</i>, <i>grid-column-start</i>, <i>grid-row-end</i>, and <i>grid-column-end</i> properties determine a <i>grid item</i>’s size and location within the <i>grid</i> by contributing a line, a span, or nothing (automatic) to its <i>grid placement</i>, thereby specifying the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-start\' >inline-start</a>, <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-start\' >block-start</a>, <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-end\' >inline-end</a>, and <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-end\' >block-end</a> edges of its <i>grid area</i>.</p><p>Values have the following meanings:</p><p>In all the above productions, the <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a> additionally excludes the keyword <span >span</span>.</p>',

    values: [
    {
        'name': '<custom-ident>',
        'desc': 'First attempt to match the <i>grid area</i>’s edge to a <i>named grid area</i>: if there is a <i>named line</i> with the name \'WHAT\'<a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>-start<span > (for <a >grid-*-start</a>) / </span><a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>-end \'WHAT\' (for <i>grid item</i>’s <i>placement</i>. <p role=\'note\'><span>Note:</span> <i>Named grid areas</i> automatically generate <i>implicit named lines</i> of this form, so specifying <i>grid-row-start: foo</i> will choose the start edge of that <i>named grid area</i> (unless another line named <span >foo-start</span> was explicitly specified before it).</p> <p>Otherwise, treat this as if the integer <span >1</span> had been specified along with the <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>.</p>'
    },
    {
        'name': '<integer> && <custom-ident>?',
        'desc': 'Contributes the <var>N</var>th <i>grid line</i> to the <i>grid item</i>’s <i>placement</i>. If a negative integer is given, it instead counts in reverse, starting from the end edge of the <i>explicit grid</i>. <p>If a name is given as a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, only lines with that name are counted. If not enough lines with that name exist, all <i>implicit grid lines</i> are assumed to have that name for the purpose of finding this position.</p> <p>An <a href=\'https://www.w3.org/TR/css3-values/#integer-value\' >&lt;integer&gt;</a> value of zero makes the declaration invalid.</p>'
    },
    {
        'name': 'span && [ <integer> || <custom-ident> ]',
        'desc': 'Contributes a <i>grid span</i> to the <i>grid item</i>’s <i>placement</i> such that the corresponding edge of the <i>grid item</i>’s <i>grid area</i> is <var>N</var> lines from its opposite edge in the corresponding direction. For example, <i>grid-column-end: span 2</i> indicates the second grid line in the endward direction from the <i>grid-column-start</i> line. <p>If a name is given as a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, only lines with that name are counted. If not enough lines with that name exist, all <i>implicit grid lines</i> on the side of the <i>explicit grid</i> corresponding to the search direction are assumed to have that name for the purpose of counting this span.</p> <div >    For example, given the following declarations: <pre ><span >.grid </span><span >{</span> <span >grid-template-columns</span><span >:</span> <span >100</span><span >px</span><span >;</span> <span >}</span> <span >.griditem </span><span >{</span> <span >grid-column</span><span >:</span> span foo <span >/</span> <span >4</span><span >;</span> <span >}</span> </pre> <p>The <i>grid container</i> has an <i>explicit grid</i> with two grid lines, numbered 1 and 2. The <i>grid item’s</i> column-end edge is specified to be at line 4, so two lines are generated in the endward side of the <i>implicit grid</i>.</p> <p>Its column-start edge must be the first \'foo\' line it can find startward of that. There is no \'foo\' line in the grid, though, so the only possibility is a line in the <i>implicit grid</i>. Line 3 is not a candidate, because it’s on the endward side of the <i>explicit grid</i>, while the <i>grid-column-start</i> span forces it to search startward. So, the only option is for the <i>implicit grid</i> to generate a line on the startward side of the <i>explicit grid</i>.</p> <figure> <img src=\'images/implicit-lines-search.svg\' width=\'600\'> <figcaption>An illustration of the result. </figcaption> </figure> </div> <p>If the <a href=\'https://www.w3.org/TR/css3-values/#integer-value\' >&lt;integer&gt;</a> is omitted, it defaults to <span >1</span>. Negative integers or zero are invalid.</p>'
    },
    {
        'name': 'auto',
        'desc': 'The property contributes nothing to the <i>grid item</i>’s <i>placement</i>, indicating <i>auto-placement</i> or a default span of one. (See <i>§8 Placing Grid Items</i>, above.)'
    }
]
};

data[data.length] = {
    name: 'grid-row, grid-column',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-row, grid-column-property',

    initValue: 'see individual properties',

    target: 'grid items',

    targetForDemo: 'grid items',
    appliesTo: 'grid items',

    desc: '<p>The <i>grid-row</i> and <i>grid-column</i> properties are shorthands for <i>grid-row-start</i>/<i>grid-row-end</i> and <i>grid-column-start</i>/<i>grid-column-end</i>, respectively.</p><p>If two <i> | auto | span &amp;&amp; [ <integer> || <custom-ident> ] | <integer> &amp;&amp; <custom-ident>?\'>&lt;grid-line&gt;</i> values are specified, the <i>grid-row-start</i>/<i>grid-column-start</i> longhand is set to the value before the slash, and the <i>grid-row-end</i>/<i>grid-column-end</i> longhand is set to the value after the slash.</p><p>When the second value is omitted, if the first value is a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, the <i>grid-row-end</i>/<i>grid-column-end</i> longhand is also set to that <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>; otherwise, it is set to <i>auto</i>.</p><p>If four <i> | auto | span &amp;&amp; [ <integer> || <custom-ident> ] | <integer> &amp;&amp; <custom-ident>?\'>&lt;grid-line&gt;</i> values are specified, <i>grid-row-start</i> is set to the first value, <i>grid-column-start</i> is set to the second value, <i>grid-row-end</i> is set to the third value, and <i>grid-column-end</i> is set to the fourth value.</p><p>When <i>grid-column-end</i> is omitted, if <i>grid-column-start</i> is a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, <i>grid-column-end</i> is set to that <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>; otherwise, it is set to <i>auto</i>.</p><p>When <i>grid-row-end</i> is omitted, if <i>grid-row-start</i> is a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, <i>grid-row-end</i> is set to that <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>; otherwise, it is set to <i>auto</i>.</p><p>When <i>grid-column-start</i> is omitted, if <i>grid-row-start</i> is a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, all four longhands are set to that value. Otherwise, it is set to <i>auto</i>.</p><p role=\'note\'><span>Note:</span> The resolution order for this shorthand is row-start/column-start/row-end/column-end, which goes CCW for LTR pages, the opposite direction of the related 4-edge properties using physical directions, like <a href=\'https://www.w3.org/TR/CSS21/box.html#propdef-margin\' >margin</a>.</p>',

    values: []
};

data[data.length] = {
    name: 'grid-area',

    link: 'https://www.w3.org/TR/css-flexbox-1/#grid-area-property',

    initValue: 'see individual properties',

    target: 'grid items',

    targetForDemo: 'grid items',
    appliesTo: 'grid items',

    desc: '<p>If four <i> | auto | span &amp;&amp; [ <integer> || <custom-ident> ] | <integer> &amp;&amp; <custom-ident>?\'>&lt;grid-line&gt;</i> values are specified, <i>grid-row-start</i> is set to the first value, <i>grid-column-start</i> is set to the second value, <i>grid-row-end</i> is set to the third value, and <i>grid-column-end</i> is set to the fourth value.</p><p>When <i>grid-column-end</i> is omitted, if <i>grid-column-start</i> is a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, <i>grid-column-end</i> is set to that <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>; otherwise, it is set to <i>auto</i>.</p><p>When <i>grid-row-end</i> is omitted, if <i>grid-row-start</i> is a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, <i>grid-row-end</i> is set to that <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>; otherwise, it is set to <i>auto</i>.</p><p>When <i>grid-column-start</i> is omitted, if <i>grid-row-start</i> is a <a href=\'https://www.w3.org/TR/css3-values/#identifier-value\' >&lt;custom-ident&gt;</a>, all four longhands are set to that value. Otherwise, it is set to <i>auto</i>.</p><p role=\'note\'><span>Note:</span> The resolution order for this shorthand is row-start/column-start/row-end/column-end, which goes CCW for LTR pages, the opposite direction of the related 4-edge properties using physical directions, like <a href=\'https://www.w3.org/TR/CSS21/box.html#propdef-margin\' >margin</a>.</p>',

    values: []
};



// -------------------------

data[data.length] = {
  name: 'demos',
  title: 'Demos',
  type: 'subheader'
};

data[data.length] = {
  name: 'demo-1',

  link: 'https://www.w3.org/TR/css-grid-1/#adapting-to-available-space',

  targetForDemo: 'demos',
  appliesTo: 'all elements',

  desc: 'Hello world',

  values: [],
  initValue: '',

  htmlMarkup: `<div id="grid" class="parent">
  <div id="title" class="child">Game Title</div>
  <div id="score" class="child">Score</div>
  <div id="stats" class="child">Stats</div>
  <div id="board" class="child">Board</div>
  <div id="controls" class="child">Controls</div>
</div>`,

  cssRules: [
    {
      'selector': '.parent',
      'rules': {
        'display': 'flex'
      }
    },
    {
      'selector': '#grid',
      'rules': {
        'display': 'grid',
        'grid-template-columns': 'auto 1fr',
        'grid-template-rows': 'auto 1fr auto',
      }
    },
    {
      'selector': '#title',
      'rules': {
        'grid-column': 1,
        'grid-row': 1,
      }
    },
    {
      'selector': '#score',
      'rules': {
        'grid-column': 1,
        'grid-row': 3,
      }
    },
    {
      'selector': '#stats',
      'rules': {
        'grid-column': 1,
        'grid-row': 2,
        'align-self': 'start',
      }
    },
    {
      'selector': '#board',
      'rules': {
        'grid-column': 2,
        'grid-row': '1 / span 2',
      }
    },
    {
    'selector': '#controls',
    'rules': {
      'grid-column': 2,
      'grid-row': 3,
      'justify-self': 'center',
    }
  }],
};

// -------------------------------
data[data.length] = {
  name: 'display',

  link: 'https://www.w3.org/TR/css-grid-1/#grid-containers',

  targetForDemo: 'grid containers',
  appliesTo: 'all elements',

  desc: '[add later]',

  values: [{
      'name': 'grid',
      'desc': 'This value causes an element to generate a block-level <i>grid</i> container box.',
      current: true
    },
    {
      'name': 'inline-grid',
      'desc': 'This value causes an element to generate an inline-level <i>grid</i> container box.'
    }
  ],
  initValue: '',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'grid'
    }
  }],

  demoBefore: 'Some text'
};


data[data.length] = {
  name: 'ordering-orientation',
  title: 'Ordering & Orientation',
  type: 'subheader'
};


data[data.length] = {
  name: 'flex-direction',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-direction-property',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: '<p>The <i>flex-direction</i> property specifies how <i>flex items</i> are placed in the flex container, by setting the direction of the flex container’s <i>main axis</i>. This determines the direction in which flex items are laid out.</p><p role=\'note\'>Note: The reverse values do not reverse box ordering: like <a href=\'https://www.w3.org/TR/css-writing-modes-3/#propdef-writing-mode\'>writing-mode</a> and <a href=\'https://www.w3.org/TR/css-writing-modes-3/#propdef-direction\'>direction</a> , they only change the direction of flow. Painting order, speech order, and sequential navigation orders are not affected.</p>',

  values: [{
      name: 'row',
      desc: 'The flex container’s <i>main axis</i> has the same orientation as the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-axis\'>inline axis</a> of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>. The <i>main-start</i> and <i>main-end</i> directions are equivalent to the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-start\'>inline-start</a> and <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-end\'>inline-end</a> directions, respectively, of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>.'
    },
    {
      name: 'row-reverse',
      desc: 'Same as <i>row</i>, except the <i>main-start</i> and <i>main-end</i> directions are swapped.'
    },
    {
      name: 'column',
      desc: 'The flex container’s <i>main axis</i> has the same orientation as the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-axis\'>block axis</a> of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>. The <i>main-start</i> and <i>main-end</i> directions are equivalent to the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-start\'>block-start</a> and <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-end\'>block-end</a> directions, respectively, of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a>.'
    },
    {
      name: 'column-reverse',
      desc: 'Same as <i>column</i>, except the <i>main-start</i> and <i>main-end</i> directions are swapped.'
    }
  ],

  initValue: 'row',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'flex',
      'flex-direction': 'row',
      'height': '100%'
    }
  }],
};


data[data.length] = {
  name: 'flex-wrap',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-wrap-property',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: '<p>The <i>flex-wrap</i> property controls whether the flex container is <i>single-line</i> or <i>multi-line</i>, and the direction of the <i>cross-axis</i>, which determines the direction new lines are stacked in. </p><p>For the values that are not <i>wrap-reverse</i>, the <i>cross-start</i> direction is equivalent to either the <a href=\'https://www.w3.org/TR/css-writing-modes-3/#inline-start\'>inline-start</a> or <a href=\'https://www.w3.org/TR/css-writing-modes-3/#block-start\'>block-start</a> direction of the current <a href=\'https://www.w3.org/TR/css-writing-modes-3/#writing-mode\'>writing mode</a> (whichever is in the <i>cross axis</i>) and the <i>cross-end</i> direction is the opposite direction of <i>cross-start</i>. When <i>flex-wrap</i> is <i>wrap-reverse</i>, the <i>cross-start</i> and <i>cross-end</i> directions are swapped.</p>',

  values: [{
      name: 'nowrap',
      desc: 'The flex container is <i>single-line</i>.'
    },
    {
      name: 'wrap',
      desc: 'The flex container is <i>multi-line</i>.'
    },
    {
      name: 'wrap-reverse',
      desc: 'Same as <i>wrap</i>.'
    }
  ],

  initValue: 'nowrap',

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'align-items': 'flex-start',
        'flex-wrap': 'nowrap',
        'height': '100%'
      }
    },
    {
      'selector': '.child',
      'rules': {
        'width': '40%'
      }
    }
  ],
};


data[data.length] = {
  name: 'flex-flow',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-flow-property',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: '<p>The <i>flex-flow</i> property is a shorthand for setting the <i>flex-direction</i> and <i>flex-wrap</i> properties, which together define the flex container’s main and cross axes.</p>',

  initValue: 'row nowrap',

  customValues: [{
      name: 'row nowrap',
      current: true
    },
    {
      name: 'column-reverse'
    },
    {
      name: 'column wrap'
    },
    {
      name: 'row-reverse wrap-reverse'
    }
  ],

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'flex-flow': 'row nowrap',
        'height': '100%',
      }
    },
    {
      'selector': '.child',
      'rules': {
        'width': '40%',
        'height': '40%'
      }
    }
  ],
};


data[data.length] = {
  name: 'order',

  link: 'https://www.w3.org/TR/css-flexbox-1/#order-property',

  targetForDemo: 'grid items',
  appliesTo: 'grid items',

  desc: '<p>The <i>order</i> property controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups. It takes a single <dfn ><a href=\'https://www.w3.org/TR/css3-values/#integer-value\'>&lt;integer&gt;</a></dfn> value, which specifies which ordinal group the <i>flex item</i> belongs to.</p><p>A flex container lays out its content in <dfn >order-modified document order</dfn>, starting from the lowest numbered ordinal group and going up. Items with the same ordinal group are laid out in the order they appear in the source document. This also affects the <a href=\'https://www.w3.org/TR/CSS2/zindex.html\'>painting order</a> , exactly as if the flex items were reordered in the source document.</p><p>Unless otherwise specified by a future specification, this property has no effect on boxes that are not children of a <i>flex container</i>.</p>',

  initValue: '0',

  customValues: [{
      name: '-1',
      current: true
    },
    {
      name: '0'
    },
    {
      name: '1'
    }
  ],

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'align-items': 'flex-start',
        'height': '100%'
      }
    },
    {
      'selector': '.child--featured',
      'rules': {
        'order': '-1'
      }
    }
  ],
};


data[data.length] = {
  name: 'alignment',
  title: 'Alignment',
  type: 'subheader'
};


data[data.length] = {
  name: 'justify-content',

  link: 'http://www.w3.org/TR/css-flexbox-1/#justify-content-property',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: '<p>The <i>justify-content</i> property aligns <i>flex items</i> along the <i>main axis</i> of the current line of the flex container. This is done <em>after</em> any flexible lengths and any <i>auto margins</i> have been resolved. Typically it helps distribute extra free space leftover when either all the <i>flex items</i> on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.</p>',

  values: [{
      name: 'flex-start',
      desc: '<i>Flex items</i> are packed toward the start of the line. The <i>main-start</i> margin edge of the first <i>flex item</i> on the line is placed flush with the <i>main-start</i> edge of the line, and each subsequent <i>flex item</i> is placed flush with the preceding item.'
    },
    {
      name: 'flex-end',
      desc: '<i>Flex items</i> are packed toward the end of the line. The <i>main-end</i> margin edge of the last <i>flex item</i> is placed flush with the <i>main-end</i> edge of the line, and each preceding <i>flex item</i> is placed flush with the subsequent item.'
    },
    {
      name: 'center',
      desc: '<i>Flex items</i> are packed toward the center of the line. The <i>flex items</i> on the line are placed flush with each other and aligned in the center of the line, with equal amounts of space between the <i>main-start</i> edge of the line and the first item on the line and between the <i>main-end</i> edge of the line and the last item on the line. (If the leftover free-space is negative, the <i>flex items</i> will overflow equally in both directions.)'
    },
    {
      name: 'space-between',
      desc: '<i>Flex items</i> are evenly distributed in the line. If the leftover free-space is negative or there is only a single <i>flex item</i> on the line, this value is identical to <i>flex-start</i>. Otherwise, the <i>main-start</i> margin edge of the first <i>flex item</i> on the line is placed flush with the <i>main-start</i> edge of the line, the <i>main-end</i> margin edge of the last <i>flex item</i> on the line is placed flush with the <i>main-end</i> edge of the line, and the remaining <i>flex items</i> on the line are distributed so that the spacing between any two adjacent items is the same.'
    },
    {
      name: 'space-around',
      desc: '<i>Flex items</i> are evenly distributed in the line, with half-size spaces on either end. If the leftover free-space is negative or there is only a single <i>flex item</i> on the line, this value is identical to <i>center</i>. Otherwise, the <i>flex items</i> on the line are distributed such that the spacing between any two adjacent <i>flex items</i> on the line is the same, and the spacing between the first/last <i>flex items</i> and the <i>flex container</i> edges is half the size of the spacing between <i>flex items</i>.'
    },
    {
      name: 'space-evenly',
      desc: '<i>Flex items</i> are evenly distributed in the line. If the leftover free-space is negative or there is only a single <i>flex item</i> on the line, this value is identical to <i>center</i>. Otherwise, the <i>flex items</i> on the line are distributed such that the spacing between each one is the same.'
    }
  ],

  initValue: 'flex-start',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'flex',
      'justify-content': 'flex-start',
      'height': '100%'
    }
  }],
};


data[data.length] = {
  name: 'align-items',

  link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-items',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: '<p><i>Flex items</i> can be aligned in the <i>cross axis</i> of the current line of the flex container, similar to <i>justify-content</i> but in the perpendicular direction. <i>align-items</i> sets the default alignment for all of the flex container’s <i>items</i>, including anonymous <i>flex items</i>. <i>align-self</i> allows this default alignment to be overridden for individual <i>flex items</i>. (For anonymous flex items, <i>align-self</i> always matches the value of <i>align-items</i> on their associated flex container.)</p><p>If either of the <i>flex item’s</i> cross-axis margins are <i>align-self</i> has no effect.</p><p>On absolutely positioned elements, a value of <i>auto</i> computes to itself. On all other elements, a value of <dfn >auto</dfn> for <i>align-self</i> computes to the value of <i>align-items</i> on the element’s parent, or <i>stretch</i> if the element has no parent. The alignments are defined as:</p>',

  values: [{
      name: 'flex-start',
      desc: 'The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.'
    },
    {
      name: 'flex-end',
      desc: 'The <i>cross-end</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-end</i> edge of the line.'
    },
    {
      name: 'center',
      desc: 'The <i>flex item</i>’s margin box is centered in the <i>cross axis</i> within the line. (If the <i>cross size</i> of the flex line is less than that of the <i>flex item</i>, it will overflow equally in both directions.)'
    },
    {
      name: 'baseline',
      desc: 'If the <i>flex item</i>’s inline axis is the same as the <i>cross axis</i>, this value is identical to <i>flex-start</i>. <p>Otherwise, it <dfn >participates in baseline alignment</dfn>: all participating <i>flex items</i> on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its <i>cross-start</i> margin edge is placed flush against the <i>cross-start</i> edge of the line.</p>'
    },
    {
      name: 'stretch',
      desc: 'If the <i>cross size property</i> of the <i>flex item</i> computes to <span >auto</span>, and neither of the <i>cross-axis</i> margins are <span >auto</span>, the <i>flex item</i> is <dfn >stretched</dfn>. Its used value is the length necessary to make the <i>cross size</i> of the item’s margin box as close to the same size as the line as possible, while still respecting the constraints imposed by <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-height\'>min-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width\'>min-width</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-height\'>max-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-width\'>max-width</a>. <p role=\'note\'>Note: If the flex container’s height is constrained this value may cause the contents of the <i>flex item</i> to overflow the item.</p> <p>The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.</p>'
    }
  ],

  initValue: 'stretch',

  cssRules: [{
    'selector': '.parent',
    'rules': {
      'display': 'flex',
      'align-items': 'stretch',
      'height': '100%'
    }
  }],
};


data[data.length] = {
  name: 'align-self',

  link: 'http://www.w3.org/TR/css-flexbox-1/#propdef-align-self',

  initValue: 'auto',

  targetForDemo: 'grid items',
  appliesTo: 'grid items',

  desc: '<p><i>Flex items</i> can be aligned in the <i>cross axis</i> of the current line of the flex container, similar to <i>justify-content</i> but in the perpendicular direction. <i>align-items</i> sets the default alignment for all of the flex container’s <i>items</i>, including anonymous <i>flex items</i>. <i>align-self</i> allows this default alignment to be overridden for individual <i>flex items</i>. (For anonymous flex items, <i>align-self</i> always matches the value of <i>align-items</i> on their associated flex container.)</p><p>If either of the <i>flex item’s</i> cross-axis margins are <i>align-self</i> has no effect.</p><p>On absolutely positioned elements, a value of <i>auto</i> computes to itself. On all other elements, a value of <dfn >auto</dfn> for <i>align-self</i> computes to the value of <i>align-items</i> on the element’s parent, or <i>stretch</i> if the element has no parent. The alignments are defined as:</p>',

  values: [{
      name: 'flex-start',
      desc: 'The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.',
      current: true
    },
    {
      name: 'flex-end',
      desc: 'The <i>cross-end</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-end</i> edge of the line.'
    },
    {
      name: 'center',
      desc: 'The <i>flex item</i>’s margin box is centered in the <i>cross axis</i> within the line. (If the <i>cross size</i> of the flex line is less than that of the <i>flex item</i>, it will overflow equally in both directions.)'
    },
    {
      name: 'baseline',
      desc: 'If the <i>flex item</i>’s inline axis is the same as the <i>cross axis</i>, this value is identical to <i>flex-start</i>. <p>Otherwise, it <dfn >participates in baseline alignment</dfn>: all participating <i>flex items</i> on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its <i>cross-start</i> margin edge is placed flush against the <i>cross-start</i> edge of the line.</p>'
    },
    {
      name: 'stretch',
      desc: 'If the <i>cross size property</i> of the <i>flex item</i> computes to <span >auto</span>, and neither of the <i>cross-axis</i> margins are <span >auto</span>, the <i>flex item</i> is <dfn >stretched</dfn>. Its used value is the length necessary to make the <i>cross size</i> of the item’s margin box as close to the same size as the line as possible, while still respecting the constraints imposed by <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-height\'>min-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width\'>min-width</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-height\'>max-height</a>/<a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-max-width\'>max-width</a>. <p role=\'note\'>Note: If the flex container’s height is constrained this value may cause the contents of the <i>flex item</i> to overflow the item.</p> <p>The <i>cross-start</i> margin edge of the <i>flex item</i> is placed flush with the <i>cross-start</i> edge of the line.</p>'
    }
  ],

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'height': '100%'
      }
    },
    {
      'selector': '.child--featured',
      'rules': {
        'align-self': 'flex-start'
      }
    }
  ],
};


data[data.length] = {
  name: 'align-content',

  link: 'http://www.w3.org/TR/css-flexbox-1/#align-content-property',

  targetForDemo: 'grid containers',
  appliesTo: 'grid containers',

  desc: '<p>The <i>align-content</i> property aligns a flex container’s lines within the flex container when there is extra space in the <i>cross-axis</i>, similar to how <i>justify-content</i> aligns individual items within the <i>main-axis</i>. Note, this property has no effect on a <i>single-line</i> <i>flex container</i>. Values have the following meanings:</p><p role=\'note\'>Note: Only <i>multi-line</i> <i>flex containers</i> ever have free space in the <i>cross-axis</i> for lines to be aligned in, because in a <i>single-line</i> flex container the sole line automatically stretches to fill the space.</p>',

  values: [{
      name: 'flex-start',
      desc: 'Lines are packed toward the start of the flex container. The <i>cross-start</i> edge of the first line in the flex container is placed flush with the <i>cross-start</i> edge of the flex container, and each subsequent line is placed flush with the preceding line.'
    },
    {
      name: 'flex-end',
      desc: 'Lines are packed toward the end of the flex container. The <i>cross-end</i> edge of the last line is placed flush with the <i>cross-end</i> edge of the flex container, and each preceding line is placed flush with the subsequent line.'
    },
    {
      name: 'center',
      desc: 'Lines are packed toward the center of the flex container. The lines in the flex container are placed flush with each other and aligned in the center of the flex container, with equal amounts of space between the <i>cross-start</i> content edge of the flex container and the first line in the flex container, and between the <i>cross-end</i> content edge of the flex container and the last line in the flex container. (If the leftover free-space is negative, the lines will overflow equally in both directions.)'
    },
    {
      name: 'space-between',
      desc: 'Lines are evenly distributed in the flex container. If the leftover free-space is negative this value is identical to <i>flex-start</i>. Otherwise, the <i>cross-start</i> edge of the first line in the flex container is placed flush with the <i>cross-start</i> content edge of the flex container, the <i>cross-end</i> edge of the last line in the flex container is placed flush with the <i>cross-end</i> content edge of the flex container, and the remaining lines in the flex container are distributed so that the spacing between any two adjacent lines is the same.'
    },
    {
      name: 'space-around',
      desc: 'Lines are evenly distributed in the flex container, with half-size spaces on either end. If the leftover free-space is negative this value is identical to <i>center</i>. Otherwise, the lines in the flex container are distributed such that the spacing between any two adjacent lines is the same, and the spacing between the first/last lines and the <i>flex container</i> edges is half the size of the spacing between <i>flex lines</i>.'
    },
    {
      name: 'space-evenly',
      desc: 'Lines are evenly distributed in the flex container. If the leftover free-space is negative this value is identical to <i>center</i>. Otherwise, the lines in the flex container are distributed such that the spacing between every <i>flex line</i> is the same.'
    },
    {
      name: 'stretch',
      desc: 'Lines stretch to take up the remaining space. If the leftover free-space is negative, this value is identical to <i>flex-start</i>. Otherwise, the free-space is split equally between all of the lines, increasing their cross size.'
    }
  ],

  initValue: 'stretch',

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'align-content': 'stretch',
        'height': '100%',
      }
    },
    {
      'selector': '.child',
      'rules': {
        'width': '30%'
      }
    }
  ],
};


data[data.length] = {
  name: 'flexibility',
  title: 'Flexibility',
  type: 'subheader'
};


data[data.length] = {
  name: 'flex-grow',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-grow-property',

  initValue: '0',

  targetForDemo: 'grid items',
  appliesTo: 'grid items',

  desc: '<p>The <i>flex-grow</i> property sets the <i>flex grow factor</i> to the provided <dfn ><a href=\'https://www.w3.org/TR/css3-values/#number-value\'>&lt;number&gt;</a></dfn>. Negative numbers are invalid.</p>',

  customValues: [{
      name: '0'
    },
    {
      name: '1',
      current: true
    }
  ],

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'height': '100%',
      }
    },
    {
      'selector': '.child--featured',
      'rules': {
        'flex-grow': '1'
      }
    }
  ],
};


data[data.length] = {
  name: 'flex-shrink',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-shrink-property',

  initValue: '1',

  targetForDemo: 'grid items',
  appliesTo: 'grid items',

  desc: '<p>The <i>flex-shrink</i> property sets the <i>flex shrink factor</i> to the provided <dfn ><a href=\'https://www.w3.org/TR/css3-values/#number-value\'>&lt;number&gt;</a></dfn>. Negative numbers are invalid.</p>',

  customValues: [{
      name: '0'
    },
    {
      name: '1',
      current: true
    }
  ],

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'height': '100%',
      }
    },
    {
      'selector': '.child',
      'rules': {
        'width': '40%'
      }
    },
    {
      'selector': '.child--featured',
      'rules': {
        'flex-shrink': '1'
      }
    }
  ],
};


data[data.length] = {
  name: 'flex-basis',

  link: 'http://www.w3.org/TR/css-flexbox-1/#flex-basis-property',

  initValue: 'auto',

  targetForDemo: 'grid items',
  appliesTo: 'grid items',

  desc: '<p>The <i>flex-basis</i> property sets the <i>flex basis</i>. It accepts the same values as the <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-width\'>width</a> and <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-height\'>height</a> property, plus <i>content</i>.</p><p>For all values other than <i>auto</i> and <i>content</i> (defined above), <i>flex-basis</i> is resolved the same way as <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-width\'>width</a> in horizontal writing modes , except that if a value would resolve to <span >auto</span> for <a href=\'https://www.w3.org/TR/CSS22/visudet.html#propdef-width\'>width</a>, it instead resolves to <i>content</i> for <i>flex-basis</i>. For example, percentage values of <i>flex-basis</i> are resolved against the flex item’s containing block (i.e. its <i>flex container</i>); and if that containing block’s size is <i>indefinite</i>, the used value for <i>flex-basis</i> is <i>content</i>. As another corollary, <i>flex-basis</i> determines the size of the content box, unless otherwise specified such as by <a href=\'https://www.w3.org/TR/css3-ui/#propdef-box-sizing\'>box-sizing</a> .</p>',

  customValues: [{
      name: '30%',
      current: true
    },
    {
      name: '50%'
    },
    {
      name: 'content'
    }
  ],

  cssRules: [{
      'selector': '.parent',
      'rules': {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'align-content': 'center',
        'height': '100%',
      }
    },
    {
      'selector': '.child--featured',
      'rules': {
        'flex-basis': '30%'
      }
    }
  ],
};
