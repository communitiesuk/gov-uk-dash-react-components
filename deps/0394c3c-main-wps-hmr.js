webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./src/lib/fragments/AutoComplete.react.js":
/*!*************************************************!*\
  !*** ./src/lib/fragments/AutoComplete.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! usehooks-ts */ "./node_modules/usehooks-ts/esm/index.js");
/* harmony import */ var _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AutoComplete.react */ "./src/lib/components/AutoComplete.react.js");
/* harmony import */ var _helper_isIOS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/isIOS */ "./src/lib/helper/isIOS.js");
/* harmony import */ var _helper_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/keys */ "./src/lib/helper/keys.js");
/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/status */ "./src/lib/components/status.js");
/* harmony import */ var _autocomplete_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete.css */ "./src/lib/fragments/autocomplete.css");
/* harmony import */ var _autocomplete_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_autocomplete_css__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-undefined */







/**
 * Autocomplete to GOV GDS
 *
 * @param {*} [{
 * 	id,
 * 	autoselect,
 * 	cssNamespace,
 * 	value,
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
 * }=defaultProps]
 * @return {*}
 */

var AutoComplete = function AutoComplete(props) {
  var _getOptionLabelFromVa;

  var _defaultProps$props = _objectSpread(_objectSpread({}, _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__["defaultProps"]), props),
      id = _defaultProps$props.id,
      autoselect = _defaultProps$props.autoselect,
      cssNamespace = _defaultProps$props.cssNamespace,
      value = _defaultProps$props.value,
      displayMenu = _defaultProps$props.displayMenu,
      minLength = _defaultProps$props.minLength,
      name = _defaultProps$props.name,
      placeholder = _defaultProps$props.placeholder,
      onConfirm = _defaultProps$props.onConfirm,
      confirmOnBlur = _defaultProps$props.confirmOnBlur,
      showNoOptionsFound = _defaultProps$props.showNoOptionsFound,
      showAllValues = _defaultProps$props.showAllValues,
      required = _defaultProps$props.required,
      tNoResults = _defaultProps$props.tNoResults,
      tAssistiveHint = _defaultProps$props.tAssistiveHint,
      source = _defaultProps$props.source,
      templates = _defaultProps$props.templates,
      dropdownArrowFactory = _defaultProps$props.dropdownArrow,
      tStatusQueryTooShort = _defaultProps$props.tStatusQueryTooShort,
      tStatusNoResults = _defaultProps$props.tStatusNoResults,
      tStatusSelectedOption = _defaultProps$props.tStatusSelectedOption,
      tStatusResults = _defaultProps$props.tStatusResults,
      setProps = _defaultProps$props.setProps,
      ariaLabelledBy = _defaultProps$props.ariaLabelledBy,
      selectElement = _defaultProps$props.selectElement,
      alwaysDisplayArrow = _defaultProps$props.alwaysDisplayArrow,
      style = _defaultProps$props.style;

  if (!id) {
    throw new Error('id is not defined');
  }

  if (!source) {
    throw new Error('source is not defined');
  }

  var createSimpleEngine = function createSimpleEngine(values) {
    return function (query, syncResults) {
      if (values.length && _typeof(values[0]) === 'object') {
        syncResults(values.filter(function (r) {
          return (r ? r.label || r.name || r.value || r : r).toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }));
      } else {
        syncResults(values.filter(function (r) {
          return r.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }));
      }
    };
  };

  var getOptionFromValue = function getOptionFromValue(query, options) {
    return options.find(function (opt) {
      var _ref;

      return ((_ref = opt.value || opt) === null || _ref === void 0 ? void 0 : _ref.toLowerCase()) === (query === null || query === void 0 ? void 0 : query.toLowerCase());
    });
  };

  var getValueFromQuery = function getValueFromQuery(query, options) {
    return options.find(function (r) {
      var _ref2;

      return ((_ref2 = r ? r.label || r.name || r.value || r : r) === null || _ref2 === void 0 ? void 0 : _ref2.toLowerCase()) === (query === null || query === void 0 ? void 0 : query.toLowerCase());
    });
  };

  var getOptionLabelFromValue = function getOptionLabelFromValue(query, options) {
    var res = getOptionFromValue(query, options);
    return (res === null || res === void 0 ? void 0 : res.label) || (res === null || res === void 0 ? void 0 : res.name) || res;
  };

  var dataSource = Array.isArray(source) ? createSimpleEngine(source) : source;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      isFocus = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isHover = _useState4[0],
      setHover = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isMenuOpen = _useState6[0],
      setMenuOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      validChoiceMade = _useState8[0],
      setValidChoiceMade = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      selected = _useState10[0],
      setSelected = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState12 = _slicedToArray(_useState11, 2),
      ariaHint = _useState12[0],
      setAriaHint = _useState12[1];

  var startValue = Array.isArray(source) ? getOptionLabelFromValue(value, source) || '' : null;

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(startValue !== '' ? source : []),
      _useState14 = _slicedToArray(_useState13, 2),
      options = _useState14[0],
      setOptions = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(startValue || value || ''),
      _useState16 = _slicedToArray(_useState15, 2),
      query = _useState16[0],
      setQuery = _useState16[1];

  if (!Array.isArray(source)) {
    dataSource('', function (options) {
      var startValue = Array.isArray(source) ? getOptionLabelFromValue(value, options) || '' : '';
      setOptions(options);
      setQuery(startValue);
    });
  }

  var elementReferences = {};

  var getRealOptions = function getRealOptions(options) {
    return _typeof(options[0]) === 'object' ? options.map(function (option) {
      return (option === null || option === void 0 ? void 0 : option.value) || option;
    }) : options;
  }; // This template is used when converting from a state.options object into a state.query.


  var templateInputValue = function templateInputValue(value) {
    var _value$value;

    var inputValueTemplate = templates === null || templates === void 0 ? void 0 : templates.inputValue;
    return inputValueTemplate ? inputValueTemplate(value) : (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : value;
  }; // This template is used when displaying results / suggestions.


  var templateSuggestion = function templateSuggestion(value) {
    var suggestionTemplate = templates === null || templates === void 0 ? void 0 : templates.suggestion;
    return suggestionTemplate ? suggestionTemplate(value) : value ? value.label || value.name || value.value || value : value;
  };

  var isQueryAnOption = function isQueryAnOption(query, options) {
    return options.map(function (entry) {
      return templateInputValue(entry).toLowerCase();
    }).indexOf(query.toLowerCase()) !== -1;
  };

  var handleComponentBlur = function handleComponentBlur(newState, escape) {
    var focusOnBlur = escape && selectElement ? -1 : null;
    var newQuery;

    if (confirmOnBlur) {
      var _selectedOption$value;

      newQuery = newState.query || query;
      var selectedOption = options[selected];
      onConfirm((_selectedOption$value = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) !== null && _selectedOption$value !== void 0 ? _selectedOption$value : selectedOption);
    } else {
      newQuery = query;
    }

    setFocus(focusOnBlur);
    setMenuOpen(newState.menuOpen || false);
    setQuery(newQuery);
    setSelected(null);
    setValidChoiceMade(isQueryAnOption(newQuery, options));
  };

  var handleListMouseLeave = function handleListMouseLeave() {
    setHover(null);
  };

  var handleOptionBlur = function handleOptionBlur(event, index) {
    var focusingOutsideComponent = event.relatedTarget === null;
    var focusingInput = event.relatedTarget === elementReferences[-1];
    var focusingAnotherOption = isFocus !== index && isFocus !== -1;
    var blurComponent = !focusingAnotherOption && focusingOutsideComponent || !(focusingAnotherOption || focusingInput);

    if (blurComponent) {
      var keepMenuOpen = isMenuOpen && Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])();
      handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: templateInputValue(options[selected])
      });
    }
  };

  var handleInputBlur = function handleInputBlur(event) {
    var _event$relatedTarget;

    var focusingAnOption = isFocus !== -1;

    if (!focusingAnOption || !(event !== null && event !== void 0 && (_event$relatedTarget = event.relatedTarget) !== null && _event$relatedTarget !== void 0 && _event$relatedTarget.matches('li.autocomplete__option'))) {
      var keepMenuOpen = isMenuOpen && Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])();
      var newQuery = Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])() ? query : templateInputValue(options[selected]);
      handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: newQuery
      });
    }
  };

  var handleInputFocus = function handleInputFocus() {
    // console.log("selectElement", selectElement, "showAllValues", showAllValues)
    if (selectElement || showAllValues) {// return
    }

    var shouldReopenMenu = !validChoiceMade && (query === null || query === void 0 ? void 0 : query.length) >= minLength && (options === null || options === void 0 ? void 0 : options.length) > 0;
    setFocus(-1);

    if (shouldReopenMenu) {
      setMenuOpen(shouldReopenMenu || isMenuOpen);
      setSelected(-1);
    }
  };

  var wrapAround = function wrapAround(index) {
    var selectOptions = selectElement.options;
    var queryLength = query ? query.trim().length : 0;
    var length = queryLength > minLength ? options.length : selectOptions.length;

    if (index < 0) {
      return length - 1;
    } else if (index >= length) {
      return 0;
    }

    return index;
  };

  var handleOptionFocus = function handleOptionFocus(index, select) {
    // if we're replacing a select element, then we need
    // to allow the user to wrap around the options when pressing
    // up/down arrows
    var useIndex = selectElement ? wrapAround(index) : index;
    setFocus(useIndex);
    setHover(null);
    setSelected(useIndex);

    if (select) {
      var selectedOption = options[useIndex];
      var newQuery = templateInputValue(selectedOption);
      setQuery(newQuery);
      setValidChoiceMade(true);

      if (selectElement) {
        onConfirm(selectedOption);
      }
    }
  };

  var handleOptionMouseEnter = function handleOptionMouseEnter(index) {
    // iOS Safari prevents click event if mouseenter adds hover background colour
    // See: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW4
    if (!Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])()) {
      setHover(index);
    }
  };

  var hasAutoselect = function hasAutoselect() {
    return Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])() ? false : autoselect;
  };

  var handleOptionClick = function handleOptionClick(event, index) {
    var _selectedOption$value2;

    var menuOpen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var selectedOption = options[index];
    var newQuery = templateInputValue(selectedOption);
    onConfirm((_selectedOption$value2 = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) !== null && _selectedOption$value2 !== void 0 ? _selectedOption$value2 : selectedOption); // Do not remove this, otherwise the input can receive the event and
    // keep the menu open unintentionally

    event.preventDefault();
    event.stopPropagation();
    setFocus(-1);
    setHover(null);
    setMenuOpen(menuOpen);
    setQuery(newQuery);

    if (confirmOnBlur) {
      setSelected(-1);
    }

    setValidChoiceMade(true);
  };

  var handleOptionMouseDown = function handleOptionMouseDown(event) {
    // Safari triggers focusOut before click, but if you
    // preventDefault on mouseDown, you can stop that from happening.
    // If this is removed, clicking on an option in Safari will trigger
    // `handleOptionBlur`, which closes the menu, and the click will
    // trigger on the element underneath instead.
    // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
    event.preventDefault();
  };

  var handleUpArrow = function handleUpArrow(event) {
    event.preventDefault(); // If we're replacing a select element, we need to provide the interaction
    // where the dropdown is closed, and user presses up.
    // In this case they focus on the option before the selected one (or the last),
    // and also make menu open

    if (selectElement && isMenuOpen === false) {
      dataSource('', function (options) {
        setMenuOpen(true);
        setOptions(options);
        var realOpt = getRealOptions(options);
        var index = query && realOpt.indexOf(query) > 0 ? realOpt.indexOf(query) - 1 : options.length - 1;

        if (index < 0) {
          index = options.length - 1;
        }

        handleOptionFocus(index, true);
      });
    } else {
      var isNotAtTop = selected !== -1;
      var allowMoveUp = isNotAtTop && isMenuOpen;

      if (allowMoveUp || selectElement) {
        handleOptionFocus(selected - 1, autoselect);
      }
    }
  };

  var handleDownArrow = function handleDownArrow(event) {
    event.preventDefault(); // If we're replacing a select element, we need to provide the interaction
    // where the dropdown is closed, and user presses down.
    // In this case they focus on the option after the selected one (or the first),
    // and also make menu open
    // console.log("No IF Function")

    if (selectElement && !isMenuOpen) {
      // console.log("Select Element & Menu Not Open")
      dataSource('', function (options) {
        setMenuOpen(true);
        setOptions(options);
        var realOpt = getRealOptions(options);
        var index = query && realOpt.indexOf(query) > -1 ? realOpt.indexOf(query) + 1 : 0;

        if (index >= options.length) {
          index = 0;
        }

        handleOptionFocus(index, true);
      });
    } else if (showAllValues && !isMenuOpen) {
      // console.log("Show All Values & Menu Not Open")
      event.preventDefault();
      dataSource('', function (options) {
        setMenuOpen(true);
        setOptions(options);
        setSelected(0);
        setFocus(0);
        setHover(null);
      });
    } else if (isMenuOpen) {
      // console.log("Menu Open")
      var isNotAtBottom = selected !== options.length - 1;

      if (isNotAtBottom || selectElement) {
        handleOptionFocus(selected + 1, autoselect);
      }
    }
  };

  var handleSpace = function handleSpace(event) {
    if (showAllValues && !isMenuOpen || showAllValues && !isMenuOpen && query === '') {
      if (query.trim().length === 0) {
        event.preventDefault();
      }

      dataSource('', function (options) {
        var realOpt = getRealOptions(options);
        var index = query && realOpt.indexOf(query) > -1 ? realOpt.indexOf(query) : 0;
        setMenuOpen(true);
        setOptions(options);
        setFocus(index);
        setSelected(index);
      });
      return;
    }
  };

  var handleEnter = function handleEnter(event) {
    if (isMenuOpen) {
      event.preventDefault();
      var hasSelectedOption = selected >= 0;

      if (hasSelectedOption) {
        handleOptionClick(event, selected, false);
      }
    } else if (selectElement) {
      dataSource('', function (options) {
        setOptions(options);
        var realOpt = getRealOptions(options);
        var index = query && realOpt.indexOf(query) > -1 ? realOpt.indexOf(query) : 0;
        var openMenu = true;

        if (!selectElement) {
          index = -1;
          openMenu = false;
        }

        setMenuOpen(openMenu);
        setFocus(index);
        setSelected(index);
      });
    }
  };

  var handlePrintableKey = function handlePrintableKey(event) {
    var inputElement = elementReferences[-1];
    var eventIsOnInput = event.target === inputElement;

    if (!eventIsOnInput) {
      inputElement.focus();
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    switch (_helper_keys__WEBPACK_IMPORTED_MODULE_4__["keyCodes"][event.keyCode]) {
      case 'up':
        handleUpArrow(event);
        break;

      case 'down':
        handleDownArrow(event);
        break;

      case 'space':
        handleSpace(event);
        break;

      case 'enter':
        handleEnter(event);
        break;

      case 'escape':
        handleComponentBlur({
          query: query
        }, true);
        break;

      default:
        if (Object(_helper_keys__WEBPACK_IMPORTED_MODULE_4__["isPrintableKeyCode"])(event.keyCode)) {
          handlePrintableKey(event);
        }

        break;
    }
  };

  var handleInputChange = function handleInputChange(event) {
    // Besides the normal input that can be received by the user,
    // we also need to take care of special actions even in the input
    switch (_helper_keys__WEBPACK_IMPORTED_MODULE_4__["keyCodes"][event.keyCode]) {
      case 'up':
        handleUpArrow(event);
        break;

      case 'down':
        handleDownArrow(event);
        break;

      case 'space':
        handleSpace(event);
        break;

      case 'enter':
        handleEnter(event);
        break;

      case 'escape':
        handleComponentBlur({
          query: event.target.value
        }, true);
        break;

      default:
        {
          var _autoselect = hasAutoselect();

          var newQuery = event.target.value;
          var queryChanged = query !== newQuery;

          var _queryLongEnough = newQuery.length >= minLength;

          setQuery(newQuery);
          setAriaHint(newQuery.length === 0);
          var searchForOptions = showAllValues || newQuery.length && queryChanged && _queryLongEnough;

          if (searchForOptions) {
            dataSource(newQuery, function (options) {
              var optionsAvailable = options.length > 0;
              setMenuOpen(optionsAvailable);
              setOptions(options);
              setSelected(_autoselect && optionsAvailable ? 0 : -1);
              setValidChoiceMade(false);
              console.log("selectElement:", selectElement, "optionsAvailable:", optionsAvailable, "isFocus:", isFocus);
              setFocus(selectElement ? optionsAvailable ? 0 : -1 : -1);
            });
          } else if (!newQuery.length || !_queryLongEnough) {
            setMenuOpen(false);
            setOptions([]);
          }
        }
        break;
    }
  };

  var handleInputClick = function handleInputClick(event) {
    if ((selectElement || showAllValues) && isMenuOpen === false) {
      var newQuery = event.target.value;
      dataSource('', function (options) {
        var currentSelectionIndex = options.indexOf(newQuery);
        setMenuOpen(true);
        setOptions(options);
        setFocus(currentSelectionIndex);
        setSelected(currentSelectionIndex);
        setHover(null);
      });
    } else if (selectElement || showAllValues) {
      handleComponentBlur({
        menuOpen: false
      }, true);
    } else {
      handleInputChange(event);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof setProps === 'function') {
      var opt = getOptionFromValue(query, options) || getValueFromQuery(query, options);

      var _value = (opt === null || opt === void 0 ? void 0 : opt.value) || opt;

      if (_value) {
        setProps({
          value: _value
        });
      }
    }

    setAriaHint(!(query !== null && query !== void 0 && query.length));
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Set query and options when new value passed in
    setOptions(source);

    if (!value) {
      setQuery("");
    } else {
      setQuery(value);
    }
  }, [value]);
  var autoselectRend = hasAutoselect();
  var inputFocused = isFocus === -1;
  var noOptionsAvailable = (options === null || options === void 0 ? void 0 : options.length) === 0;
  var queryNotEmpty = (query === null || query === void 0 ? void 0 : query.length) !== 0;
  var queryLongEnough = (query === null || query === void 0 ? void 0 : query.length) >= minLength;
  var showNoOptionsFoundRender = showNoOptionsFound && inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough; // console.log("showNoOptionsFound:",showNoOptionsFound,
  // "inputFocused:",inputFocused,
  // "noOptionsAvailable:",noOptionsAvailable,
  // "queryNotEmpty:",queryNotEmpty,
  // "queryLongEnough:",queryLongEnough)

  var wrapperClassName = "".concat(cssNamespace, "__wrapper");
  var inputClassName = "".concat(cssNamespace, "__input");
  var componentIsFocused = isFocus !== null;
  var inputModifierFocused = componentIsFocused ? " ".concat(inputClassName, "--focused") : '';
  var inputModifierType = showAllValues ? " ".concat(inputClassName, "--show-all-values") : " ".concat(inputClassName, "--default");
  var dropdownArrowClassName = "".concat(cssNamespace, "__dropdown-arrow-down");
  var optionFocused = isFocus !== -1 && isFocus !== null;
  var menuClassName = "".concat(cssNamespace, "__menu");
  var menuModifierDisplayMenu = "".concat(menuClassName, "--").concat(displayMenu);
  var menuIsVisible = isMenuOpen || showNoOptionsFoundRender;
  var menuModifierVisibility = "".concat(menuClassName, "--").concat(menuIsVisible ? 'visible' : 'hidden');
  var optionClassName = "".concat(cssNamespace, "__option");
  var hintClassName = "".concat(cssNamespace, "__hint");
  var selectedOptionText = templateInputValue(options === null || options === void 0 ? void 0 : options[selected]);
  var optionBeginsWithQuery = selectedOptionText && selectedOptionText.toLowerCase().indexOf(query.toLowerCase()) === 0;
  var hintValue = optionBeginsWithQuery && autoselectRend ? query + selectedOptionText.substr(query === null || query === void 0 ? void 0 : query.length) : '';
  var assistiveHintID = id + '__assistiveHint';
  var ariaDescribedProp = ariaHint ? {
    'aria-describedby': assistiveHintID
  } : null;
  var dropdownArrow; // we only need a dropdown arrow if showAllValues is set to a truthy value

  if (showAllValues || alwaysDisplayArrow) {
    dropdownArrow = dropdownArrowFactory({
      className: dropdownArrowClassName
    }); // if the factory returns a string we'll render this as HTML (usage w/o (P)React)

    if (typeof dropdownArrow === 'string') {
      dropdownArrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(cssNamespace, "__dropdown-arrow-down-wrapper"),
        dangerouslySetInnerHTML: {
          __html: dropdownArrow
        }
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: wrapperClassName,
    onKeyDown: handleKeyDown,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_status__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    length: options === null || options === void 0 ? void 0 : options.length,
    queryLength: query === null || query === void 0 ? void 0 : query.length,
    minQueryLength: minLength,
    selectedOption: templateInputValue(options === null || options === void 0 ? void 0 : options[selected]),
    selectedOptionIndex: selected,
    validChoiceMade: validChoiceMade,
    isInFocus: isFocus !== null,
    tQueryTooShort: tStatusQueryTooShort,
    tNoResults: tStatusNoResults,
    tSelectedOption: tStatusSelectedOption,
    tResults: tStatusResults
  }), hintValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: hintClassName,
    readonly: true,
    tabIndex: "-1",
    value: hintValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    "aria-expanded": isMenuOpen ? 'true' : 'false'
  }, optionFocused ? {
    'aria-activedescendant': "".concat(id, "__option--").concat(isFocus)
  } : null, {
    "aria-owns": "".concat(id, "__listbox"),
    "aria-autocomplete": hasAutoselect() ? 'both' : 'list',
    "aria-labelledby": ariaLabelledBy
  }, ariaDescribedProp, {
    autoComplete: "off",
    className: "".concat(inputClassName).concat(inputModifierFocused).concat(inputModifierType),
    id: id,
    onClick: handleInputClick,
    onBlur: handleInputBlur,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    name: name,
    placeholder: placeholder,
    ref: function ref(inputElement) {
      elementReferences[-1] = inputElement;
    },
    type: "text",
    role: "combobox",
    required: required,
    value: (_getOptionLabelFromVa = getOptionLabelFromValue(query, options)) !== null && _getOptionLabelFromVa !== void 0 ? _getOptionLabelFromVa : query
  })), dropdownArrow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "".concat(menuClassName, " ").concat(menuModifierDisplayMenu, " ").concat(menuModifierVisibility),
    onMouseLeave: function onMouseLeave(event) {
      return handleListMouseLeave(event);
    },
    id: "".concat(id, "__listbox"),
    role: "listbox"
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    var showFocused = isFocus === -1 ? selected === index : isFocus === index;
    var optionModifierFocused = showFocused && isHover === null ? " ".concat(optionClassName, "--focused") : '';
    var optionModifierOdd = index % 2 ? " ".concat(optionClassName, "--odd") : '';
    var iosPosinsetHtml = Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])() ? "<span id=".concat(id, "__option-suffix--").concat(index, " style=\"border:0;clip:rect(0 0 0 0);height:1px;") + 'marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;' + 'whiteSpace:nowrap;width:1px">' + " ".concat(index + 1, " of ").concat(options === null || options === void 0 ? void 0 : options.length, "</span>") : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      "aria-selected": isFocus === index ? 'true' : 'false',
      className: "".concat(optionClassName).concat(optionModifierFocused).concat(optionModifierOdd),
      dangerouslySetInnerHTML: {
        __html: templateSuggestion(option) + iosPosinsetHtml
      },
      id: "".concat(id, "__option--").concat(index),
      key: index,
      onBlur: function onBlur(event) {
        return handleOptionBlur(event, index);
      },
      onClick: function onClick(event) {
        return handleOptionClick(event, index, false);
      },
      onMouseDown: handleOptionMouseDown,
      onMouseEnter: function onMouseEnter() {
        return handleOptionMouseEnter(index);
      },
      ref: function ref(optionEl) {
        elementReferences[index] = optionEl;
      },
      role: "option",
      tabIndex: "-1",
      "aria-posinset": index + 1,
      "aria-setsize": options.length
    });
  }), showNoOptionsFoundRender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(optionClassName, " ").concat(optionClassName, "--no-results")
  }, tNoResults())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: assistiveHintID,
    style: {
      display: 'none'
    }
  }, tAssistiveHint()));
};
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */


/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

AutoComplete.enhanceSelectElement = function (configurationOptions) {
  if (!configurationOptions.selectElement) {
    throw new Error('selectElement is not defined');
  } // Set defaults.


  if (!configurationOptions.source) {
    var availableOptions = [].filter.call(configurationOptions.selectElement.options, function (option) {
      return option.value || configurationOptions.preserveNullOptions;
    });
    configurationOptions.source = availableOptions.map(function (option) {
      return option.textContent || option.innerText;
    });
  }

  configurationOptions.onConfirm = configurationOptions.onConfirm || function (query) {
    var requestedOption = [].filter.call(configurationOptions.selectElement.options, function (option) {
      return (option.textContent || option.innerText) === query;
    })[0];

    if (requestedOption) {
      requestedOption.selected = true;
    } // trigger change event on original select element


    var event = new Event('change', {
      bubbles: true,
      cancelable: false
    });
    configurationOptions.selectElement.dispatchEvent(event);
  };

  if (configurationOptions.selectElement.value || configurationOptions.value === undefined) {
    var option = configurationOptions.selectElement.options[configurationOptions.selectElement.options.selectedIndex];
    configurationOptions.value = option.textContent || option.innerText;
  }

  if (configurationOptions.name === undefined) {
    configurationOptions.name = '';
  }

  if (configurationOptions.id === undefined) {
    if (configurationOptions.selectElement.id === undefined) {
      configurationOptions.id = '';
    } else {
      configurationOptions.id = configurationOptions.selectElement.id;
    }
  }

  if (configurationOptions.autoselect === undefined) {
    configurationOptions.autoselect = true;
  }

  var element = document.createElement('div');
  configurationOptions.selectElement.parentNode.insertBefore(element, configurationOptions.selectElement); // eslint-disable-next-line new-cap

  Object(react__WEBPACK_IMPORTED_MODULE_0__["render"])(AutoComplete(_objectSpread({}, configurationOptions)), element);
  configurationOptions.selectElement.style.display = 'none';
  configurationOptions.selectElement.id = configurationOptions.selectElement.id + '-select';
};

AutoComplete.defaultProps = _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__["defaultProps"];
AutoComplete.propTypes = _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__["propTypes"];

/***/ })

})
//# sourceMappingURL=0394c3c-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwMzk0YzNjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==