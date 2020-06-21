export default {
  name: 'Track list values',
  alias: 'track-list-values',

  propDemoName: 'grid-template-columns',

  link: 'https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-length-percentage',

  desc: `<p>The syntax of a <a href="#track-list">track list</a> is:</p>

<pre>
<code><dfn id="typedef-track-list">&lt;track-list></dfn>          = [ <a href="#typedef-line-names">&lt;line-names></a> ? [ <a href="#typedef-track-size">&lt;track-size></a> | <a href="#typedef-track-repeat">&lt;track-repeat></a> ] ] + <a href="#typedef-line-names">&lt;line-names></a> ?
<dfn id="typedef-auto-track-list">&lt;auto-track-list></dfn>     = [ <a href="#typedef-line-names">&lt;line-names></a> ? [ <a href="#typedef-fixed-size">&lt;fixed-size></a> | <a href="#typedef-fixed-repeat">&lt;fixed-repeat></a> ] ] * <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-auto-repeat">&lt;auto-repeat></a>
                        [ <a href="#typedef-line-names">&lt;line-names></a> ? [ <a href="#typedef-fixed-size">&lt;fixed-size></a> | <a href="#typedef-fixed-repeat">&lt;fixed-repeat></a> ] ] * <a href="#typedef-line-names">&lt;line-names></a> ?
<dfn id="typedef-explicit-track-list">&lt;explicit-track-list></dfn> = [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-track-size">&lt;track-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ?

<dfn id="typedef-track-size">&lt;track-size></dfn>          = <a href="#typedef-track-breadth">&lt;track-breadth></a> | minmax( <a href="#typedef-inflexible-breadth">&lt;inflexible-breadth></a> <a href="https://www.w3.org/TR/css3-values/#comb-comma">,</a> <a href="#typedef-track-breadth">&lt;track-breadth></a> ) | fit-content( <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a> )
<dfn id="typedef-fixed-size">&lt;fixed-size></dfn>          = <a href="#typedef-fixed-breadth">&lt;fixed-breadth></a> | minmax( <a href="#typedef-fixed-breadth">&lt;fixed-breadth></a> <a href="https://www.w3.org/TR/css3-values/#comb-comma">,</a> <a href="#typedef-track-breadth">&lt;track-breadth></a> ) | minmax( <a href="#typedef-inflexible-breadth">&lt;inflexible-breadth></a> <a href="https://www.w3.org/TR/css3-values/#comb-comma">,</a> <a href="#typedef-fixed-breadth">&lt;fixed-breadth></a> )
<dfn id="typedef-track-breadth">&lt;track-breadth></dfn>       = <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a> | <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a> | min-content | max-content | auto
<dfn id="typedef-inflexible-breadth">&lt;inflexible-breadth></dfn>  = <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a> | min-content | max-content | auto
<dfn id="typedef-fixed-breadth">&lt;fixed-breadth></dfn>       = <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a>
<dfn id="typedef-line-names">&lt;line-names></dfn>          = '[' <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident></a> * ']'
</code></pre>`,

  values: [
    {
      name: '&lt;length-percentage>',
      alias: 'length-percentage',
      desc: `A non-negative length or percentage, as defined by CSS3 Values. <a href="https://www.w3.org/TR/css-grid-1/#biblio-css3val">[CSS3VAL]</a>
     <p><a href="https://www.w3.org/TR/css3-values/#percentage-value">&lt;percentage></a> values are relative to the <a href="https://www.w3.org/TR/css-writing-modes-3/#inline-size">inline size</a> of the <a href="#grid-container">grid container</a> in column <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a>,
and the <a href="https://www.w3.org/TR/css-writing-modes-3/#block-size">block size</a> of the <a href="#grid-container">grid container</a> in row <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a>.
If the size of the <a href="#grid-container">grid container</a> depends on the size of its tracks,
then the <a href="https://www.w3.org/TR/css3-values/#percentage-value">&lt;percentage></a> must be treated as <a href="#track-list-values-auto">auto</a>,
for the purpose of calculating the intrinsic sizes of the <a href="#grid-container">grid container</a> and then resolve against that resulting <a href="#grid-container">grid container</a> size
for the purpose of laying out the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> and its items.</p>`
    },

    {
      name: '&lt;flex>',
      alias: 'flex-fr',
      desc: `A non-negative dimension with the unit <a href="https://www.w3.org/TR/css-grid-1/#valdef-flex-fr">fr</a> specifying the track’s <dfn id="grid-template-columns-flex-factor">flex factor</dfn>.
Each <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a>-sized track takes a share of the remaining space in proportion to its <a href="#grid-template-columns-flex-factor">flex factor</a>.
See <a href="https://www.w3.org/TR/css-grid-1/#fr-unit">Flexible Lengths</a> for more details.
     <p>When appearing outside a <a href="#valdef-grid-template-columns-minmax">minmax()</a> notation,
implies an automatic minimum (i.e. 'minmax(auto, <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a>)').</p>`
    },

    {
      name: 'max-content',
      alias: 'valdef-grid-template-columns-max-content',
      desc: 'Represents the largest <a href="https://www.w3.org/TR/css-sizing-3/#max-content-contribution">max-content contribution</a> of the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> occupying the <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a>.'
    },

    {
      name: 'min-content',
      alias: 'valdef-grid-template-columns-min-content',
      desc: 'Represents the largest <a href="https://www.w3.org/TR/css-sizing-3/#min-content-contribution">min-content contribution</a> of the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> occupying the <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a>.'
    },

    {
      name: 'minmax(min, max)',
      alias: 'valdef-grid-template-columns-minmax',
      desc: `Defines a size range
greater than or equal to <var>min</var> and less than or equal to <var>max</var>.
If <var>max</var> &lt; <var>min</var>,
then <var>max</var> is ignored and <code>minmax(min,max)</code> is treated as <var>min</var>.
As a maximum, a <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a> value sets the track’s <a href="#grid-template-columns-flex-factor">flex factor</a>;
it is invalid as a minimum.
     <p class="note" role="note"><span>Note:</span> A future level of this spec may allow <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a> minimums,
and will update the <a href="https://www.w3.org/TR/css-grid-1/#track-sizing-algorithm">track sizing algorithm</a> to account for this correctly</p>`
    },

    {
      name: 'auto',
      desc: `As a maximum, identical to <a href="#valdef-grid-template-columns-max-content">max-content</a>.
As a minimum, represents the largest minimum size (as specified by <a href="https://www.w3.org/TR/CSS21/visudet.html#min-width">min-width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#min-height">min-height</a>)
of the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> occupying the <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a>.
     <p class="note" role="note"><span>Note:</span> <a href="#track-list-values-auto">auto</a> track sizes (and only <a href="#track-list-values-auto">auto</a> track sizes)
can be stretched by the <a href="#section-align-content">align-content</a> and <a href="#section-justify-content">justify-content</a> properties.</p>`
    },

    {
      name: 'fit-content(&lt;length-percentage>)',
      alias: 'fit-content',
      desc: `Represents the formula <code>min(<a href="#valdef-grid-template-columns-max-content">max-content</a>, max(<a href="#track-list-values-auto">auto</a>, <var>argument</var>))</code>,
which is calculated like <code>minmax(auto, max-content)</code>,
except that the track size is clamped at <var>argument</var> if it is greater than the <a href="#track-list-values-auto">auto</a> minimum.`
    }
  ],

  customValues: [
    {
      name: '100px 40%',
      current: true
    },
    {
      name: '10% 30% 50% 10%'
    },
    {
      name: '1fr 3fr'
    },
    {
      name: '1fr auto'
    },
    {
      name: 'repeat(7, 1fr)'
    },
    {
      name: 'repeat(3, 1fr auto)'
    },
    {
      name: '1fr minmax(min-content, 3fr)'
    },
    {
      name: '2fr max-content'
    },
    {
      name: 'min-content min-content'
    },
    {
      name: 'max-content max-content'
    },
    {
      name: 'fit-content(10%) fit-content(50%)'
    }
    // {
    //   name: '100px repeat(2, 1fr auto minmax(30%, 1fr))'
    // },
    // {
    //   name: 'calc(50% - 1em) calc(20% - 1em)'
    // },
  ],

  htmlMarkup: `<div class="parent parent--fade-children">
    <div class="child">Ut enim ad minim veniam</div>
    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
    <div class="child">Duis aute irure dolor</div>
    <div class="child">Excepteur</div>
    <div class="child">Commodo consequat</div>
    <div class="child">Fugiat nulla pariatur</div>
  </div>`,

  cssRules: [{
    selector: '.parent',
    props: {
      display: 'grid',
      'grid-template-columns': '20px'
    }
  }]
};
