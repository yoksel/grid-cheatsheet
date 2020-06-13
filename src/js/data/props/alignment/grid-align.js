import justifyContent from './justify-content';
import alignContent from './align-content';

export default {
  name: 'Aligning the grid: justify-content, align-content',
  alias: 'grid-align',

  link: 'https://www.w3.org/TR/css3-grid-layout/#grid-align',

  desc: `<p>If the <a href="#grid">grid</a>’s outer edges do not correspond to the <a href="#grid-container">grid container</a>’s content edges
(for example, if no columns are flex-sized),
the <a href="#grid-track">grid tracks</a> are aligned within the content box according to the <a href="https://www.w3.org/TR/css3-align/#justify-content">justify-content</a> and <a href="https://www.w3.org/TR/css3-align/#align-content">align-content</a> properties on the <a href="#grid-container">grid container</a>.</p>

<p>If there are no <a href="#grid-track">grid tracks</a> (the <a href="#explicit-grid">explicit grid</a> is empty, and no tracks were created in the <a href="#implicit-grid">implicit grid</a>),
the sole <a href="#grid-line">grid line</a> in each axis is aligned with the start edge of the <a href="#grid-container">grid container</a>.</p>

<p>Note that certain values of <a href="https://www.w3.org/TR/css3-align/#justify-content">justify-content</a> and <a href="https://www.w3.org/TR/css3-align/#align-content">align-content</a> can cause the tracks to be spaced apart
(<a href="https://www.w3.org/TR/css3-align/#valdef-align-content-space-around">space-around</a>, <a href="https://www.w3.org/TR/css3-align/#valdef-align-content-space-between">space-between</a>, <a href="https://www.w3.org/TR/css3-align/#valdef-align-content-space-evenly">space-evenly</a>)
or to be resized (<a href="https://www.w3.org/TR/css3-align/#valdef-align-content-stretch">stretch</a>).
If the <a href="#grid">grid</a> is <a href="https://www.w3.org/TR/css3-break/#fragment">fragmented</a> between tracks,
any such additional spacing between those tracks must be suppressed.</p>`,

  demos: [
    justifyContent,
    alignContent
  ]
};
