webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./src/lib/components/AutoComplete.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/AutoComplete.react.js ***!
  \**************************************************/
/*! exports provided: default, defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LazyLoader */ "./src/lib/LazyLoader.js");
/* harmony import */ var _dropdownArrowDown_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdownArrowDown.react */ "./src/lib/components/dropdownArrowDown.react.js");




/**
 * Lazy loaded Autocomplete
 *
 * @param {
 * 	id,
 * 	autoselect,
 * 	cssNamespace,
 * 	defaultValue,
 * 	displayMenu,
 * 	minLength,
 * 	name,
 * 	placeholder,
 * 	onConfirm,
 * 	confirmOnBlur,
 * 	showNoOptionsFound,
 * 	showAllValues,
 * 	required,
 * 	tNoResults,
 * 	tAssistiveHint,
 * 	source,
 * 	templates,
 * 	dropdownArrow: dropdownArrowFactory,
 * 	tStatusQueryTooShort,
 * 	tStatusNoResults,
 * 	tStatusSelectedOption,
 * 	tStatusResults,
 * } [props={}]
 * @return {*}
 */

var AutoComplete = function AutoComplete() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);
AutoComplete.defaultProps = {
  autoselect: false,
  cssNamespace: 'autocomplete',
  value: '',
  displayMenu: 'inline',
  minLength: 0,
  name: 'input-autocomplete',
  placeholder: '',
  onConfirm: function onConfirm() {},
  confirmOnBlur: true,
  showNoOptionsFound: true,
  showAllValues: false,
  required: false,
  tNoResults: function tNoResults() {
    return 'No results found';
  },
  tAssistiveHint: function tAssistiveHint() {
    return 'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.';
  },
  dropdownArrow: _dropdownArrowDown_react__WEBPACK_IMPORTED_MODULE_3__["default"],
  alwaysDisplayArrow: true
};
AutoComplete.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Should auto select
   */
  autoselect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * cssNamespace
   */
  cssNamespace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * No Description
   */
  displayMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * No Description
   */
  minLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * No Description
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * No Description
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * No Description
   */
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * No Description
   */
  confirmOnBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * No Description
   */
  showNoOptionsFound: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * No Description
   */
  showAllValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * No Description
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * No Description
   */
  tNoResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * No Description
   */
  tAssistiveHint: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * No Description
   */
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * No Description
   */
  templates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * No Description
   */
  tStatusQueryTooShort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * No Description
   */
  tStatusNoResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * No Description
   */
  tStatusSelectedOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * No Description
   */
  tStatusResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * React component for dropdown arrow
   */
  dropdownArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Accessible element
   */
  selectElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
  	 * Dash-assigned callback that should be called to report property changes
  	 * to Dash, to make them available for callbacks.
  	 */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * This is the ID for the label field
   */
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * alwaysDisplayArrow
   */
  alwaysDisplayArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * wrapperRef
   */
  wrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
var defaultProps = AutoComplete.defaultProps;
var propTypes = AutoComplete.propTypes;

/***/ })

})
//# sourceMappingURL=854506d-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4NTQ1MDZkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==