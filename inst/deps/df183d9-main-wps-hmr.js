webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./src/lib/components/CheckboxList.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/CheckboxList.react.js ***!
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



/**
 * Lazy loaded CheckboxList
 *
 * @param {
 * 	id,
 * 	options,
 * 	value,
 * } [props={}]
 * @return {*}
 */

var CheckboxList = function CheckboxList() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__["CheckboxList"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxList);
CheckboxList.defaultProps = {
  options: [],
  value: []
};
CheckboxList.propTypes = {
  /**
   * An array of options
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Array of options where the label and the value are the same thing - [string|number|bool]
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool])),
  /**
   * Simpler `options` representation in dictionary format. The order is not guaranteed.
   * {`value1`: `label1`, `value2`: `label2`, ... }
   * which is equal to
   * [{label: `label1`, value: `value1`}, {label: `label2`, value: `value2`}, ...]
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * An array of options {label: [string|number], value: [string|number]},
   * an optional disabled field can be used for each option
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.exact({
    /**
     * The option's label
     */
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

    /**
     * The value of the option. This value
     * corresponds to the items specified in the
     * `value` property.
     */
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]).isRequired,

    /**
     * If true, this option is disabled and cannot be selected.
     */
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * The HTML 'title' attribute for the option. Allows for
     * information on hover. For more information on this attribute,
     * see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title
     */
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))]),

  /**
   * The currently selected value
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool])),

  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var defaultProps = CheckboxList.defaultProps;
var propTypes = CheckboxList.propTypes;

/***/ })

})
//# sourceMappingURL=df183d9-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZjE4M2Q5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==