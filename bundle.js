/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --col-1: hsl(84, 0%, 100%);\n  --col-2: hsl(120, 0%, 76%);\n  --col-2-lght-10: hsl(120, 0%, 86%);\n  --col-3: hsl(149, 0%, 61%);\n  --col-3-lght-10: hsl(149, 0%, 71%);\n  --col-4: hsl(180, 0%, 38%);\n  --col-4-dark-5: hsl(180, 0%, 33%);\n  --col-4-dark-10: hsl(180, 0%, 28%);\n  --col-5: hsl(202, 0%, 23%);\n  --col-5-dark-8: hsl(202, 0%, 15%);\n  --col-5-dark-15: hsl(203, 0%, 8%);\n  --col-5-dark-20: hsl(201, 0%, 3%); }\n\n[data-theme='seagreen'] {\n  --col-1: hsl(84, 73%, 78%);\n  --col-2: hsl(120, 42%, 76%);\n  --col-2-lght-10: hsl(120, 42%, 86%);\n  --col-3: hsl(149, 34%, 61%);\n  --col-3-lght-10: hsl(149, 34%, 71%);\n  --col-4: hsl(180, 39%, 38%);\n  --col-4-dark-5: hsl(180, 39%, 33%);\n  --col-4-dark-10: hsl(180, 39%, 28%);\n  --col-5: hsl(202, 82%, 23%);\n  --col-5-dark-8: hsl(202, 82%, 15%);\n  --col-5-dark-15: hsl(203, 83%, 8%);\n  --col-5-dark-20: hsl(201, 92%, 3%); }\n\n.pal-wrapper {\n  display: none;\n  position: absolute;\n  top: 0;\n  z-index: 20; }\n\n.palette {\n  display: flex; }\n  .palette LI {\n    width: 5rem;\n    height: 5rem; }\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nBODY {\n  display: flex;\n  min-height: 100vh;\n  background: var(--col-1);\n  font: 16px/1.4 Georgia, serif;\n  color: var(--col-5-dark-8); }\n\nA {\n  color: var(--col-5); }\n\nUL {\n  list-style-type: none; }\n\nH1,\nH2,\nH3,\nH4 {\n  margin-top: 0;\n  font-weight: normal; }\n\nLI,\nUl {\n  margin: 0;\n  padding: 0; }\n\nMARK {\n  box-shadow: 0 0 0 2px var(--col-4-dark-5);\n  background: var(--col-4-dark-5);\n  color: var(--col-2-lght-10); }\n\nPRE {\n  white-space: pre-line; }\n\n.hidden-content {\n  display: none; }\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden; }\n\n/* CONTENT\n--------------------------------------------- */\n.content__item {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  padding: 1rem 2em;\n  box-sizing: border-box;\n  border-bottom: 1px dotted var(--col-4); }\n\n.content__title {\n  color: var(--col-4); }\n\n.content__desc UL {\n  list-style-type: disc;\n  padding-left: 2em; }\n\n.content CODE {\n  display: inline-block;\n  padding: 0 2px;\n  border-radius: 3px;\n  background: var(--col-3-lght-10); }\n\n.content PRE {\n  margin: 0;\n  padding: 4px; }\n\n/* Values */\n.content-values__term {\n  font-weight: bold;\n  color: var(--col-4-dark-10); }\n\n.content-values__desc {\n  margin-bottom: 1rem; }\n\n.l-wrapper {\n  display: flex;\n  width: 100%;\n  min-height: 100%; }\n\n.l-main {\n  flex: 1; }\n\n.l-aside {\n  position: relative;\n  order: -1;\n  width: 23%;\n  min-width: 230px;\n  max-width: 300px;\n  flex-shrink: 0;\n  background: var(--col-5); }\n\n.l-aside__content {\n  position: fixed;\n  overflow: hidden;\n  width: 23%;\n  min-width: 230px;\n  max-width: 300px;\n  height: 100%; }\n\n.demo-wrapper {\n  margin: 2rem 0; }\n\n.demo__control {\n  margin: 0 .5rem .5rem 0;\n  padding: .3rem .7rem;\n  border: 0;\n  border-radius: 3px;\n  background: var(--col-4);\n  color: var(--col-2); }\n  .demo__control--current {\n    background: var(--col-5);\n    color: var(--col-1); }\n\n.demo {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.demo__view {\n  width: 50%;\n  flex-grow: 1;\n  min-height: 275px;\n  margin: 0 1rem 1rem 0;\n  padding: .5rem;\n  box-sizing: border-box;\n  border: 2px solid var(--col-3); }\n  @media (max-width: 960px) {\n    .demo__view {\n      width: 100%;\n      margin-right: 0; } }\n\n.demo__code {\n  box-sizing: border-box;\n  flex-grow: 1;\n  flex-shrink: 0;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: var(--col-2);\n  border-radius: .75rem;\n  white-space: pre;\n  font-family: monospace;\n  color: var(--col-5); }\n\n.parent {\n  border: 1px dashed var(--col-4); }\n\n.child {\n  position: relative;\n  min-width: 2.5rem;\n  min-height: 2.5rem;\n  padding: .5rem;\n  background-color: var(--col-3);\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  border: 1px solid var(--col-1); }\n\n.child::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: var(--col-5);\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%; }\n\n.demo--has-featured .child--featured {\n  background-color: var(--col-4); }\n\n.child:nth-child(1)::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 1 %3C/text%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 1 %3C/text%3E%3C/svg%3E\"); }\n\n.child:nth-child(2)::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 2 %3C/text%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 2 %3C/text%3E%3C/svg%3E\"); }\n\n.child:nth-child(3)::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 3 %3C/text%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 3 %3C/text%3E%3C/svg%3E\"); }\n\n.child:nth-child(4)::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 4 %3C/text%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 4 %3C/text%3E%3C/svg%3E\"); }\n\n.child:nth-child(5)::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 5 %3C/text%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 5 %3C/text%3E%3C/svg%3E\"); }\n\n.child:nth-child(6)::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 6 %3C/text%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='black' fill-opacity='.65'%3E 6 %3C/text%3E%3C/svg%3E\"); }\n\n.nav {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  width: 23%;\n  min-width: 230px;\n  max-width: 300px;\n  padding: 1.5rem 0;\n  box-sizing: border-box;\n  list-style-type: none; }\n  @media (min-width: 1200px) {\n    .nav {\n      padding-left: 1rem; } }\n  .nav:before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    height: 100%;\n    width: 10px;\n    background: var(--col-4); }\n  .nav__subheader {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    padding: 0 1rem;\n    font-size: 1.3rem;\n    line-height: 1;\n    color: var(--col-5-dark-20);\n    text-shadow: 2px 2px 0 var(--col-5), 3px 3px 0 var(--col-5-dark-20); }\n    @media (min-width: 1130px) {\n      .nav__subheader {\n        font-size: 1.45rem; } }\n  .nav__item {\n    margin-bottom: .4rem; }\n    @media (min-width: 900px) {\n      .nav__item {\n        margin-bottom: .6rem; } }\n  .nav__link {\n    position: relative;\n    display: block;\n    margin-left: 2rem;\n    padding: 0 1rem;\n    color: var(--col-3-lght-10); }\n    .nav__link:hover {\n      text-decoration: none;\n      color: var(--col-2); }\n  .nav__item--current .nav__link {\n    text-decoration: none;\n    font-weight: bold;\n    color: var(--col-1); }\n\n/* Marker\n--------------------------------------------- */\n.nav__marker {\n  position: absolute;\n  z-index: 2;\n  margin-top: -.45rem;\n  right: -1rem;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: var(--col-1);\n  box-shadow: 0 0 0 10px var(--col-4);\n  transition: top .5s; }\n\n.project-links {\n  display: flex;\n  margin-top: 2rem;\n  margin-left: 3rem; }\n\n.project-link {\n  position: relative;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin: 0 1.5rem 0 0;\n  text-indent: -1000px;\n  overflow: hidden;\n  opacity: .7;\n  transition: opacity .25s; }\n  .project-link:hover {\n    opacity: 1; }\n  .project-link::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: var(--col-5-dark-15);\n    -webkit-mask-repeat: no-repeat;\n            mask-repeat: no-repeat;\n    -webkit-mask-position: 50% 50%;\n            mask-position: 50% 50%; }\n  .project-link--git::before {\n    -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' d='M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z'%3E%3C/path%3E%3C/svg%3E\");\n            mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' d='M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z'%3E%3C/path%3E%3C/svg%3E\"); }\n  .project-link--twitter::before {\n    -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' d='M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z'%3E%3C/path%3E%3C/svg%3E\");\n            mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' d='M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z'%3E%3C/path%3E%3C/svg%3E\"); }\n\n.theme-control {\n  position: absolute;\n  right: .5rem;\n  top: .5rem;\n  z-index: 1000;\n  padding: .2rem .4rem;\n  border: 0;\n  border-radius: 5px;\n  background: transparent;\n  border: 2px solid;\n  color: var(--col-4); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_data_specs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/data/specs.js */ "./src/js/data/specs.js");
/* harmony import */ var _js_data_groups_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/data/groups.js */ "./src/js/data/groups.js");
/* harmony import */ var _js_Nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Nav.js */ "./src/js/Nav.js");
/* harmony import */ var _js_DataSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/DataSection.js */ "./src/js/DataSection.js");
/* harmony import */ var _js_ThemeSwitcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/ThemeSwitcher.js */ "./src/js/ThemeSwitcher.js");
/* harmony import */ var _js_helpers_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/helpers/index.js */ "./src/js/helpers/index.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_6__);









const sections = [];
let nav;

init();

// ---------------------------------------------

function init() {
  const themeSwitcher = new _js_ThemeSwitcher_js__WEBPACK_IMPORTED_MODULE_4__["ThemeSwitcher"]();
  themeSwitcher.setTheme();

  nav = new _js_Nav_js__WEBPACK_IMPORTED_MODULE_2__["Nav"]({
    groups: _js_data_groups_js__WEBPACK_IMPORTED_MODULE_1__["groups"],
    data: _js_data_specs_js__WEBPACK_IMPORTED_MODULE_0__["data"],
    targetElem: document.querySelector('.l-aside__content')
  });

  fillContent();
  addNavMarkerMove();
}

// ---------------------------------------------

function fillContent () {
  const main = document.querySelector('.l-main');

  for (const item of _js_data_specs_js__WEBPACK_IMPORTED_MODULE_0__["data"]) {
    const section = new _js_DataSection_js__WEBPACK_IMPORTED_MODULE_3__["DataSection"](item);
    sections.push(section.sectionElem);

    main.append(section.sectionElem);
  }
}

// ---------------------------------------------

function addNavMarkerMove() {
  const navItems = document.querySelectorAll('.nav__item');
navItems.reduce = [].reduce;
  const navItemsById = navItems.reduce((prev, item)=> {
    prev[item.id] = item
    return prev;
  }, {});

  const moveNavMarker = Object(_js_helpers_index_js__WEBPACK_IMPORTED_MODULE_5__["debounce"])(function () {
    for(let section of sections) {
      if (Object(_js_helpers_index_js__WEBPACK_IMPORTED_MODULE_5__["isVisible"])(section) && navItemsById[section.id]) {
          nav.setCurrentItem(navItemsById[section.id]);
      }
    }
  }, 100);

  window.addEventListener('scroll', moveNavMarker);
}


/***/ }),

/***/ "./src/js/DataSection.js":
/*!*******************************!*\
  !*** ./src/js/DataSection.js ***!
  \*******************************/
/*! exports provided: DataSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSection", function() { return DataSection; });
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/index.js */ "./src/js/helpers/index.js");
/* harmony import */ var _Demo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.js */ "./src/js/Demo.js");



class DataSection {
  constructor (data) {
    this.data = data;

    this.demo = new _Demo_js__WEBPACK_IMPORTED_MODULE_1__["Demo"](data);
    this.demoWrapper = this.demo.wrapper;

    const elems = [
      this.getTitle(),
      this.getLink(),
      this.demoWrapper,
      this.getDesc(),
      this.getTarget(),
      this.getInitialValue(),
      this.getValues()
    ];

    this.sectionElem = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])('<section class="content__item"></section>');

    elems.forEach(elem => this.sectionElem.append(elem));
  }

  // ---------------------------------------------

  getTitle () {
    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<h2
      class="contebt__title"
      id="${this.data.name}"
      >${this.data.name}</h2>`);
  }

  // ---------------------------------------------

  getLink () {
    if (!this.data.link) {
        return;
    }

    var text = this.data.link.replace('http://www.', '');

    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<a href="${this.data.link}">${text}</a>`);
  }

  // ---------------------------------------------

  getDesc () {
    if (!this.data.desc) {
        return;
    }

    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="content__desc">${this.data.desc}</div>`);
  }

  // ---------------------------------------------

  getTarget () {
    if (!this.data.appliesTo) {
        return;
    }

    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<p class="content__initial-value"><b>Applies to</b>: ${this.data.appliesTo}.</p>`);
  }

  // ---------------------------------------------

  getInitialValue () {
    if (!this.data.initValue) {
        return;
    }

    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<p class="content__initial-value"><b>Initial</b>: ${this.data.initValue}.</p>`);
  }

  // ---------------------------------------------

  getValues () {
    if (!this.data.values) {
        return;
    }

    let markup = '';

    for (const { name, desc } of this.data.values) {
      const id = this.data.name + '__' + name;
      const dt = `<dt id="${id}" class="content-values__term">${name}</dt>`;
      const dd = `<dd class="content-values__desc">${desc}</dd>`;

      markup += dt + dd;
    }

    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<dl class="content-values">${markup}</dl>`);
  }
}


/***/ }),

/***/ "./src/js/Demo.js":
/*!************************!*\
  !*** ./src/js/Demo.js ***!
  \************************/
/*! exports provided: Demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo", function() { return Demo; });
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/index.js */ "./src/js/helpers/index.js");
/* harmony import */ var _StylesController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylesController.js */ "./src/js/StylesController.js");



const demoTmpl = document.querySelector('#demo-tmpl').content.firstElementChild;
const demoElemClasses = {
  demos: '.parent',
  'grid containers': '.parent',
  'grid items': '.child--featured'
};

class Demo {
  constructor (data) {
    this.data = data;
    this.targetElemSelector = demoElemClasses[this.data.targetForDemo];
    this.values = this.data.customValues || this.data.values;
    this.classList = this.getClassList();
    this.wrapper = this.getWrapper();
    this.codesElem = this.wrapper.querySelector('.demo__code');
    this.current = this.getCurrent();

    this.stylesController = new _StylesController_js__WEBPACK_IMPORTED_MODULE_1__["StylesController"]({
      data,
      current: this.current,
      codesElem: this.codesElem,
      classList: this.classList
    });

    this.addControls();
  }

  getWrapper () {
    const demoWrapper = demoTmpl.cloneNode(true);
    const demoElem = demoWrapper.querySelector('.demo');
    demoElem.classList.add(...this.classList);
    const viewElem = demoWrapper.querySelector('.demo__view');

    if (this.data.htmlMarkup) {
      viewElem.innerHTML = this.data.htmlMarkup;
    }

    if (this.data.demoBefore) {
      viewElem.insertAdjacentHTML('afterbegin', this.data.demoBefore);
    }

    return demoWrapper;
  }

  // ---------------------------------------------

  getClassList () {
    const classList = [];
    const namesList = this.data.name.split(',');

    for (const name of namesList) {
      classList.push('demo--prop-' + name.trim());
    }

    if (this.targetElemSelector.search('featured') > -1) {
      classList.push('demo--has-featured');
    }

    return classList;
  }

  // ---------------------------------------------

  addControls () {
    const controls = this.getControlsMarkup();

    const elem = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="demo__controls">${controls}</div>`);

    elem.addEventListener('click', (ev) => {
      this.controlsOnClick(ev);
    });

    this.wrapper.prepend(elem);
    this.current.control = elem.querySelector('.demo__control--current');
  }

  // ---------------------------------------------

  getControlsMarkup () {
    const controlsList = [];

    if (!this.values) {
      return;
    }

    for (const { id, name, current } of this.values) {
      const classList = ['demo__control'];

      if (current || name === this.currentValueId) {
        classList.push('demo__control--current');
      }

      controlsList.push(`<button
        type="button"
        class="${classList.join(' ')}"
        data-value-id="${id || name}">${name}</button>`);
    }

    return controlsList.join(' ');
  }

  // ---------------------------------------------

  getCurrent () {
    if (!this.values) {
      return;
    }

    let currentValue;
    let currentValueId;

    for (const { id, name, current } of this.values) {
      if (current) {
        currentValueId = id || name;
        currentValue = name;
      }
    }

    if (!currentValueId) {
      currentValueId = this.values[0].id || this.values[0].name;
      currentValue = this.values[0].name;
    }

    return {
      id: currentValueId,
      value: currentValue,
      control: null
    };
  }

  // ---------------------------------------------

  controlsOnClick (ev) {
    const control = ev.target.closest('.demo__control');

    if (!control) {
      return;
    }

    this.current.control.classList.remove('demo__control--current');
    control.classList.add('demo__control--current');

    this.current.control = control;
    this.current.id = control.dataset.valueId;
    this.current.value = control.innerHTML;

    this.stylesController.update(this.current);
  }
}


/***/ }),

/***/ "./src/js/Nav.js":
/*!***********************!*\
  !*** ./src/js/Nav.js ***!
  \***********************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/index.js */ "./src/js/helpers/index.js");


class Nav {
  constructor ({
    groups,
    data,
    targetElem
  }) {
    this.data = data;
    this.groups = groups;
    this.current = null;

    this.listsByGroups = this.moveListsToGroups();
    const navMarkup = this.getNavMarkup();

    this.navElem = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<nav class="nav">${navMarkup}</nav>`);
    this.markerElem = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])('<span class="nav__marker"></span>');

    targetElem.prepend(this.navElem);
    targetElem.prepend(this.markerElem);

    this.setCurrentItem();

    this.navElem.addEventListener('click', (ev) => {
      const navItem = ev.target.closest('.nav__item');

      if (!navItem) {
        return;
      }
      this.setCurrentItem(navItem);
    });
  }

  moveListsToGroups () {
    return this.data.reduce((prev, item) => {
      let { group } = item;

      if (!group) {
        group = 'none';
      }

      if (!prev[group]) {
        prev[group] = [];
      }

      prev[group].push(item);

      return prev;
    }, {});
  }

  getNavMarkup () {
    const itemsList = Object.entries(this.groups)
      .map(([id, { title }]) => {
        if (!this.listsByGroups[id]) {
          return;
        }

        let markup = '';

        if (title) {
          markup += `<h2 class="nav__subheader">${title}</h2>`;
        }
        const itemsMarkup = this.getListMarkup(id);
        markup += `<ul class="nav__list">${itemsMarkup.join('')}</ul>`;

        return markup;
      })

    return itemsList.join('');
  }

  getListMarkup (id) {
    const items = this.listsByGroups[id];

    return items.map(({ name }) => {
      const itemClass = this.getItemClass(name);

      return `<li
          class="${itemClass}"
          data-name="${name}"
        ><a
            href="#${name}"
            data-parent-nav-item="${name}"
            class="nav__link"
          >${name}</a></li>`;
    });
  }

  getItemClass (name) {
    const classList = ['nav__item'];

    const namesList = name.split(',');

    for (const name of namesList) {
      classList.push('nav__item--' + name.trim());
    }

    return classList.join(' ');
  }

  setCurrentItem (elem) {
    if (!elem) {
      elem = document.querySelector('.nav__item');
    }

    if (this.currentElem) {
      this.currentElem.classList.remove('nav__item--current');
    }

    this.markerElem.style.top = `${elem.offsetTop}px`;

    elem.classList.add('nav__item--current');

    this.currentElem = elem;
  }
}


/***/ }),

/***/ "./src/js/StylesController.js":
/*!************************************!*\
  !*** ./src/js/StylesController.js ***!
  \************************************/
/*! exports provided: StylesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesController", function() { return StylesController; });
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/index.js */ "./src/js/helpers/index.js");


const codeOffset = '  ';

class StylesController {
  constructor ({
    data,
    current,
    codesElem,
    classList
  }) {
    this.data = data;
    this.current = current;
    this.classList = classList;
    this.stylesElem = this.getStylesElem();
    this.codesElem = codesElem;

    this.setStyles();
  }

  getStylesElem () {
    const elem = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<style id="style-${this.data.name}"></style>`);
    document.head.append(elem);

    return elem;
  }

  getStyles () {
    const rules = this.data.cssRules;
    const parentClass = `.${this.classList.join(' ')}`;
    let visibleStyles = '';
    let hiddenStyles = '';

    if (!rules) {
      return {};
    }

    for (const { selector, props, valueId } of rules) {
      let propsListHidden = '';
      let propsListVisible = '';
      const hiddenSelector = [parentClass, selector].join(' ');

      if (valueId && valueId !== this.current.id) {
        continue;
      }

      for (let [name, value] of Object.entries(props)) {
        if (name === this.data.name) {
          value = this.current.value;
        }

        let propString = `${name}: ${value};\n`;

        propsListHidden += codeOffset + propString;

        if (name === this.data.name) {
          propString = `<mark>${propString}</mark>`;
        }

        propsListVisible += codeOffset + propString;
      }

      hiddenStyles += `${hiddenSelector} {\n${propsListHidden}}\n`;
      visibleStyles += `${selector} {\n${propsListVisible}}\n`;
    }

    return {
      visibleStyles,
      hiddenStyles
    };
  }

  setStyles () {
    this.styles = this.getStyles();
    this.stylesElem.innerHTML = this.styles.hiddenStyles;
    this.codesElem.innerHTML = this.styles.visibleStyles;
  }

  update (current) {
    this.current = current;
    this.setStyles();
  }
}


/***/ }),

/***/ "./src/js/ThemeSwitcher.js":
/*!*********************************!*\
  !*** ./src/js/ThemeSwitcher.js ***!
  \*********************************/
/*! exports provided: ThemeSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcher", function() { return ThemeSwitcher; });
class ThemeSwitcher {
  constructor() {
    this.control = document.querySelector('.theme-control');
    this.theme = this.getTheme();
    this.lsKey = 'gdchTheme';

    this.control.addEventListener('click', () => {
      this.theme = this.theme === 'seagreen' ? 'default' : 'seagreen';

      this.setTheme();
    });
  }

  getTheme() {
    let theme = localStorage[this.lsKey];
    theme = theme || 'seagreen';

    return theme;
  }

  setTheme() {
    document.body.dataset.theme = this.theme;
    localStorage[this.lsKey] = this.theme;
  }
}


/***/ }),

/***/ "./src/js/data/groups.js":
/*!*******************************!*\
  !*** ./src/js/data/groups.js ***!
  \*******************************/
/*! exports provided: groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
const groups = {
  none: {
    title: ''
  },
  alignment: {
    title: 'Alignment'
  }
};


/***/ }),

/***/ "./src/js/data/specs.js":
/*!******************************!*\
  !*** ./src/js/data/specs.js ***!
  \******************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [];

data[data.length] = {
    name: 'display',

    link: 'https://www.w3.org/TR/css3-grid-layout/#grid-model',

    initValue: '',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'all elements',

    desc: `<p>A <dfn >grid container</dfn> establishes a new <dfn >grid formatting context</dfn> for its contents. This is the same as establishing a block formatting context, except that grid layout is used instead of block layout: floats do not intrude into the grid container, and the grid container’s margins do not collapse with the margins of its contents. The contents of a <i>grid container</i> are laid out into a <i>grid</i>, with <i>grid lines</i> forming the boundaries of each <i>grid items</i>’ containing block. The <a href=\'https://www.w3.org/TR/css-overflow-3/#propdef-overflow\' >overflow</a> property applies to <i>grid containers</i>.</p>
      <p>Grid containers are not block containers, and so some properties that were designed with the assumption of block layout don’t apply in the context of grid layout. In particular:</p>

      <ul>
        <li><code>float</code> and <code>clear</code> have no effect on a <dfn>grid item</dfn>.
          However, the <code>float</code> property still affects the computed value of <code>display</code> on children of a grid container,
          as this occurs <em>before</em> <dfn>grid items</dfn> are determined.
        </li>
        <li><code>vertical-align</code> has no effect on a grid item.
        </li>
        <li>the <code>::first-line</code> and <code>::first-letter</code> pseudo-elements do not apply to <dfn>grid containers</dfn>,
          and <dfn>grid containers</dfn> do not contribute a first formatted line or first letter to their ancestors.
        </li>
     </ul>

    <p>If an element’s specified <code>display</code> is <i>inline-grid</i> and the element is floated or absolutely positioned, the computed value of <code>display</code> is <i>grid</i>. The table in <a href='https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo'>CSS 2.1 Chapter 9.7</a> is thus amended to contain an additional row, with <i>inline-grid</i> in the 'Specified Value' column and <i>grid</i> in the 'Computed Value' column.</p>`,

    values: [
      {
        name: 'grid',
        desc: 'This value causes an element to generate a block-level <i>grid container</i> box.',
        current: true
      },
      {
        name: 'inline-grid',
        desc: 'This value causes an element to generate an inline-level <i>grid container</i> box.'
      }
    ],

    // htmlMarkup: `<div class="parent">
    //   <div class="child"></div>
    //   <div class="child"></div>
    //   <div class="child"></div>
    // </div>`,

    cssRules: [{
      selector: '.parent',
      props: {
        display: 'grid'
      }
    }],

    demoBefore: 'Some text'
};

data[data.length] = {
    name: 'grid-template',
    group: 'alignment',

    link: 'https://www.w3.org/TR/css3-grid-layout/#explicit-grid-shorthand',

    initValue: 'see individual properties',

    target: 'grid containers',

    targetForDemo: 'grid containers',
    appliesTo: 'grid containers',

    desc: `<p>The <i>grid-template</i> property is a <a href=\'https://www.w3.org/TR/css-cascade-4/#shorthand-property\' >shorthand</a> for setting <i>grid-template-columns</i>,
    <i>grid-template-rows</i>, and <i>grid-template-areas</i> in a single declaration. It has several distinct syntax forms:</p>
      <p role=\'note\'><span>Note:</span> The <i>grid</i> shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Unless authors want those to cascade in separately, it is therefore recommended to use <i>grid</i> instead of <i>grid-template</i>.</p>`,

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
                [header-top] \'a a a\' [header-bottom]
                [main-top] \'b b b\' 1fr [main-bottom] / auto 1fr auto;
            </pre>
          </code>
          <p>is equivalent to</p>
          <code>
            <pre>
              grid-template-areas: \'a a a\' \'b b b\';
              grid-template-rows: [header-top] auto [header-bottom main-top] 1fr [main-bottom];
              grid-template-columns: auto 1fr auto;
            </pre>
          </code>
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
    ],

    customValues: [
      {
        id: 'autofr',
        name: 'auto 1fr / auto 1fr',
        current: true
      },
      {
        id: 'named-areas-template',
        name: '[header-top] \'a a a\' [header-bottom] [main-top] \'b b b\' 1fr [main-bottom] / auto 1fr auto;'
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
          'background-color': 'gold',
          'grid-area': 'header-top'
        },
        valueId: 'named-areas-template'
      },
      {
        selector: '.child:nth-child(2)',
        props: {
          'background-color': 'green',
          'grid-area': 'header-bottom'
        },
        valueId: 'named-areas-template'
      },
      {
        selector: '.child:nth-child(3)',
        props: {
          'background-color': 'gold',
          'grid-area': 'main-top'
        },
        valueId: 'named-areas-template'
      }
    ]
};


/***/ }),

/***/ "./src/js/helpers/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://grrr.tech/posts/create-dom-node-from-html-string/

const hasSupport = 'content' in document.createElement('template');

const createElement = (str) => {
  if (hasSupport) {
    const template = document.createElement('template');
    template.innerHTML = str;
    return template.content.firstElementChild;
  }

  const template = document.createElement('div');
  template.innerHTML = str;
  return template.firstElementChild;
};

/* harmony default export */ __webpack_exports__["default"] = (createElement);


/***/ }),

/***/ "./src/js/helpers/debounce.js":
/*!************************************!*\
  !*** ./src/js/helpers/debounce.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// Source: https://davidwalsh.name/javascript-debounce-function

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce (func, wait, immediate) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}




/***/ }),

/***/ "./src/js/helpers/index.js":
/*!*********************************!*\
  !*** ./src/js/helpers/index.js ***!
  \*********************************/
/*! exports provided: createElement, isVisible, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/helpers/createElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _isVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isVisible */ "./src/js/helpers/isVisible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _isVisible__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce */ "./src/js/helpers/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./src/js/helpers/isVisible.js":
/*!*************************************!*\
  !*** ./src/js/helpers/isVisible.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isVisible; });
function isVisible (elem) {
  const coords = elem.getBoundingClientRect();
  const koeff = 300;

  const windowHeight = document.documentElement.clientHeight;

  // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
  const topVisible = coords.top > 0 && coords.top < windowHeight / 2;
  const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRGF0YVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU3R5bGVzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVGhlbWVTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS9ncm91cHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RhdGEvc3BlY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9pc1Zpc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/YmE2OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsY0FBYztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSw2R0FBNkc7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcE1BO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoQjdCO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQ1I7QUFDRjs7QUFNaEM7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUFBO0FBQWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGlTQUFxSjs7QUFFdkw7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbC0xOiBoc2woODQsIDAlLCAxMDAlKTtcXG4gIC0tY29sLTI6IGhzbCgxMjAsIDAlLCA3NiUpO1xcbiAgLS1jb2wtMi1sZ2h0LTEwOiBoc2woMTIwLCAwJSwgODYlKTtcXG4gIC0tY29sLTM6IGhzbCgxNDksIDAlLCA2MSUpO1xcbiAgLS1jb2wtMy1sZ2h0LTEwOiBoc2woMTQ5LCAwJSwgNzElKTtcXG4gIC0tY29sLTQ6IGhzbCgxODAsIDAlLCAzOCUpO1xcbiAgLS1jb2wtNC1kYXJrLTU6IGhzbCgxODAsIDAlLCAzMyUpO1xcbiAgLS1jb2wtNC1kYXJrLTEwOiBoc2woMTgwLCAwJSwgMjglKTtcXG4gIC0tY29sLTU6IGhzbCgyMDIsIDAlLCAyMyUpO1xcbiAgLS1jb2wtNS1kYXJrLTg6IGhzbCgyMDIsIDAlLCAxNSUpO1xcbiAgLS1jb2wtNS1kYXJrLTE1OiBoc2woMjAzLCAwJSwgOCUpO1xcbiAgLS1jb2wtNS1kYXJrLTIwOiBoc2woMjAxLCAwJSwgMyUpOyB9XFxuXFxuW2RhdGEtdGhlbWU9J3NlYWdyZWVuJ10ge1xcbiAgLS1jb2wtMTogaHNsKDg0LCA3MyUsIDc4JSk7XFxuICAtLWNvbC0yOiBoc2woMTIwLCA0MiUsIDc2JSk7XFxuICAtLWNvbC0yLWxnaHQtMTA6IGhzbCgxMjAsIDQyJSwgODYlKTtcXG4gIC0tY29sLTM6IGhzbCgxNDksIDM0JSwgNjElKTtcXG4gIC0tY29sLTMtbGdodC0xMDogaHNsKDE0OSwgMzQlLCA3MSUpO1xcbiAgLS1jb2wtNDogaHNsKDE4MCwgMzklLCAzOCUpO1xcbiAgLS1jb2wtNC1kYXJrLTU6IGhzbCgxODAsIDM5JSwgMzMlKTtcXG4gIC0tY29sLTQtZGFyay0xMDogaHNsKDE4MCwgMzklLCAyOCUpO1xcbiAgLS1jb2wtNTogaHNsKDIwMiwgODIlLCAyMyUpO1xcbiAgLS1jb2wtNS1kYXJrLTg6IGhzbCgyMDIsIDgyJSwgMTUlKTtcXG4gIC0tY29sLTUtZGFyay0xNTogaHNsKDIwMywgODMlLCA4JSk7XFxuICAtLWNvbC01LWRhcmstMjA6IGhzbCgyMDEsIDkyJSwgMyUpOyB9XFxuXFxuLnBhbC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAyMDsgfVxcblxcbi5wYWxldHRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5wYWxldHRlIExJIHtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogNXJlbTsgfVxcblxcbi8qISBub3JtYWxpemUuY3NzIHYzLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKipcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcbiAqIDIuIFByZXZlbnQgaU9TIGFuZCBJRSB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2UsXFxuICogICAgd2l0aG91dCBkaXNhYmxpbmcgdXNlciB6b29tLlxcbiAqL1xcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAqL1xcbltoaWRkZW5dLFxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgZm9jdXNlZCBlbGVtZW50cyB3aGVuIHRoZXkgYXJlIGFsc28gaW4gYW5cXG4gKiBhY3RpdmUvaG92ZXIgc3RhdGUuXFxuICovXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkOyB9XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcbiAqL1xcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDsgfVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDsgfVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDMgKi8gfVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogMyAqLyB9XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsOyB9XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gKi9cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxcbiAqL1xcbm9wdGdyb3VwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyogVGFibGVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbkJPRFkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sLTEpO1xcbiAgZm9udDogMTZweC8xLjQgR2VvcmdpYSwgc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tY29sLTUtZGFyay04KTsgfVxcblxcbkEge1xcbiAgY29sb3I6IHZhcigtLWNvbC01KTsgfVxcblxcblVMIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbkgxLFxcbkgyLFxcbkgzLFxcbkg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuTEksXFxuVWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbk1BUksge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWNvbC00LWRhcmstNSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtNC1kYXJrLTUpO1xcbiAgY29sb3I6IHZhcigtLWNvbC0yLWxnaHQtMTApOyB9XFxuXFxuUFJFIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgfVxcblxcbi5oaWRkZW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnZpc3VhbGx5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4vKiBDT05URU5UXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRlbnRfX2l0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMXJlbSAyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1jb2wtNCk7IH1cXG5cXG4uY29udGVudF9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWNvbC00KTsgfVxcblxcbi5jb250ZW50X19kZXNjIFVMIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG4gIHBhZGRpbmctbGVmdDogMmVtOyB9XFxuXFxuLmNvbnRlbnQgQ09ERSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC0zLWxnaHQtMTApOyB9XFxuXFxuLmNvbnRlbnQgUFJFIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweDsgfVxcblxcbi8qIFZhbHVlcyAqL1xcbi5jb250ZW50LXZhbHVlc19fdGVybSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtNC1kYXJrLTEwKTsgfVxcblxcbi5jb250ZW50LXZhbHVlc19fZGVzYyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuXFxuLmwtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmwtbWFpbiB7XFxuICBmbGV4OiAxOyB9XFxuXFxuLmwtYXNpZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3JkZXI6IC0xO1xcbiAgd2lkdGg6IDIzJTtcXG4gIG1pbi13aWR0aDogMjMwcHg7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtNSk7IH1cXG5cXG4ubC1hc2lkZV9fY29udGVudCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDIzJTtcXG4gIG1pbi13aWR0aDogMjMwcHg7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmRlbW8td3JhcHBlciB7XFxuICBtYXJnaW46IDJyZW0gMDsgfVxcblxcbi5kZW1vX19jb250cm9sIHtcXG4gIG1hcmdpbjogMCAuNXJlbSAuNXJlbSAwO1xcbiAgcGFkZGluZzogLjNyZW0gLjdyZW07XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtNCk7XFxuICBjb2xvcjogdmFyKC0tY29sLTIpOyB9XFxuICAuZGVtb19fY29udHJvbC0tY3VycmVudCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC01KTtcXG4gICAgY29sb3I6IHZhcigtLWNvbC0xKTsgfVxcblxcbi5kZW1vIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uZGVtb19fdmlldyB7XFxuICB3aWR0aDogNTAlO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLWhlaWdodDogMjc1cHg7XFxuICBtYXJnaW46IDAgMXJlbSAxcmVtIDA7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2wtMyk7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgICAuZGVtb19fdmlldyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9IH1cXG5cXG4uZGVtb19fY29kZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IC43NXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgY29sb3I6IHZhcigtLWNvbC01KTsgfVxcblxcbi5wYXJlbnQge1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNvbC00KTsgfVxcblxcbi5jaGlsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDIuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDIuNXJlbTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sLTMpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2wtMSk7IH1cXG5cXG4uY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC01KTtcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogNTAlIDUwJTtcXG4gICAgICAgICAgbWFzay1wb3NpdGlvbjogNTAlIDUwJTsgfVxcblxcbi5kZW1vLS1oYXMtZmVhdHVyZWQgLmNoaWxkLS1mZWF0dXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2wtNCk7IH1cXG5cXG4uY2hpbGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDdGV4dCB4PSc1MCUyNScgeT0nNTAlMjUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGR5PScuMjVlbScgc3R5bGU9J2ZvbnQ6IDMwcHgvMSBHZW9yZ2lhLCBzZXJpZicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nLjY1JyUzRSAxICUzQy90ZXh0JTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAgICAgICBtYXNrLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDdGV4dCB4PSc1MCUyNScgeT0nNTAlMjUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGR5PScuMjVlbScgc3R5bGU9J2ZvbnQ6IDMwcHgvMSBHZW9yZ2lhLCBzZXJpZicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nLjY1JyUzRSAxICUzQy90ZXh0JTNFJTNDL3N2ZyUzRVxcXCIpOyB9XFxuXFxuLmNoaWxkOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3RleHQgeD0nNTAlMjUnIHk9JzUwJTI1JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkeT0nLjI1ZW0nIHN0eWxlPSdmb250OiAzMHB4LzEgR2VvcmdpYSwgc2VyaWYnIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9Jy42NSclM0UgMiAlM0MvdGV4dCUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgICAgICAgbWFzay1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3RleHQgeD0nNTAlMjUnIHk9JzUwJTI1JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkeT0nLjI1ZW0nIHN0eWxlPSdmb250OiAzMHB4LzEgR2VvcmdpYSwgc2VyaWYnIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9Jy42NSclM0UgMiAlM0MvdGV4dCUzRSUzQy9zdmclM0VcXFwiKTsgfVxcblxcbi5jaGlsZDpudGgtY2hpbGQoMyk6OmJlZm9yZSB7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0N0ZXh0IHg9JzUwJTI1JyB5PSc1MCUyNScgdGV4dC1hbmNob3I9J21pZGRsZScgZHk9Jy4yNWVtJyBzdHlsZT0nZm9udDogMzBweC8xIEdlb3JnaWEsIHNlcmlmJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScuNjUnJTNFIDMgJTNDL3RleHQlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgICAgICAgIG1hc2staW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0N0ZXh0IHg9JzUwJTI1JyB5PSc1MCUyNScgdGV4dC1hbmNob3I9J21pZGRsZScgZHk9Jy4yNWVtJyBzdHlsZT0nZm9udDogMzBweC8xIEdlb3JnaWEsIHNlcmlmJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScuNjUnJTNFIDMgJTNDL3RleHQlM0UlM0Mvc3ZnJTNFXFxcIik7IH1cXG5cXG4uY2hpbGQ6bnRoLWNoaWxkKDQpOjpiZWZvcmUge1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDdGV4dCB4PSc1MCUyNScgeT0nNTAlMjUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGR5PScuMjVlbScgc3R5bGU9J2ZvbnQ6IDMwcHgvMSBHZW9yZ2lhLCBzZXJpZicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nLjY1JyUzRSA0ICUzQy90ZXh0JTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAgICAgICBtYXNrLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDdGV4dCB4PSc1MCUyNScgeT0nNTAlMjUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGR5PScuMjVlbScgc3R5bGU9J2ZvbnQ6IDMwcHgvMSBHZW9yZ2lhLCBzZXJpZicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nLjY1JyUzRSA0ICUzQy90ZXh0JTNFJTNDL3N2ZyUzRVxcXCIpOyB9XFxuXFxuLmNoaWxkOm50aC1jaGlsZCg1KTo6YmVmb3JlIHtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3RleHQgeD0nNTAlMjUnIHk9JzUwJTI1JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkeT0nLjI1ZW0nIHN0eWxlPSdmb250OiAzMHB4LzEgR2VvcmdpYSwgc2VyaWYnIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9Jy42NSclM0UgNSAlM0MvdGV4dCUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgICAgICAgbWFzay1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3RleHQgeD0nNTAlMjUnIHk9JzUwJTI1JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBkeT0nLjI1ZW0nIHN0eWxlPSdmb250OiAzMHB4LzEgR2VvcmdpYSwgc2VyaWYnIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9Jy42NSclM0UgNSAlM0MvdGV4dCUzRSUzQy9zdmclM0VcXFwiKTsgfVxcblxcbi5jaGlsZDpudGgtY2hpbGQoNik6OmJlZm9yZSB7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0N0ZXh0IHg9JzUwJTI1JyB5PSc1MCUyNScgdGV4dC1hbmNob3I9J21pZGRsZScgZHk9Jy4yNWVtJyBzdHlsZT0nZm9udDogMzBweC8xIEdlb3JnaWEsIHNlcmlmJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScuNjUnJTNFIDYgJTNDL3RleHQlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgICAgICAgIG1hc2staW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0N0ZXh0IHg9JzUwJTI1JyB5PSc1MCUyNScgdGV4dC1hbmNob3I9J21pZGRsZScgZHk9Jy4yNWVtJyBzdHlsZT0nZm9udDogMzBweC8xIEdlb3JnaWEsIHNlcmlmJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScuNjUnJTNFIDYgJTNDL3RleHQlM0UlM0Mvc3ZnJTNFXFxcIik7IH1cXG5cXG4ubmF2IHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyMyU7XFxuICBtaW4td2lkdGg6IDIzMHB4O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAubmF2IHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH0gfVxcbiAgLm5hdjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLTQpOyB9XFxuICAubmF2X19zdWJoZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgY29sb3I6IHZhcigtLWNvbC01LWRhcmstMjApO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHZhcigtLWNvbC01KSwgM3B4IDNweCAwIHZhcigtLWNvbC01LWRhcmstMjApOyB9XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTMwcHgpIHtcXG4gICAgICAubmF2X19zdWJoZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtOyB9IH1cXG4gIC5uYXZfX2l0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNHJlbTsgfVxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gICAgICAubmF2X19pdGVtIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC42cmVtOyB9IH1cXG4gIC5uYXZfX2xpbmsge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29sLTMtbGdodC0xMCk7IH1cXG4gICAgLm5hdl9fbGluazpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2wtMik7IH1cXG4gIC5uYXZfX2l0ZW0tLWN1cnJlbnQgLm5hdl9fbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2wtMSk7IH1cXG5cXG4vKiBNYXJrZXJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4ubmF2X19tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIG1hcmdpbi10b3A6IC0uNDVyZW07XFxuICByaWdodDogLTFyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbC0xKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggdmFyKC0tY29sLTQpO1xcbiAgdHJhbnNpdGlvbjogdG9wIC41czsgfVxcblxcbi5wcm9qZWN0LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDNyZW07IH1cXG5cXG4ucHJvamVjdC1saW5rIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAwO1xcbiAgdGV4dC1pbmRlbnQ6IC0xMDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3BhY2l0eTogLjc7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7IH1cXG4gIC5wcm9qZWN0LWxpbms6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAucHJvamVjdC1saW5rOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC01LWRhcmstMTUpO1xcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIG1hc2stcG9zaXRpb246IDUwJSA1MCU7IH1cXG4gIC5wcm9qZWN0LWxpbmstLWdpdDo6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBmaWxsPSclMjMwMDAnIGQ9J003Ljk5OSwwLjQzMWMtNC4yODUsMC03Ljc2LDMuNDc0LTcuNzYsNy43NjEgYzAsMy40MjgsMi4yMjMsNi4zMzcsNS4zMDcsNy4zNjNjMC4zODgsMC4wNzEsMC41My0wLjE2OCwwLjUzLTAuMzc0YzAtMC4xODQtMC4wMDctMC42NzItMC4wMS0xLjMyIGMtMi4xNTksMC40NjktMi42MTQtMS4wNC0yLjYxNC0xLjA0Yy0wLjM1My0wLjg5Ni0wLjg2Mi0xLjEzNS0wLjg2Mi0xLjEzNWMtMC43MDUtMC40ODEsMC4wNTMtMC40NzIsMC4wNTMtMC40NzIgYzAuNzc5LDAuMDU1LDEuMTg5LDAuOCwxLjE4OSwwLjhjMC42OTIsMS4xODYsMS44MTYsMC44NDMsMi4yNTgsMC42NDVjMC4wNzEtMC41MDIsMC4yNzEtMC44NDMsMC40OTMtMS4wMzcgQzQuODYsMTEuNDI1LDMuMDQ5LDEwLjc2LDMuMDQ5LDcuNzg2YzAtMC44NDcsMC4zMDItMS41NCwwLjc5OS0yLjA4MkMzLjc2OCw1LjUwNywzLjUwMSw0LjcxOCwzLjkyNCwzLjY1IGMwLDAsMC42NTItMC4yMDksMi4xMzQsMC43OTZDNi42NzcsNC4yNzMsNy4zNCw0LjE4Nyw4LDQuMTg0YzAuNjU5LDAuMDAzLDEuMzIzLDAuMDg5LDEuOTQzLDAuMjYxIGMxLjQ4Mi0xLjAwNCwyLjEzMi0wLjc5NiwyLjEzMi0wLjc5NmMwLjQyMywxLjA2OCwwLjE1NywxLjg1NywwLjA3NywyLjA1NGMwLjQ5NywwLjU0MiwwLjc5OCwxLjIzNSwwLjc5OCwyLjA4MiBjMCwyLjk4MS0xLjgxNCwzLjYzNy0zLjU0MywzLjgyOWMwLjI3OSwwLjI0LDAuNTI3LDAuNzEzLDAuNTI3LDEuNDM3YzAsMS4wMzctMC4wMSwxLjg3NC0wLjAxLDIuMTI5IGMwLDAuMjA4LDAuMTQsMC40NDksMC41MzQsMC4zNzNjMy4wODEtMS4wMjgsNS4zMDItMy45MzUsNS4zMDItNy4zNjJDMTUuNzYsMy45MDYsMTIuMjg1LDAuNDMxLDcuOTk5LDAuNDMxeiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgICAgICAgICBtYXNrLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBmaWxsPSclMjMwMDAnIGQ9J003Ljk5OSwwLjQzMWMtNC4yODUsMC03Ljc2LDMuNDc0LTcuNzYsNy43NjEgYzAsMy40MjgsMi4yMjMsNi4zMzcsNS4zMDcsNy4zNjNjMC4zODgsMC4wNzEsMC41My0wLjE2OCwwLjUzLTAuMzc0YzAtMC4xODQtMC4wMDctMC42NzItMC4wMS0xLjMyIGMtMi4xNTksMC40NjktMi42MTQtMS4wNC0yLjYxNC0xLjA0Yy0wLjM1My0wLjg5Ni0wLjg2Mi0xLjEzNS0wLjg2Mi0xLjEzNWMtMC43MDUtMC40ODEsMC4wNTMtMC40NzIsMC4wNTMtMC40NzIgYzAuNzc5LDAuMDU1LDEuMTg5LDAuOCwxLjE4OSwwLjhjMC42OTIsMS4xODYsMS44MTYsMC44NDMsMi4yNTgsMC42NDVjMC4wNzEtMC41MDIsMC4yNzEtMC44NDMsMC40OTMtMS4wMzcgQzQuODYsMTEuNDI1LDMuMDQ5LDEwLjc2LDMuMDQ5LDcuNzg2YzAtMC44NDcsMC4zMDItMS41NCwwLjc5OS0yLjA4MkMzLjc2OCw1LjUwNywzLjUwMSw0LjcxOCwzLjkyNCwzLjY1IGMwLDAsMC42NTItMC4yMDksMi4xMzQsMC43OTZDNi42NzcsNC4yNzMsNy4zNCw0LjE4Nyw4LDQuMTg0YzAuNjU5LDAuMDAzLDEuMzIzLDAuMDg5LDEuOTQzLDAuMjYxIGMxLjQ4Mi0xLjAwNCwyLjEzMi0wLjc5NiwyLjEzMi0wLjc5NmMwLjQyMywxLjA2OCwwLjE1NywxLjg1NywwLjA3NywyLjA1NGMwLjQ5NywwLjU0MiwwLjc5OCwxLjIzNSwwLjc5OCwyLjA4MiBjMCwyLjk4MS0xLjgxNCwzLjYzNy0zLjU0MywzLjgyOWMwLjI3OSwwLjI0LDAuNTI3LDAuNzEzLDAuNTI3LDEuNDM3YzAsMS4wMzctMC4wMSwxLjg3NC0wLjAxLDIuMTI5IGMwLDAuMjA4LDAuMTQsMC40NDksMC41MzQsMC4zNzNjMy4wODEtMS4wMjgsNS4zMDItMy45MzUsNS4zMDItNy4zNjJDMTUuNzYsMy45MDYsMTIuMjg1LDAuNDMxLDcuOTk5LDAuNDMxeiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTsgfVxcbiAgLnByb2plY3QtbGluay0tdHdpdHRlcjo6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBmaWxsPSclMjMwMDAnIGQ9J00xNS45NjksMy4wNThjLTAuNTg2LDAuMjYtMS4yMTcsMC40MzYtMS44NzgsMC41MTVjMC42NzUtMC40MDUsMS4xOTQtMS4wNDUsMS40MzgtMS44MDljLTAuNjMyLDAuMzc1LTEuMzMyLDAuNjQ3LTIuMDc2LDAuNzkzYy0wLjU5Ni0wLjYzNi0xLjQ0Ni0xLjAzMy0yLjM4Ny0xLjAzM2MtMS44MDYsMC0zLjI3LDEuNDY0LTMuMjcsMy4yNyBjMCwwLjI1NiwwLjAyOSwwLjUwNiwwLjA4NSwwLjc0NUM1LjE2Myw1LjQwNCwyLjc1Myw0LjEwMiwxLjE0LDIuMTI0QzAuODU5LDIuNjA3LDAuNjk4LDMuMTY4LDAuNjk4LDMuNzY3IGMwLDEuMTM0LDAuNTc3LDIuMTM1LDEuNDU1LDIuNzIyQzEuNjE2LDYuNDcyLDEuMTEyLDYuMzI1LDAuNjcxLDYuMDhjMCwwLjAxNCwwLDAuMDI3LDAsMC4wNDFjMCwxLjU4NCwxLjEyNywyLjkwNiwyLjYyMywzLjIwNiBDMy4wMiw5LjQwMiwyLjczMSw5LjQ0MiwyLjQzMyw5LjQ0MmMtMC4yMTEsMC0wLjQxNi0wLjAyMS0wLjYxNS0wLjA1OWMwLjQxNiwxLjI5OSwxLjYyNCwyLjI0NSwzLjA1NSwyLjI3MSBjLTEuMTE5LDAuODc3LTIuNTI5LDEuNC00LjA2MSwxLjRjLTAuMjY0LDAtMC41MjQtMC4wMTUtMC43OC0wLjA0NmMxLjQ0NywwLjkyOCwzLjE2NiwxLjQ2OSw1LjAxMywxLjQ2OSBjNi4wMTUsMCw5LjMwNC00Ljk4Myw5LjMwNC05LjMwNGMwLTAuMTQyLTAuMDAzLTAuMjgzLTAuMDA5LTAuNDIzQzE0Ljk3Niw0LjI5LDE1LjUzMSwzLjcxNCwxNS45NjksMy4wNTh6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAgICAgICAgIG1hc2staW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGZpbGw9JyUyMzAwMCcgZD0nTTE1Ljk2OSwzLjA1OGMtMC41ODYsMC4yNi0xLjIxNywwLjQzNi0xLjg3OCwwLjUxNWMwLjY3NS0wLjQwNSwxLjE5NC0xLjA0NSwxLjQzOC0xLjgwOWMtMC42MzIsMC4zNzUtMS4zMzIsMC42NDctMi4wNzYsMC43OTNjLTAuNTk2LTAuNjM2LTEuNDQ2LTEuMDMzLTIuMzg3LTEuMDMzYy0xLjgwNiwwLTMuMjcsMS40NjQtMy4yNywzLjI3IGMwLDAuMjU2LDAuMDI5LDAuNTA2LDAuMDg1LDAuNzQ1QzUuMTYzLDUuNDA0LDIuNzUzLDQuMTAyLDEuMTQsMi4xMjRDMC44NTksMi42MDcsMC42OTgsMy4xNjgsMC42OTgsMy43NjcgYzAsMS4xMzQsMC41NzcsMi4xMzUsMS40NTUsMi43MjJDMS42MTYsNi40NzIsMS4xMTIsNi4zMjUsMC42NzEsNi4wOGMwLDAuMDE0LDAsMC4wMjcsMCwwLjA0MWMwLDEuNTg0LDEuMTI3LDIuOTA2LDIuNjIzLDMuMjA2IEMzLjAyLDkuNDAyLDIuNzMxLDkuNDQyLDIuNDMzLDkuNDQyYy0wLjIxMSwwLTAuNDE2LTAuMDIxLTAuNjE1LTAuMDU5YzAuNDE2LDEuMjk5LDEuNjI0LDIuMjQ1LDMuMDU1LDIuMjcxIGMtMS4xMTksMC44NzctMi41MjksMS40LTQuMDYxLDEuNGMtMC4yNjQsMC0wLjUyNC0wLjAxNS0wLjc4LTAuMDQ2YzEuNDQ3LDAuOTI4LDMuMTY2LDEuNDY5LDUuMDEzLDEuNDY5IGM2LjAxNSwwLDkuMzA0LTQuOTgzLDkuMzA0LTkuMzA0YzAtMC4xNDItMC4wMDMtMC4yODMtMC4wMDktMC40MjNDMTQuOTc2LDQuMjksMTUuNTMxLDMuNzE0LDE1Ljk2OSwzLjA1OHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIik7IH1cXG5cXG4udGhlbWUtY29udHJvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLjVyZW07XFxuICB0b3A6IC41cmVtO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHBhZGRpbmc6IC4ycmVtIC40cmVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2wtNCk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vanMvZGF0YS9zcGVjcy5qcyc7XG5pbXBvcnQgeyBncm91cHMgfSBmcm9tICcuL2pzL2RhdGEvZ3JvdXBzLmpzJztcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vanMvTmF2LmpzJztcbmltcG9ydCB7IERhdGFTZWN0aW9uIH0gZnJvbSAnLi9qcy9EYXRhU2VjdGlvbi5qcyc7XG5pbXBvcnQgeyBUaGVtZVN3aXRjaGVyIH0gZnJvbSAnLi9qcy9UaGVtZVN3aXRjaGVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGlzVmlzaWJsZSwgZGVib3VuY2UgfSBmcm9tICcuL2pzL2hlbHBlcnMvaW5kZXguanMnO1xuXG5pbXBvcnQgJy4vc2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbmNvbnN0IHNlY3Rpb25zID0gW107XG5sZXQgbmF2O1xuXG5pbml0KCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCB0aGVtZVN3aXRjaGVyID0gbmV3IFRoZW1lU3dpdGNoZXIoKTtcbiAgdGhlbWVTd2l0Y2hlci5zZXRUaGVtZSgpO1xuXG4gIG5hdiA9IG5ldyBOYXYoe1xuICAgIGdyb3VwcyxcbiAgICBkYXRhLFxuICAgIHRhcmdldEVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sLWFzaWRlX19jb250ZW50JylcbiAgfSk7XG5cbiAgZmlsbENvbnRlbnQoKTtcbiAgYWRkTmF2TWFya2VyTW92ZSgpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZmlsbENvbnRlbnQgKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwtbWFpbicpO1xuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IG5ldyBEYXRhU2VjdGlvbihpdGVtKTtcbiAgICBzZWN0aW9ucy5wdXNoKHNlY3Rpb24uc2VjdGlvbkVsZW0pO1xuXG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbi5zZWN0aW9uRWxlbSk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFkZE5hdk1hcmtlck1vdmUoKSB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faXRlbScpO1xubmF2SXRlbXMucmVkdWNlID0gW10ucmVkdWNlO1xuICBjb25zdCBuYXZJdGVtc0J5SWQgPSBuYXZJdGVtcy5yZWR1Y2UoKHByZXYsIGl0ZW0pPT4ge1xuICAgIHByZXZbaXRlbS5pZF0gPSBpdGVtXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIHt9KTtcblxuICBjb25zdCBtb3ZlTmF2TWFya2VyID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgIGZvcihsZXQgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuICAgICAgaWYgKGlzVmlzaWJsZShzZWN0aW9uKSAmJiBuYXZJdGVtc0J5SWRbc2VjdGlvbi5pZF0pIHtcbiAgICAgICAgICBuYXYuc2V0Q3VycmVudEl0ZW0obmF2SXRlbXNCeUlkW3NlY3Rpb24uaWRdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIDEwMCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG1vdmVOYXZNYXJrZXIpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgeyBEZW1vIH0gZnJvbSAnLi9EZW1vLmpzJztcblxuZXhwb3J0IGNsYXNzIERhdGFTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgdGhpcy5kZW1vID0gbmV3IERlbW8oZGF0YSk7XG4gICAgdGhpcy5kZW1vV3JhcHBlciA9IHRoaXMuZGVtby53cmFwcGVyO1xuXG4gICAgY29uc3QgZWxlbXMgPSBbXG4gICAgICB0aGlzLmdldFRpdGxlKCksXG4gICAgICB0aGlzLmdldExpbmsoKSxcbiAgICAgIHRoaXMuZGVtb1dyYXBwZXIsXG4gICAgICB0aGlzLmdldERlc2MoKSxcbiAgICAgIHRoaXMuZ2V0VGFyZ2V0KCksXG4gICAgICB0aGlzLmdldEluaXRpYWxWYWx1ZSgpLFxuICAgICAgdGhpcy5nZXRWYWx1ZXMoKVxuICAgIF07XG5cbiAgICB0aGlzLnNlY3Rpb25FbGVtID0gY3JlYXRlRWxlbWVudCgnPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50X19pdGVtXCI+PC9zZWN0aW9uPicpO1xuXG4gICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHRoaXMuc2VjdGlvbkVsZW0uYXBwZW5kKGVsZW0pKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldFRpdGxlICgpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGgyXG4gICAgICBjbGFzcz1cImNvbnRlYnRfX3RpdGxlXCJcbiAgICAgIGlkPVwiJHt0aGlzLmRhdGEubmFtZX1cIlxuICAgICAgPiR7dGhpcy5kYXRhLm5hbWV9PC9oMj5gKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldExpbmsgKCkge1xuICAgIGlmICghdGhpcy5kYXRhLmxpbmspIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gdGhpcy5kYXRhLmxpbmsucmVwbGFjZSgnaHR0cDovL3d3dy4nLCAnJyk7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGEgaHJlZj1cIiR7dGhpcy5kYXRhLmxpbmt9XCI+JHt0ZXh0fTwvYT5gKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldERlc2MgKCkge1xuICAgIGlmICghdGhpcy5kYXRhLmRlc2MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwiY29udGVudF9fZGVzY1wiPiR7dGhpcy5kYXRhLmRlc2N9PC9kaXY+YCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXRUYXJnZXQgKCkge1xuICAgIGlmICghdGhpcy5kYXRhLmFwcGxpZXNUbykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYDxwIGNsYXNzPVwiY29udGVudF9faW5pdGlhbC12YWx1ZVwiPjxiPkFwcGxpZXMgdG88L2I+OiAke3RoaXMuZGF0YS5hcHBsaWVzVG99LjwvcD5gKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEuaW5pdFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPHAgY2xhc3M9XCJjb250ZW50X19pbml0aWFsLXZhbHVlXCI+PGI+SW5pdGlhbDwvYj46ICR7dGhpcy5kYXRhLmluaXRWYWx1ZX0uPC9wPmApO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0VmFsdWVzICgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS52YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBtYXJrdXAgPSAnJztcblxuICAgIGZvciAoY29uc3QgeyBuYW1lLCBkZXNjIH0gb2YgdGhpcy5kYXRhLnZhbHVlcykge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmRhdGEubmFtZSArICdfXycgKyBuYW1lO1xuICAgICAgY29uc3QgZHQgPSBgPGR0IGlkPVwiJHtpZH1cIiBjbGFzcz1cImNvbnRlbnQtdmFsdWVzX190ZXJtXCI+JHtuYW1lfTwvZHQ+YDtcbiAgICAgIGNvbnN0IGRkID0gYDxkZCBjbGFzcz1cImNvbnRlbnQtdmFsdWVzX19kZXNjXCI+JHtkZXNjfTwvZGQ+YDtcblxuICAgICAgbWFya3VwICs9IGR0ICsgZGQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYDxkbCBjbGFzcz1cImNvbnRlbnQtdmFsdWVzXCI+JHttYXJrdXB9PC9kbD5gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgeyBTdHlsZXNDb250cm9sbGVyIH0gZnJvbSAnLi9TdHlsZXNDb250cm9sbGVyLmpzJztcblxuY29uc3QgZGVtb1RtcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVtby10bXBsJykuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbmNvbnN0IGRlbW9FbGVtQ2xhc3NlcyA9IHtcbiAgZGVtb3M6ICcucGFyZW50JyxcbiAgJ2dyaWQgY29udGFpbmVycyc6ICcucGFyZW50JyxcbiAgJ2dyaWQgaXRlbXMnOiAnLmNoaWxkLS1mZWF0dXJlZCdcbn07XG5cbmV4cG9ydCBjbGFzcyBEZW1vIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMudGFyZ2V0RWxlbVNlbGVjdG9yID0gZGVtb0VsZW1DbGFzc2VzW3RoaXMuZGF0YS50YXJnZXRGb3JEZW1vXTtcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuZGF0YS5jdXN0b21WYWx1ZXMgfHwgdGhpcy5kYXRhLnZhbHVlcztcbiAgICB0aGlzLmNsYXNzTGlzdCA9IHRoaXMuZ2V0Q2xhc3NMaXN0KCk7XG4gICAgdGhpcy53cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgdGhpcy5jb2Rlc0VsZW0gPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcignLmRlbW9fX2NvZGUnKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnQoKTtcblxuICAgIHRoaXMuc3R5bGVzQ29udHJvbGxlciA9IG5ldyBTdHlsZXNDb250cm9sbGVyKHtcbiAgICAgIGRhdGEsXG4gICAgICBjdXJyZW50OiB0aGlzLmN1cnJlbnQsXG4gICAgICBjb2Rlc0VsZW06IHRoaXMuY29kZXNFbGVtLFxuICAgICAgY2xhc3NMaXN0OiB0aGlzLmNsYXNzTGlzdFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb250cm9scygpO1xuICB9XG5cbiAgZ2V0V3JhcHBlciAoKSB7XG4gICAgY29uc3QgZGVtb1dyYXBwZXIgPSBkZW1vVG1wbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgZGVtb0VsZW0gPSBkZW1vV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZGVtbycpO1xuICAgIGRlbW9FbGVtLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5jbGFzc0xpc3QpO1xuICAgIGNvbnN0IHZpZXdFbGVtID0gZGVtb1dyYXBwZXIucXVlcnlTZWxlY3RvcignLmRlbW9fX3ZpZXcnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuaHRtbE1hcmt1cCkge1xuICAgICAgdmlld0VsZW0uaW5uZXJIVE1MID0gdGhpcy5kYXRhLmh0bWxNYXJrdXA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0YS5kZW1vQmVmb3JlKSB7XG4gICAgICB2aWV3RWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmRhdGEuZGVtb0JlZm9yZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbW9XcmFwcGVyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Q2xhc3NMaXN0ICgpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBbXTtcbiAgICBjb25zdCBuYW1lc0xpc3QgPSB0aGlzLmRhdGEubmFtZS5zcGxpdCgnLCcpO1xuXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzTGlzdCkge1xuICAgICAgY2xhc3NMaXN0LnB1c2goJ2RlbW8tLXByb3AtJyArIG5hbWUudHJpbSgpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YXJnZXRFbGVtU2VsZWN0b3Iuc2VhcmNoKCdmZWF0dXJlZCcpID4gLTEpIHtcbiAgICAgIGNsYXNzTGlzdC5wdXNoKCdkZW1vLS1oYXMtZmVhdHVyZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NMaXN0O1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgYWRkQ29udHJvbHMgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5nZXRDb250cm9sc01hcmt1cCgpO1xuXG4gICAgY29uc3QgZWxlbSA9IGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCJkZW1vX19jb250cm9sc1wiPiR7Y29udHJvbHN9PC9kaXY+YCk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICB0aGlzLmNvbnRyb2xzT25DbGljayhldik7XG4gICAgfSk7XG5cbiAgICB0aGlzLndyYXBwZXIucHJlcGVuZChlbGVtKTtcbiAgICB0aGlzLmN1cnJlbnQuY29udHJvbCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmRlbW9fX2NvbnRyb2wtLWN1cnJlbnQnKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldENvbnRyb2xzTWFya3VwICgpIHtcbiAgICBjb25zdCBjb250cm9sc0xpc3QgPSBbXTtcblxuICAgIGlmICghdGhpcy52YWx1ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHsgaWQsIG5hbWUsIGN1cnJlbnQgfSBvZiB0aGlzLnZhbHVlcykge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gWydkZW1vX19jb250cm9sJ107XG5cbiAgICAgIGlmIChjdXJyZW50IHx8IG5hbWUgPT09IHRoaXMuY3VycmVudFZhbHVlSWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LnB1c2goJ2RlbW9fX2NvbnRyb2wtLWN1cnJlbnQnKTtcbiAgICAgIH1cblxuICAgICAgY29udHJvbHNMaXN0LnB1c2goYDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiJHtjbGFzc0xpc3Quam9pbignICcpfVwiXG4gICAgICAgIGRhdGEtdmFsdWUtaWQ9XCIke2lkIHx8IG5hbWV9XCI+JHtuYW1lfTwvYnV0dG9uPmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sc0xpc3Quam9pbignICcpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Q3VycmVudCAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50VmFsdWU7XG4gICAgbGV0IGN1cnJlbnRWYWx1ZUlkO1xuXG4gICAgZm9yIChjb25zdCB7IGlkLCBuYW1lLCBjdXJyZW50IH0gb2YgdGhpcy52YWx1ZXMpIHtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRWYWx1ZUlkID0gaWQgfHwgbmFtZTtcbiAgICAgICAgY3VycmVudFZhbHVlID0gbmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWN1cnJlbnRWYWx1ZUlkKSB7XG4gICAgICBjdXJyZW50VmFsdWVJZCA9IHRoaXMudmFsdWVzWzBdLmlkIHx8IHRoaXMudmFsdWVzWzBdLm5hbWU7XG4gICAgICBjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlc1swXS5uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogY3VycmVudFZhbHVlSWQsXG4gICAgICB2YWx1ZTogY3VycmVudFZhbHVlLFxuICAgICAgY29udHJvbDogbnVsbFxuICAgIH07XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb250cm9sc09uQ2xpY2sgKGV2KSB7XG4gICAgY29uc3QgY29udHJvbCA9IGV2LnRhcmdldC5jbG9zZXN0KCcuZGVtb19fY29udHJvbCcpO1xuXG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50LmNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnZGVtb19fY29udHJvbC0tY3VycmVudCcpO1xuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZGVtb19fY29udHJvbC0tY3VycmVudCcpO1xuXG4gICAgdGhpcy5jdXJyZW50LmNvbnRyb2wgPSBjb250cm9sO1xuICAgIHRoaXMuY3VycmVudC5pZCA9IGNvbnRyb2wuZGF0YXNldC52YWx1ZUlkO1xuICAgIHRoaXMuY3VycmVudC52YWx1ZSA9IGNvbnRyb2wuaW5uZXJIVE1MO1xuXG4gICAgdGhpcy5zdHlsZXNDb250cm9sbGVyLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzL2luZGV4LmpzJztcblxuZXhwb3J0IGNsYXNzIE5hdiB7XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgZ3JvdXBzLFxuICAgIGRhdGEsXG4gICAgdGFyZ2V0RWxlbVxuICB9KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5saXN0c0J5R3JvdXBzID0gdGhpcy5tb3ZlTGlzdHNUb0dyb3VwcygpO1xuICAgIGNvbnN0IG5hdk1hcmt1cCA9IHRoaXMuZ2V0TmF2TWFya3VwKCk7XG5cbiAgICB0aGlzLm5hdkVsZW0gPSBjcmVhdGVFbGVtZW50KGA8bmF2IGNsYXNzPVwibmF2XCI+JHtuYXZNYXJrdXB9PC9uYXY+YCk7XG4gICAgdGhpcy5tYXJrZXJFbGVtID0gY3JlYXRlRWxlbWVudCgnPHNwYW4gY2xhc3M9XCJuYXZfX21hcmtlclwiPjwvc3Bhbj4nKTtcblxuICAgIHRhcmdldEVsZW0ucHJlcGVuZCh0aGlzLm5hdkVsZW0pO1xuICAgIHRhcmdldEVsZW0ucHJlcGVuZCh0aGlzLm1hcmtlckVsZW0pO1xuXG4gICAgdGhpcy5zZXRDdXJyZW50SXRlbSgpO1xuXG4gICAgdGhpcy5uYXZFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICBjb25zdCBuYXZJdGVtID0gZXYudGFyZ2V0LmNsb3Nlc3QoJy5uYXZfX2l0ZW0nKTtcblxuICAgICAgaWYgKCFuYXZJdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0Q3VycmVudEl0ZW0obmF2SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlTGlzdHNUb0dyb3VwcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5yZWR1Y2UoKHByZXYsIGl0ZW0pID0+IHtcbiAgICAgIGxldCB7IGdyb3VwIH0gPSBpdGVtO1xuXG4gICAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgIGdyb3VwID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXByZXZbZ3JvdXBdKSB7XG4gICAgICAgIHByZXZbZ3JvdXBdID0gW107XG4gICAgICB9XG5cbiAgICAgIHByZXZbZ3JvdXBdLnB1c2goaXRlbSk7XG5cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGdldE5hdk1hcmt1cCAoKSB7XG4gICAgY29uc3QgaXRlbXNMaXN0ID0gT2JqZWN0LmVudHJpZXModGhpcy5ncm91cHMpXG4gICAgICAubWFwKChbaWQsIHsgdGl0bGUgfV0pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RzQnlHcm91cHNbaWRdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hcmt1cCA9ICcnO1xuXG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIG1hcmt1cCArPSBgPGgyIGNsYXNzPVwibmF2X19zdWJoZWFkZXJcIj4ke3RpdGxlfTwvaDI+YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtc01hcmt1cCA9IHRoaXMuZ2V0TGlzdE1hcmt1cChpZCk7XG4gICAgICAgIG1hcmt1cCArPSBgPHVsIGNsYXNzPVwibmF2X19saXN0XCI+JHtpdGVtc01hcmt1cC5qb2luKCcnKX08L3VsPmA7XG5cbiAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gaXRlbXNMaXN0LmpvaW4oJycpO1xuICB9XG5cbiAgZ2V0TGlzdE1hcmt1cCAoaWQpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMubGlzdHNCeUdyb3Vwc1tpZF07XG5cbiAgICByZXR1cm4gaXRlbXMubWFwKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUNsYXNzID0gdGhpcy5nZXRJdGVtQ2xhc3MobmFtZSk7XG5cbiAgICAgIHJldHVybiBgPGxpXG4gICAgICAgICAgY2xhc3M9XCIke2l0ZW1DbGFzc31cIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIiR7bmFtZX1cIlxuICAgICAgICA+PGFcbiAgICAgICAgICAgIGhyZWY9XCIjJHtuYW1lfVwiXG4gICAgICAgICAgICBkYXRhLXBhcmVudC1uYXYtaXRlbT1cIiR7bmFtZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJuYXZfX2xpbmtcIlxuICAgICAgICAgID4ke25hbWV9PC9hPjwvbGk+YDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEl0ZW1DbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsnbmF2X19pdGVtJ107XG5cbiAgICBjb25zdCBuYW1lc0xpc3QgPSBuYW1lLnNwbGl0KCcsJyk7XG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgbmFtZXNMaXN0KSB7XG4gICAgICBjbGFzc0xpc3QucHVzaCgnbmF2X19pdGVtLS0nICsgbmFtZS50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc0xpc3Quam9pbignICcpO1xuICB9XG5cbiAgc2V0Q3VycmVudEl0ZW0gKGVsZW0pIHtcbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19pdGVtJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudEVsZW0pIHtcbiAgICAgIHRoaXMuY3VycmVudEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtLS1jdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXJrZXJFbGVtLnN0eWxlLnRvcCA9IGAke2VsZW0ub2Zmc2V0VG9wfXB4YDtcblxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtLS1jdXJyZW50Jyk7XG5cbiAgICB0aGlzLmN1cnJlbnRFbGVtID0gZWxlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vaGVscGVycy9pbmRleC5qcyc7XG5cbmNvbnN0IGNvZGVPZmZzZXQgPSAnICAnO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgZGF0YSxcbiAgICBjdXJyZW50LFxuICAgIGNvZGVzRWxlbSxcbiAgICBjbGFzc0xpc3RcbiAgfSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICB0aGlzLmNsYXNzTGlzdCA9IGNsYXNzTGlzdDtcbiAgICB0aGlzLnN0eWxlc0VsZW0gPSB0aGlzLmdldFN0eWxlc0VsZW0oKTtcbiAgICB0aGlzLmNvZGVzRWxlbSA9IGNvZGVzRWxlbTtcblxuICAgIHRoaXMuc2V0U3R5bGVzKCk7XG4gIH1cblxuICBnZXRTdHlsZXNFbGVtICgpIHtcbiAgICBjb25zdCBlbGVtID0gY3JlYXRlRWxlbWVudChgPHN0eWxlIGlkPVwic3R5bGUtJHt0aGlzLmRhdGEubmFtZX1cIj48L3N0eWxlPmApO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGVsZW0pO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBnZXRTdHlsZXMgKCkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5kYXRhLmNzc1J1bGVzO1xuICAgIGNvbnN0IHBhcmVudENsYXNzID0gYC4ke3RoaXMuY2xhc3NMaXN0LmpvaW4oJyAnKX1gO1xuICAgIGxldCB2aXNpYmxlU3R5bGVzID0gJyc7XG4gICAgbGV0IGhpZGRlblN0eWxlcyA9ICcnO1xuXG4gICAgaWYgKCFydWxlcykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgeyBzZWxlY3RvciwgcHJvcHMsIHZhbHVlSWQgfSBvZiBydWxlcykge1xuICAgICAgbGV0IHByb3BzTGlzdEhpZGRlbiA9ICcnO1xuICAgICAgbGV0IHByb3BzTGlzdFZpc2libGUgPSAnJztcbiAgICAgIGNvbnN0IGhpZGRlblNlbGVjdG9yID0gW3BhcmVudENsYXNzLCBzZWxlY3Rvcl0uam9pbignICcpO1xuXG4gICAgICBpZiAodmFsdWVJZCAmJiB2YWx1ZUlkICE9PSB0aGlzLmN1cnJlbnQuaWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB0aGlzLmRhdGEubmFtZSkge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy5jdXJyZW50LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb3BTdHJpbmcgPSBgJHtuYW1lfTogJHt2YWx1ZX07XFxuYDtcblxuICAgICAgICBwcm9wc0xpc3RIaWRkZW4gKz0gY29kZU9mZnNldCArIHByb3BTdHJpbmc7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IHRoaXMuZGF0YS5uYW1lKSB7XG4gICAgICAgICAgcHJvcFN0cmluZyA9IGA8bWFyaz4ke3Byb3BTdHJpbmd9PC9tYXJrPmA7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wc0xpc3RWaXNpYmxlICs9IGNvZGVPZmZzZXQgKyBwcm9wU3RyaW5nO1xuICAgICAgfVxuXG4gICAgICBoaWRkZW5TdHlsZXMgKz0gYCR7aGlkZGVuU2VsZWN0b3J9IHtcXG4ke3Byb3BzTGlzdEhpZGRlbn19XFxuYDtcbiAgICAgIHZpc2libGVTdHlsZXMgKz0gYCR7c2VsZWN0b3J9IHtcXG4ke3Byb3BzTGlzdFZpc2libGV9fVxcbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGVTdHlsZXMsXG4gICAgICBoaWRkZW5TdHlsZXNcbiAgICB9O1xuICB9XG5cbiAgc2V0U3R5bGVzICgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IHRoaXMuZ2V0U3R5bGVzKCk7XG4gICAgdGhpcy5zdHlsZXNFbGVtLmlubmVySFRNTCA9IHRoaXMuc3R5bGVzLmhpZGRlblN0eWxlcztcbiAgICB0aGlzLmNvZGVzRWxlbS5pbm5lckhUTUwgPSB0aGlzLnN0eWxlcy52aXNpYmxlU3R5bGVzO1xuICB9XG5cbiAgdXBkYXRlIChjdXJyZW50KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICB0aGlzLnNldFN0eWxlcygpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGhlbWVTd2l0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1jb250cm9sJyk7XG4gICAgdGhpcy50aGVtZSA9IHRoaXMuZ2V0VGhlbWUoKTtcbiAgICB0aGlzLmxzS2V5ID0gJ2dkY2hUaGVtZSc7XG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnRoZW1lID0gdGhpcy50aGVtZSA9PT0gJ3NlYWdyZWVuJyA/ICdkZWZhdWx0JyA6ICdzZWFncmVlbic7XG5cbiAgICAgIHRoaXMuc2V0VGhlbWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRoZW1lKCkge1xuICAgIGxldCB0aGVtZSA9IGxvY2FsU3RvcmFnZVt0aGlzLmxzS2V5XTtcbiAgICB0aGVtZSA9IHRoZW1lIHx8ICdzZWFncmVlbic7XG5cbiAgICByZXR1cm4gdGhlbWU7XG4gIH1cblxuICBzZXRUaGVtZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQudGhlbWUgPSB0aGlzLnRoZW1lO1xuICAgIGxvY2FsU3RvcmFnZVt0aGlzLmxzS2V5XSA9IHRoaXMudGhlbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBncm91cHMgPSB7XG4gIG5vbmU6IHtcbiAgICB0aXRsZTogJydcbiAgfSxcbiAgYWxpZ25tZW50OiB7XG4gICAgdGl0bGU6ICdBbGlnbm1lbnQnXG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IFtdO1xuXG5kYXRhW2RhdGEubGVuZ3RoXSA9IHtcbiAgICBuYW1lOiAnZGlzcGxheScsXG5cbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cudzMub3JnL1RSL2NzczMtZ3JpZC1sYXlvdXQvI2dyaWQtbW9kZWwnLFxuXG4gICAgaW5pdFZhbHVlOiAnJyxcblxuICAgIHRhcmdldDogJ2dyaWQgY29udGFpbmVycycsXG5cbiAgICB0YXJnZXRGb3JEZW1vOiAnZ3JpZCBjb250YWluZXJzJyxcbiAgICBhcHBsaWVzVG86ICdhbGwgZWxlbWVudHMnLFxuXG4gICAgZGVzYzogYDxwPkEgPGRmbiA+Z3JpZCBjb250YWluZXI8L2Rmbj4gZXN0YWJsaXNoZXMgYSBuZXcgPGRmbiA+Z3JpZCBmb3JtYXR0aW5nIGNvbnRleHQ8L2Rmbj4gZm9yIGl0cyBjb250ZW50cy4gVGhpcyBpcyB0aGUgc2FtZSBhcyBlc3RhYmxpc2hpbmcgYSBibG9jayBmb3JtYXR0aW5nIGNvbnRleHQsIGV4Y2VwdCB0aGF0IGdyaWQgbGF5b3V0IGlzIHVzZWQgaW5zdGVhZCBvZiBibG9jayBsYXlvdXQ6IGZsb2F0cyBkbyBub3QgaW50cnVkZSBpbnRvIHRoZSBncmlkIGNvbnRhaW5lciwgYW5kIHRoZSBncmlkIGNvbnRhaW5lcuKAmXMgbWFyZ2lucyBkbyBub3QgY29sbGFwc2Ugd2l0aCB0aGUgbWFyZ2lucyBvZiBpdHMgY29udGVudHMuIFRoZSBjb250ZW50cyBvZiBhIDxpPmdyaWQgY29udGFpbmVyPC9pPiBhcmUgbGFpZCBvdXQgaW50byBhIDxpPmdyaWQ8L2k+LCB3aXRoIDxpPmdyaWQgbGluZXM8L2k+IGZvcm1pbmcgdGhlIGJvdW5kYXJpZXMgb2YgZWFjaCA8aT5ncmlkIGl0ZW1zPC9pPuKAmSBjb250YWluaW5nIGJsb2NrLiBUaGUgPGEgaHJlZj1cXCdodHRwczovL3d3dy53My5vcmcvVFIvY3NzLW92ZXJmbG93LTMvI3Byb3BkZWYtb3ZlcmZsb3dcXCcgPm92ZXJmbG93PC9hPiBwcm9wZXJ0eSBhcHBsaWVzIHRvIDxpPmdyaWQgY29udGFpbmVyczwvaT4uPC9wPlxuICAgICAgPHA+R3JpZCBjb250YWluZXJzIGFyZSBub3QgYmxvY2sgY29udGFpbmVycywgYW5kIHNvIHNvbWUgcHJvcGVydGllcyB0aGF0IHdlcmUgZGVzaWduZWQgd2l0aCB0aGUgYXNzdW1wdGlvbiBvZiBibG9jayBsYXlvdXQgZG9u4oCZdCBhcHBseSBpbiB0aGUgY29udGV4dCBvZiBncmlkIGxheW91dC4gSW4gcGFydGljdWxhcjo8L3A+XG5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxjb2RlPmZsb2F0PC9jb2RlPiBhbmQgPGNvZGU+Y2xlYXI8L2NvZGU+IGhhdmUgbm8gZWZmZWN0IG9uIGEgPGRmbj5ncmlkIGl0ZW08L2Rmbj4uXG4gICAgICAgICAgSG93ZXZlciwgdGhlIDxjb2RlPmZsb2F0PC9jb2RlPiBwcm9wZXJ0eSBzdGlsbCBhZmZlY3RzIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiA8Y29kZT5kaXNwbGF5PC9jb2RlPiBvbiBjaGlsZHJlbiBvZiBhIGdyaWQgY29udGFpbmVyLFxuICAgICAgICAgIGFzIHRoaXMgb2NjdXJzIDxlbT5iZWZvcmU8L2VtPiA8ZGZuPmdyaWQgaXRlbXM8L2Rmbj4gYXJlIGRldGVybWluZWQuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT48Y29kZT52ZXJ0aWNhbC1hbGlnbjwvY29kZT4gaGFzIG5vIGVmZmVjdCBvbiBhIGdyaWQgaXRlbS5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPnRoZSA8Y29kZT46OmZpcnN0LWxpbmU8L2NvZGU+IGFuZCA8Y29kZT46OmZpcnN0LWxldHRlcjwvY29kZT4gcHNldWRvLWVsZW1lbnRzIGRvIG5vdCBhcHBseSB0byA8ZGZuPmdyaWQgY29udGFpbmVyczwvZGZuPixcbiAgICAgICAgICBhbmQgPGRmbj5ncmlkIGNvbnRhaW5lcnM8L2Rmbj4gZG8gbm90IGNvbnRyaWJ1dGUgYSBmaXJzdCBmb3JtYXR0ZWQgbGluZSBvciBmaXJzdCBsZXR0ZXIgdG8gdGhlaXIgYW5jZXN0b3JzLlxuICAgICAgICA8L2xpPlxuICAgICA8L3VsPlxuXG4gICAgPHA+SWYgYW4gZWxlbWVudOKAmXMgc3BlY2lmaWVkIDxjb2RlPmRpc3BsYXk8L2NvZGU+IGlzIDxpPmlubGluZS1ncmlkPC9pPiBhbmQgdGhlIGVsZW1lbnQgaXMgZmxvYXRlZCBvciBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQsIHRoZSBjb21wdXRlZCB2YWx1ZSBvZiA8Y29kZT5kaXNwbGF5PC9jb2RlPiBpcyA8aT5ncmlkPC9pPi4gVGhlIHRhYmxlIGluIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnczLm9yZy9UUi9DU1MyL3Zpc3VyZW4uaHRtbCNkaXMtcG9zLWZsbyc+Q1NTIDIuMSBDaGFwdGVyIDkuNzwvYT4gaXMgdGh1cyBhbWVuZGVkIHRvIGNvbnRhaW4gYW4gYWRkaXRpb25hbCByb3csIHdpdGggPGk+aW5saW5lLWdyaWQ8L2k+IGluIHRoZSAnU3BlY2lmaWVkIFZhbHVlJyBjb2x1bW4gYW5kIDxpPmdyaWQ8L2k+IGluIHRoZSAnQ29tcHV0ZWQgVmFsdWUnIGNvbHVtbi48L3A+YCxcblxuICAgIHZhbHVlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnZ3JpZCcsXG4gICAgICAgIGRlc2M6ICdUaGlzIHZhbHVlIGNhdXNlcyBhbiBlbGVtZW50IHRvIGdlbmVyYXRlIGEgYmxvY2stbGV2ZWwgPGk+Z3JpZCBjb250YWluZXI8L2k+IGJveC4nLFxuICAgICAgICBjdXJyZW50OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnaW5saW5lLWdyaWQnLFxuICAgICAgICBkZXNjOiAnVGhpcyB2YWx1ZSBjYXVzZXMgYW4gZWxlbWVudCB0byBnZW5lcmF0ZSBhbiBpbmxpbmUtbGV2ZWwgPGk+Z3JpZCBjb250YWluZXI8L2k+IGJveC4nXG4gICAgICB9XG4gICAgXSxcblxuICAgIC8vIGh0bWxNYXJrdXA6IGA8ZGl2IGNsYXNzPVwicGFyZW50XCI+XG4gICAgLy8gICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj48L2Rpdj5cbiAgICAvLyAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPjwvZGl2PlxuICAgIC8vICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+PC9kaXY+XG4gICAgLy8gPC9kaXY+YCxcblxuICAgIGNzc1J1bGVzOiBbe1xuICAgICAgc2VsZWN0b3I6ICcucGFyZW50JyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJ1xuICAgICAgfVxuICAgIH1dLFxuXG4gICAgZGVtb0JlZm9yZTogJ1NvbWUgdGV4dCdcbn07XG5cbmRhdGFbZGF0YS5sZW5ndGhdID0ge1xuICAgIG5hbWU6ICdncmlkLXRlbXBsYXRlJyxcbiAgICBncm91cDogJ2FsaWdubWVudCcsXG5cbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cudzMub3JnL1RSL2NzczMtZ3JpZC1sYXlvdXQvI2V4cGxpY2l0LWdyaWQtc2hvcnRoYW5kJyxcblxuICAgIGluaXRWYWx1ZTogJ3NlZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMnLFxuXG4gICAgdGFyZ2V0OiAnZ3JpZCBjb250YWluZXJzJyxcblxuICAgIHRhcmdldEZvckRlbW86ICdncmlkIGNvbnRhaW5lcnMnLFxuICAgIGFwcGxpZXNUbzogJ2dyaWQgY29udGFpbmVycycsXG5cbiAgICBkZXNjOiBgPHA+VGhlIDxpPmdyaWQtdGVtcGxhdGU8L2k+IHByb3BlcnR5IGlzIGEgPGEgaHJlZj1cXCdodHRwczovL3d3dy53My5vcmcvVFIvY3NzLWNhc2NhZGUtNC8jc2hvcnRoYW5kLXByb3BlcnR5XFwnID5zaG9ydGhhbmQ8L2E+IGZvciBzZXR0aW5nIDxpPmdyaWQtdGVtcGxhdGUtY29sdW1uczwvaT4sXG4gICAgPGk+Z3JpZC10ZW1wbGF0ZS1yb3dzPC9pPiwgYW5kIDxpPmdyaWQtdGVtcGxhdGUtYXJlYXM8L2k+IGluIGEgc2luZ2xlIGRlY2xhcmF0aW9uLiBJdCBoYXMgc2V2ZXJhbCBkaXN0aW5jdCBzeW50YXggZm9ybXM6PC9wPlxuICAgICAgPHAgcm9sZT1cXCdub3RlXFwnPjxzcGFuPk5vdGU6PC9zcGFuPiBUaGUgPGk+Z3JpZDwvaT4gc2hvcnRoYW5kIGFjY2VwdHMgdGhlIHNhbWUgc3ludGF4LCBidXQgYWxzbyByZXNldHMgdGhlIGltcGxpY2l0IGdyaWQgcHJvcGVydGllcyB0byB0aGVpciBpbml0aWFsIHZhbHVlcy4gVW5sZXNzIGF1dGhvcnMgd2FudCB0aG9zZSB0byBjYXNjYWRlIGluIHNlcGFyYXRlbHksIGl0IGlzIHRoZXJlZm9yZSByZWNvbW1lbmRlZCB0byB1c2UgPGk+Z3JpZDwvaT4gaW5zdGVhZCBvZiA8aT5ncmlkLXRlbXBsYXRlPC9pPi48L3A+YCxcblxuICAgIHZhbHVlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnbm9uZScsXG4gICAgICAgIGRlc2M6ICdTZXRzIGFsbCB0aHJlZSBwcm9wZXJ0aWVzIHRvIHRoZWlyIGluaXRpYWwgdmFsdWVzICg8aT5ub25lPC9pPikuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJzzigJhncmlkLXRlbXBsYXRlLXJvd3PigJk+IC8gPOKAmGdyaWQtdGVtcGxhdGUtY29sdW1uc+KAmT4nLFxuICAgICAgICBkZXNjOiBgPHA+U2V0cyA8aT5ncmlkLXRlbXBsYXRlLXJvd3M8L2k+IGFuZCA8aT5ncmlkLXRlbXBsYXRlLWNvbHVtbnM8L2k+IHRvIHRoZSBzcGVjaWZpZWQgdmFsdWVzLCByZXNwZWN0aXZlbHksIGFuZCBzZXRzIDxpPmdyaWQtdGVtcGxhdGUtYXJlYXM8L2k+IHRvIDxpPm5vbmU8L2k+LjwvcD5cblxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgPHByZT5ncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIGF1dG8gMWZyIGF1dG87PC9wcmU+XG4gICAgICAgICAgPC9jb2RlPlxuXG4gICAgICAgICAgPHA+aXMgZXF1aXZhbGVudCB0bzwvcD5cblxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgPHByZT5ncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogbm9uZTsgPC9wcmU+XG4gICAgICAgICAgPC9jb2RlPmBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdbIDxsaW5lLW5hbWVzPj8gPHN0cmluZz4gPHRyYWNrLXNpemU+PyA8bGluZS1uYW1lcz4/IF0rIFsgLyA8ZXhwbGljaXQtdHJhY2stbGlzdD4gXT8nLFxuICAgICAgICBkZXNjOiBgPHVsPiA8bGk+XG4gICAgICAgICAgPHA+U2V0cyA8aT5ncmlkLXRlbXBsYXRlLWFyZWFzPC9pPiB0byB0aGUgc3RyaW5ncyBsaXN0ZWQuPC9wPiA8L2xpPlxuICAgICAgICAgICAgPGxpPiA8cD5TZXRzIDxpPmdyaWQtdGVtcGxhdGUtcm93czwvaT4gdG8gdGhlIDxpPiZsdDt0cmFjay1zaXplJmd0OzwvaT5zIGZvbGxvd2luZyBlYWNoIHN0cmluZyAoZmlsbGluZyBpbiA8aT5hdXRvPC9pPiBmb3IgYW55IG1pc3Npbmcgc2l6ZXMpLCBhbmQgc3BsaWNpbmcgaW4gdGhlIG5hbWVkIGxpbmVzIGRlZmluZWQgYmVmb3JlL2FmdGVyIGVhY2ggc2l6ZS48L3A+IDwvbGk+XG4gICAgICAgICAgICA8bGkgPiA8cD5TZXRzIDxpPmdyaWQtdGVtcGxhdGUtY29sdW1uczwvaT4gdG8gdGhlIHRyYWNrIGxpc3Rpbmcgc3BlY2lmaWVkIGFmdGVyIHRoZSBzbGFzaCAob3IgPGk+bm9uZTwvaT4sIGlmIG5vdCBzcGVjaWZpZWQpLjwvcD4gPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxwPlRoaXMgc3ludGF4IGFsbG93cyB0aGUgYXV0aG9yIHRvIGFsaWduIHRyYWNrIG5hbWVzIGFuZCBzaXplcyBpbmxpbmUgd2l0aCB0aGVpciByZXNwZWN0aXZlIGdyaWQgYXJlYXMuPC9wPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlOlxuICAgICAgICAgICAgICAgIFtoZWFkZXItdG9wXSBcXCdhIGEgYVxcJyBbaGVhZGVyLWJvdHRvbV1cbiAgICAgICAgICAgICAgICBbbWFpbi10b3BdIFxcJ2IgYiBiXFwnIDFmciBbbWFpbi1ib3R0b21dIC8gYXV0byAxZnIgYXV0bztcbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICA8cD5pcyBlcXVpdmFsZW50IHRvPC9wPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFwnYSBhIGFcXCcgXFwnYiBiIGJcXCc7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogW2hlYWRlci10b3BdIGF1dG8gW2hlYWRlci1ib3R0b20gbWFpbi10b3BdIDFmciBbbWFpbi1ib3R0b21dO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgPHA+YW5kIGNyZWF0ZXMgdGhlIGZvbGxvd2luZyBncmlkOjwvcD5cbiAgICAgICAgICA8ZmlndXJlPiA8b2JqZWN0IGRhdGE9XFwnaW1hZ2VzL2dyaWQtc2hvcnRoYW5kLnN2Z1xcJyB0eXBlPVxcJ2ltYWdlL3N2Zyt4bWxcXCc+PC9vYmplY3Q+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUaHJlZSBjb2x1bW5zLCBzaXplZCA8aT5hdXRvPC9pPiwgPHNwYW4gPjFmcjwvc3Bhbj4sIGFuZCA8aT5hdXRvPC9pPiwgcmVzcGVjdGl2ZWx5XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUd28gcm93cyBzaXplZCBhcyA8aT5hdXRvPC9pPiBhbmQgPHNwYW4gPjFmcjwvc3Bhbj4sIHJlc3BlY3RpdmVseS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEEgbGluZSBuYW1lZCBib3RoIOKAnGhlYWRlci10b3DigJ0gYW5kIOKAnGEtc3RhcnTigJ0gYXQgdGhlIHRvcCwgYSBsaW5lIHdpdGggZm91ciBuYW1lc+KAlDx3YnI+4oCcaGVhZGVyLWJvdHRvbeKAnSwg4oCcbWFpbi10b3DigJ0sIOKAnGEtZW5k4oCdLCBhbmQg4oCcYi1zdGFydOKAneKAlDx3YnI+aW4gdGhlIG1pZGRsZSwgYSBsaW5lIG5hbWVkIOKAnG1haW4tYm90dG9t4oCdIGFuZCDigJxiLWVuZOKAnSBhdCB0aGUgYm90dG9tLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5BIGxpbmUgbmFtZWQg4oCcYS1zdGFydOKAnSBhbmQg4oCcYi1zdGFydOKAnSBvbiB0aGUgbGVmdCBlZGdlLCBhbmQgYSBsaW5lIG5hbWVkIOKAnGEtZW5k4oCdIGFuZCDigJxiLWVuZOKAnSBvbiB0aGUgcmlnaHQgZWRnZS5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+XG5cbiAgICAgICAgICAgIFRoZSBncmlkIGNyZWF0ZWQgYnkgdGhlIGRlY2xhcmF0aW9ucyBhYm92ZS4gKFRoZSDigJxhL2Itc3RhcnQvZW5k4oCdIG5hbWVzIGFyZSBjcmVhdGVkIDxpPmltcGxpY2l0bHk8L2k+IGJ5IHRoZSA8aT5uYW1lZCBncmlkIGFyZWFzPC9pPi4pIDwvZmlnY2FwdGlvbj4gPC9maWd1cmU+IDwvZGl2PiA8cCByb2xlPVxcJ25vdGVcXCc+PHNwYW4+Tm90ZTo8L3NwYW4+IE5vdGUgdGhhdCB0aGUgPGk+cmVwZWF0KCk8L2k+IGZ1bmN0aW9uIGlzbuKAmXQgYWxsb3dlZCBpbiB0aGVzZSB0cmFjayBsaXN0aW5ncywgYXMgdGhlIHRyYWNrcyBhcmUgaW50ZW5kZWQgdG8gdmlzdWFsbHkgbGluZSB1cCBvbmUtdG8tb25lIHdpdGggdGhlIHJvd3MvY29sdW1ucyBpbiB0aGUg4oCcQVNDSUkgYXJ04oCdLjwvcD5gXG4gICAgICB9XG4gICAgXSxcblxuICAgIGN1c3RvbVZhbHVlczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2F1dG9mcicsXG4gICAgICAgIG5hbWU6ICdhdXRvIDFmciAvIGF1dG8gMWZyJyxcbiAgICAgICAgY3VycmVudDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICduYW1lZC1hcmVhcy10ZW1wbGF0ZScsXG4gICAgICAgIG5hbWU6ICdbaGVhZGVyLXRvcF0gXFwnYSBhIGFcXCcgW2hlYWRlci1ib3R0b21dIFttYWluLXRvcF0gXFwnYiBiIGJcXCcgMWZyIFttYWluLWJvdHRvbV0gLyBhdXRvIDFmciBhdXRvOydcbiAgICAgIH1cbiAgICBdLFxuXG4gICAgaHRtbE1hcmt1cDogYDxkaXYgY2xhc3M9XCJwYXJlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj48L2Rpdj5cbiAgICA8L2Rpdj5gLFxuXG4gICAgY3NzUnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcucGFyZW50JyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgJ2dyaWQtdGVtcGxhdGUnOiAnYXV0byAxZnIgLyBhdXRvIDFmcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcuY2hpbGQ6bnRoLWNoaWxkKDEpJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICdnb2xkJyxcbiAgICAgICAgICAnZ3JpZC1hcmVhJzogJ2hlYWRlci10b3AnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlSWQ6ICduYW1lZC1hcmVhcy10ZW1wbGF0ZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnLmNoaWxkOm50aC1jaGlsZCgyKScsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnZ3JlZW4nLFxuICAgICAgICAgICdncmlkLWFyZWEnOiAnaGVhZGVyLWJvdHRvbSdcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWVJZDogJ25hbWVkLWFyZWFzLXRlbXBsYXRlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcuY2hpbGQ6bnRoLWNoaWxkKDMpJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICdnb2xkJyxcbiAgICAgICAgICAnZ3JpZC1hcmVhJzogJ21haW4tdG9wJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZUlkOiAnbmFtZWQtYXJlYXMtdGVtcGxhdGUnXG4gICAgICB9XG4gICAgXVxufTtcbiIsIi8vIGh0dHBzOi8vZ3Jyci50ZWNoL3Bvc3RzL2NyZWF0ZS1kb20tbm9kZS1mcm9tLWh0bWwtc3RyaW5nL1xuXG5jb25zdCBoYXNTdXBwb3J0ID0gJ2NvbnRlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoc3RyKSA9PiB7XG4gIGlmIChoYXNTdXBwb3J0KSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgfVxuXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cjtcbiAgcmV0dXJuIHRlbXBsYXRlLmZpcnN0RWxlbWVudENoaWxkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsIi8vIFNvdXJjZTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9O1xufVxuXG5cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgaXNWaXNpYmxlIGZyb20gJy4vaXNWaXNpYmxlJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL2RlYm91bmNlJztcblxuZXhwb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgaXNWaXNpYmxlLFxuICBkZWJvdW5jZVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmlzaWJsZSAoZWxlbSkge1xuICBjb25zdCBjb29yZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBrb2VmZiA9IDMwMDtcblxuICBjb25zdCB3aW5kb3dIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gIC8vINCy0LXRgNGF0L3Rj9GPINCz0YDQsNC90LjRhtCwIGVsZW0g0LIg0L/RgNC10LTQtdC70LDRhSDQstC40LTQuNC80L7RgdGC0Lgg0JjQm9CYINC90LjQttC90Y/RjyDQs9GA0LDQvdC40YbQsCDQstC40LTQuNC80LBcbiAgY29uc3QgdG9wVmlzaWJsZSA9IGNvb3Jkcy50b3AgPiAwICYmIGNvb3Jkcy50b3AgPCB3aW5kb3dIZWlnaHQgLyAyO1xuICBjb25zdCBib3R0b21WaXNpYmxlID0gY29vcmRzLmJvdHRvbSA8IHdpbmRvd0hlaWdodCAmJiBjb29yZHMuYm90dG9tID4gMDtcblxuICByZXR1cm4gdG9wVmlzaWJsZSB8fCBib3R0b21WaXNpYmxlO1xufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=