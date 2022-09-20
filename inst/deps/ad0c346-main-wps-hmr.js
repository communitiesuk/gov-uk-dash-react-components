webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./src/lib/components/ExpandableMenuItem.react.js":
/*!********************************************************!*\
  !*** ./src/lib/components/ExpandableMenuItem.react.js ***!
  \********************************************************/
/*! exports provided: defaultProps, propTypes, default */
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
 * Lazy loaded ExpandableMenuItem
 *
 * @param {
 * 	id,
 *  title,
 *  collapsedByDefault,
 *  children,
 * } [props={}]
 * @return {*}
 */

var ExpandableMenuItem = function ExpandableMenuItem() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__["ExpandableMenuItem"], props);
};
/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */


ExpandableMenuItem.defaultProps = {
  collapsedByDefault: true
};
ExpandableMenuItem.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The clickable text to display sub-menu
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Default behaviour of whether or not the sub-menu is collapsed on load
   */
  collapsedByDefault: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * An array of li HTML elements that will displayed on click
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
var defaultProps = ExpandableMenuItem.defaultProps;
var propTypes = ExpandableMenuItem.propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ExpandableMenuItem);

/***/ })

})
//# sourceMappingURL=ad0c346-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZDBjMzQ2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==