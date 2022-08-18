webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint no-magic-numbers: 0 */



var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var setProps = function setProps(props) {
    setValue(props.value);
    console.log('props', props);
    console.log('value', value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Autocomplete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    label: "Hello world",
    style: {
      minWidth: '50%'
    },
    source: [{
      label: "Local authorities",
      value: "Hello LOL"
    }, {
      label: "Regional",
      value: "Hello LOL2"
    }, {
      label: "Local authority type",
      value: "LOL"
    }],
    id: "autocomplete-default",
    placeholder: "Select Option",
    value: "Hello LOL2",
    setProps: setProps
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "The output value is ", value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Checkbox list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["CheckboxList"], {
    id: "checkboxes",
    value: ["restrict"],
    options: ["restrict"],
    setProps: setProps
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "ComponentTemplate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["ComponentTemplate"], {
    id: "a-great-component-id",
    setProps: setProps
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Team2"], {
    setProps: setProps
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=c2cf70c-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjMmNmNzBjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==