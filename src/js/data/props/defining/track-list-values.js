export default {
  name: 'Track list values',
  alias: 'track-list-values',

  propDemoName: 'grid-template-columns',

  link: 'https://www.w3.org/TR/css3-grid-layout/#valdef-grid-template-columns-length-percentage',

  values: [
    {
      name: '&lt;length-percentage&gt;',
      alias: 'length-percentage',
      desc: `A non-negative length or percentage, as defined by CSS3 Values. <a href="#biblio-css3val">[CSS3VAL]</a>
     <p class="w3c-text-grabber__highlight"><a href="https://www.w3.org/TR/css3-values/#percentage-value"><percentage></a> values are relative to the <a href="https://www.w3.org/TR/css-writing-modes-3/#inline-size">inline size</a> of the <a href="#grid-container">grid container</a> in column <a href="#grid-track">grid tracks</a>,
and the <a href="https://www.w3.org/TR/css-writing-modes-3/#block-size">block size</a> of the <a href="#grid-container">grid container</a> in row <a href="#grid-track">grid tracks</a>.
If the size of the <a href="#grid-container">grid container</a> depends on the size of its tracks,
then the <a href="https://www.w3.org/TR/css3-values/#percentage-value"><percentage></a> must be treated as <a href="">auto</a>,
for the purpose of calculating the intrinsic sizes of the <a href="#grid-container">grid container</a> and then resolve against that resulting <a href="#grid-container">grid container</a> size
for the purpose of laying out the <a href="#grid">grid</a> and its items.</p>`
    },

    {
      name: '&lt;flex&gt;',
      alias: 'flex-fr',
      desc: `A non-negative dimension with the unit <a href="#valdef-flex-fr">fr</a> specifying the track’s <dfn id="grid-template-columns-flex-factor">flex factor</dfn>.
Each <a href="#typedef-flex" title="Expands to: fr">&lt;flex&gt;</a>-sized track takes a share of the remaining space in proportion to its <a href="#grid-template-columns-flex-factor">flex factor</a>.
See <a href="#fr-unit">Flexible Lengths</a> for more details.
     <p>When appearing outside a <a href="#valdef-grid-template-columns-minmax">minmax()</a> notation,
implies an automatic minimum (i.e. ''minmax(auto, <a href="#typedef-flex" title="Expands to: fr">&lt;flex&gt;</a>)'').</p>`
    },

    {
      name: 'max-content',
      desc: 'Represents the largest <a href="https://www.w3.org/TR/css-sizing-3/#max-content-contribution">max-content contribution</a> of the <a href="https://www.w3.org/TR/css3-grid-layout/#grid-item">grid items</a> occupying the <a href="https://www.w3.org/TR/css3-grid-layout/#grid-track">grid track</a>.'
    },

    {
      name: 'min-content',
      desc: 'Represents the largest <a href="https://www.w3.org/TR/css-sizing-3/#min-content-contribution">min-content contribution</a> of the <a href="#grid-item">grid items</a> occupying the <a href="#grid-track">grid track</a>.'
    },

    {
      name: 'minmax(min, max)',
      alias: 'minmax',
      desc: `Defines a size range
greater than or equal to <var>min</var> and less than or equal to <var>max</var>.
If <var>max</var> &lt; <var>min</var>,
then <var>max</var> is ignored and <span class="css">minmax(min,max)</span> is treated as <var>min</var>.
As a maximum, a <a href="#typedef-flex" title="Expands to: fr">&lt;flex&gt;</a> value sets the track’s <a href="#grid-template-columns-flex-factor">flex factor</a>;
it is invalid as a minimum.
     <p class="note" role="note"><span>Note:</span> A future level of this spec may allow <a href="#typedef-flex" title="Expands to: fr">&lt;flex&gt;</a> minimums,
and will update the <a href="#track-sizing-algorithm">track sizing algorithm</a> to account for this correctly</p>`
    },

    {
      name: 'auto',
      desc: `As a maximum, identical to <a href="#valdef-grid-template-columns-max-content">max-content</a>.
As a minimum, represents the largest minimum size (as specified by <a href="https://www.w3.org/TR/CSS21/visudet.html#min-width">min-width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#min-height">min-height</a>)
of the <a href="#grid-item">grid items</a> occupying the <a href="#grid-track">grid track</a>.
     <p class="note" role="note"><span>Note:</span> <a href="#valdef-grid-template-columns-auto">auto</a> track sizes (and only <a href="#valdef-grid-template-columns-auto">auto</a> track sizes)
can be stretched by the <a href="https://www.w3.org/TR/css3-align/#align-content">align-content</a> and <a href="https://www.w3.org/TR/css3-align/#justify-content">justify-content</a> properties.</p>`
    },

    {
      name: 'fit-content(&lt;length-percentage&gt;)',
      alias: 'fit-content',
      desc: `Represents the formula <code>min(<a href="#valdef-grid-template-columns-max-content">max-content</a>, max(<a href="#valdef-grid-template-columns-auto">auto</a>, <var>argument</var>))</code>,
which is calculated like <span class="css">minmax(auto, max-content)</span>,
except that the track size is clamped at <var>argument</var> if it is greater than the <a href="#valdef-grid-template-columns-auto">auto</a> minimum.`
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
