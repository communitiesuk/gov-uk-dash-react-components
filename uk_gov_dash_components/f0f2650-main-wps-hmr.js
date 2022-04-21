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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var AutoComplete = function AutoComplete() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__["defaultProps"],
      id = _ref.id,
      autoselect = _ref.autoselect,
      cssNamespace = _ref.cssNamespace,
      value = _ref.value,
      displayMenu = _ref.displayMenu,
      minLength = _ref.minLength,
      name = _ref.name,
      placeholder = _ref.placeholder,
      onConfirm = _ref.onConfirm,
      confirmOnBlur = _ref.confirmOnBlur,
      showNoOptionsFound = _ref.showNoOptionsFound,
      showAllValues = _ref.showAllValues,
      required = _ref.required,
      tNoResults = _ref.tNoResults,
      tAssistiveHint = _ref.tAssistiveHint,
      source = _ref.source,
      templates = _ref.templates,
      dropdownArrowFactory = _ref.dropdownArrow,
      tStatusQueryTooShort = _ref.tStatusQueryTooShort,
      tStatusNoResults = _ref.tStatusNoResults,
      tStatusSelectedOption = _ref.tStatusSelectedOption,
      tStatusResults = _ref.tStatusResults,
      setProps = _ref.setProps,
      ariaLabelledBy = _ref.ariaLabelledBy;

  if (!id) {
    throw new Error('id is not defined');
  }

  if (!source) {
    throw new Error('source is not defined');
  } // if (configurationOptions.preserveNullOptions === undefined) configurationOptions.preserveNullOptions = true
  // if (configurationOptions.autoselect === undefined) configurationOptions.autoselect = true
  // if (configurationOptions.showAllValues === undefined) configurationOptions.showAllValues = true
  // if (configurationOptions.confirmOnBlur === undefined) configurationOptions.confirmOnBlur = true
  // if (configurationOptions.alwaysDisplayArrow === undefined) configurationOptions.alwaysDisplayArrow = true


  var createSimpleEngine = function createSimpleEngine(values) {
    return function (query, syncResults) {
      var matches = values.filter(function (r) {
        return r.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      syncResults(matches);
    };
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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value ? [value] : []),
      _useState8 = _slicedToArray(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      _useState10 = _slicedToArray(_useState9, 2),
      query = _useState10[0],
      setQuery = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      validChoiceMade = _useState12[0],
      setValidChoiceMade = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState14 = _slicedToArray(_useState13, 2),
      selected = _useState14[0],
      setSelected = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState16 = _slicedToArray(_useState15, 2),
      ariaHint = _useState16[0],
      setAriaHint = _useState16[1];

  var elementReferences = {}; // This template is used when converting from a state.options object into a state.query.

  var templateInputValue = function templateInputValue(value) {
    var inputValueTemplate = templates === null || templates === void 0 ? void 0 : templates.inputValue;
    return inputValueTemplate ? inputValueTemplate(value) : value;
  }; // This template is used when displaying results / suggestions.


  var templateSuggestion = function templateSuggestion(value) {
    var suggestionTemplate = templates === null || templates === void 0 ? void 0 : templates.suggestion;
    return suggestionTemplate ? suggestionTemplate(value) : value;
  };

  var isQueryAnOption = function isQueryAnOption(query, options) {
    return options.map(function (entry) {
      return templateInputValue(entry).toLowerCase();
    }).indexOf(query.toLowerCase()) !== -1;
  };

  var handleComponentBlur = function handleComponentBlur(newState) {
    var newQuery;

    if (confirmOnBlur) {
      newQuery = newState.query || query;
      onConfirm(options[selected]);
    } else {
      newQuery = query;
    }

    setFocus(null);
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

  var handleInputBlur = function handleInputBlur() {
    var focusingAnOption = isFocus !== -1;

    if (!focusingAnOption) {
      var keepMenuOpen = isMenuOpen && Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])();
      var newQuery = Object(_helper_isIOS__WEBPACK_IMPORTED_MODULE_3__["isIOSDevice"])() ? query : templateInputValue(options[selected]);
      handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: newQuery
      });
    }
  };

  var handleInputFocus = function handleInputFocus() {
    var shouldReopenMenu = !validChoiceMade && query.length >= minLength && options.length > 0;
    setFocus(-1);

    if (shouldReopenMenu) {
      setMenuOpen(shouldReopenMenu || isMenuOpen);
      setSelected(-1);
    }
  };

  var handleOptionFocus = function handleOptionFocus(index) {
    setFocus(index);
    setHover(null);
    setSelected(index);
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

  var handleInputChange = function handleInputChange(event) {
    var autoselect = hasAutoselect();
    var newQuery = event.target.value;
    var queryChanged = query !== newQuery;
    var queryLongEnough = newQuery.length >= minLength;
    setQuery(newQuery);
    setAriaHint();
    var searchForOptions = showAllValues || newQuery.length && queryChanged && queryLongEnough;

    if (searchForOptions) {
      dataSource(newQuery, function (options) {
        var optionsAvailable = options.length > 0;
        setMenuOpen(optionsAvailable);
        setOptions(options);
        setSelected(autoselect && optionsAvailable ? 0 : -1);
        setValidChoiceMade(false);
      });
    } else if (!newQuery.length || !queryLongEnough) {
      setMenuOpen(false);
      setOptions([]);
    }
  };

  var handleOptionClick = function handleOptionClick(event, index) {
    var selectedOption = options[index];
    var newQuery = templateInputValue(selectedOption);
    onConfirm(selectedOption);
    setFocus(-1);
    setHover(null);
    setMenuOpen(false);
    setQuery(newQuery);
    setSelected(-1);
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
    event.preventDefault();
    var allowMoveUp = selected !== -1 && isMenuOpen;

    if (allowMoveUp) {
      handleOptionFocus(selected - 1);
    }
  };

  var handleDownArrow = function handleDownArrow(event) {
    event.preventDefault(); // if not open, open

    if (showAllValues && isMenuOpen === false) {
      event.preventDefault();
      dataSource('', function (options) {
        setMenuOpen(true);
        setOptions(options);
        setSelected(0);
        setFocus(0);
        setHover(null);
      });
    } else if (isMenuOpen) {
      var isNotAtBottom = selected !== options.length - 1;
      var allowMoveDown = isNotAtBottom && isMenuOpen;

      if (allowMoveDown) {
        handleOptionFocus(selected + 1);
      }
    }
  };

  var handleSpace = function handleSpace(event) {
    // if not open, open
    if (showAllValues && isMenuOpen === false && query === '') {
      event.preventDefault();
      dataSource('', function (options) {
        setMenuOpen(true);
        setOptions(options);
      });
    }

    var focusIsOnOption = isFocus !== -1;

    if (focusIsOnOption) {
      event.preventDefault();
      handleOptionClick(event, isFocus);
    }
  };

  var handleEnter = function handleEnter(event) {
    if (isMenuOpen) {
      event.preventDefault();
      var hasSelectedOption = selected >= 0;

      if (hasSelectedOption) {
        handleOptionClick(event, selected);
      }
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
        });
        break;

      default:
        if (Object(_helper_keys__WEBPACK_IMPORTED_MODULE_4__["isPrintableKeyCode"])(event.keyCode)) {
          handlePrintableKey(event);
        }

        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof setProps === 'function') {
      setProps({
        value: query
      });
    }

    setAriaHint(!(query !== null && query !== void 0 && query.length));
  }, [query]);
  Object(usehooks_ts__WEBPACK_IMPORTED_MODULE_1__["useInterval"])(function () {
    var inputReference = elementReferences[-1];
    var queryHasChanged = (inputReference === null || inputReference === void 0 ? void 0 : inputReference.value) !== query;

    if (queryHasChanged) {
      handleInputChange({
        target: {
          value: inputReference.value
        }
      });
    }
  }, 100);
  var autoselectRend = hasAutoselect();
  var inputFocused = isFocus === -1;
  var noOptionsAvailable = (options === null || options === void 0 ? void 0 : options.length) === 0;
  var queryNotEmpty = (query === null || query === void 0 ? void 0 : query.length) !== 0;
  var queryLongEnough = (query === null || query === void 0 ? void 0 : query.length) >= minLength;
  var showNoOptionsFoundRender = showNoOptionsFound && inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough;
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

  if (showAllValues) {
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
    onKeyDown: handleKeyDown
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
    onClick: function onClick(event) {
      return handleInputChange(event);
    },
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
    value: query
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
        return handleOptionClick(event, index);
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
//# sourceMappingURL=f0f2650-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmMGYyNjUwLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==