webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./src/lib/fragments/Accordion.react.js":
/*!**********************************************!*\
  !*** ./src/lib/fragments/Accordion.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard.css */ "./src/dashboard.css");
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dashboard_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ComponentTemplate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ComponentTemplate.react */ "./src/lib/components/ComponentTemplate.react.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Accordion = /*#__PURE__*/function (_Component) {
  _inherits(Accordion, _Component);

  var _super = _createSuper(Accordion);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubMenuVisibility", function (index) {
      var hidden = _toConsumableArray(_this.state.hidden);

      hidden[index] = !hidden[index];

      _this.setState({
        hidden: hidden,
        allSectionsOpen: hidden.every(function (element) {
          return element === false;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showOrHideAllAccordionSections", function () {
      var hidden = new Array(_this.state.hidden.length).fill(_this.state.allSectionsOpen ? true : false);

      _this.setState({
        hidden: hidden
      });

      _this.state.allSectionsOpen = !_this.state.allSectionsOpen;
    });

    _this.state = {
      hidden: new Array(_this.props.accordionContent.length).fill(true),
      allSectionsOpen: false
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "app-example-page js-enabled"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "govuk-accordion",
        "data-module": "govuk-accordion",
        id: "accordion-default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "govuk-accordion__controls"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "govuk-accordion__show-all",
        onClick: this.showOrHideAllAccordionSections
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: this.state.allSectionsOpen ? "govuk-accordion-nav__chevron" : "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-accordion__section-toggle-text"
      }, " ", this.state.allSectionsOpen ? "Hide all sections" : "Show all sections", " "))), this.props.accordionContent.map(function (accordionSection, index) {
        return _this2.renderAccordionSection(index, accordionSection, _this2.state.hidden[index]);
      })));
    }
  }, {
    key: "renderAccordionSection",
    value: function renderAccordionSection(index, accordionContent, hidden) {
      var _this3 = this;

      var _this$props = this.props,
          _this$props$expandedC = _this$props.expandedClass,
          expandedClass = _this$props$expandedC === void 0 ? "govuk-accordion__section--expanded" : _this$props$expandedC,
          _this$props$collapsed = _this$props.collapsedClass,
          collapsedClass = _this$props$collapsed === void 0 ? "govuk-accordion__section" : _this$props$collapsed,
          _this$props$ShowStrin = _this$props.ShowString,
          ShowString = _this$props$ShowStrin === void 0 ? "Show" : _this$props$ShowStrin,
          _this$props$HideStrin = _this$props.HideString,
          HideString = _this$props$HideStrin === void 0 ? "Hide" : _this$props$HideStrin;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: hidden ? collapsedClass : collapsedClass + ' ' + expandedClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "govuk-accordion__section-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "govuk-accordion__section-heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        "aria-controls": "accordion-default-content-".concat(index),
        className: "govuk-accordion__section-button",
        id: "accordion-default-heading-".concat(index),
        "aria-expanded": !hidden,
        onClick: function onClick() {
          return _this3.handleSubMenuVisibility(index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-accordion__section-heading-text",
        id: "accordion-default-heading-".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-accordion__section-heading-text-focus"
      }, " ", accordionContent.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-visually-hidden govuk-accordion__section-heading-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-accordion__section-toggle",
        "data-nosnippet": true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-accordion__section-toggle-focus"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "moj-side-navigation__item--collapsed"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: hidden ? "govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down" : "govuk-accordion-nav__chevron"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-accordion__section-toggle-text"
      }, " ", hidden ? ShowString : HideString, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "govuk-visually-hidden"
      }, " this section")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "accordion-default-heading-".concat(index),
        className: "govuk-accordion__section-content",
        "aria-labelledby": "accordion-default-heading-".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "govuk-body"
      }, accordionContent.children)));
    }
  }]);

  return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Accordion.defaultProps = _components_ComponentTemplate_react__WEBPACK_IMPORTED_MODULE_3__["defaultProps"];
Accordion.propTypes = _components_ComponentTemplate_react__WEBPACK_IMPORTED_MODULE_3__["propTypes"];
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ })

})
//# sourceMappingURL=da4ba9a-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYTRiYTlhLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==