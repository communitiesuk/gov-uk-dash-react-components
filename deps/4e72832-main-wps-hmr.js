webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./src/lib/fragments/ComboBox.react.js":
/*!*********************************************!*\
  !*** ./src/lib/fragments/ComboBox.react.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_aria_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/button */ "./node_modules/@react-aria/button/dist/module.js");
/* harmony import */ var _react_stately_combobox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/combobox */ "./node_modules/@react-stately/combobox/dist/module.js");
/* harmony import */ var _react_aria_combobox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/combobox */ "./node_modules/@react-aria/combobox/dist/module.js");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/module.js");
/* harmony import */ var _components_ui_ComboBox_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/ComboBox.react */ "./src/lib/components/ui/ComboBox.react.js");
/* harmony import */ var _combobox_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combobox.css */ "./src/lib/fragments/combobox.css");
/* harmony import */ var _combobox_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_combobox_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_ListBox_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/ListBox.react */ "./src/lib/components/ui/ListBox.react.js");
/* harmony import */ var _components_ui_Popover_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ui/Popover.react */ "./src/lib/components/ui/Popover.react.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Reuse the ListBox and Popover from your component library.See below for details.




function ComboBox(props) {
  // Setup filter function and state.
  var _useFilter = Object(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__["useFilter"])({
    sensitivity: 'base'
  }),
      contains = _useFilter.contains;

  var state = Object(_react_stately_combobox__WEBPACK_IMPORTED_MODULE_1__["useComboBoxState"])(_objectSpread(_objectSpread({}, props), {}, {
    defaultFilter: contains
  })); // Setup refs and get props for child elements.

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var listBoxRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var popoverRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);

  var _useComboBox = Object(_react_aria_combobox__WEBPACK_IMPORTED_MODULE_2__["useComboBox"])(_objectSpread(_objectSpread({}, props), {}, {
    inputRef: inputRef,
    buttonRef: buttonRef,
    listBoxRef: listBoxRef,
    popoverRef: popoverRef
  }), state),
      triggerProps = _useComboBox.buttonProps,
      inputProps = _useComboBox.inputProps,
      listBoxProps = _useComboBox.listBoxProps,
      labelProps = _useComboBox.labelProps; // Call useButton to get props for the button element. Alternatively, you can
  // pass the triggerProps to a separate Button component using useButton
  // that you might already have in your component library.


  var _useButton = Object(_react_aria_button__WEBPACK_IMPORTED_MODULE_0__["useButton"])(triggerProps, buttonRef),
      buttonProps = _useButton.buttonProps;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", _extends({
    className: "govuk-label"
  }, labelProps), props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", _extends({}, buttonProps, inputProps, {
    ref: inputRef,
    className: "dluhc-combobox"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", _extends({}, buttonProps, {
    ref: buttonRef,
    style: {
      height: 24,
      marginLeft: 0,
      background: "transparent",
      border: "transparent",
      right: 0,
      position: "absolute",
      top: "8px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    "aria-hidden": "true",
    style: {
      padding: '0 2px'
    }
  }, "\u25BC")), state.isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ui_Popover_react__WEBPACK_IMPORTED_MODULE_8__["Popover"], {
    popoverRef: popoverRef,
    isOpen: state.isOpen,
    onClose: state.close
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ui_ListBox_react__WEBPACK_IMPORTED_MODULE_7__["ListBox"], _extends({}, listBoxProps, {
    listBoxRef: listBoxRef,
    state: state
  })))));
}

ComboBox.propTypes = _components_ui_ComboBox_react__WEBPACK_IMPORTED_MODULE_4__["propTypes"];
/* harmony default export */ __webpack_exports__["default"] = (ComboBox);

/***/ })

})
//# sourceMappingURL=4e72832-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI0ZTcyODMyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==