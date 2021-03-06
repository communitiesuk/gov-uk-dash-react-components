webpackHotUpdateuk_gov_dash_components("main",{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@formatjs/fast-memoize/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@formatjs/fast-memoize/lib/index.js ***!
  \**********************************************************/
/*! exports provided: default, strategies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strategies", function() { return strategies; });
//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/error.js ***!
  \**********************************************************************/
/*! exports provided: ErrorKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorKind", function() { return ErrorKind; });
var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/index.js ***!
  \**********************************************************************/
/*! exports provided: parse, TYPE, SKELETON_TYPE, isLiteralElement, isArgumentElement, isNumberElement, isDateElement, isTimeElement, isSelectElement, isPluralElement, isPoundElement, isTagElement, isNumberSkeleton, isDateTimeSkeleton, createLiteralElement, createNumberElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@formatjs/icu-messageformat-parser/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SKELETON_TYPE", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["SKELETON_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLiteralElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isLiteralElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArgumentElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isArgumentElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumberElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isNumberElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isDateElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimeElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isTimeElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isSelectElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPluralElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isPluralElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPoundElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isPoundElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTagElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isTagElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumberSkeleton", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isNumberSkeleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateTimeSkeleton", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["isDateTimeSkeleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLiteralElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["createLiteralElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNumberElement", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["createNumberElement"]; });





function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isSelectElement"])(el) || Object(_types__WEBPACK_IMPORTED_MODULE_3__["isPluralElement"])(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isNumberElement"])(el) && Object(_types__WEBPACK_IMPORTED_MODULE_3__["isNumberSkeleton"])(el.style)) {
            delete el.style.location;
        }
        else if ((Object(_types__WEBPACK_IMPORTED_MODULE_3__["isDateElement"])(el) || Object(_types__WEBPACK_IMPORTED_MODULE_3__["isTimeElement"])(el)) &&
            Object(_types__WEBPACK_IMPORTED_MODULE_3__["isDateTimeSkeleton"])(el.style)) {
            delete el.style.location;
        }
        else if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isTagElement"])(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"](message, opts).parse();
    if (result.err) {
        var error = SyntaxError(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"][result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}



/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js ***!
  \***********************************************************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@formatjs/icu-messageformat-parser/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regex.generated */ "./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js");
/* harmony import */ var _formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formatjs/icu-skeleton-parser */ "./node_modules/@formatjs/icu-skeleton-parser/lib/index.js");
var _a;





var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_3__["SPACE_SEPARATOR_REGEX"].source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(_regex_generated__WEBPACK_IMPORTED_MODULE_3__["SPACE_SEPARATOR_REGEX"].source, "*$"));
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var style = {
                            type: _types__WEBPACK_IMPORTED_MODULE_2__["SKELETON_TYPE"].dateTime,
                            pattern: skeleton,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? Object(_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__["parseDateTimeSkeleton"])(skeleton)
                                : {},
                        };
                        var type = argType === 'date' ? _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].date : _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].number
                            : argType === 'date'
                                ? _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].date
                                : _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: _types__WEBPACK_IMPORTED_MODULE_2__["TYPE"].plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = Object(_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__["parseNumberSkeletonFromString"])(skeleton);
        }
        catch (e) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: _types__WEBPACK_IMPORTED_MODULE_2__["SKELETON_TYPE"].number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? Object(_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_4__["parseNumberSkeleton"])(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR, _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_SELECT_ARGUMENT_SELECTOR
                : _error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_1__["ErrorKind"].MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) {
        }
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());

/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js ***!
  \********************************************************************************/
/*! exports provided: SPACE_SEPARATOR_REGEX, WHITE_SPACE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_SEPARATOR_REGEX", function() { return SPACE_SEPARATOR_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE_SPACE_REGEX", function() { return WHITE_SPACE_REGEX; });
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/types.js ***!
  \**********************************************************************/
/*! exports provided: TYPE, SKELETON_TYPE, isLiteralElement, isArgumentElement, isNumberElement, isDateElement, isTimeElement, isSelectElement, isPluralElement, isPoundElement, isTagElement, isNumberSkeleton, isDateTimeSkeleton, createLiteralElement, createNumberElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKELETON_TYPE", function() { return SKELETON_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLiteralElement", function() { return isLiteralElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArgumentElement", function() { return isArgumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberElement", function() { return isNumberElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateElement", function() { return isDateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeElement", function() { return isTimeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectElement", function() { return isSelectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPluralElement", function() { return isPluralElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoundElement", function() { return isPoundElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTagElement", function() { return isTagElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberSkeleton", function() { return isNumberSkeleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateTimeSkeleton", function() { return isDateTimeSkeleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLiteralElement", function() { return createLiteralElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumberElement", function() { return createNumberElement; });
var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value: value,
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value: value,
        style: style,
    };
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/node_modules/tslib/tslib.es6.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js ***!
  \*********************************************************************/
/*! exports provided: parseDateTimeSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDateTimeSkeleton", function() { return parseDateTimeSkeleton; });
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/index.js ***!
  \*****************************************************************/
/*! exports provided: parseDateTimeSkeleton, parseNumberSkeletonFromString, parseNumberSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time */ "./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDateTimeSkeleton", function() { return _date_time__WEBPACK_IMPORTED_MODULE_0__["parseDateTimeSkeleton"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/@formatjs/icu-skeleton-parser/lib/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeletonFromString", function() { return _number__WEBPACK_IMPORTED_MODULE_1__["parseNumberSkeletonFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeleton", function() { return _number__WEBPACK_IMPORTED_MODULE_1__["parseNumberSkeleton"]; });





/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/number.js":
/*!******************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/number.js ***!
  \******************************************************************/
/*! exports provided: parseNumberSkeletonFromString, parseNumberSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeletonFromString", function() { return parseNumberSkeletonFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNumberSkeleton", function() { return parseNumberSkeleton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@formatjs/icu-skeleton-parser/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex.generated */ "./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js");


function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(_regex_generated__WEBPACK_IMPORTED_MODULE_1__["WHITE_SPACE_REGEX"])
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    }
    else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { trailingZeroDisplay: 'stripIfInteger' });
            }
            else if (opt) {
                result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js ***!
  \***************************************************************************/
/*! exports provided: WHITE_SPACE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE_SPACE_REGEX", function() { return WHITE_SPACE_REGEX; });
// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;


/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/node_modules/tslib/tslib.es6.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/@internationalized/date/dist/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/@internationalized/date/dist/module.js ***!
  \*************************************************************/
/*! exports provided: CalendarDate, CalendarDateTime, Time, ZonedDateTime, GregorianCalendar, JapaneseCalendar, BuddhistCalendar, TaiwanCalendar, PersianCalendar, IndianCalendar, IslamicCivilCalendar, IslamicTabularCalendar, IslamicUmalquraCalendar, HebrewCalendar, EthiopicCalendar, EthiopicAmeteAlemCalendar, CopticCalendar, createCalendar, toCalendarDate, toCalendarDateTime, toTime, toCalendar, toZoned, toTimeZone, toLocalTimeZone, isSameDay, isSameMonth, isSameYear, isEqualDay, isEqualMonth, isEqualYear, isToday, getDayOfWeek, now, today, getHoursInDay, getLocalTimeZone, startOfMonth, startOfWeek, startOfYear, endOfMonth, endOfWeek, endOfYear, getMinimumMonthInYear, getMinimumDayInMonth, getWeeksInMonth, minDate, maxDate, isWeekend, isWeekday, parseDate, parseDateTime, parseTime, parseAbsolute, parseAbsoluteToLocal, parseZonedDateTime, DateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDate", function() { return $35ea8db9cb2ccb90$export$99faa760c7908e4f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDateTime", function() { return $35ea8db9cb2ccb90$export$ca871e8dbb80966f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return $35ea8db9cb2ccb90$export$680ea196effce5f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonedDateTime", function() { return $35ea8db9cb2ccb90$export$d3b7288e7994edea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GregorianCalendar", function() { return $3b62074eb05584b2$export$80ee6245ec4f29ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JapaneseCalendar", function() { return $62225008020f0a13$export$b746ab2b60cdffbf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddhistCalendar", function() { return $8d73d47422ca7302$export$42d20a78301dee44; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaiwanCalendar", function() { return $5f31bd6f0c8940b2$export$65e01080afcb0799; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianCalendar", function() { return $f3ed2e4472ae7e25$export$37fccdbfd14c5939; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndianCalendar", function() { return $82c358003bdda0a8$export$39f31c639fa15726; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IslamicCivilCalendar", function() { return $f2f3e0e3a817edbd$export$2066795aadd37bfc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IslamicTabularCalendar", function() { return $f2f3e0e3a817edbd$export$37f0887f2f9d22f7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IslamicUmalquraCalendar", function() { return $f2f3e0e3a817edbd$export$5baab4758c231076; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HebrewCalendar", function() { return $7c5f6fbf42389787$export$ca405048b8fb5af; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthiopicCalendar", function() { return $b956b2d7a6cf451f$export$26ba6eab5e20cd7d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthiopicAmeteAlemCalendar", function() { return $b956b2d7a6cf451f$export$d72e0c37005a4914; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopticCalendar", function() { return $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCalendar", function() { return $64244302c3013299$export$dd0bbc9b26defe37; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCalendarDate", function() { return $11d87f3f76e88657$export$93522d1a439f3617; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCalendarDateTime", function() { return $11d87f3f76e88657$export$b21e0b124e224484; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTime", function() { return $11d87f3f76e88657$export$d33f79e3ffc3dc83; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCalendar", function() { return $11d87f3f76e88657$export$b4a036af3fc0b032; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toZoned", function() { return $11d87f3f76e88657$export$84c95a83c799e074; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTimeZone", function() { return $11d87f3f76e88657$export$538b00033cc11c75; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocalTimeZone", function() { return $11d87f3f76e88657$export$d9b67bc93c097491; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return $14e0f24ef4ac5c92$export$ea39ec197993aef0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return $14e0f24ef4ac5c92$export$a18c89cbd24170ff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return $14e0f24ef4ac5c92$export$5841f9eb9773f25f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualDay", function() { return $14e0f24ef4ac5c92$export$91b62ebf2ba703ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualMonth", function() { return $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualYear", function() { return $14e0f24ef4ac5c92$export$ea840f5a6dda8147; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return $14e0f24ef4ac5c92$export$629b0a497aa65267; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayOfWeek", function() { return $14e0f24ef4ac5c92$export$2061056d06d7cdf7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return $14e0f24ef4ac5c92$export$461939dd4422153; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursInDay", function() { return $14e0f24ef4ac5c92$export$126c91c941de7e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalTimeZone", function() { return $14e0f24ef4ac5c92$export$aa8b41735afcabd2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfMonth", function() { return $14e0f24ef4ac5c92$export$a5a3b454ada2268e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfWeek", function() { return $14e0f24ef4ac5c92$export$42c81a444fbfb5d4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfYear", function() { return $14e0f24ef4ac5c92$export$f91e89d3d0406102; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOfMonth", function() { return $14e0f24ef4ac5c92$export$a2258d9c4118825c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOfWeek", function() { return $14e0f24ef4ac5c92$export$ef8b6d9133084f4e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOfYear", function() { return $14e0f24ef4ac5c92$export$8b7aa55c66d5569e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinimumMonthInYear", function() { return $14e0f24ef4ac5c92$export$5412ac11713b72ad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinimumDayInMonth", function() { return $14e0f24ef4ac5c92$export$b2f4953d301981d5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInMonth", function() { return $14e0f24ef4ac5c92$export$ccc1b2479e7dd654; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDate", function() { return $14e0f24ef4ac5c92$export$5c333a116e949cdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDate", function() { return $14e0f24ef4ac5c92$export$a75f2bff57811055; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeekend", function() { return $14e0f24ef4ac5c92$export$618d60ea299da42; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeekday", function() { return $14e0f24ef4ac5c92$export$ee9d87258e1d19ed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return $fae977aafc393c5c$export$6b862160d295c8e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDateTime", function() { return $fae977aafc393c5c$export$588937bcd60ade55; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTime", function() { return $fae977aafc393c5c$export$c9698ec7f05a07e1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAbsolute", function() { return $fae977aafc393c5c$export$5adfdab05168c219; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAbsoluteToLocal", function() { return $fae977aafc393c5c$export$8e384432362ed0f0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseZonedDateTime", function() { return $fae977aafc393c5c$export$fd7893f06e92a6a4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return $fb18d541ea1ad717$export$ad991b66133851cf; });


const $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
    '001': 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AT: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1
};


function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a, b) {
    b = $11d87f3f76e88657$export$b4a036af3fc0b032(b, a.calendar);
    return a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a, b) {
    b = $11d87f3f76e88657$export$b4a036af3fc0b032(b, a.calendar);
    // In the Japanese calendar, months can span multiple eras/years, so only compare the first of the month.
    a = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a);
    b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
    return a.era === b.era && a.year === b.year && a.month === b.month;
}
function $14e0f24ef4ac5c92$export$5841f9eb9773f25f(a, b) {
    b = $11d87f3f76e88657$export$b4a036af3fc0b032(b, a.calendar);
    a = $14e0f24ef4ac5c92$export$f91e89d3d0406102(a);
    b = $14e0f24ef4ac5c92$export$f91e89d3d0406102(b);
    return a.era === b.era && a.year === b.year;
}
function $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(a, b) {
    return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(a, b) {
    a = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a);
    b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
    return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year && a.month === b.month;
}
function $14e0f24ef4ac5c92$export$ea840f5a6dda8147(a, b) {
    a = $14e0f24ef4ac5c92$export$f91e89d3d0406102(a);
    b = $14e0f24ef4ac5c92$export$f91e89d3d0406102(b);
    return a.calendar.identifier === b.calendar.identifier && a.era === b.era && a.year === b.year;
}
function $14e0f24ef4ac5c92$export$629b0a497aa65267(date, timeZone) {
    return $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone));
}
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale) {
    let julian = date.calendar.toJulianDay(date);
    // If julian is negative, then julian % 7 will be negative, so we adjust
    // accordingly.  Julian day 0 is Monday.
    let dayOfWeek = Math.ceil(julian + 1 - $14e0f24ef4ac5c92$var$getWeekStart(locale)) % 7;
    if (dayOfWeek < 0) dayOfWeek += 7;
    return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
    return $11d87f3f76e88657$export$1b96692a1ba042ac(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
    return $11d87f3f76e88657$export$93522d1a439f3617($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a, b) {
    return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a, b) {
    return $14e0f24ef4ac5c92$var$timeToMs(a) - $14e0f24ef4ac5c92$var$timeToMs(b);
}
function $14e0f24ef4ac5c92$var$timeToMs(a) {
    return a.hour * 3600000 + a.minute * 60000 + a.second * 1000 + a.millisecond;
}
function $14e0f24ef4ac5c92$export$126c91c941de7e(a, timeZone) {
    let ms = $11d87f3f76e88657$export$5107c82f94518f5c(a, timeZone);
    let tomorrow = a.add({
        days: 1
    });
    let tomorrowMs = $11d87f3f76e88657$export$5107c82f94518f5c(tomorrow, timeZone);
    return (tomorrowMs - ms) / 3600000;
}
let $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
    // TODO: invalidate this somehow?
    if ($14e0f24ef4ac5c92$var$localTimeZone == null) $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
    // Use `subtract` instead of `set` so we don't get constrained in an era.
    return date.subtract({
        days: date.day - 1
    });
}
function $14e0f24ef4ac5c92$export$a2258d9c4118825c(date) {
    return date.add({
        days: date.calendar.getDaysInMonth(date) - date.day
    });
}
function $14e0f24ef4ac5c92$export$f91e89d3d0406102(date) {
    return $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date.subtract({
        months: date.month - 1
    }));
}
function $14e0f24ef4ac5c92$export$8b7aa55c66d5569e(date) {
    return $14e0f24ef4ac5c92$export$a2258d9c4118825c(date.add({
        months: date.calendar.getMonthsInYear(date) - date.month
    }));
}
function $14e0f24ef4ac5c92$export$5412ac11713b72ad(date) {
    if (date.calendar.getMinimumMonthInYear) return date.calendar.getMinimumMonthInYear(date);
    return 1;
}
function $14e0f24ef4ac5c92$export$b2f4953d301981d5(date) {
    if (date.calendar.getMinimumDayInMonth) return date.calendar.getMinimumDayInMonth(date);
    return 1;
}
function $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale) {
    let dayOfWeek = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale);
    return date.subtract({
        days: dayOfWeek
    });
}
function $14e0f24ef4ac5c92$export$ef8b6d9133084f4e(date, locale) {
    return $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale).add({
        days: 6
    });
}
const $14e0f24ef4ac5c92$var$cachedRegions = new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
    // If the Intl.Locale API is available, use it to get the region for the locale.
    // @ts-ignore
    if (Intl.Locale) {
        // Constructing an Intl.Locale is expensive, so cache the result.
        let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
        if (!region) {
            // @ts-ignore
            region = new Intl.Locale(locale).maximize().region;
            $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
        }
        return region;
    }
    // If not, just try splitting the string.
    // If the second part of the locale string is 'u',
    // then this is a unicode extension, so ignore it.
    // Otherwise, it should be the region.
    let part = locale.split('-')[1];
    return part === 'u' ? null : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
    // TODO: use Intl.Locale for this once browsers support the weekInfo property
    // https://github.com/tc39/proposal-intl-locale-info
    let region = $14e0f24ef4ac5c92$var$getRegion(locale);
    return $2fe286d2fb449abb$export$7a5acbd77d414bd9[region] || 0;
}
function $14e0f24ef4ac5c92$export$ccc1b2479e7dd654(date, locale) {
    let days = date.calendar.getDaysInMonth(date);
    return Math.ceil(($14e0f24ef4ac5c92$export$2061056d06d7cdf7($14e0f24ef4ac5c92$export$a5a3b454ada2268e(date), locale) + days) / 7);
}
function $14e0f24ef4ac5c92$export$5c333a116e949cdd(a, b) {
    if (a && b) return a.compare(b) <= 0 ? a : b;
    return a || b;
}
function $14e0f24ef4ac5c92$export$a75f2bff57811055(a, b) {
    if (a && b) return a.compare(b) >= 0 ? a : b;
    return a || b;
}
const $14e0f24ef4ac5c92$var$WEEKEND_DATA = {
    AF: [
        4,
        5
    ],
    AE: [
        5,
        6
    ],
    BH: [
        5,
        6
    ],
    DZ: [
        5,
        6
    ],
    EG: [
        5,
        6
    ],
    IL: [
        5,
        6
    ],
    IQ: [
        5,
        6
    ],
    IR: [
        5,
        5
    ],
    JO: [
        5,
        6
    ],
    KW: [
        5,
        6
    ],
    LY: [
        5,
        6
    ],
    OM: [
        5,
        6
    ],
    QA: [
        5,
        6
    ],
    SA: [
        5,
        6
    ],
    SD: [
        5,
        6
    ],
    SY: [
        5,
        6
    ],
    YE: [
        5,
        6
    ]
};
function $14e0f24ef4ac5c92$export$618d60ea299da42(date, locale) {
    let julian = date.calendar.toJulianDay(date);
    // If julian is negative, then julian % 7 will be negative, so we adjust
    // accordingly.  Julian day 0 is Monday.
    let dayOfWeek = Math.ceil(julian + 1) % 7;
    if (dayOfWeek < 0) dayOfWeek += 7;
    let region = $14e0f24ef4ac5c92$var$getRegion(locale);
    // Use Intl.Locale for this once weekInfo is supported.
    // https://github.com/tc39/proposal-intl-locale-info
    let [start, end] = $14e0f24ef4ac5c92$var$WEEKEND_DATA[region] || [
        6,
        0
    ];
    return dayOfWeek === start || dayOfWeek === end;
}
function $14e0f24ef4ac5c92$export$ee9d87258e1d19ed(date, locale) {
    return !$14e0f24ef4ac5c92$export$618d60ea299da42(date, locale);
}




function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
    return amount - numerator * Math.floor(amount / numerator);
}
function $2b4dce13dd5a17fa$export$784d13d8ee351f07(date) {
    if (date.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(date.calendar, date.era, date.year, date.month, date.day);
    else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(date.calendar, date.year, date.month, date.day);
}
function $2b4dce13dd5a17fa$export$27fa0172ae2644b3(date) {
    if (date.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(date.calendar, date.era, date.year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
    else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(date.calendar, date.year, date.month, date.day, date.hour, date.minute, date.second);
}


const $3b62074eb05584b2$var$EPOCH = 1721426; // 001/01/03 Julian C.E.
function $3b62074eb05584b2$export$f297eb839006d339(year, month, day) {
    let y1 = year - 1;
    let monthOffset = -2;
    if (month <= 2) monthOffset = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) monthOffset = -1;
    return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
const $3b62074eb05584b2$var$daysInMonth = {
    standard: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    leapyear: [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
};
class $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let jd0 = jd;
        let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = $2b4dce13dd5a17fa$export$842a2cf37af977e1(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = $2b4dce13dd5a17fa$export$842a2cf37af977e1(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = $2b4dce13dd5a17fa$export$842a2cf37af977e1(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let year = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
        let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(year, 1, 1);
        let leapAdj = 2;
        if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(year, 3, 1)) leapAdj = 0;
        else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) leapAdj = 1;
        let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
        let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(year, month, 1) + 1;
        return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year, month, day);
    }
    toJulianDay(date) {
        return $3b62074eb05584b2$export$f297eb839006d339(date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 'leapyear' : 'standard'][date.month - 1];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMonthsInYear(date) {
        return 12;
    }
    getDaysInYear(date) {
        return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearsInEra(date) {
        return 9999;
    }
    getEras() {
        return [
            'BC',
            'AD'
        ];
    }
    getYearsToAdd(date, years) {
        return date.era === 'BC' ? -years : years;
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BC' ? 'AD' : 'BC';
            date.year = 1 - date.year;
        }
    }
    constructor(){
        this.identifier = 'gregory';
    }
}


function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
    date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
    return $11d87f3f76e88657$var$epochFromParts(date.year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    let date = new Date();
    date.setUTCHours(hour, minute, second, millisecond);
    date.setUTCFullYear(year, month - 1, day);
    return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone) {
    // Fast path: for local timezone, use native Date.
    if (timeZone === $14e0f24ef4ac5c92$export$aa8b41735afcabd2()) return new Date(ms).getTimezoneOffset() * -60000;
    let { year: year , month: month , day: day , hour: hour , minute: minute , second: second  } = $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone);
    let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
    return utc - Math.floor(ms / 1000) * 1000;
}
const $11d87f3f76e88657$var$formattersByTimeZone = new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone) {
    let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            hour12: false,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
    }
    let parts = formatter.formatToParts(new Date(ms));
    let namedParts = {
    };
    for (let part of parts)if (part.type !== 'literal') namedParts[part.type] = part.value;
    return {
        year: namedParts.era === 'BC' ? -namedParts.year + 1 : +namedParts.year,
        month: +namedParts.month,
        day: +namedParts.day,
        hour: namedParts.hour === '24' ? 0 : +namedParts.hour,
        minute: +namedParts.minute,
        second: +namedParts.second
    };
}
const $11d87f3f76e88657$var$DAYMILLIS = 86400000;
function $11d87f3f76e88657$export$136f38efe7caf549(date, timeZone) {
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date);
    let earlier = ms - $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    let later = ms - $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    return $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later);
}
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
    let found = earlier === later ? [
        earlier
    ] : [
        earlier,
        later
    ];
    return found.filter((absolute)=>$11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute)
    );
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
    let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
    return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = 'compatible') {
    let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
    // Fast path: if the time zone is the local timezone and disambiguation is compatible, use native Date.
    if (timeZone === $14e0f24ef4ac5c92$export$aa8b41735afcabd2() && disambiguation === 'compatible') {
        dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
        // Don't use Date constructor here because two-digit years are interpreted in the 20th century.
        let date = new Date();
        date.setFullYear(dateTime.year, dateTime.month - 1, dateTime.day);
        date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
        return date.getTime();
    }
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
    let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
    if (valid.length === 1) return valid[0];
    if (valid.length > 1) switch(disambiguation){
        // 'compatible' means 'earlier' for "fall back" transitions
        case 'compatible':
        case 'earlier':
            return valid[0];
        case 'later':
            return valid[valid.length - 1];
        case 'reject':
            throw new RangeError('Multiple possible absolute times found');
    }
    switch(disambiguation){
        case 'earlier':
            return Math.min(ms - offsetBefore, ms - offsetAfter);
        // 'compatible' means 'later' for "spring forward" transitions
        case 'compatible':
        case 'later':
            return Math.max(ms - offsetBefore, ms - offsetAfter);
        case 'reject':
            throw new RangeError('No such absolute time found');
    }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = 'compatible') {
    return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone) {
    let offset = $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone);
    let date = new Date(ms + offset);
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let hour = date.getUTCHours();
    let minute = date.getUTCMinutes();
    let second = date.getUTCSeconds();
    let millisecond = date.getUTCMilliseconds();
    return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$e57ff100d91bd4b9(date, timeZone) {
    return $11d87f3f76e88657$export$1b96692a1ba042ac(date.getTime(), timeZone);
}
function $11d87f3f76e88657$export$d7f92bcd3596b086(date) {
    return $11d87f3f76e88657$export$e57ff100d91bd4b9(date, $14e0f24ef4ac5c92$export$aa8b41735afcabd2());
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$6f4d78149f3f53ac(date) {
    return {
        era: date.era,
        year: date.year,
        month: date.month,
        day: date.day
    };
}
function $11d87f3f76e88657$export$4d0393e732857be5(date) {
    return {
        hour: date.hour,
        minute: date.minute,
        second: date.second,
        millisecond: date.millisecond
    };
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
    let hour = 0, minute = 0, second = 0, millisecond = 0;
    if ('timeZone' in date) ({ hour: hour , minute: minute , second: second , millisecond: millisecond  } = date);
    else if ('hour' in date && !time) return date;
    if (time) ({ hour: hour , minute: minute , second: second , millisecond: millisecond  } = time);
    return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$d33f79e3ffc3dc83(dateTime) {
    return new $35ea8db9cb2ccb90$export$680ea196effce5f(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
    if (date.calendar.identifier === calendar.identifier) return date;
    let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
    let copy = date.copy();
    copy.calendar = calendar;
    copy.era = calendarDate.era;
    copy.year = calendarDate.year;
    copy.month = calendarDate.month;
    copy.day = calendarDate.day;
    return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
    if (date instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea) {
        if (date.timeZone === timeZone) return date;
        return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
    }
    let ms = $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation);
    return $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
    return new Date(ms);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
    return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone), date.calendar);
}
function $11d87f3f76e88657$export$d9b67bc93c097491(date) {
    return $11d87f3f76e88657$export$538b00033cc11c75(date, $14e0f24ef4ac5c92$export$aa8b41735afcabd2());
}



const $735220c2d4774dd3$var$ONE_HOUR = 3600000;
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
    let mutableDate = date.copy();
    let days = 'hour' in date ? $735220c2d4774dd3$var$addTimeFields(date, duration) : 0;
    $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
    if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
    mutableDate.month += duration.months || 0;
    $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
    $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
    mutableDate.day += (duration.weeks || 0) * 7;
    mutableDate.day += duration.days || 0;
    mutableDate.day += days;
    $735220c2d4774dd3$var$balanceDay(mutableDate);
    if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
    return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
    if (date.calendar.getYearsToAdd) years = date.calendar.getYearsToAdd(date, years);
    date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
    while(date.month < 1){
        $735220c2d4774dd3$var$addYears(date, -1);
        date.month += date.calendar.getMonthsInYear(date);
    }
    let monthsInYear = 0;
    while(date.month > (monthsInYear = date.calendar.getMonthsInYear(date))){
        date.month -= monthsInYear;
        $735220c2d4774dd3$var$addYears(date, 1);
    }
}
function $735220c2d4774dd3$var$balanceDay(date) {
    while(date.day < 1){
        date.month--;
        $735220c2d4774dd3$var$balanceYearMonth(date);
        date.day += date.calendar.getDaysInMonth(date);
    }
    while(date.day > date.calendar.getDaysInMonth(date)){
        date.day -= date.calendar.getDaysInMonth(date);
        date.month++;
        $735220c2d4774dd3$var$balanceYearMonth(date);
    }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
    date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
    date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
    if (date.calendar.constrainDate) date.calendar.constrainDate(date);
    date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
    $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
    let inverseDuration = {
    };
    for(let key in duration)if (typeof duration[key] === 'number') inverseDuration[key] = -duration[key];
    return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
    return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
    let mutableDate = date.copy();
    if (fields.era != null) mutableDate.era = fields.era;
    if (fields.year != null) mutableDate.year = fields.year;
    if (fields.month != null) mutableDate.month = fields.month;
    if (fields.day != null) mutableDate.day = fields.day;
    $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
    return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
    let mutableValue = value.copy();
    if (fields.hour != null) mutableValue.hour = fields.hour;
    if (fields.minute != null) mutableValue.minute = fields.minute;
    if (fields.second != null) mutableValue.second = fields.second;
    if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
    $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
    return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
    time.second += Math.floor(time.millisecond / 1000);
    time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1000);
    time.minute += Math.floor(time.second / 60);
    time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
    time.hour += Math.floor(time.minute / 60);
    time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
    let days = Math.floor(time.hour / 24);
    time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
    return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
    time.millisecond = Math.max(0, Math.min(time.millisecond, 1000));
    time.second = Math.max(0, Math.min(time.second, 59));
    time.minute = Math.max(0, Math.min(time.minute, 59));
    time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a, b) {
    let result = a % b;
    if (result < 0) result += b;
    return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
    time.hour += duration.hours || 0;
    time.minute += duration.minutes || 0;
    time.second += duration.seconds || 0;
    time.millisecond += duration.milliseconds || 0;
    return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$7ed87b6bc2506470(time, duration) {
    let res = time.copy();
    $735220c2d4774dd3$var$addTimeFields(res, duration);
    return res;
}
function $735220c2d4774dd3$export$fe34d3a381cd7501(time, duration) {
    return $735220c2d4774dd3$export$7ed87b6bc2506470(time, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'era':
            {
                let eras = value.calendar.getEras();
                let eraIndex = eras.indexOf(value.era);
                if (eraIndex < 0) throw new Error('Invalid era: ' + value.era);
                eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
                mutable.era = eras[eraIndex];
                // Constrain the year and other fields within the era, so the era doesn't change when we balance below.
                $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
                break;
            }
        case 'year':
            if (mutable.calendar.getYearsToAdd) amount = mutable.calendar.getYearsToAdd(mutable, amount);
            // The year field should not cycle within the era as that can cause weird behavior affecting other fields.
            // We need to also allow values < 1 so that decrementing goes to the previous era. If we get -Infinity back
            // we know we wrapped around after reaching 9999 (the maximum), so set the year back to 1.
            mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
            if (mutable.year === -Infinity) mutable.year = 1;
            if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
            break;
        case 'month':
            mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'day':
            mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
    $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
    return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'hour':
            {
                let hours = value.hour;
                let min = 0;
                let max = 23;
                if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
                    let isPM = hours >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
                break;
            }
        case 'minute':
            mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'second':
            mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'millisecond':
            mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min, max, round = false) {
    if (round) {
        value += Math.sign(amount);
        if (value < min) value = max;
        let div = Math.abs(amount);
        if (amount > 0) value = Math.ceil(value / div) * div;
        else value = Math.floor(value / div) * div;
        if (value > max) value = min;
    } else {
        value += amount;
        if (value < min) value = max - (min - value - 1);
        else if (value > max) value = min + (value - max - 1);
    }
    return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
    let ms;
    if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.days != null && duration.days !== 0) {
        let res = $735220c2d4774dd3$export$e16d8520af44a096($11d87f3f76e88657$export$b21e0b124e224484(dateTime), {
            years: duration.years,
            months: duration.months,
            days: duration.days
        });
        // Changing the date may change the timezone offset, so we need to recompute
        // using the 'compatible' disambiguation.
        ms = $11d87f3f76e88657$export$5107c82f94518f5c(res, dateTime.timeZone);
    } else // Otherwise, preserve the offset of the original date.
    ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
    // Perform time manipulation in milliseconds rather than on the original time fields to account for DST.
    // For example, adding one hour during a DST transition may result in the hour field staying the same or
    // skipping an hour. This results in the offset field changing value instead of the specified field.
    ms += duration.milliseconds || 0;
    ms += (duration.seconds || 0) * 1000;
    ms += (duration.minutes || 0) * 60000;
    ms += (duration.hours || 0) * 3600000;
    let res = $11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone);
    return $11d87f3f76e88657$export$b4a036af3fc0b032(res, dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
    return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
    // For date fields, we want the time to remain consistent and the UTC offset to potentially change to account for DST changes.
    // For time fields, we want the time to change by the amount given. This may result in the hour field staying the same, but the UTC
    // offset changing in the case of a backward DST transition, or skipping an hour in the case of a forward DST transition.
    switch(field){
        case 'hour':
            {
                let min = 0;
                let max = 23;
                if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
                    let isPM = dateTime.hour >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                // The minimum and maximum hour may be affected by daylight saving time.
                // For example, it might jump forward at midnight, and skip 1am.
                // Or it might end at midnight and repeat the 11pm hour. To handle this, we get
                // the possible absolute times for the min and max, and find the maximum range
                // that is within the current day.
                let plainDateTime = $11d87f3f76e88657$export$b21e0b124e224484(dateTime);
                let minDate = $11d87f3f76e88657$export$b4a036af3fc0b032($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
                    hour: min
                }), new $3b62074eb05584b2$export$80ee6245ec4f29ec());
                let minAbsolute = [
                    $11d87f3f76e88657$export$5107c82f94518f5c(minDate, dateTime.timeZone, 'earlier'),
                    $11d87f3f76e88657$export$5107c82f94518f5c(minDate, dateTime.timeZone, 'later')
                ].filter((ms)=>$11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone).day === minDate.day
                )[0];
                let maxDate = $11d87f3f76e88657$export$b4a036af3fc0b032($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
                    hour: max
                }), new $3b62074eb05584b2$export$80ee6245ec4f29ec());
                let maxAbsolute = [
                    $11d87f3f76e88657$export$5107c82f94518f5c(maxDate, dateTime.timeZone, 'earlier'),
                    $11d87f3f76e88657$export$5107c82f94518f5c(maxDate, dateTime.timeZone, 'later')
                ].filter((ms)=>$11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone).day === maxDate.day
                ).pop();
                // Since hours may repeat, we need to operate on the absolute time in milliseconds.
                // This is done in hours from the Unix epoch so that cycleValue works correctly,
                // and then converted back to milliseconds.
                let ms1 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
                let hours = Math.floor(ms1 / $735220c2d4774dd3$var$ONE_HOUR);
                let remainder = ms1 % $735220c2d4774dd3$var$ONE_HOUR;
                ms1 = $735220c2d4774dd3$var$cycleValue(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
                // Now compute the new timezone offset, and convert the absolute time back to local time.
                return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms1, dateTime.timeZone), dateTime.calendar);
            }
        case 'minute':
        case 'second':
        case 'millisecond':
            // @ts-ignore
            return $735220c2d4774dd3$export$dd02b3e0007dfe28(dateTime, field, amount, options);
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            {
                let res = $735220c2d4774dd3$export$d52ced6badfb9a4c($11d87f3f76e88657$export$b21e0b124e224484(dateTime), field, amount, options);
                let ms = $11d87f3f76e88657$export$5107c82f94518f5c(res, dateTime.timeZone);
                return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
            }
        default:
            throw new Error('Unsupported field ' + field);
    }
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
    // Set the date/time fields, and recompute the UTC offset to account for DST changes.
    // We also need to validate by converting back to a local time in case hours are skipped during forward DST transitions.
    let plainDateTime = $11d87f3f76e88657$export$b21e0b124e224484(dateTime);
    let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56($735220c2d4774dd3$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
    // If the resulting plain date time values are equal, return the original time.
    // We don't want to change the offset when setting the time to the same value.
    if (res.compare(plainDateTime) === 0) return dateTime;
    let ms = $11d87f3f76e88657$export$5107c82f94518f5c(res, dateTime.timeZone, disambiguation);
    return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
}







const $fae977aafc393c5c$var$TIME_RE = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
const $fae977aafc393c5c$var$DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const $fae977aafc393c5c$var$DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
const $fae977aafc393c5c$var$ZONED_DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::(\d{2}))?)?\[(.*?)\]$/;
const $fae977aafc393c5c$var$ABSOLUTE_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::(\d{2}))?)|Z)$/;
function $fae977aafc393c5c$export$c9698ec7f05a07e1(value) {
    let m = value.match($fae977aafc393c5c$var$TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 time string: ' + value);
    return new $35ea8db9cb2ccb90$export$680ea196effce5f($fae977aafc393c5c$var$parseNumber(m[1], 0, 23), m[2] ? $fae977aafc393c5c$var$parseNumber(m[2], 0, 59) : 0, m[3] ? $fae977aafc393c5c$var$parseNumber(m[3], 0, 59) : 0, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, Infinity) * 1000 : 0);
}
function $fae977aafc393c5c$export$6b862160d295c8e(value) {
    let m = value.match($fae977aafc393c5c$var$DATE_RE);
    if (!m) throw new Error('Invalid ISO 8601 date string: ' + value);
    let date = new $35ea8db9cb2ccb90$export$99faa760c7908e4f($fae977aafc393c5c$var$parseNumber(m[1], 0, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1);
    date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    return date;
}
function $fae977aafc393c5c$export$588937bcd60ade55(value) {
    let m = value.match($fae977aafc393c5c$var$DATE_TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let date = new $35ea8db9cb2ccb90$export$ca871e8dbb80966f($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    return date;
}
function $fae977aafc393c5c$export$fd7893f06e92a6a4(value, disambiguation) {
    let m = value.match($fae977aafc393c5c$var$ZONED_DATE_TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let date = new $35ea8db9cb2ccb90$export$d3b7288e7994edea($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, m[10], 0, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    let plainDateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
    let ms;
    if (m[8]) {
        var ref;
        date.offset = $fae977aafc393c5c$var$parseNumber(m[8], -23, 23) * 3600000 + $fae977aafc393c5c$var$parseNumber((ref = m[9]) !== null && ref !== void 0 ? ref : '0', 0, 59) * 60000;
        ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
        // Validate offset against parsed date.
        let absolutes = $11d87f3f76e88657$export$136f38efe7caf549(plainDateTime, date.timeZone);
        if (!absolutes.includes(ms)) throw new Error(`Offset ${$fae977aafc393c5c$var$offsetToString(date.offset)} is invalid for ${$fae977aafc393c5c$export$4223de14708adc63(date)} in ${date.timeZone}`);
    } else // Convert to absolute and back to fix invalid times due to DST.
    ms = $11d87f3f76e88657$export$5107c82f94518f5c($11d87f3f76e88657$export$b21e0b124e224484(plainDateTime), date.timeZone, disambiguation);
    return $11d87f3f76e88657$export$1b96692a1ba042ac(ms, date.timeZone);
}
function $fae977aafc393c5c$export$5adfdab05168c219(value, timeZone) {
    let m = value.match($fae977aafc393c5c$var$ABSOLUTE_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let date = new $35ea8db9cb2ccb90$export$d3b7288e7994edea($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, timeZone, 0, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    var ref;
    if (m[8]) date.offset = $fae977aafc393c5c$var$parseNumber(m[8], -23, 23) * 3600000 + $fae977aafc393c5c$var$parseNumber((ref = m[9]) !== null && ref !== void 0 ? ref : '0', 0, 59) * 60000;
    return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
}
function $fae977aafc393c5c$export$8e384432362ed0f0(value) {
    return $fae977aafc393c5c$export$5adfdab05168c219(value, $14e0f24ef4ac5c92$export$aa8b41735afcabd2());
}
function $fae977aafc393c5c$var$parseNumber(value, min, max) {
    let val = Number(value);
    if (val < min || val > max) throw new RangeError(`Value out of range: ${min} <= ${val} <= ${max}`);
    return val;
}
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}:${String(time.second).padStart(2, '0')}${time.millisecond ? String(time.millisecond / 1000).slice(1) : ''}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
    let gregorianDate = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
    return `${String(gregorianDate.year).padStart(4, '0')}-${String(gregorianDate.month).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
    // @ts-ignore
    return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset) {
    let sign = Math.sign(offset) < 0 ? '-' : '+';
    offset = Math.abs(offset);
    let offsetHours = Math.floor(offset / 3600000);
    let offsetMinutes = offset % 3600000 / 60000;
    return `${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
    return `${$fae977aafc393c5c$export$4223de14708adc63(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}




function $35ea8db9cb2ccb90$var$shiftArgs(args) {
    let calendar = typeof args[0] === 'object' ? args.shift() : new $3b62074eb05584b2$export$80ee6245ec4f29ec();
    let era;
    if (typeof args[0] === 'string') era = args.shift();
    else {
        let eras = calendar.getEras();
        era = eras[eras.length - 1];
    }
    let year = args.shift();
    let month = args.shift();
    let day = args.shift();
    return [
        calendar,
        era,
        year,
        month,
        day
    ];
}
class $35ea8db9cb2ccb90$export$99faa760c7908e4f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
        else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
    }
    /** Returns a new `CalendarDate` with the given duration added to it. */ add(duration) {
        return $735220c2d4774dd3$export$e16d8520af44a096(this, duration);
    }
    /** Returns a new `CalendarDate` with the given duration subtracted from it. */ subtract(duration) {
        return $735220c2d4774dd3$export$4e2d2ead65e5f7e3(this, duration);
    }
    /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return $735220c2d4774dd3$export$adaa4cf7ef1b65be(this, fields);
    }
    /**
   * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return $735220c2d4774dd3$export$d52ced6badfb9a4c(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */ toDate(timeZone) {
        return $11d87f3f76e88657$export$e67a095c620b86fe(this, timeZone);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return $fae977aafc393c5c$export$60dfd74aa96791bd(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        return $14e0f24ef4ac5c92$export$68781ddf31c0090f(this, b);
    }
    constructor(...args){
        // This prevents TypeScript from allowing other types with the same fields to match.
        // i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
        // If that behavior is desired, use the AnyCalendarDate interface instead.
        _type.set(this, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        $735220c2d4774dd3$export$c4e2ecac49351ef2(this);
    }
}
var _type = new WeakMap();
class $35ea8db9cb2ccb90$export$680ea196effce5f {
    /** Returns a copy of this time. */ copy() {
        return new $35ea8db9cb2ccb90$export$680ea196effce5f(this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `Time` with the given duration added to it. */ add(duration) {
        return $735220c2d4774dd3$export$7ed87b6bc2506470(this, duration);
    }
    /** Returns a new `Time` with the given duration subtracted from it. */ subtract(duration) {
        return $735220c2d4774dd3$export$fe34d3a381cd7501(this, duration);
    }
    /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return $735220c2d4774dd3$export$e5d5e1c1822b6e56(this, fields);
    }
    /**
   * Returns a new `Time` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return $735220c2d4774dd3$export$dd02b3e0007dfe28(this, field, amount, options);
    }
    /** Converts the time to an ISO 8601 formatted string. */ toString() {
        return $fae977aafc393c5c$export$f59dee82248f5ad4(this);
    }
    /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */ compare(b) {
        return $14e0f24ef4ac5c92$export$c19a80a9721b80f6(this, b);
    }
    constructor(hour = 0, minute = 0, second = 0, millisecond = 0){
        // This prevents TypeScript from allowing other types with the same fields to match.
        _type1.set(this, {
            writable: true,
            value: void 0
        });
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        $735220c2d4774dd3$export$7555de1e070510cb(this);
    }
}
var _type1 = new WeakMap();
class $35ea8db9cb2ccb90$export$ca871e8dbb80966f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
        else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `CalendarDateTime` with the given duration added to it. */ add(duration) {
        return $735220c2d4774dd3$export$e16d8520af44a096(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return $735220c2d4774dd3$export$4e2d2ead65e5f7e3(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return $735220c2d4774dd3$export$adaa4cf7ef1b65be($735220c2d4774dd3$export$e5d5e1c1822b6e56(this, fields), fields);
    }
    /**
   * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        switch(field){
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return $735220c2d4774dd3$export$d52ced6badfb9a4c(this, field, amount, options);
            default:
                return $735220c2d4774dd3$export$dd02b3e0007dfe28(this, field, amount, options);
        }
    }
    /** Converts the date to a native JavaScript Date object in the given time zone. */ toDate(timeZone, disambiguation) {
        return $11d87f3f76e88657$export$e67a095c620b86fe(this, timeZone, disambiguation);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return $fae977aafc393c5c$export$4223de14708adc63(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        let res = $14e0f24ef4ac5c92$export$68781ddf31c0090f(this, b);
        if (res === 0) return $14e0f24ef4ac5c92$export$c19a80a9721b80f6(this, $11d87f3f76e88657$export$b21e0b124e224484(b));
        return res;
    }
    constructor(...args){
        // This prevents TypeScript from allowing other types with the same fields to match.
        _type2.set(this, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        $735220c2d4774dd3$export$c4e2ecac49351ef2(this);
    }
}
var _type2 = new WeakMap();
class $35ea8db9cb2ccb90$export$d3b7288e7994edea {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
        else return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `ZonedDateTime` with the given duration added to it. */ add(duration) {
        return $735220c2d4774dd3$export$96b1d28349274637(this, duration);
    }
    /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return $735220c2d4774dd3$export$6814caac34ca03c7(this, duration);
    }
    /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields, disambiguation) {
        return $735220c2d4774dd3$export$31b5430eb18be4f8(this, fields, disambiguation);
    }
    /**
   * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return $735220c2d4774dd3$export$9a297d111fc86b79(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object. */ toDate() {
        return $11d87f3f76e88657$export$83aac07b4c37b25(this);
    }
    /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */ toString() {
        return $fae977aafc393c5c$export$bf79f1ebf4b18792(this);
    }
    /** Converts the date to an ISO 8601 formatted string in UTC. */ toAbsoluteString() {
        return this.toDate().toISOString();
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        // TODO: Is this a bad idea??
        return this.toDate().getTime() - $11d87f3f76e88657$export$84c95a83c799e074(b, this.timeZone).toDate().getTime();
    }
    constructor(...args){
        // This prevents TypeScript from allowing other types with the same fields to match.
        _type3.set(this, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        let timeZone = args.shift();
        let offset = args.shift();
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.timeZone = timeZone;
        this.offset = offset;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        $735220c2d4774dd3$export$c4e2ecac49351ef2(this);
    }
}
var _type3 = new WeakMap();





const $62225008020f0a13$var$ERA_START_DATES = [
    [
        1868,
        9,
        8
    ],
    [
        1912,
        7,
        30
    ],
    [
        1926,
        12,
        25
    ],
    [
        1989,
        1,
        8
    ],
    [
        2019,
        5,
        1
    ]
];
const $62225008020f0a13$var$ERA_END_DATES = [
    [
        1912,
        7,
        29
    ],
    [
        1926,
        12,
        24
    ],
    [
        1989,
        1,
        7
    ],
    [
        2019,
        4,
        30
    ]
];
const $62225008020f0a13$var$ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const $62225008020f0a13$var$ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
    const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return $62225008020f0a13$var$ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
    let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(date.year + eraAddend, date.month, date.day);
}
class $62225008020f0a13$export$b746ab2b60cdffbf extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
        date.era = $62225008020f0a13$var$ERA_NAMES[era];
        date.year -= $62225008020f0a13$var$ERA_ADDENDS[era];
        return date;
    }
    toJulianDay(date) {
        return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = $62225008020f0a13$var$toGregorian(date);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
        if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
            date.era = $62225008020f0a13$var$ERA_NAMES[era];
            date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
        }
    }
    constrainDate(date) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let end = $62225008020f0a13$var$ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
            date.year = Math.min(maxYear, date.year);
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
            if (date.year === 1) {
                let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
                date.month = Math.max(startMonth, date.month);
                if (date.month === startMonth) date.day = Math.max(startDay, date.day);
            }
        }
    }
    getEras() {
        return $62225008020f0a13$var$ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
        if (next == null) return 9999;
        let cur = $62225008020f0a13$var$ERA_START_DATES[era];
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
    }
    getMinimumMonthInYear(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
    constructor(...args){
        super(...args);
        this.identifier = 'japanese';
    }
}
function $62225008020f0a13$var$getMinimums(date) {
    if (date.year === 1) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        return $62225008020f0a13$var$ERA_START_DATES[idx];
    }
}




const $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
class $8d73d47422ca7302$export$42d20a78301dee44 extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        date.year -= $8d73d47422ca7302$var$BUDDHIST_ERA_START;
        return date;
    }
    toJulianDay(date) {
        return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
    }
    constructor(...args){
        super(...args);
        this.identifier = 'buddhist';
    }
}
function $8d73d47422ca7302$var$toGregorian(date) {
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START, date.month, date.day);
}




const $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
    return date.era === 'minguo' ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year, date) {
    let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
    if (y > 0) {
        date.era = 'minguo';
        date.year = y;
    } else {
        date.era = 'before_minguo';
        date.year = 1 - y;
    }
}
class $5f31bd6f0c8940b2$export$65e01080afcb0799 extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        $5f31bd6f0c8940b2$var$gregorianToTaiwan(date.year, date);
        return date;
    }
    toJulianDay(date) {
        return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date), date);
    }
    getYearsToAdd(date, years) {
        return date.era === 'before_minguo' ? -years : years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    constructor(...args){
        super(...args);
        this.identifier // Republic of China
         = 'roc';
    }
}
function $5f31bd6f0c8940b2$var$toGregorian(date) {
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f($5f31bd6f0c8940b2$var$gregorianYear(date), date.month, date.day);
}




const $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948321; // 622/03/19 Julian C.E.
function $f3ed2e4472ae7e25$var$isLeapYear(year) {
    let y0 = year > 0 ? year - 474 : year - 473;
    let y1 = $2b4dce13dd5a17fa$export$842a2cf37af977e1(y0, 2820) + 474;
    return $2b4dce13dd5a17fa$export$842a2cf37af977e1((y1 + 38) * 31, 128) < 31;
}
function $f3ed2e4472ae7e25$var$persianToJulianDay(year, month, day) {
    let y0 = year > 0 ? year - 474 : year - 473;
    let y1 = $2b4dce13dd5a17fa$export$842a2cf37af977e1(y0, 2820) + 474;
    let offset = month <= 7 ? 31 * (month - 1) : 30 * (month - 1) + 6;
    return $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 1029983 * Math.floor(y0 / 2820) + 365 * (y1 - 1) + Math.floor((31 * y1 - 5) / 128) + offset + day;
}
class $f3ed2e4472ae7e25$export$37fccdbfd14c5939 {
    fromJulianDay(jd) {
        let d0 = jd - $f3ed2e4472ae7e25$var$persianToJulianDay(475, 1, 1);
        let n2820 = Math.floor(d0 / 1029983);
        let d1 = $2b4dce13dd5a17fa$export$842a2cf37af977e1(d0, 1029983);
        let y2820 = d1 === 1029982 ? 2820 : Math.floor((128 * d1 + 46878) / 46751);
        let year = 474 + 2820 * n2820 + y2820;
        if (year <= 0) year--;
        let yDay = jd - $f3ed2e4472ae7e25$var$persianToJulianDay(year, 1, 1) + 1;
        let month = yDay <= 186 ? Math.ceil(yDay / 31) : Math.ceil((yDay - 6) / 31);
        let day = jd - $f3ed2e4472ae7e25$var$persianToJulianDay(year, month, 1) + 1;
        return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year, month, day);
    }
    toJulianDay(date) {
        return $f3ed2e4472ae7e25$var$persianToJulianDay(date.year, date.month, date.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(date) {
        if (date.month <= 6) return 31;
        if (date.month <= 11) return 30;
        return $f3ed2e4472ae7e25$var$isLeapYear(date.year) ? 30 : 29;
    }
    getEras() {
        return [
            'AP'
        ];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(){
        this.identifier = 'persian';
    }
}




// Starts in 78 AD,
const $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
class $82c358003bdda0a8$export$39f31c639fa15726 extends $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - $3b62074eb05584b2$export$f297eb839006d339(date.year, 1, 1);
        let leapMonth;
        if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 31 : 30;
            yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
        }
        let indianMonth;
        let indianDay;
        if (yDay < leapMonth) {
            indianMonth = 1;
            indianDay = yDay + 1;
        } else {
            let mDay = yDay - leapMonth;
            if (mDay < 155) {
                indianMonth = Math.floor(mDay / 31) + 2;
                indianDay = mDay % 31 + 1;
            } else {
                mDay -= 155;
                indianMonth = Math.floor(mDay / 30) + 7;
                indianDay = mDay % 30 + 1;
            }
        }
        return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, indianYear, indianMonth, indianDay);
    }
    toJulianDay(date) {
        let year = date.year + $82c358003bdda0a8$var$INDIAN_ERA_START;
        let leapMonth;
        let jd;
        if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) {
            leapMonth = 31;
            jd = $3b62074eb05584b2$export$f297eb839006d339(year, 3, 21);
        } else {
            leapMonth = 30;
            jd = $3b62074eb05584b2$export$f297eb839006d339(year, 3, 22);
        }
        if (date.month === 1) return jd + date.day - 1;
        jd += leapMonth + Math.min(date.month - 2, 5) * 31;
        if (date.month >= 8) jd += (date.month - 7) * 30;
        jd += date.day - 1;
        return jd;
    }
    getDaysInMonth(date) {
        if (date.month === 1 && $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START)) return 31;
        if (date.month >= 2 && date.month <= 6) return 31;
        return 30;
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'saka'
        ];
    }
    constructor(...args){
        super(...args);
        this.identifier = 'indian';
    }
}



const $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
const $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(calendar, year, month, day);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'AH'
        ];
    }
    constructor(){
        this.identifier = 'islamic-civil';
    }
}
class $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args);
        this.identifier = 'islamic-tbla';
    }
}
// Generated by scripts/generate-umalqura.js
const $f2f3e0e3a817edbd$var$UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
let $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
    let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
    let mask = 1 << 11 - (month - 1);
    if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
    let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
    return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
class $f2f3e0e3a817edbd$export$5baab4758c231076 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
        let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
        let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
                let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, y, m, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
    }
    constructor(){
        super();
        this.identifier = 'islamic-umalqura';
        if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH) $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), (c)=>c.charCodeAt(0)
        ).buffer);
        if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
            $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++){
                $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
            }
        }
    }
}




const $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
const $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $7c5f6fbf42389787$var$MONTH_DAYS = 29;
const $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
const $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
    return $2b4dce13dd5a17fa$export$842a2cf37af977e1(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if ($2b4dce13dd5a17fa$export$842a2cf37af977e1(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
    let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
    let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
    let next = $7c5f6fbf42389787$var$hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
    return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
    return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
    let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
    if (yearLength > 380) yearLength -= 30; // Subtract length of leap month.
    switch(yearLength){
        case 353:
            return 0; // deficient
        case 354:
            return 1; // normal
        case 355:
            return 2; // complete
    }
}
function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = $7c5f6fbf42389787$var$getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
    return 30;
}
class $7c5f6fbf42389787$export$ca405048b8fb5af {
    fromJulianDay(jd) {
        let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
        let m = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = $7c5f6fbf42389787$var$startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = $7c5f6fbf42389787$var$startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
        return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return $7c5f6fbf42389787$var$getDaysInYear(date.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'AM'
        ];
    }
    balanceYearMonth(date, previousDate) {
        // Keep date in the same month when switching between leap years and non leap years
        if (previousDate.year !== date.year) {
            if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
    constructor(){
        this.identifier = 'hebrew';
    }
}



const $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
const $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
    return epoch // difference from Julian epoch to 1,1,1
     + 365 * year // number of days from years
     + Math.floor(year / 4) // extra day of leap year
     + 30 * (month - 1) // number of days from months (1 based)
     + day - 1 // number of days for present month (1 based)
    ;
}
function $b956b2d7a6cf451f$var$julianDayToCE(calendar, epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1);
    return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(calendar, year, month, day);
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) // not intercalary month
    return 30;
    else // intercalary month 5 days + possible leap day
    return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
class $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let date = $b956b2d7a6cf451f$var$julianDayToCE(this, $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        if (date.year > 0) date.era = 'AM';
        else {
            date.era = 'AA';
            date.year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        }
        return date;
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return [
            'AA',
            'AM'
        ];
    }
    constructor(){
        this.identifier = 'ethiopic';
    }
}
class $b956b2d7a6cf451f$export$d72e0c37005a4914 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let date = $b956b2d7a6cf451f$var$julianDayToCE(this, $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        date.era = 'AA';
        date.year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return date;
    }
    getEras() {
        return [
            'AA'
        ];
    }
    constructor(...args){
        super(...args);
        this.identifier // also known as 'ethiopic-amete-alem' in ICU
         = 'ethioaa';
    }
}
class $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let date = $b956b2d7a6cf451f$var$julianDayToCE(this, $b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
        if (date.year <= 0) {
            date.era = 'BCE';
            date.year = 1 - date.year;
        } else date.era = 'CE';
        return date;
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
    }
    getYearsToAdd(date, years) {
        return date.era === 'BCE' ? -years : years;
    }
    getEras() {
        return [
            'BCE',
            'CE'
        ];
    }
    constructor(...args){
        super(...args);
        this.identifier = 'coptic';
    }
}











function $64244302c3013299$export$dd0bbc9b26defe37(name) {
    switch(name){
        case 'buddhist':
            return new $8d73d47422ca7302$export$42d20a78301dee44();
        case 'ethiopic':
            return new $b956b2d7a6cf451f$export$26ba6eab5e20cd7d();
        case 'ethioaa':
            return new $b956b2d7a6cf451f$export$d72e0c37005a4914();
        case 'coptic':
            return new $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1();
        case 'hebrew':
            return new $7c5f6fbf42389787$export$ca405048b8fb5af();
        case 'indian':
            return new $82c358003bdda0a8$export$39f31c639fa15726();
        case 'islamic-civil':
            return new $f2f3e0e3a817edbd$export$2066795aadd37bfc();
        case 'islamic-tbla':
            return new $f2f3e0e3a817edbd$export$37f0887f2f9d22f7();
        case 'islamic-umalqura':
            return new $f2f3e0e3a817edbd$export$5baab4758c231076();
        case 'japanese':
            return new $62225008020f0a13$export$b746ab2b60cdffbf();
        case 'persian':
            return new $f3ed2e4472ae7e25$export$37fccdbfd14c5939();
        case 'roc':
            return new $5f31bd6f0c8940b2$export$65e01080afcb0799();
        case 'gregory':
        default:
            return new $3b62074eb05584b2$export$80ee6245ec4f29ec();
    }
}




var $484f90c8d1b5efb9$exports = {};



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $fb18d541ea1ad717$var$formatterCache = new Map();
class $fb18d541ea1ad717$export$ad991b66133851cf {
    /** Formats a date as a string according to the locale and format options passed to the constructor. */ format(value) {
        return this.formatter.format(value);
    }
    /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */ formatToParts(value) {
        return this.formatter.formatToParts(value);
    }
    /** Formats a date range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRange === 'function') // @ts-ignore
        return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} ??? ${this.formatter.format(end)}`;
    }
    /** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
        return this.formatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.formatter.formatToParts(start);
        let endParts = this.formatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })
            ),
            {
                type: 'literal',
                value: ' ??? ',
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                })
            )
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let resolvedOptions = this.formatter.resolvedOptions();
        if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        return resolvedOptions;
    }
    constructor(locale, options = {
    }){
        this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
        this.options = options;
    }
}
// There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802
const $fb18d541ea1ad717$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {
}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
    if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
let $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
    if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
        ...options,
        timeZone: undefined // use local timezone
    });
    let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p)=>p.type === 'hour'
    ).value, 10);
    let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p)=>p.type === 'hour'
    ).value, 10);
    if (min === 0 && max === 23) return 'h23';
    if (min === 24 && max === 23) return 'h24';
    if (min === 0 && max === 11) return 'h11';
    if (min === 12 && max === 11) return 'h12';
    throw new Error('Unexpected hour cycle result');
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@internationalized/message/dist/module.js":
/*!****************************************************************!*\
  !*** ./node_modules/@internationalized/message/dist/module.js ***!
  \****************************************************************/
/*! exports provided: MessageDictionary, MessageFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDictionary", function() { return $70eee6030fd7c1a1$export$64839e615120df17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFormatter", function() { return $a96338b8d4eb3cb0$export$526ebc05ff964723; });
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $70eee6030fd7c1a1$exports = {};

$parcel$export($70eee6030fd7c1a1$exports, "MessageDictionary", () => $70eee6030fd7c1a1$export$64839e615120df17);
class $70eee6030fd7c1a1$export$64839e615120df17 {
    getStringForLocale(key, locale) {
        let strings = this.messages[locale];
        if (!strings) {
            strings = $70eee6030fd7c1a1$var$getStringsForLocale(locale, this.messages, this.defaultLocale);
            this.messages[locale] = strings;
        }
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        this.messages = {
            ...messages
        };
        this.defaultLocale = defaultLocale;
    }
}
function $70eee6030fd7c1a1$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $70eee6030fd7c1a1$var$getLanguage(locale);
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $70eee6030fd7c1a1$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}


var $a96338b8d4eb3cb0$exports = {};

$parcel$export($a96338b8d4eb3cb0$exports, "MessageFormatter", () => $a96338b8d4eb3cb0$export$526ebc05ff964723);

class $a96338b8d4eb3cb0$export$526ebc05ff964723 {
    format(key, variables) {
        let message = this.cache[key];
        if (!message) {
            let msg = this.messages.getStringForLocale(key, this.locale);
            if (!msg) throw new Error(`Could not find intl message ${key} in ${this.locale} locale`);
            message = new intl_messageformat__WEBPACK_IMPORTED_MODULE_0__["default"](msg, this.locale);
            this.cache[key] = message;
        }
        let varCopy;
        if (variables) varCopy = Object.keys(variables).reduce((acc, key)=>{
            acc[key] = variables[key] == null ? false : variables[key];
            return acc;
        }, {
        });
        return message.format(varCopy);
    }
    constructor(locale, messages){
        this.locale = locale;
        this.messages = messages;
        this.cache = {
        };
    }
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@internationalized/number/dist/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/@internationalized/number/dist/module.js ***!
  \***************************************************************/
/*! exports provided: NumberFormatter, NumberParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatter", function() { return $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberParser", function() { return $6c7bd7858deea686$export$cd11ab140839f11d; });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    // @ts-ignore
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch (e) {
}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    // @ts-ignore
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch (e1) {
}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: '??',
            'ja-JP': ' ???',
            'zh-TW': '???',
            'sl-SI': ' ??'
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var ref;
            let { unit: unit , unitDisplay: unitDisplay = 'short' , locale: locale  } = this.resolvedOptions();
            let values = (ref = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || ref === void 0 ? void 0 : ref[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        // @ts-ignore
        return this.numberFormatter.formatToParts(value);
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {
    }){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {
}) {
    let { numberingSystem: numberingSystem  } = options;
    if (numberingSystem && locale.indexOf('-u-nu-') === -1) locale = `${locale}-u-nu-${numberingSystem}`;
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var ref;
        let { unit: unit , unitDisplay: unitDisplay = 'short'  } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((ref = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || ref === void 0 ? void 0 : ref[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}


const $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
const $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
    'latn',
    'arab',
    'hanidec'
];
class $6c7bd7858deea686$export$cd11ab140839f11d {
    /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */ parse(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
    }
    /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */ isValidPartialNumber(value, minValue, maxValue) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
    }
    /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */ getNumberingSystem(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
    }
    constructor(locale, options = {
    }){
        this.locale = locale;
        this.options = options;
    }
}
const $6c7bd7858deea686$var$numberParserCache = new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
    // First try the default numbering system for the provided locale
    let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
    // If that doesn't match, and the locale doesn't include a hard coded numbering system,
    // try each of the other supported numbering systems until we find one that matches.
    if (!locale.includes('-nu-') && !defaultParser.isValidPartialNumber(value)) {
        for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
            let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes('-u-') ? '-nu-' : '-u-nu-') + numberingSystem, options);
            if (parser.isValidPartialNumber(value)) return parser;
        }
    }
    return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
    if (!parser) {
        parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
        $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
    }
    return parser;
}
// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $6c7bd7858deea686$var$NumberParserImpl {
    parse(value) {
        // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
        let fullySanitizedValue = this.sanitize(value);
        // Remove group characters, and replace decimal points and numerals with ASCII values.
        fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, '').replace(this.symbols.decimal, '.').replace(this.symbols.minusSign, '-').replace(this.symbols.numeral, this.symbols.index);
        let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
        if (isNaN(newValue)) return NaN;
        // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
        if (this.options.currencySign === 'accounting' && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
        // when reading the number, if it's a percent, then it should be interpreted as being divided by 100
        if (this.options.style === 'percent') {
            newValue /= 100;
            var _maximumFractionDigits;
            // after dividing to get the percent value, javascript may get .0210999999 instead of .0211, so fix the number of fraction digits
            newValue = +newValue.toFixed(((_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _maximumFractionDigits !== void 0 ? _maximumFractionDigits : 0) + 2);
        }
        return newValue;
    }
    sanitize(value) {
        // Remove literals and whitespace, which are allowed anywhere in the string
        value = value.replace(this.symbols.literals, '');
        // Replace the ASCII minus sign with the minus sign used in the current locale
        // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
        value = value.replace('-', this.symbols.minusSign);
        // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
        // instead they use the , (44) character or apparently the (1548) character.
        if (this.options.numberingSystem === 'arab') {
            value = value.replace(',', this.symbols.decimal);
            value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
            value = $6c7bd7858deea686$var$replaceAll(value, '.', this.symbols.group);
        }
        // fr-FR group character is char code 8239, but that's not a key on the french keyboard,
        // so allow 'period' as a group char and replace it with a space
        if (this.options.locale === 'fr-FR') value = $6c7bd7858deea686$var$replaceAll(value, '.', String.fromCharCode(8239));
        return value;
    }
    isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
        value = this.sanitize(value);
        // Remove minus or plus sign, which must be at the start of the string.
        if (value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
        else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
        // Numbers cannot start with a group separator
        if (value.startsWith(this.symbols.group)) return false;
        // Remove numerals, groups, and decimals
        value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, '').replace(this.symbols.numeral, '').replace(this.symbols.decimal, '');
        // The number is valid if there are no remaining characters
        return value.length === 0;
    }
    constructor(locale, options = {
    }){
        this.formatter = new Intl.NumberFormat(locale, options);
        this.options = this.formatter.resolvedOptions();
        this.symbols = $6c7bd7858deea686$var$getSymbols(this.formatter, this.options, options);
    }
}
const $6c7bd7858deea686$var$nonLiteralParts = new Set([
    'decimal',
    'fraction',
    'integer',
    'minusSign',
    'plusSign',
    'group'
]);
function $6c7bd7858deea686$var$getSymbols(formatter, intlOptions, originalOptions) {
    var ref, ref1, ref2, ref3;
    // Note: some locale's don't add a group symbol until there is a ten thousands place
    let allParts = formatter.formatToParts(-10000.111);
    let posAllParts = formatter.formatToParts(10000.111);
    let singularParts = formatter.formatToParts(1);
    var ref4;
    let minusSign = (ref4 = (ref = allParts.find((p)=>p.type === 'minusSign'
    )) === null || ref === void 0 ? void 0 : ref.value) !== null && ref4 !== void 0 ? ref4 : '-';
    let plusSign = (ref1 = posAllParts.find((p)=>p.type === 'plusSign'
    )) === null || ref1 === void 0 ? void 0 : ref1.value;
    // Safari does not support the signDisplay option, but our number parser polyfills it.
    // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
    // @ts-ignore
    if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'exceptZero' || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'always')) plusSign = '+';
    let decimal = (ref2 = allParts.find((p)=>p.type === 'decimal'
    )) === null || ref2 === void 0 ? void 0 : ref2.value;
    let group = (ref3 = allParts.find((p)=>p.type === 'group'
    )) === null || ref3 === void 0 ? void 0 : ref3.value;
    // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
    // don't contribute to the numerical value
    let pluralLiterals = allParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)
    ).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value)
    );
    let singularLiterals = singularParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)
    ).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value)
    );
    let sortedLiterals = [
        ...new Set([
            ...singularLiterals,
            ...pluralLiterals
        ])
    ].sort((a, b)=>b.length - a.length
    );
    let literals = new RegExp(`${sortedLiterals.join('|')}|[\\p{White_Space}]`, 'gu');
    // These are for replacing non-latn characters with the latn equivalent
    let numerals = [
        ...new Intl.NumberFormat(intlOptions.locale, {
            useGrouping: false
        }).format(9876543210)
    ].reverse();
    let indexes = new Map(numerals.map((d, i)=>[
            d,
            i
        ]
    ));
    let numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    let index = (d)=>String(indexes.get(d))
    ;
    return {
        minusSign: minusSign,
        plusSign: plusSign,
        decimal: decimal,
        group: group,
        literals: literals,
        numeral: numeral,
        index: index
    };
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
    // @ts-ignore
    if (str.replaceAll) // @ts-ignore
    return str.replaceAll(find, replace);
    return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/button/dist/module.js":
/*!********************************************************!*\
  !*** ./node_modules/@react-aria/button/dist/module.js ***!
  \********************************************************/
/*! exports provided: useButton, useToggleButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useButton", function() { return $701a24aa0da5b062$export$ea18c227d4417cc3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggleButton", function() { return $55f54f7887471b58$export$51e84d46ca0bc451; });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/module.js");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");




function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $701a24aa0da5b062$exports = {};

$parcel$export($701a24aa0da5b062$exports, "useButton", () => $701a24aa0da5b062$export$ea18c227d4417cc3);




function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = 'button' , isDisabled: isDisabled , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , onPressChange: onPressChange , preventFocusOnPress: // @ts-ignore - undocumented
    preventFocusOnPress , allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled , // @ts-ignore
    onClick: deprecatedOnClick , href: href , target: target , rel: rel , type: type = 'button'  } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type: type,
        disabled: isDisabled
    };
    else additionalProps = {
        role: 'button',
        tabIndex: isDisabled ? undefined : 0,
        href: elementType === 'a' && isDisabled ? undefined : href,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps: pressProps , isPressed: isPressed  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["usePress"])({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps  } = Object(_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__["useFocusable"])(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(focusableProps, pressProps, Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["filterDOMProps"])(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            onClick: (e)=>{
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn('onClick is deprecated, please use onPress');
                }
            }
        })
    };
}


var $55f54f7887471b58$exports = {};

$parcel$export($55f54f7887471b58$exports, "useToggleButton", () => $55f54f7887471b58$export$51e84d46ca0bc451);



function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected  } = state;
    const { isPressed: isPressed , buttonProps: buttonProps  } = $701a24aa0da5b062$export$ea18c227d4417cc3({
        ...props,
        onPress: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["chain"])(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        buttonProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(buttonProps, {
            'aria-pressed': isSelected
        })
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/combobox/dist/module.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react-aria/combobox/dist/module.js ***!
  \**********************************************************/
/*! exports provided: useComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComboBox", function() { return $c350ade66beef0af$export$8c18d1b4f7232bbf; });
/* harmony import */ var _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/live-announcer */ "./node_modules/@react-aria/live-announcer/dist/module.js");
/* harmony import */ var _react_aria_overlays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/overlays */ "./node_modules/@react-aria/overlays/dist/module.js");
/* harmony import */ var _react_aria_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/listbox */ "./node_modules/@react-aria/listbox/dist/module.js");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/module.js");
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-aria/selection */ "./node_modules/@react-aria/selection/dist/module.js");
/* harmony import */ var _react_aria_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-aria/menu */ "./node_modules/@react-aria/menu/dist/module.js");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/module.js");
/* harmony import */ var _react_aria_textfield__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-aria/textfield */ "./node_modules/@react-aria/textfield/dist/module.js");











function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c350ade66beef0af$exports = {};

$parcel$export($c350ade66beef0af$exports, "useComboBox", () => $c350ade66beef0af$export$8c18d1b4f7232bbf);






var $2e84e748dc57e459$exports = {};
var $02cb4c75c506befe$exports = {};
$02cb4c75c506befe$exports = JSON.parse("{\"buttonLabel\":\"?????? ??????????????????\",\"countAnnouncement\":\"{optionCount, plural, one {# ????????} other {# ????????????}} ??????????.\",\"focusAnnouncement\":\"{isGroupChange, select, true {???????????????? ?????????????? {groupTitle}, ???? {groupCount, plural, one {# ????????} other {# ????????????}}. } other {}}{optionText}{isSelected, select, true {, ????????} other {}}\",\"listboxLabel\":\"??????????????\",\"selectedAnnouncement\":\"{optionText}?? ????????\"}");


var $568b8163f1e56faf$exports = {};
$568b8163f1e56faf$exports = JSON.parse("{\"buttonLabel\":\"???????????? ??????????????????????\",\"countAnnouncement\":\"{optionCount, plural, one {# ??????????} other {# ??????????}} ???? ????????????????????????.\",\"focusAnnouncement\":\"{isGroupChange, select, true {???????????????? ?????????? {groupTitle}, ?? {groupCount, plural, one {# ??????????} other {# ??????????}}. } other {}}{optionText}{isSelected, select, true {, ??????????????} other {}}\",\"listboxLabel\":\"??????????????????????\",\"selectedAnnouncement\":\"{optionText}, ??????????????\"}");


var $87581c0202d106b8$exports = {};
$87581c0202d106b8$exports = JSON.parse("{\"buttonLabel\":\"Zobrazit doporu??en??\",\"countAnnouncement\":\"K dispozici {optionCount, plural, one {je # mo??nost} other {jsou/je # mo??nosti/-??}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadan?? skupina ???{groupTitle}??? {groupCount, plural, one {s # mo??nost??} other {se # mo??nostmi}}. } other {}}{optionText}{isSelected, select, true { (vybr??no)} other {}}\",\"listboxLabel\":\"N??vrhy\",\"selectedAnnouncement\":\"{optionText}, vybr??no\"}");


var $a10a0369f5433ed1$exports = {};
$a10a0369f5433ed1$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# mulighed tilg??ngelig} other {# muligheder tilg??ngelige}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angivet gruppe {groupTitle}, med {groupCount, plural, one {# mulighed} other {# muligheder}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $bfd288727d5cb166$exports = {};
$bfd288727d5cb166$exports = JSON.parse("{\"buttonLabel\":\"Empfehlungen anzeigen\",\"countAnnouncement\":\"{optionCount, plural, one {# Option} other {# Optionen}} verf??gbar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Eingetretene Gruppe {groupTitle}, mit {groupCount, plural, one {# Option} other {# Optionen}}. } other {}}{optionText}{isSelected, select, true {, ausgew??hlt} other {}}\",\"listboxLabel\":\"Empfehlungen\",\"selectedAnnouncement\":\"{optionText}, ausgew??hlt\"}");


var $ca177778f9a74e3c$exports = {};
$ca177778f9a74e3c$exports = JSON.parse("{\"buttonLabel\":\"?????????????? ??????????????????\",\"countAnnouncement\":\"{optionCount, plural, one {# ??????????????} other {# ???????????????? }} ????????????????????.\",\"focusAnnouncement\":\"{isGroupChange, select, true {?????????????????? ?????????? {groupTitle}, ???? {groupCount, plural, one {# ??????????????} other {# ????????????????}}. } other {}}{optionText}{isSelected, select, true {, ????????????????????} other {}}\",\"listboxLabel\":\"??????????????????\",\"selectedAnnouncement\":\"{optionText}, ????????????????????\"}");


var $9b5aa79ef84beb6c$exports = {};
$9b5aa79ef84beb6c$exports = JSON.parse("{\"focusAnnouncement\":\"{isGroupChange, select, true {Entered group {groupTitle}, with {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, selected} other {}}\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} available.\",\"selectedAnnouncement\":\"{optionText}, selected\",\"buttonLabel\":\"Show suggestions\",\"listboxLabel\":\"Suggestions\"}");


var $57968e8209de2557$exports = {};
$57968e8209de2557$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugerencias\",\"countAnnouncement\":\"{optionCount, plural, one {# opci??n} other {# opciones}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Se ha unido al grupo {groupTitle}, con {groupCount, plural, one {# opci??n} other {# opciones}}. } other {}}{optionText}{isSelected, select, true {, seleccionado} other {}}\",\"listboxLabel\":\"Sugerencias\",\"selectedAnnouncement\":\"{optionText}, seleccionado\"}");


var $60690790bf4c1c6a$exports = {};
$60690790bf4c1c6a$exports = JSON.parse("{\"buttonLabel\":\"Kuva soovitused\",\"countAnnouncement\":\"{optionCount, plural, one {# valik} other {# valikud}} saadaval.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Sisestatud r??hm {groupTitle}, valikuga {groupCount, plural, one {# valik} other {# valikud}}. } other {}}{optionText}{isSelected, select, true {, valitud} other {}}\",\"listboxLabel\":\"Soovitused\",\"selectedAnnouncement\":\"{optionText}, valitud\"}");


var $1101246e8c7d9357$exports = {};
$1101246e8c7d9357$exports = JSON.parse("{\"buttonLabel\":\"N??yt?? ehdotukset\",\"countAnnouncement\":\"{optionCount, plural, one {# vaihtoehto} other {# vaihtoehdot}} saatavilla.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Mentiin ryhm????n {groupTitle}, {groupCount, plural, one {# vaihtoehdon} other {# vaihtoehdon}} kanssa.} other {}}{optionText}{isSelected, select, true {, valittu} other {}}\",\"listboxLabel\":\"Ehdotukset\",\"selectedAnnouncement\":\"{optionText}, valittu\"}");


var $6404b5cb5b241730$exports = {};
$6404b5cb5b241730$exports = JSON.parse("{\"buttonLabel\":\"Afficher les suggestions\",\"countAnnouncement\":\"{optionCount, plural, one {# option} other {# options}} disponible(s).\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groupe {groupTitle} saisi, avec {groupCount, plural, one {# option} other {# options}}. } other {}}{optionText}{isSelected, select, true {, s??lectionn??(s)} other {}}\",\"listboxLabel\":\"Suggestions\",\"selectedAnnouncement\":\"{optionText}, s??lectionn??\"}");


var $dfeafa702e92e31f$exports = {};
$dfeafa702e92e31f$exports = JSON.parse("{\"buttonLabel\":\"?????? ??????????\",\"countAnnouncement\":\"{optionCount, plural, one {???????????? #} other {# ????????????????}} ???????? ????????.\",\"focusAnnouncement\":\"{isGroupChange, select, true {???????? ???????????? {groupTitle}, ???? {groupCount, plural, one {???????????? #} other {# ????????????????}}. } other {}}{optionText}{isSelected, select, true {, ????????} other {}}\",\"listboxLabel\":\"??????????\",\"selectedAnnouncement\":\"{optionText}, ????????\"}");


var $2d125e0b34676352$exports = {};
$2d125e0b34676352$exports = JSON.parse("{\"buttonLabel\":\"Prika??i prijedloge\",\"countAnnouncement\":\"Dostupno jo??: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena skupina {groupTitle}, s {groupCount, plural, one {# opcijom} other {# opcije/a}}. } other {}}{optionText}{isSelected, select, true {, odabranih} other {}}\",\"listboxLabel\":\"Prijedlozi\",\"selectedAnnouncement\":\"{optionText}, odabrano\"}");


var $ea029611d7634059$exports = {};
$ea029611d7634059$exports = JSON.parse("{\"buttonLabel\":\"Javaslatok megjelen??t??se\",\"countAnnouncement\":\"{optionCount, plural, one {# lehet??s??g} other {# lehet??s??g}} ??ll rendelkez??sre.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Bel??pett a(z) {groupTitle} csoportba, amely {groupCount, plural, one {# lehet??s??get} other {# lehet??s??get}} tartalmaz. } other {}}{optionText}{isSelected, select, true {, kijel??lve} other {}}\",\"listboxLabel\":\"Javaslatok\",\"selectedAnnouncement\":\"{optionText}, kijel??lve\"}");


var $77f075bb86ad7091$exports = {};
$77f075bb86ad7091$exports = JSON.parse("{\"buttonLabel\":\"Mostra suggerimenti\",\"countAnnouncement\":\"{optionCount, plural, one {# opzione disponibile} other {# opzioni disponibili}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingresso nel gruppo {groupTitle}, con {groupCount, plural, one {# opzione} other {# opzioni}}. } other {}}{optionText}{isSelected, select, true {, selezionato} other {}}\",\"listboxLabel\":\"Suggerimenti\",\"selectedAnnouncement\":\"{optionText}, selezionato\"}");


var $6e87462e84907983$exports = {};
$6e87462e84907983$exports = JSON.parse("{\"buttonLabel\":\"???????????????\",\"countAnnouncement\":\"{optionCount, plural, one {# ?????????????????????} other {# ?????????????????????}}????????????????????????\",\"focusAnnouncement\":\"{isGroupChange, select, true {??????????????????????????? {groupTitle}???{groupCount, plural, one {# ?????????????????????} other {# ?????????????????????}}????????????} other {}}{optionText}{isSelected, select, true {???????????????} other {}}\",\"listboxLabel\":\"??????\",\"selectedAnnouncement\":\"{optionText}???????????????\"}");


var $9246f2c6edc6b232$exports = {};
$9246f2c6edc6b232$exports = JSON.parse("{\"buttonLabel\":\"?????? ?????? ??????\",\"countAnnouncement\":\"{optionCount, plural, one {#??? ??????} other {#??? ??????}}??? ????????? ??? ????????????.\",\"focusAnnouncement\":\"{isGroupChange, select, true {????????? ?????? {groupTitle}, {groupCount, plural, one {#??? ??????} other {#??? ??????}}. } other {}}{optionText}{isSelected, select, true {, ?????????} other {}}\",\"listboxLabel\":\"??????\",\"selectedAnnouncement\":\"{optionText}, ?????????\"}");


var $e587accc6c0a434c$exports = {};
$e587accc6c0a434c$exports = JSON.parse("{\"buttonLabel\":\"Rodyti pasi??lymus\",\"countAnnouncement\":\"Yra {optionCount, plural, one {# parinktis} other {# parinktys (-i??)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {??vesta grup?? {groupTitle}, su {groupCount, plural, one {# parinktimi} other {# parinktimis (-i??)}}. } other {}}{optionText}{isSelected, select, true {, pasirinkta} other {}}\",\"listboxLabel\":\"Pasi??lymai\",\"selectedAnnouncement\":\"{optionText}, pasirinkta\"}");


var $03a1900e7400b5ab$exports = {};
$03a1900e7400b5ab$exports = JSON.parse("{\"buttonLabel\":\"R??d??t ieteikumus\",\"countAnnouncement\":\"Pieejamo opciju skaits: {optionCount, plural, one {# opcija} other {# opcijas}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ievad??ta grupa {groupTitle}, ar {groupCount, plural, one {# opciju} other {# opcij??m}}. } other {}}{optionText}{isSelected, select, true {, atlas??ta} other {}}\",\"listboxLabel\":\"Ieteikumi\",\"selectedAnnouncement\":\"{optionText}, atlas??ta\"}");


var $1387676441be6cf6$exports = {};
$1387676441be6cf6$exports = JSON.parse("{\"buttonLabel\":\"Vis forslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativer}} finnes.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Angitt gruppe {groupTitle}, med {groupCount, plural, one {# alternativ} other {# alternativer}}. } other {}}{optionText}{isSelected, select, true {, valgt} other {}}\",\"listboxLabel\":\"Forslag\",\"selectedAnnouncement\":\"{optionText}, valgt\"}");


var $17e82ebf0f8ab91f$exports = {};
$17e82ebf0f8ab91f$exports = JSON.parse("{\"buttonLabel\":\"Suggesties weergeven\",\"countAnnouncement\":\"{optionCount, plural, one {# optie} other {# opties}} beschikbaar.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Groep {groupTitle} ingevoerd met {groupCount, plural, one {# optie} other {# opties}}. } other {}}{optionText}{isSelected, select, true {, geselecteerd} other {}}\",\"listboxLabel\":\"Suggesties\",\"selectedAnnouncement\":\"{optionText}, geselecteerd\"}");


var $2f5377d3471630e5$exports = {};
$2f5377d3471630e5$exports = JSON.parse("{\"buttonLabel\":\"Wy??wietlaj sugestie\",\"countAnnouncement\":\"dost??pna/dost??pne(-nych) {optionCount, plural, one {# opcja} other {# opcje(-i)}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Do????czono do grupy {groupTitle}, z {groupCount, plural, one {# opcj??} other {# opcjami}}. } other {}}{optionText}{isSelected, select, true {, wybrano} other {}}\",\"listboxLabel\":\"Sugestie\",\"selectedAnnouncement\":\"{optionText}, wybrano\"}");


var $dee9868b6fa95ffe$exports = {};
$dee9868b6fa95ffe$exports = JSON.parse("{\"buttonLabel\":\"Mostrar sugest??es\",\"countAnnouncement\":\"{optionCount, plural, one {# op????o} other {# op????es}} dispon??vel.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo inserido {groupTitle}, com {groupCount, plural, one {# op????o} other {# op????es}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugest??es\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $f8b2e63637cbb5a6$exports = {};
$f8b2e63637cbb5a6$exports = JSON.parse("{\"buttonLabel\":\"Apresentar sugest??es\",\"countAnnouncement\":\"{optionCount, plural, one {# op????o} other {# op????es}} dispon??vel.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grupo introduzido {groupTitle}, com {groupCount, plural, one {# op????o} other {# op????es}}. } other {}}{optionText}{isSelected, select, true {, selecionado} other {}}\",\"listboxLabel\":\"Sugest??es\",\"selectedAnnouncement\":\"{optionText}, selecionado\"}");


var $46a885db3b44ea95$exports = {};
$46a885db3b44ea95$exports = JSON.parse("{\"buttonLabel\":\"Afi??are sugestii\",\"countAnnouncement\":\"{optionCount, plural, one {# op??iune} other {# op??iuni}} disponibile.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Grup {groupTitle} introdus, cu {groupCount, plural, one {# op??iune} other {# op??iuni}}. } other {}}{optionText}{isSelected, select, true {, selectat} other {}}\",\"listboxLabel\":\"Sugestii\",\"selectedAnnouncement\":\"{optionText}, selectat\"}");


var $50d8a8f0afa9dee5$exports = {};
$50d8a8f0afa9dee5$exports = JSON.parse("{\"buttonLabel\":\"???????????????? ??????????????????????\",\"countAnnouncement\":\"{optionCount, plural, one {# ????????????????} other {# ????????????????????}} ????????????????.\",\"focusAnnouncement\":\"{isGroupChange, select, true {?????????????????? ???????????? {groupTitle}, ?? {groupCount, plural, one {# ????????????????????} other {# ??????????????????????}}. } other {}}{optionText}{isSelected, select, true {, ????????????????????} other {}}\",\"listboxLabel\":\"??????????????????????\",\"selectedAnnouncement\":\"{optionText}, ??????????????\"}");


var $2867ee6173245507$exports = {};
$2867ee6173245507$exports = JSON.parse("{\"buttonLabel\":\"Zobrazi?? n??vrhy\",\"countAnnouncement\":\"{optionCount, plural, one {# mo??nos??} other {# mo??nosti/-??}} k dispoz??cii.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Zadan?? skupina {groupTitle}, s {groupCount, plural, one {# mo??nos??ou} other {# mo??nos??ami}}. } other {}}{optionText}{isSelected, select, true {, vybrat??} other {}}\",\"listboxLabel\":\"N??vrhy\",\"selectedAnnouncement\":\"{optionText}, vybrat??\"}");


var $0631b65beeb09b50$exports = {};
$0631b65beeb09b50$exports = JSON.parse("{\"buttonLabel\":\"Prika??i predloge\",\"countAnnouncement\":\"Na voljo je {optionCount, plural, one {# opcija} other {# opcije}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Vnesena skupina {groupTitle}, z {groupCount, plural, one {# opcija} other {# opcije}}. } other {}}{optionText}{isSelected, select, true {, izbrano} other {}}\",\"listboxLabel\":\"Predlogi\",\"selectedAnnouncement\":\"{optionText}, izbrano\"}");


var $65fc749265dcd686$exports = {};
$65fc749265dcd686$exports = JSON.parse("{\"buttonLabel\":\"Prika??i predloge\",\"countAnnouncement\":\"Dostupno jo??: {optionCount, plural, one {# opcija} other {# opcije/a}}.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Unesena grupa {groupTitle}, s {groupCount, plural, one {# opcijom} other {# optione/a}}. } other {}}{optionText}{isSelected, select, true {, izabranih} other {}}\",\"listboxLabel\":\"Predlozi\",\"selectedAnnouncement\":\"{optionText}, izabrano\"}");


var $69ba655c7853c08e$exports = {};
$69ba655c7853c08e$exports = JSON.parse("{\"buttonLabel\":\"Visa f??rslag\",\"countAnnouncement\":\"{optionCount, plural, one {# alternativ} other {# alternativ}} tillg??ngliga.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Ingick i gruppen {groupTitle} med {groupCount, plural, one {# alternativ} other {# alternativ}}. } other {}}{optionText}{isSelected, select, true {, valda} other {}}\",\"listboxLabel\":\"F??rslag\",\"selectedAnnouncement\":\"{optionText}, valda\"}");


var $a79794784d61577c$exports = {};
$a79794784d61577c$exports = JSON.parse("{\"buttonLabel\":\"??nerileri g??ster\",\"countAnnouncement\":\"{optionCount, plural, one {# se??enek} other {# se??enekler}} kullan??labilir.\",\"focusAnnouncement\":\"{isGroupChange, select, true {Girilen grup {groupTitle}, ile {groupCount, plural, one {# se??enek} other {# se??enekler}}. } other {}}{optionText}{isSelected, select, true {, se??ildi} other {}}\",\"listboxLabel\":\"??neriler\",\"selectedAnnouncement\":\"{optionText}, se??ildi\"}");


var $c2845791417ebaf4$exports = {};
$c2845791417ebaf4$exports = JSON.parse("{\"buttonLabel\":\"???????????????? ????????????????????\",\"countAnnouncement\":\"{optionCount, plural, one {# ????????????????} other {# ??????????????????(-????)}} ????????????????.\",\"focusAnnouncement\":\"{isGroupChange, select, true {?????????????? ?????????? {groupTitle}, ?? {groupCount, plural, one {# ????????????????} other {# ??????????????????(-????)}}. } other {}}{optionText}{isSelected, select, true {, ??????????????} other {}}\",\"listboxLabel\":\"????????????????????\",\"selectedAnnouncement\":\"{optionText}, ??????????????\"}");


var $29b642d0025cc7a4$exports = {};
$29b642d0025cc7a4$exports = JSON.parse("{\"buttonLabel\":\"????????????\",\"countAnnouncement\":\"??? {optionCount, plural, one {# ?????????} other {# ?????????}}?????????\",\"focusAnnouncement\":\"{isGroupChange, select, true {????????? {groupTitle} ??????????????? {groupCount, plural, one {# ?????????} other {# ?????????}}. } other {}}{optionText}{isSelected, select, true {, ?????????} other {}}\",\"listboxLabel\":\"??????\",\"selectedAnnouncement\":\"{optionText}, ?????????\"}");


var $cd36dd33f9d46936$exports = {};
$cd36dd33f9d46936$exports = JSON.parse("{\"buttonLabel\":\"????????????\",\"countAnnouncement\":\"{optionCount, plural, one {# ??????} other {# ??????}} ?????????\",\"focusAnnouncement\":\"{isGroupChange, select, true {??????????????? {groupTitle}, ??? {groupCount, plural, one {# ??????} other {# ??????}}. } other {}}{optionText}{isSelected, select, true {, ?????????} other {}}\",\"listboxLabel\":\"??????\",\"selectedAnnouncement\":\"{optionText}, ?????????\"}");


$2e84e748dc57e459$exports = {
    "ar-AE": $02cb4c75c506befe$exports,
    "bg-BG": $568b8163f1e56faf$exports,
    "cs-CZ": $87581c0202d106b8$exports,
    "da-DK": $a10a0369f5433ed1$exports,
    "de-DE": $bfd288727d5cb166$exports,
    "el-GR": $ca177778f9a74e3c$exports,
    "en-US": $9b5aa79ef84beb6c$exports,
    "es-ES": $57968e8209de2557$exports,
    "et-EE": $60690790bf4c1c6a$exports,
    "fi-FI": $1101246e8c7d9357$exports,
    "fr-FR": $6404b5cb5b241730$exports,
    "he-IL": $dfeafa702e92e31f$exports,
    "hr-HR": $2d125e0b34676352$exports,
    "hu-HU": $ea029611d7634059$exports,
    "it-IT": $77f075bb86ad7091$exports,
    "ja-JP": $6e87462e84907983$exports,
    "ko-KR": $9246f2c6edc6b232$exports,
    "lt-LT": $e587accc6c0a434c$exports,
    "lv-LV": $03a1900e7400b5ab$exports,
    "nb-NO": $1387676441be6cf6$exports,
    "nl-NL": $17e82ebf0f8ab91f$exports,
    "pl-PL": $2f5377d3471630e5$exports,
    "pt-BR": $dee9868b6fa95ffe$exports,
    "pt-PT": $f8b2e63637cbb5a6$exports,
    "ro-RO": $46a885db3b44ea95$exports,
    "ru-RU": $50d8a8f0afa9dee5$exports,
    "sk-SK": $2867ee6173245507$exports,
    "sl-SI": $0631b65beeb09b50$exports,
    "sr-SP": $65fc749265dcd686$exports,
    "sv-SE": $69ba655c7853c08e$exports,
    "tr-TR": $a79794784d61577c$exports,
    "uk-UA": $c2845791417ebaf4$exports,
    "zh-CN": $29b642d0025cc7a4$exports,
    "zh-TW": $cd36dd33f9d46936$exports
};






function $c350ade66beef0af$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef , popoverRef: popoverRef , inputRef: inputRef , listBoxRef: listBoxRef , keyboardDelegate: keyboardDelegate , shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap , isReadOnly: isReadOnly , isDisabled: isDisabled  } = props;
    let formatMessage = Object(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_8__["useMessageFormatter"])((/*@__PURE__*/$parcel$interopDefault($2e84e748dc57e459$exports)));
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = Object(_react_aria_menu__WEBPACK_IMPORTED_MODULE_7__["useMenuTrigger"])({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    _react_aria_listbox__WEBPACK_IMPORTED_MODULE_2__["listData"].set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let delegate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(()=>keyboardDelegate || new _react_aria_selection__WEBPACK_IMPORTED_MODULE_6__["ListKeyboardDelegate"](state.collection, state.disabledKeys, listBoxRef)
    , [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps  } = Object(_react_aria_selection__WEBPACK_IMPORTED_MODULE_6__["useSelectableCollection"])({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Enter':
            case 'Tab':
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === 'Enter') e.preventDefault();
                state.commit();
                break;
            case 'Escape':
                state.revert();
                break;
            case 'ArrowDown':
                state.open('first', 'manual');
                break;
            case 'ArrowUp':
                state.open('last', 'manual');
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        var ref;
        // Ignore blur if focused moved to the button or into the popover.
        if (e.relatedTarget === (buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) || ((ref = popoverRef.current) === null || ref === void 0 ? void 0 : ref.contains(e.relatedTarget))) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = Object(_react_aria_textfield__WEBPACK_IMPORTED_MODULE_9__["useTextField"])({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly && Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["chain"])(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown),
        onBlur: onBlur,
        value: state.inputValue,
        onFocus: onFocus,
        autoComplete: 'off'
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            // Focus the input field in case it isn't focused yet
            inputRef.current.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            inputRef.current.focus();
            state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null, 'manual');
        }
    };
    let triggerLabelProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["useLabels"])({
        id: menuTriggerProps.id,
        'aria-label': formatMessage('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["useLabels"])({
        id: menuProps.id,
        'aria-label': formatMessage('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            e.preventDefault();
            inputRef.current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + 0.5 * rect.width);
        let centerY = Math.ceil(rect.top + 0.5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            e.preventDefault();
            inputRef.current.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    var ref1;
    let sectionKey = (ref1 = focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) !== null && ref1 !== void 0 ? ref1 : null;
    var _focusedKey;
    let itemKey = (_focusedKey = state.selectionManager.focusedKey) !== null && _focusedKey !== void 0 ? _focusedKey : null;
    let lastSection = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(sectionKey);
    let lastItem = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(itemKey);
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(()=>{
        if (Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["isAppleDevice"])() && focusedItem != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = (section === null || section === void 0 ? void 0 : section['aria-label']) || (typeof (section === null || section === void 0 ? void 0 : section.rendered) === 'string' ? section.rendered : '') || '';
            let announcement = formatMessage('focusAnnouncement', {
                isGroupChange: section && sectionKey !== lastSection.current,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...section.childNodes
                ].length : 0,
                optionText: focusedItem['aria-label'] || focusedItem.textValue || '',
                isSelected: isSelected
            });
            Object(_react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_0__["announce"])(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = Object(_react_stately_collections__WEBPACK_IMPORTED_MODULE_5__["getItemCount"])(state.collection);
    let lastSize = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(optionCount);
    let lastOpen = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(state.isOpen);
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["isAppleDevice"])());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = formatMessage('countAnnouncement', {
                optionCount: optionCount
            });
            Object(_react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_0__["announce"])(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(state.selectedKey);
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(()=>{
        if (Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["isAppleDevice"])() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = formatMessage('selectedAnnouncement', {
                optionText: optionText
            });
            Object(_react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_0__["announce"])(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(()=>{
        if (state.isOpen) return Object(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_1__["ariaHideOutside"])([
            inputRef.current,
            popoverRef.current
        ]);
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["mergeProps"])(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? Object(_react_aria_listbox__WEBPACK_IMPORTED_MODULE_2__["getItemId"])(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__["mergeProps"])(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/focus/dist/module.js":
/*!*******************************************************!*\
  !*** ./node_modules/@react-aria/focus/dist/module.js ***!
  \*******************************************************/
/*! exports provided: FocusScope, useFocusManager, getFocusableTreeWalker, createFocusManager, FocusRing, FocusableProvider, useFocusable, useFocusRing, focusSafely */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusScope", function() { return $9bf71ea28793e738$export$20e40289641fbbb6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusManager", function() { return $9bf71ea28793e738$export$10c5169755ce7bd7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableTreeWalker", function() { return $9bf71ea28793e738$export$2d6ec8fc375ceafa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusManager", function() { return $9bf71ea28793e738$export$c5251b9e124bf29; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusRing", function() { return $907718708eab68af$export$1a38b4ad7f578e1d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusableProvider", function() { return $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusable", function() { return $e6afbd83fe6ebbd2$export$4c014de7c8940b4c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusRing", function() { return $f7dceffc5ad7768b$export$4e328f61c538687f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusSafely", function() { return $6a99195332edec8b$export$80f3e147d781571c; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");





function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9bf71ea28793e738$exports = {};

$parcel$export($9bf71ea28793e738$exports, "FocusScope", () => $9bf71ea28793e738$export$20e40289641fbbb6);
$parcel$export($9bf71ea28793e738$exports, "useFocusManager", () => $9bf71ea28793e738$export$10c5169755ce7bd7);
$parcel$export($9bf71ea28793e738$exports, "getFocusableTreeWalker", () => $9bf71ea28793e738$export$2d6ec8fc375ceafa);
$parcel$export($9bf71ea28793e738$exports, "createFocusManager", () => $9bf71ea28793e738$export$c5251b9e124bf29);
var $6a99195332edec8b$exports = {};

$parcel$export($6a99195332edec8b$exports, "focusSafely", () => $6a99195332edec8b$export$80f3e147d781571c);


function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if (Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["getInteractionModality"])() === 'virtual') {
        let lastFocusedElement = document.activeElement;
        Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["runAfterTransition"])(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["focusWithoutScrolling"])(element);
        });
    } else Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["focusWithoutScrolling"])(element);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $645f2e67b85a24c9$var$isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
    let { display: display , visibility: visibility  } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle  } = element.ownerDocument.defaultView;
        let { display: computedDisplay , visibility: computedVisibility  } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
let $9bf71ea28793e738$var$activeScope = null;
let $9bf71ea28793e738$var$scopes = new Map();
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children , contain: contain , restoreFocus: restoreFocus , autoFocus: autoFocus  } = props;
    let startRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    let endRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    let scopeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    let ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($9bf71ea28793e738$var$FocusContext);
    let parentScope = ctx === null || ctx === void 0 ? void 0 : ctx.scopeRef;
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(()=>{
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = startRef.current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children,
        parentScope
    ]);
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(()=>{
        $9bf71ea28793e738$var$scopes.set(scopeRef, parentScope);
        return ()=>{
            // Restore the active scope on unmount if this scope or a descendant scope is active.
            // Parent effect cleanups run before children, so we need to check if the
            // parent scope actually still exists before restoring the active scope to it.
            if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$var$scopes.has(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
            $9bf71ea28793e738$var$scopes.delete(scopeRef);
        };
    }, [
        scopeRef,
        parentScope
    ]);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    let focusManager = $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: {
            scopeRef: scopeRef,
            focusManager: focusManager
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    })));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var ref;
    return (ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($9bf71ea28793e738$var$FocusContext)) === null || ref === void 0 ? void 0 : ref.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let scope = scopeRef.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]'
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    let raf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(()=>{
        let scope1 = scopeRef.current;
        if (!contain) return;
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || scopeRef !== $9bf71ea28793e738$var$activeScope) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: true
            }, scope);
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if (!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if (scopeRef === $9bf71ea28793e738$var$activeScope) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    focusedNode.current = e.target;
                    focusedNode.current.focus();
                }
            });
        };
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('focusin', onFocus, false);
        scope1.forEach((element)=>element.addEventListener('focusin', onFocus, false)
        );
        scope1.forEach((element)=>element.addEventListener('focusout', onBlur, false)
        );
        return ()=>{
            document.removeEventListener('keydown', onKeyDown, false);
            document.removeEventListener('focusin', onFocus, false);
            scope1.forEach((element)=>element.removeEventListener('focusin', onFocus, false)
            );
            scope1.forEach((element)=>element.removeEventListener('focusout', onBlur, false)
            );
        };
    }, [
        scopeRef,
        contain
    ]);
    // eslint-disable-next-line arrow-body-style
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        return ()=>cancelAnimationFrame(raf.current)
        ;
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    for (let scope of $9bf71ea28793e738$var$scopes.keys()){
        if ($9bf71ea28793e738$var$isElementInScope(element, scope.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    return scope.some((node)=>node.contains(element)
    );
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope) {
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let s of $9bf71ea28793e738$var$scopes.keys()){
        if ((s === scope || $9bf71ea28793e738$var$isAncestorScope(scope, s)) && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    let parent = $9bf71ea28793e738$var$scopes.get(scope);
    if (!parent) return false;
    if (parent === ancestor) return true;
    return $9bf71ea28793e738$var$isAncestorScope(ancestor, parent);
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        $6a99195332edec8b$export$80f3e147d781571c(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err1) {
    // ignore
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope) {
    let sentinel = scope[0].previousElementSibling;
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: true
    }, scope);
    walker.currentNode = sentinel;
    $9bf71ea28793e738$var$focusElement(walker.nextNode());
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(autoFocus);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current)) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, []);
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    const nodeToRestoreRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(typeof document !== 'undefined' ? document.activeElement : null);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(()=>{
        let nodeToRestore = nodeToRestoreRef.current;
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) return;
            let focusedElement = document.activeElement;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) nodeToRestore = null;
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current))
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener('keydown', onKeyDown, true);
            if (restoreFocus && nodeToRestore && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current)) requestAnimationFrame(()=>{
                if (document.body.contains(nodeToRestore)) $9bf71ea28793e738$var$focusElement(nodeToRestore);
            });
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var ref;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (ref = opts.from) === null || ref === void 0 ? void 0 : ref.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && $645f2e67b85a24c9$export$e989c0fffaa6b27a(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref) {
    return {
        focusNext (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {
        }) {
            let root = ref.current;
            let { from: from , tabbable: tabbable , wrap: wrap  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                previousNode = $9bf71ea28793e738$var$last(walker);
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {
        }) {
            let root = ref.current;
            let { tabbable: tabbable  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}


var $907718708eab68af$exports = {};

$parcel$export($907718708eab68af$exports, "FocusRing", () => $907718708eab68af$export$1a38b4ad7f578e1d);



var $f7dceffc5ad7768b$exports = {};

$parcel$export($f7dceffc5ad7768b$exports, "useFocusRing", () => $f7dceffc5ad7768b$export$4e328f61c538687f);



function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {
}) {
    let { autoFocus: autoFocus = false , isTextInput: isTextInput , within: within  } = props;
    let state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        isFocused: false,
        isFocusVisible: autoFocus || Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["isFocusVisible"])()
    }).current;
    let [isFocused1, setFocused] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    let [isFocusVisibleState, setFocusVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(()=>state.isFocused && state.isFocusVisible
    );
    let updateState = ()=>setFocusVisible(state.isFocused && state.isFocusVisible)
    ;
    let onFocusChange = (isFocused)=>{
        state.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    };
    Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["useFocusVisibleListener"])((isFocusVisible)=>{
        state.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["useFocus"])({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["useFocusWithin"])({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused1,
        isFocusVisible: state.isFocused && isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
    let { children: children , focusClass: focusClass , focusRingClass: focusRingClass  } = props;
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = $f7dceffc5ad7768b$export$4e328f61c538687f(props);
    let child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["mergeProps"])(child.props, {
        ...focusProps,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    })));
}


var $e6afbd83fe6ebbd2$exports = {};

$parcel$export($e6afbd83fe6ebbd2$exports, "FocusableProvider", () => $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5);
$parcel$export($e6afbd83fe6ebbd2$exports, "useFocusable", () => $e6afbd83fe6ebbd2$export$4c014de7c8940b4c);



let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($e6afbd83fe6ebbd2$var$FocusableContext) || {
    };
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useSyncRef"])(context, ref);
    // eslint-disable-next-line
    let { ref: _ , ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children , ...otherProps } = props;
    let context = {
        ...otherProps,
        ref: ref
    };
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children));
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["useFocus"])(props);
    let { keyboardProps: keyboardProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["useKeyboard"])(props);
    let interactions = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["mergeProps"])(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {
    } : domProps;
    let autoFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.autoFocus);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (autoFocusRef.current && domRef.current) domRef.current.focus();
        autoFocusRef.current = false;
    }, []);
    return {
        focusableProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["mergeProps"])({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}







//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/i18n/dist/module.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-aria/i18n/dist/module.js ***!
  \******************************************************/
/*! exports provided: I18nProvider, useLocale, useMessageFormatter, useDateFormatter, useNumberFormatter, useCollator, useFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nProvider", function() { return $18f2051aff69b9bf$export$a54013f0d02a8f82; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocale", function() { return $18f2051aff69b9bf$export$43bb16f9c6d9e3f7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMessageFormatter", function() { return $321bc95feeb923dd$export$ec23bf898b1eed85; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDateFormatter", function() { return $896ba0a80a8f4d36$export$85fd5fdf27bacc79; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNumberFormatter", function() { return $a916eb452884faea$export$b7a616150fdb9f44; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCollator", function() { return $325a3faab7a68acd$export$a16aca283550c30d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFilter", function() { return $bb77f239b46e8c72$export$3274cf84b703fff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/module.js");
/* harmony import */ var _internationalized_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internationalized/message */ "./node_modules/@internationalized/message/dist/module.js");
/* harmony import */ var _internationalized_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internationalized/date */ "./node_modules/@internationalized/date/dist/module.js");
/* harmony import */ var _internationalized_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internationalized/number */ "./node_modules/@internationalized/number/dist/module.js");






function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $18f2051aff69b9bf$exports = {};

$parcel$export($18f2051aff69b9bf$exports, "I18nProvider", () => $18f2051aff69b9bf$export$a54013f0d02a8f82);
$parcel$export($18f2051aff69b9bf$exports, "useLocale", () => $18f2051aff69b9bf$export$43bb16f9c6d9e3f7);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(locale) {
    // If the Intl.Locale API is available, use it to get the script for the locale.
    // This is more accurate than guessing by language, since languages can be written in multiple scripts.
    // @ts-ignore
    if (Intl.Locale) {
        // @ts-ignore
        let script = new Intl.Locale(locale).maximize().script;
        return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = locale.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}





function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    // @ts-ignore
    let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    return {
        locale: locale,
        direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = Object(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__["useIsSSR"])();
    let [defaultLocale, setDefaultLocale] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])($1e5a04cdaf7d1af8$var$currentLocale);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}



const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale , children: children  } = props;
    let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
    let value = locale ? {
        locale: locale,
        direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? 'rtl' : 'ltr'
    } : defaultLocale;
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children));
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
    let context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}


var $321bc95feeb923dd$exports = {};

$parcel$export($321bc95feeb923dd$exports, "useMessageFormatter", () => $321bc95feeb923dd$export$ec23bf898b1eed85);



const $321bc95feeb923dd$var$cache = new WeakMap();
function $321bc95feeb923dd$var$getCachedDictionary(strings) {
    let dictionary = $321bc95feeb923dd$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new _internationalized_message__WEBPACK_IMPORTED_MODULE_2__["MessageDictionary"](strings);
        $321bc95feeb923dd$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $321bc95feeb923dd$export$ec23bf898b1eed85(strings) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let dictionary = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>$321bc95feeb923dd$var$getCachedDictionary(strings)
    , [
        strings
    ]);
    let formatter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>new _internationalized_message__WEBPACK_IMPORTED_MODULE_2__["MessageFormatter"](locale, dictionary)
    , [
        locale,
        dictionary
    ]);
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((key, variables)=>formatter.format(key, variables)
    , [
        formatter
    ]);
}


var $896ba0a80a8f4d36$exports = {};

$parcel$export($896ba0a80a8f4d36$exports, "useDateFormatter", () => $896ba0a80a8f4d36$export$85fd5fdf27bacc79);



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    let lastOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    if (options && lastOptions.current && $896ba0a80a8f4d36$var$isEqual(options, lastOptions.current)) options = lastOptions.current;
    lastOptions.current = options;
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>new _internationalized_date__WEBPACK_IMPORTED_MODULE_3__["DateFormatter"](locale, options)
    , [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


var $a916eb452884faea$exports = {};

$parcel$export($a916eb452884faea$exports, "useNumberFormatter", () => $a916eb452884faea$export$b7a616150fdb9f44);



function $a916eb452884faea$export$b7a616150fdb9f44(options = {
}) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>new _internationalized_number__WEBPACK_IMPORTED_MODULE_4__["NumberFormatter"](locale, options)
    , [
        locale,
        options
    ]);
}


var $325a3faab7a68acd$exports = {};

$parcel$export($325a3faab7a68acd$exports, "useCollator", () => $325a3faab7a68acd$export$a16aca283550c30d);

let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale  } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1
    ).join() : '');
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}


var $bb77f239b46e8c72$exports = {};

$parcel$export($bb77f239b46e8c72$exports, "useFilter", () => $bb77f239b46e8c72$export$3274cf84b703fff);

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = $325a3faab7a68acd$export$a16aca283550c30d({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    return {
        startsWith (string, substring) {
            if (substring.length === 0) return true;
            // Normalize both strings so we can slice safely
            // TODO: take into account the ignorePunctuation option as well...
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(0, substring.length), substring) === 0;
        },
        endsWith (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            return collator.compare(string.slice(-substring.length), substring) === 0;
        },
        contains (string, substring) {
            if (substring.length === 0) return true;
            string = string.normalize('NFC');
            substring = substring.normalize('NFC');
            let scan = 0;
            let sliceLen = substring.length;
            for(; scan + sliceLen <= string.length; scan++){
                let slice = string.slice(scan, scan + sliceLen);
                if (collator.compare(substring, slice) === 0) return true;
            }
            return false;
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/interactions/dist/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-aria/interactions/dist/module.js ***!
  \**************************************************************/
/*! exports provided: Pressable, PressResponder, useFocus, isFocusVisible, getInteractionModality, setInteractionModality, useInteractionModality, useFocusVisible, useFocusVisibleListener, useFocusWithin, useHover, useInteractOutside, useKeyboard, useMove, usePress, useScrollWheel, useLongPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pressable", function() { return $3b117e43dc0ca95d$export$27c701ed9e449e99; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressResponder", function() { return $f1ab8c75478c6f73$export$3351871ee4b288b8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocus", function() { return $a1ea59d68270f0dd$export$f8168d8dd8fd66e6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusVisible", function() { return $507fabe10e71c6fb$export$b9b3dfddab17db27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInteractionModality", function() { return $507fabe10e71c6fb$export$630ff653c5ada6a9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInteractionModality", function() { return $507fabe10e71c6fb$export$8397ddfc504fdb9a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInteractionModality", function() { return $507fabe10e71c6fb$export$98e20ec92f614cfe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusVisible", function() { return $507fabe10e71c6fb$export$ffd9e5021c1fb2d6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusVisibleListener", function() { return $507fabe10e71c6fb$export$ec71b4b83ac08ec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusWithin", function() { return $9ab94262bd0047c7$export$420e68273165f4ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return $6179b936705e76d3$export$ae780daf29e6d456; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInteractOutside", function() { return $e0b6e0b68ec7f50f$export$872b660ac5a1ff98; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboard", function() { return $46d819fcbaf35654$export$8f71654801c2f7cd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMove", function() { return $e8a7022cf87cba2a$export$36da96379f79f245; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePress", function() { return $f6c31cce2adf654f$export$45712eceda6fad21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollWheel", function() { return $7d0a636d7a4dcefd$export$2123ff2b87c81ca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLongPress", function() { return $8a26561d2877236e$export$c24ed0104d07eab9; });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3b117e43dc0ca95d$exports = {};

$parcel$export($3b117e43dc0ca95d$exports, "Pressable", () => $3b117e43dc0ca95d$export$27c701ed9e449e99);

var $f6c31cce2adf654f$exports = {};

$parcel$export($f6c31cce2adf654f$exports, "usePress", () => $f6c31cce2adf654f$export$45712eceda6fad21);

// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = 'default';
let $14c0b72509d70225$var$savedUserSelect = '';
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if (Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["isIOS"])()) {
        if ($14c0b72509d70225$var$state === 'default') {
            $14c0b72509d70225$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
            document.documentElement.style.webkitUserSelect = 'none';
        }
        $14c0b72509d70225$var$state = 'disabled';
    } else if (target) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = 'none';
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if (Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["isIOS"])()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== 'disabled') return;
        $14c0b72509d70225$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["runAfterTransition"])(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === 'restoring') {
                    if (document.documentElement.style.webkitUserSelect === 'none') document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
                    $14c0b72509d70225$var$savedUserSelect = '';
                    $14c0b72509d70225$var$state = 'default';
                }
            });
        }, 300);
    } else // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
        let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
        if (target.style.userSelect === 'none') target.style.userSelect = targetOldUserSelect;
        if (target.getAttribute('style') === '') target.removeAttribute('style');
        $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
}






function $8a9cb279dc87e130$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    return event.detail === 0 && !event.pointerType;
}
class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true
        ;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {
    }
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
        isFocused: false,
        onBlur: onBlur,
        observer: null
    });
    let state1 = stateRef.current;
    state1.onBlur = onBlur;
    // Clean up MutationObserver on unmount. See below.
    // eslint-disable-next-line arrow-body-style
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(()=>{
        return ()=>{
            if (state1.observer) {
                state1.observer.disconnect();
                state1.observer = null;
            }
        };
    }, [
        state1
    ]);
    // This function is called during a React onFocus event.
    return (e1)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e1.target instanceof HTMLButtonElement || e1.target instanceof HTMLInputElement || e1.target instanceof HTMLTextAreaElement || e1.target instanceof HTMLSelectElement) {
            state1.isFocused = true;
            let target = e1.target;
            let onBlurHandler = (e)=>{
                var // For backward compatibility, dispatch a (fake) React synthetic event.
                ref;
                let state = stateRef.current;
                state.isFocused = false;
                if (target.disabled) (ref = state.onBlur) === null || ref === void 0 ? void 0 : ref.call(state, new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e));
                // We no longer need the MutationObserver once the target is blurred.
                if (state.observer) {
                    state.observer.disconnect();
                    state.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            state1.observer = new MutationObserver(()=>{
                if (state1.isFocused && target.disabled) {
                    state1.observer.disconnect();
                    target.dispatchEvent(new FocusEvent('blur'));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true
                    }));
                }
            });
            state1.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    };
}



const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';


function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
    if (context) {
        let { register: register , ...contextProps } = context;
        props = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(contextProps, props);
        register();
    }
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSyncRef"])(context, props.ref);
    return props;
}
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress1 , onPressChange: onPressChange1 , onPressStart: onPressStart1 , onPressEnd: onPressEnd1 , onPressUp: onPressUp1 , isDisabled: isDisabled1 , isPressed: isPressedProp , preventFocusOnPress: preventFocusOnPress , shouldCancelOnPointerExit: shouldCancelOnPointerExit , allowTextSelectionOnPress: allowTextSelectionOnPress , // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _ , ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let propsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    propsRef.current = {
        onPress: onPress1,
        onPressChange: onPressChange1,
        onPressStart: onPressStart1,
        onPressEnd: onPressEnd1,
        onPressUp: onPressUp1,
        isDisabled: isDisabled1,
        shouldCancelOnPointerExit: shouldCancelOnPointerExit
    };
    let [isPressed, setPressed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    let ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        ignoreClickAfterPress: false,
        didFirePressStart: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null
    });
    let { addGlobalListener: addGlobalListener , removeAllGlobalListeners: removeAllGlobalListeners  } = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useGlobalListeners"])();
    let pressProps1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(()=>{
        let state = ref.current;
        let triggerPressStart = (originalEvent, pointerType)=>{
            let { onPressStart: onPressStart , onPressChange: onPressChange , isDisabled: isDisabled  } = propsRef.current;
            if (isDisabled || state.didFirePressStart) return;
            if (onPressStart) onPressStart({
                type: 'pressstart',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
            if (onPressChange) onPressChange(true);
            state.didFirePressStart = true;
            setPressed(true);
        };
        let triggerPressEnd = (originalEvent, pointerType, wasPressed = true)=>{
            let { onPressEnd: onPressEnd , onPressChange: onPressChange , onPress: onPress , isDisabled: isDisabled  } = propsRef.current;
            if (!state.didFirePressStart) return;
            state.ignoreClickAfterPress = true;
            state.didFirePressStart = false;
            if (onPressEnd) onPressEnd({
                type: 'pressend',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
            if (onPressChange) onPressChange(false);
            setPressed(false);
            if (onPress && wasPressed && !isDisabled) onPress({
                type: 'press',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let triggerPressUp = (originalEvent, pointerType)=>{
            let { onPressUp: onPressUp , isDisabled: isDisabled  } = propsRef.current;
            if (isDisabled) return;
            if (onPressUp) onPressUp({
                type: 'pressup',
                pointerType: pointerType,
                target: originalEvent.currentTarget,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let cancel = (e)=>{
            if (state.isPressed) {
                if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isPressed = false;
                state.isOverTarget = false;
                state.activePointerId = null;
                state.pointerType = null;
                removeAllGlobalListeners();
                if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
            }
        };
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
                    e.stopPropagation();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        triggerPressStart(e, 'keyboard');
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred.
                        addGlobalListener(document, 'keyup', onKeyUp, false);
                    }
                }
            },
            onKeyUp (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target)) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0) {
                    e.stopPropagation();
                    if (isDisabled1) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === 'virtual' || $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled1 && !preventFocusOnPress) Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["focusWithoutScrolling"])(e.currentTarget);
                        triggerPressStart(e, 'virtual');
                        triggerPressUp(e, 'virtual');
                        triggerPressEnd(e, 'virtual');
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e)) {
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target)) e.preventDefault();
                e.stopPropagation();
                state.isPressed = false;
                let target = e.target;
                triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', state.target.contains(target));
                removeAllGlobalListeners();
                // If the target is a link, trigger the click method to open the URL,
                // but defer triggering pressEnd until onClick event handler.
                if (state.target.contains(target) && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') state.target.click();
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ($f6c31cce2adf654f$var$isVirtualPointerEvent(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                state.pointerType = e.pointerType;
                e.stopPropagation();
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled1 && !preventFocusOnPress) Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["focusWithoutScrolling"])(e.currentTarget);
                    if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
                    triggerPressStart(e, state.pointerType);
                    addGlobalListener(document, 'pointermove', onPointerMove, false);
                    addGlobalListener(document, 'pointerup', onPointerUp, false);
                    addGlobalListener(document, 'pointercancel', onPointerCancel, false);
                }
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === 'virtual') return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
                    if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                e.stopPropagation();
                if (state.ignoreEmulatedMouseEvents) return;
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = $8a9cb279dc87e130$export$60278871457622de(e.nativeEvent) ? 'virtual' : 'mouse';
                if (!isDisabled1 && !preventFocusOnPress) Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["focusWithoutScrolling"])(e.currentTarget);
                triggerPressStart(e, state.pointerType);
                addGlobalListener(document, 'mouseup', onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = true;
                    triggerPressStart(e, state.pointerType);
                }
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = false;
                    triggerPressEnd(e, state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType);
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = 'touch';
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled1 && !preventFocusOnPress) Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["focusWithoutScrolling"])(e.currentTarget);
                if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
                triggerPressStart(e, state.pointerType);
                addGlobalListener(window, 'scroll', onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (!state.isPressed) return;
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart(e, state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd(e, state.pointerType, false);
                    if (propsRef.current.shouldCancelOnPointerExit) cancel(e);
                }
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (!state.isPressed) return;
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    triggerPressUp(e, state.pointerType);
                    triggerPressEnd(e, state.pointerType);
                } else if (state.isOverTarget) triggerPressEnd(e, state.pointerType, false);
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel(e);
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled1,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    // eslint-disable-next-line arrow-body-style
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{
        return ()=>{
            if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(ref.current.target);
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(domProps, pressProps1)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event) {
    const { key: key , code: code , target: target  } = event;
    const element = target;
    const { tagName: tagName , isContentEditable: isContentEditable  } = element;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && (!$f6c31cce2adf654f$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
    !(role === 'link' && key !== 'Enter');
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches  } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = point.width / 2 || point.radiusX || 0;
    let offsetY = point.height / 2 || point.radiusY || 0;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
    // We cannot prevent default if the target is a draggable element.
    return !target.draggable;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target) {
    return !((target.tagName === 'INPUT' || target.tagName === 'BUTTON') && target.type === 'submit');
}
function $f6c31cce2adf654f$var$isVirtualPointerEvent(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216
    return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0;
}



const $3b117e43dc0ca95d$export$27c701ed9e449e99 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(({ children: children , ...props }, ref)=>{
    let newRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    ref = ref !== null && ref !== void 0 ? ref : newRef;
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        ...props,
        ref: ref
    });
    let child = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(children);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, // @ts-ignore
    {
        ref: ref,
        ...Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(child.props, pressProps)
    }));
});


var $f1ab8c75478c6f73$exports = {};

$parcel$export($f1ab8c75478c6f73$exports, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b8);



const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(({ children: children , ...props }, ref)=>{
    let isRegistered = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    let prevContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
    let context = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(prevContext || {
    }, {
        ...props,
        ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSyncRef"])(prevContext, ref);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{
        if (!isRegistered.current) console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
    }, []);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb5.Provider, {
        value: context
    }, children));
});


var $a1ea59d68270f0dd$exports = {};

$parcel$export($a1ea59d68270f0dd$exports, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e6);

function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let onBlur;
    if (!props.isDisabled && (props.onBlur || props.onFocusChange)) onBlur = (e)=>{
        if (e.target === e.currentTarget) {
            if (props.onBlur) props.onBlur(e);
            if (props.onFocusChange) props.onFocusChange(false);
            return true;
        }
    };
    else onBlur = null;
    let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
    let onFocus;
    if (!props.isDisabled && (props.onFocus || props.onFocusChange || props.onBlur)) onFocus = (e)=>{
        if (e.target === e.currentTarget) {
            if (props.onFocus) props.onFocus(e);
            if (props.onFocusChange) props.onFocusChange(true);
            onSyntheticFocus(e);
        }
    };
    return {
        focusProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


var $507fabe10e71c6fb$exports = {};

$parcel$export($507fabe10e71c6fb$exports, "isFocusVisible", () => $507fabe10e71c6fb$export$b9b3dfddab17db27);
$parcel$export($507fabe10e71c6fb$exports, "getInteractionModality", () => $507fabe10e71c6fb$export$630ff653c5ada6a9);
$parcel$export($507fabe10e71c6fb$exports, "setInteractionModality", () => $507fabe10e71c6fb$export$8397ddfc504fdb9a);
$parcel$export($507fabe10e71c6fb$exports, "useInteractionModality", () => $507fabe10e71c6fb$export$98e20ec92f614cfe);
$parcel$export($507fabe10e71c6fb$exports, "useFocusVisible", () => $507fabe10e71c6fb$export$ffd9e5021c1fb2d6);
$parcel$export($507fabe10e71c6fb$exports, "useFocusVisibleListener", () => $507fabe10e71c6fb$export$ec71b4b83ac08ec3);



let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["isMac"])() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ($8a9cb279dc87e130$export$60278871457622de(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
    if (typeof window === 'undefined' || $507fabe10e71c6fb$var$hasSetupGlobalListeners) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    document.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    window.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    window.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        document.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        document.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    else document.addEventListener('DOMContentLoaded', $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== 'pointer';
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])($507fabe10e71c6fb$var$currentModality);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return modality;
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    return !(isTextInput && modality === 'keyboard' && e instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {
}) {
    let { isTextInput: isTextInput , autoFocus: autoFocus  } = props;
    let [isFocusVisibleState, setFocusVisible] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3(($507fabe10e71c6fb$export$b9b3dfddab17db27)=>{
        setFocusVisible($507fabe10e71c6fb$export$b9b3dfddab17db27);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, deps);
}


var $9ab94262bd0047c7$exports = {};

$parcel$export($9ab94262bd0047c7$exports, "useFocusWithin", () => $9ab94262bd0047c7$export$420e68273165f4ec);


function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
        isFocusWithin: false
    }).current;
    let onBlur = props.isDisabled ? null : (e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.isFocusWithin = false;
            if (props.onBlurWithin) props.onBlurWithin(e);
            if (props.onFocusWithinChange) props.onFocusWithinChange(false);
        }
    };
    let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
    let onFocus = props.isDisabled ? null : (e)=>{
        if (!state.isFocusWithin) {
            if (props.onFocusWithin) props.onFocusWithin(e);
            if (props.onFocusWithinChange) props.onFocusWithinChange(true);
            state.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


var $6179b936705e76d3$exports = {};

$parcel$export($6179b936705e76d3$exports, "useHover", () => $6179b936705e76d3$export$ae780daf29e6d456);

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart , onHoverChange: onHoverChange , onHoverEnd: onHoverEnd , isDisabled: isDisabled  } = props;
    let [isHovered, setHovered] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    let state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps1 , triggerHoverEnd: triggerHoverEnd1  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {
        };
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd1({
            currentTarget: state.target
        }, state.pointerType);
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps1,
        isHovered: isHovered
    };
}


var $e0b6e0b68ec7f50f$exports = {};

$parcel$export($e0b6e0b68ec7f50f$exports, "useInteractOutside", () => $e0b6e0b68ec7f50f$export$872b660ac5a1ff98);

function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref , onInteractOutside: onInteractOutside , isDisabled: isDisabled , onInteractOutsideStart: onInteractOutsideStart  } = props;
    let stateRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false,
        onInteractOutside: onInteractOutside,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let state = stateRef.current;
    state.onInteractOutside = onInteractOutside;
    state.onInteractOutsideStart = onInteractOutsideStart;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{
        if (isDisabled) return;
        let onPointerDown = (e)=>{
            if ($e0b6e0b68ec7f50f$var$isValidEvent(e, ref) && state.onInteractOutside) {
                if (state.onInteractOutsideStart) state.onInteractOutsideStart(e);
                state.isPointerDown = true;
            }
        };
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onPointerUp = (e)=>{
                if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            // changing these to capture phase fixed combobox
            document.addEventListener('pointerdown', onPointerDown, true);
            document.addEventListener('pointerup', onPointerUp, true);
            return ()=>{
                document.removeEventListener('pointerdown', onPointerDown, true);
                document.removeEventListener('pointerup', onPointerUp, true);
            };
        } else {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.onInteractOutside && state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
                    state.isPointerDown = false;
                    state.onInteractOutside(e);
                }
            };
            document.addEventListener('mousedown', onPointerDown, true);
            document.addEventListener('mouseup', onMouseUp, true);
            document.addEventListener('touchstart', onPointerDown, true);
            document.addEventListener('touchend', onTouchEnd, true);
            return ()=>{
                document.removeEventListener('mousedown', onPointerDown, true);
                document.removeEventListener('mouseup', onMouseUp, true);
                document.removeEventListener('touchstart', onPointerDown, true);
                document.removeEventListener('touchend', onTouchEnd, true);
            };
        }
    }, [
        ref,
        state,
        isDisabled
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    // if the event target is no longer in the document
    if (event.target) {
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
    }
    return ref.current && !ref.current.contains(event.target);
}


var $46d819fcbaf35654$exports = {};

$parcel$export($46d819fcbaf35654$exports, "useKeyboard", () => $46d819fcbaf35654$export$8f71654801c2f7cd);
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}


function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {
        } : {
            onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyDown),
            onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyUp)
        }
    };
}


var $e8a7022cf87cba2a$exports = {};

$parcel$export($e8a7022cf87cba2a$exports, "useMove", () => $e8a7022cf87cba2a$export$36da96379f79f245);



function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart , onMove: onMove , onMoveEnd: onMoveEnd  } = props;
    let state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useGlobalListeners"])();
    let moveProps1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(()=>{
        let moveProps = {
        };
        let start = ()=>{
            $14c0b72509d70225$export$16a4697467175487();
            state.current.didMove = false;
        };
        let move = (originalEvent, pointerType, deltaX, deltaY)=>{
            if (deltaX === 0 && deltaY === 0) return;
            if (!state.current.didMove) {
                state.current.didMove = true;
                onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
                    type: 'movestart',
                    pointerType: pointerType,
                    shiftKey: originalEvent.shiftKey,
                    metaKey: originalEvent.metaKey,
                    ctrlKey: originalEvent.ctrlKey,
                    altKey: originalEvent.altKey
                });
            }
            onMove({
                type: 'move',
                pointerType: pointerType,
                deltaX: deltaX,
                deltaY: deltaY,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        let end = (originalEvent, pointerType)=>{
            $14c0b72509d70225$export$b0d6fa1ab32e3295();
            if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
                type: 'moveend',
                pointerType: pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        };
        if (typeof PointerEvent === 'undefined') {
            let onMouseMove = (e)=>{
                if (e.button === 0) {
                    move(e, 'mouse', e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onMouseUp = (e)=>{
                if (e.button === 0) {
                    end(e, 'mouse');
                    removeGlobalListener(window, 'mousemove', onMouseMove, false);
                    removeGlobalListener(window, 'mouseup', onMouseUp, false);
                }
            };
            moveProps.onMouseDown = (e)=>{
                if (e.button === 0) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    addGlobalListener(window, 'mousemove', onMouseMove, false);
                    addGlobalListener(window, 'mouseup', onMouseUp, false);
                }
            };
            let onTouchMove = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id
                );
                if (touch >= 0) {
                    let { pageX: pageX , pageY: pageY  } = e.changedTouches[touch];
                    move(e, 'touch', pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: pageX,
                        pageY: pageY
                    };
                }
            };
            let onTouchEnd = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id
                );
                if (touch >= 0) {
                    end(e, 'touch');
                    state.current.id = null;
                    removeGlobalListener(window, 'touchmove', onTouchMove);
                    removeGlobalListener(window, 'touchend', onTouchEnd);
                    removeGlobalListener(window, 'touchcancel', onTouchEnd);
                }
            };
            moveProps.onTouchStart = (e)=>{
                if (e.changedTouches.length === 0 || state.current.id != null) return;
                let { pageX: pageX , pageY: pageY , identifier: identifier  } = e.changedTouches[0];
                start();
                e.stopPropagation();
                e.preventDefault();
                state.current.lastPosition = {
                    pageX: pageX,
                    pageY: pageY
                };
                state.current.id = identifier;
                addGlobalListener(window, 'touchmove', onTouchMove, false);
                addGlobalListener(window, 'touchend', onTouchEnd, false);
                addGlobalListener(window, 'touchcancel', onTouchEnd, false);
            };
        } else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(e, pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    end(e, pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, 'pointermove', onPointerMove, false);
                    removeGlobalListener(window, 'pointerup', onPointerUp, false);
                    removeGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, 'pointermove', onPointerMove, false);
                    addGlobalListener(window, 'pointerup', onPointerUp, false);
                    addGlobalListener(window, 'pointercancel', onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            move(e, 'keyboard', deltaX, deltaY);
            end(e, 'keyboard');
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case 'Left':
                case 'ArrowLeft':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case 'Right':
                case 'ArrowRight':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case 'Up':
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case 'Down':
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        state,
        onMoveStart,
        onMove,
        onMoveEnd,
        addGlobalListener,
        removeGlobalListener
    ]);
    return {
        moveProps: moveProps1
    };
}



var $7d0a636d7a4dcefd$exports = {};

$parcel$export($7d0a636d7a4dcefd$exports, "useScrollWheel", () => $7d0a636d7a4dcefd$export$2123ff2b87c81ca);


function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
    let { onScroll: onScroll , isDisabled: isDisabled  } = props;
    let onScrollHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useEvent"])(ref, 'wheel', isDisabled ? null : onScrollHandler);
}


var $8a26561d2877236e$exports = {};

$parcel$export($8a26561d2877236e$exports, "useLongPress", () => $8a26561d2877236e$export$c24ed0104d07eab9);



const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled , onLongPressStart: onLongPressStart , onLongPressEnd: onLongPressEnd , onLongPress: onLongPress , threshold: threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD , accessibilityDescription: accessibilityDescription  } = props;
    const timeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useGlobalListeners"])();
    let { pressProps: pressProps  } = $f6c31cce2adf654f$export$45712eceda6fad21({
        isDisabled: isDisabled,
        onPressStart (e1) {
            if (e1.pointerType === 'mouse' || e1.pointerType === 'touch') {
                if (onLongPressStart) onLongPressStart({
                    ...e1,
                    type: 'longpressstart'
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e1.target.dispatchEvent(new PointerEvent('pointercancel', {
                        bubbles: true
                    }));
                    if (onLongPress) onLongPress({
                        ...e1,
                        type: 'longpress'
                    });
                    timeRef.current = null;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e1.pointerType === 'touch') {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e1.target, 'contextmenu', onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, 'pointerup', ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e1.target, 'contextmenu', onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === 'mouse' || e.pointerType === 'touch')) onLongPressEnd({
                ...e,
                type: 'longpressend'
            });
        }
    });
    let descriptionProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useDescription"])(onLongPress && !isDisabled ? accessibilityDescription : null);
    return {
        longPressProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(pressProps, descriptionProps)
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/label/dist/module.js":
/*!*******************************************************!*\
  !*** ./node_modules/@react-aria/label/dist/module.js ***!
  \*******************************************************/
/*! exports provided: useField, useLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useField", function() { return $2baaea4c71418dea$export$294aa081a6c6f55d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLabel", function() { return $d191a55c9702f145$export$8467354a121f1b9f; });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2baaea4c71418dea$exports = {};

$parcel$export($2baaea4c71418dea$exports, "useField", () => $2baaea4c71418dea$export$294aa081a6c6f55d);
var $d191a55c9702f145$exports = {};

$parcel$export($d191a55c9702f145$exports, "useLabel", () => $d191a55c9702f145$export$8467354a121f1b9f);

function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id , label: label , 'aria-labelledby': ariaLabelledby , 'aria-label': ariaLabel , labelElementType: labelElementType = 'label'  } = props;
    id = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useId"])(id);
    let labelId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useId"])();
    let labelProps = {
    };
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${ariaLabelledby} ${labelId}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useLabels"])({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description , errorMessage: errorMessage , validationState: validationState  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = $d191a55c9702f145$export$8467354a121f1b9f(props);
    let descriptionId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSlotId"])([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    let errorMessageId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSlotId"])([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    fieldProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/listbox/dist/module.js":
/*!*********************************************************!*\
  !*** ./node_modules/@react-aria/listbox/dist/module.js ***!
  \*********************************************************/
/*! exports provided: useListBox, useOption, useListBoxSection, listData, getItemId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useListBox", function() { return $c132121280ec012d$export$50eacbbf140a3141; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOption", function() { return $293f70390ea03370$export$497855f14858aa34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useListBoxSection", function() { return $af383d3bef1cfdc9$export$c3f9f39876e4bc7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listData", function() { return $b1f0cad8af73213b$export$3585ede4d035bf14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemId", function() { return $b1f0cad8af73213b$export$9145995848b05025; });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/label */ "./node_modules/@react-aria/label/dist/module.js");
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/selection */ "./node_modules/@react-aria/selection/dist/module.js");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/module.js");






function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c132121280ec012d$exports = {};

$parcel$export($c132121280ec012d$exports, "useListBox", () => $c132121280ec012d$export$50eacbbf140a3141);

var $b1f0cad8af73213b$exports = {};

$parcel$export($b1f0cad8af73213b$exports, "listData", () => $b1f0cad8af73213b$export$3585ede4d035bf14);
$parcel$export($b1f0cad8af73213b$exports, "getItemId", () => $b1f0cad8af73213b$export$9145995848b05025);
const $b1f0cad8af73213b$export$3585ede4d035bf14 = new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}






function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
    let domProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["filterDOMProps"])(props, {
        labelable: true
    });
    let { listProps: listProps  } = Object(_react_aria_selection__WEBPACK_IMPORTED_MODULE_3__["useSelectableList"])({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys
    });
    let { focusWithinProps: focusWithinProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__["useFocusWithin"])({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useId"])(props.id);
    $b1f0cad8af73213b$export$3585ede4d035bf14.set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = Object(_react_aria_label__WEBPACK_IMPORTED_MODULE_2__["useLabel"])({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    return {
        labelProps: labelProps,
        listBoxProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(domProps, focusWithinProps, state.selectionManager.selectionMode === 'multiple' ? {
            'aria-multiselectable': 'true'
        } : {
        }, {
            role: 'listbox',
            ...Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(fieldProps, listProps)
        })
    };
}


var $293f70390ea03370$exports = {};

$parcel$export($293f70390ea03370$exports, "useOption", () => $293f70390ea03370$export$497855f14858aa34);





function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
    let { key: key  } = props;
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    var _isDisabled;
    let isDisabled = (_isDisabled = props.isDisabled) !== null && _isDisabled !== void 0 ? _isDisabled : state.disabledKeys.has(key);
    var _isSelected;
    let isSelected = (_isSelected = props.isSelected) !== null && _isSelected !== void 0 ? _isSelected : state.selectionManager.isSelected(key);
    let isFocused = state.selectionManager.focusedKey === key;
    var _shouldSelectOnPressUp;
    let shouldSelectOnPressUp = (_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _shouldSelectOnPressUp !== void 0 ? _shouldSelectOnPressUp : data.shouldSelectOnPressUp;
    var _shouldFocusOnHover;
    let shouldFocusOnHover = (_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _shouldFocusOnHover !== void 0 ? _shouldFocusOnHover : data.shouldFocusOnHover;
    var _shouldUseVirtualFocus;
    let shouldUseVirtualFocus = (_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _shouldUseVirtualFocus !== void 0 ? _shouldUseVirtualFocus : data.shouldUseVirtualFocus;
    var _isVirtualized;
    let isVirtualized = (_isVirtualized = props.isVirtualized) !== null && _isVirtualized !== void 0 ? _isVirtualized : data.isVirtualized;
    let labelId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSlotId"])();
    let descriptionId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSlotId"])();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!(Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["isMac"])() && Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["isWebKit"])())) {
        optionProps['aria-label'] = props['aria-label'];
        optionProps['aria-labelledby'] = labelId;
        optionProps['aria-describedby'] = descriptionId;
    }
    if (isVirtualized) {
        optionProps['aria-posinset'] = state.collection.getItem(key).index + 1;
        optionProps['aria-setsize'] = Object(_react_stately_collections__WEBPACK_IMPORTED_MODULE_4__["getItemCount"])(state.collection);
    }
    let { itemProps: itemProps , isPressed: isPressed  } = Object(_react_aria_selection__WEBPACK_IMPORTED_MODULE_3__["useSelectableItem"])({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__["useHover"])({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__["isFocusVisible"])()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        optionProps: {
            ...optionProps,
            ...Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(itemProps, hoverProps),
            id: $b1f0cad8af73213b$export$9145995848b05025(state, key)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed
    };
}


var $af383d3bef1cfdc9$exports = {};

$parcel$export($af383d3bef1cfdc9$exports, "useListBoxSection", () => $af383d3bef1cfdc9$export$c3f9f39876e4bc7);

function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useId"])();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, and only use it
            // as a label for the nested group.
            id: headingId,
            'aria-hidden': true
        } : {
        },
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/live-announcer/dist/module.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react-aria/live-announcer/dist/module.js ***!
  \****************************************************************/
/*! exports provided: announce, clearAnnouncer, destroyAnnouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announce", function() { return $319e236875307eab$export$a9b970dcc4ae71a9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAnnouncer", function() { return $319e236875307eab$export$d10ae4f68404609a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyAnnouncer", function() { return $319e236875307eab$export$d8686216b8b81b2f; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/visually-hidden */ "./node_modules/@react-aria/visually-hidden/dist/module.js");




function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $319e236875307eab$exports = {};

$parcel$export($319e236875307eab$exports, "announce", () => $319e236875307eab$export$a9b970dcc4ae71a9);
$parcel$export($319e236875307eab$exports, "clearAnnouncer", () => $319e236875307eab$export$d10ae4f68404609a);
$parcel$export($319e236875307eab$exports, "destroyAnnouncer", () => $319e236875307eab$export$d8686216b8b81b2f);



/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveRegionAnnouncer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
let $319e236875307eab$var$node = null;
let $319e236875307eab$var$messageId = 0;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    $319e236875307eab$var$ensureInstance((announcer)=>announcer.announce(message, assertiveness, timeout)
    );
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    $319e236875307eab$var$ensureInstance((announcer)=>announcer.clear(assertiveness)
    );
}
function $319e236875307eab$export$d8686216b8b81b2f() {
    if ($319e236875307eab$var$liveRegionAnnouncer.current) {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode($319e236875307eab$var$node);
        document.body.removeChild($319e236875307eab$var$node);
        $319e236875307eab$var$node = null;
    }
}
/**
 * Ensures we only have one instance of the announcer so that we don't have elements competing.
 */ function $319e236875307eab$var$ensureInstance(callback) {
    if (!$319e236875307eab$var$liveRegionAnnouncer.current) {
        $319e236875307eab$var$node = document.createElement('div');
        $319e236875307eab$var$node.dataset.liveAnnouncer = 'true';
        document.body.prepend($319e236875307eab$var$node);
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($319e236875307eab$var$LiveRegionAnnouncer, {
            ref: $319e236875307eab$var$liveRegionAnnouncer
        }), $319e236875307eab$var$node, ()=>callback($319e236875307eab$var$liveRegionAnnouncer.current)
        );
    } else callback($319e236875307eab$var$liveRegionAnnouncer.current);
}
const $319e236875307eab$var$LiveRegionAnnouncer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_, ref)=>{
    let [assertiveMessages, setAssertiveMessages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    let [politeMessages, setPoliteMessages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    let clear = (assertiveness)=>{
        if (!assertiveness || assertiveness === 'assertive') setAssertiveMessages([]);
        if (!assertiveness || assertiveness === 'polite') setPoliteMessages([]);
    };
    let $319e236875307eab$export$a9b970dcc4ae71a9 = (message1, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY)=>{
        let id = $319e236875307eab$var$messageId++;
        if (assertiveness === 'assertive') setAssertiveMessages((messages)=>[
                ...messages,
                {
                    id: id,
                    text: message1
                }
            ]
        );
        else setPoliteMessages((messages)=>[
                ...messages,
                {
                    id: id,
                    text: message1
                }
            ]
        );
        if (message1 !== '') setTimeout(()=>{
            if (assertiveness === 'assertive') setAssertiveMessages((messages)=>messages.filter((message)=>message.id !== id
                )
            );
            else setPoliteMessages((messages)=>messages.filter((message)=>message.id !== id
                )
            );
        }, timeout);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, ()=>({
            announce: $319e236875307eab$export$a9b970dcc4ae71a9,
            clear: clear
        })
    );
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($319e236875307eab$var$MessageBlock, {
        "aria-live": "assertive"
    }, assertiveMessages.map((message)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: message.id
        }, message.text)
    )), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($319e236875307eab$var$MessageBlock, {
        "aria-live": "polite"
    }, politeMessages.map((message)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: message.id
        }, message.text)
    ))));
});
function $319e236875307eab$var$MessageBlock({ children: children , 'aria-live': ariaLive  }) {
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__["VisuallyHidden"], {
        role: "log",
        "aria-live": ariaLive,
        "aria-relevant": "additions"
    }, children));
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/menu/dist/module.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-aria/menu/dist/module.js ***!
  \******************************************************/
/*! exports provided: useMenuTrigger, useMenu, useMenuItem, useMenuSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenuTrigger", function() { return $168583247155ddda$export$dc9c12ed27dd1b49; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenu", function() { return $d5336fe17ce95402$export$38eaa17faae8f579; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenuItem", function() { return $a2e5df62f93c7633$export$9d32628fc2aea7da; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenuSection", function() { return $3e5eb2498db5b506$export$73f7a44322579622; });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/module.js");
/* harmony import */ var _react_aria_overlays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/overlays */ "./node_modules/@react-aria/overlays/dist/module.js");
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/selection */ "./node_modules/@react-aria/selection/dist/module.js");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/module.js");







function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $168583247155ddda$exports = {};

$parcel$export($168583247155ddda$exports, "useMenuTrigger", () => $168583247155ddda$export$dc9c12ed27dd1b49);
var $9bdd31893c9700c3$exports = {};
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = JSON.parse("{\"longPressMessage\":\"???????? ???????????? ???? ???????? ?????? Alt + ?????????? ?????????? ???????? ??????????????\"}");


var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = JSON.parse("{\"longPressMessage\":\"?????????????????? ?????????????????????????? ?????? ?????????????????? Alt+ ?????????????? ????????????, ???? ???? ???????????????? ????????????\"}");


var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = JSON.parse("{\"longPressMessage\":\"Dlouh??m stiskem nebo stisknut??m kl??ves Alt + ??ipka dol?? otev??ete nab??dku\"}");


var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = JSON.parse("{\"longPressMessage\":\"Langt tryk eller tryk p?? Alt + pil ned for at ??bne menuen\"}");


var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = JSON.parse("{\"longPressMessage\":\"Dr??cken Sie lange oder dr??cken Sie Alt + Nach-unten, um das Men?? zu ??ffnen\"}");


var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = JSON.parse("{\"longPressMessage\":\"???????????? ???????????????????????? ?? ?????????????? Alt + ???????? ?????????? ?????? ???? ???????????????? ???? ??????????\"}");


var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = JSON.parse("{\"longPressMessage\":\"Long press or press Alt + ArrowDown to open menu\"}");


var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = JSON.parse("{\"longPressMessage\":\"Mantenga pulsado o pulse Alt + flecha abajo para abrir el men??\"}");


var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = JSON.parse("{\"longPressMessage\":\"Men???? avamiseks vajutage pikalt v??i vajutage klahve Alt + allanool\"}");


var $51608325613944d7$exports = {};
$51608325613944d7$exports = JSON.parse("{\"longPressMessage\":\"Avaa valikko painamalla pohjassa tai n??pp??inyhdistelm??ll?? Alt + Alanuoli\"}");


var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = JSON.parse("{\"longPressMessage\":\"Appuyez de mani??re prolong??e ou appuyez sur Alt??+??Fl??che vers le bas pour ouvrir le menu.\"}");


var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = JSON.parse("{\"longPressMessage\":\"?????? ?????????? ?????????? ???? ?????? Alt + ArrowDown ?????? ?????????? ???? ????????????\"}");


var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = JSON.parse("{\"longPressMessage\":\"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika\"}");


var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = JSON.parse("{\"longPressMessage\":\"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny??l gombot a men?? megnyit??s??hoz\"}");


var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = JSON.parse("{\"longPressMessage\":\"Premere a lungo o premere Alt + Freccia gi?? per aprire il menu\"}");


var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = JSON.parse("{\"longPressMessage\":\"?????????????????? Alt+???????????????????????????????????????\"}");


var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = JSON.parse("{\"longPressMessage\":\"?????? ???????????? Alt + ????????? ???????????? ?????? ?????? ??????\"}");


var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = JSON.parse("{\"longPressMessage\":\"Nor??dami atidaryti meniu, nuspaud?? palaikykite arba paspauskite ???Alt + ArrowDown???.\"}");


var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = JSON.parse("{\"longPressMessage\":\"Lai atv??rtu izv??lni, turiet nospiestu vai nospiediet tausti??u kombin??ciju Alt + lejupv??rst?? bulti??a\"}");


var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = JSON.parse("{\"longPressMessage\":\"Langt trykk eller trykk Alt + PilNed for ?? ??pne menyen\"}");


var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = JSON.parse("{\"longPressMessage\":\"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen\"}");


var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = JSON.parse("{\"longPressMessage\":\"Naci??nij i przytrzymaj lub naci??nij klawisze Alt + Strza??ka w d????, aby otworzy?? menu\"}");


var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = JSON.parse("{\"longPressMessage\":\"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu\"}");


var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = JSON.parse("{\"longPressMessage\":\"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu\"}");


var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = JSON.parse("{\"longPressMessage\":\"Ap??sa??i lung sau ap??sa??i pe Alt + s??geat?? ??n jos pentru a deschide meniul\"}");


var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = JSON.parse("{\"longPressMessage\":\"?????????????? ?? ?????????????????????? ?????? ?????????????? Alt + ?????????????? ????????, ?????????? ?????????????? ????????\"}");


var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = JSON.parse("{\"longPressMessage\":\"Ponuku otvor??te dlh??m stla??en??m alebo stla??en??m kl??vesu Alt + kl??vesu so ????pkou nadol\"}");


var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = JSON.parse("{\"longPressMessage\":\"Za odprtje menija pritisnite in dr??ite gumb ali pritisnite Alt+pu????ica navzdol\"}");


var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = JSON.parse("{\"longPressMessage\":\"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni\"}");


var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = JSON.parse("{\"longPressMessage\":\"H??ll nedtryckt eller tryck p?? Alt + pil ned??t f??r att ??ppna menyn\"}");


var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = JSON.parse("{\"longPressMessage\":\"Men??y?? a??mak i??in uzun bas??n veya Alt + A??a???? Ok tu??una bas??n\"}");


var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = JSON.parse("{\"longPressMessage\":\"?????????? ?????? ???????????????? ?????????????????? ???????????????????? ???????????? Alt ?? ?????????????? ????????, ?????? ???????????????? ????????\"}");


var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = JSON.parse("{\"longPressMessage\":\"???????????? Alt + ??????????????????????????????\"}");


var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = JSON.parse("{\"longPressMessage\":\"???????????? Alt+???????????????????????????\"}");


$9bdd31893c9700c3$exports = {
    "ar-AE": $c0398ad35c3639b7$exports,
    "bg-BG": $7af657c4165927c3$exports,
    "cs-CZ": $d95d4da6d531ab81$exports,
    "da-DK": $24ebda9c775dca17$exports,
    "de-DE": $743e0dfca6cab1e9$exports,
    "el-GR": $a2f41026e05f1c84$exports,
    "en-US": $43b800e97c901737$exports,
    "es-ES": $442f5f6ac211e29f$exports,
    "et-EE": $dff280acfeb2d8ac$exports,
    "fi-FI": $51608325613944d7$exports,
    "fr-FR": $c4a1b1eabeaa87be$exports,
    "he-IL": $8c74815cdee18d1b$exports,
    "hr-HR": $fd0e9ef6a7fe0ec9$exports,
    "hu-HU": $a89a74a39eba465a$exports,
    "it-IT": $edc7c66594a0ae8a$exports,
    "ja-JP": $f1ab51510712db52$exports,
    "ko-KR": $f9b672d9b82fa3d6$exports,
    "lt-LT": $a385f3910feda499$exports,
    "lv-LV": $4f1bde932c441789$exports,
    "nb-NO": $914a51a8a594d5be$exports,
    "nl-NL": $89aaf803103bb500$exports,
    "pl-PL": $c685891476dbaaca$exports,
    "pt-BR": $885879b9b10c2959$exports,
    "pt-PT": $6b39616688a51692$exports,
    "ro-RO": $f26362aed63f47e2$exports,
    "ru-RU": $06cbade644558bf0$exports,
    "sk-SK": $0a391ff68f9d59b1$exports,
    "sl-SI": $8193cf0e649c7928$exports,
    "sr-SP": $f398debcce5a5c55$exports,
    "sv-SE": $9e9fef000aa4c013$exports,
    "tr-TR": $c016c8183bbe3d68$exports,
    "uk-UA": $ca4f6c8462244e62$exports,
    "zh-CN": $2d9960c02ccac927$exports,
    "zh-TW": $f1b682a4c8c5631c$exports
};






function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu' , isDisabled: isDisabled , trigger: trigger = 'press'  } = props;
    let menuTriggerId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useId"])();
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = Object(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_3__["useOverlayTrigger"])({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === 'longPress' && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case 'Enter':
            case ' ':
                if (trigger === 'longPress') return;
            // fallthrough
            case 'ArrowDown':
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('first');
                break;
            case 'ArrowUp':
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('last');
                break;
        }
    };
    let formatMessage = Object(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__["useMessageFormatter"])((/*@__PURE__*/$parcel$interopDefault($9bdd31893c9700c3$exports)));
    let { longPressProps: longPressProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__["useLongPress"])({
        accessibilityDescription: formatMessage('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) // If opened with a screen reader, auto focus the first item.
            // Otherwise, the menu itself will be focused.
            state.toggle(e.pointerType === 'virtual' ? 'first' : null);
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) state.toggle();
        }
    };
    triggerProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(triggerProps, trigger === 'press' ? pressProps : longPressProps);
    return {
        menuTriggerProps: {
            ...triggerProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId
        }
    };
}


var $d5336fe17ce95402$exports = {};

$parcel$export($d5336fe17ce95402$exports, "useMenu", () => $d5336fe17ce95402$export$38eaa17faae8f579);


function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true , ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["filterDOMProps"])(props, {
        labelable: true
    });
    let { listProps: listProps  } = Object(_react_aria_selection__WEBPACK_IMPORTED_MODULE_4__["useSelectableList"])({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap
    });
    return {
        menuProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(domProps, {
            role: 'menu',
            ...listProps
        })
    };
}


var $a2e5df62f93c7633$exports = {};

$parcel$export($a2e5df62f93c7633$exports, "useMenuItem", () => $a2e5df62f93c7633$export$9d32628fc2aea7da);




function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    let { isSelected: isSelected , isDisabled: isDisabled , key: key , onClose: onClose , closeOnSelect: closeOnSelect , isVirtualized: isVirtualized , onAction: onAction  } = props;
    let role = 'menuitem';
    if (state.selectionManager.selectionMode === 'single') role = 'menuitemradio';
    else if (state.selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    let labelId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSlotId"])();
    let descriptionId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSlotId"])();
    let keyboardId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useSlotId"])();
    let ariaProps = {
        'aria-disabled': isDisabled,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined
    };
    if (state.selectionManager.selectionMode !== 'none') ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = state.collection.getItem(key).index;
        ariaProps['aria-setsize'] = Object(_react_stately_collections__WEBPACK_IMPORTED_MODULE_5__["getItemCount"])(state.collection);
    }
    let onKeyDown = (e)=>{
        // Ignore repeating events, which may have started on the menu trigger before moving
        // focus to the menu item. We want to wait for a second complete key press sequence.
        if (e.repeat) return;
        switch(e.key){
            case ' ':
                if (!isDisabled && state.selectionManager.selectionMode === 'none' && closeOnSelect !== false && onClose) onClose();
                break;
            case 'Enter':
                // The Enter key should always close on select, except if overridden.
                if (!isDisabled && closeOnSelect !== false && onClose) onClose();
                break;
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType === 'keyboard' && onAction) onAction(key);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') {
            if (onAction) onAction(key);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : state.selectionManager.selectionMode !== 'multiple')) onClose();
        }
    };
    let { itemProps: itemProps  } = Object(_react_aria_selection__WEBPACK_IMPORTED_MODULE_4__["useSelectableItem"])({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true
    });
    let { pressProps: pressProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__["usePress"])({
        onPressStart: onPressStart,
        onPressUp: onPressUp,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__["useHover"])({
        isDisabled: isDisabled,
        onHoverStart () {
            if (!Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__["isFocusVisible"])()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        menuItemProps: {
            ...ariaProps,
            ...Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(itemProps, pressProps, hoverProps, {
                onKeyDown: onKeyDown
            })
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        }
    };
}


var $3e5eb2498db5b506$exports = {};

$parcel$export($3e5eb2498db5b506$exports, "useMenuSection", () => $3e5eb2498db5b506$export$73f7a44322579622);

function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading , 'aria-label': ariaLabel  } = props;
    let headingId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["useId"])();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, and only use it
            // as a label for the nested group.
            id: headingId,
            'aria-hidden': true
        } : {
        },
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/overlays/dist/module.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react-aria/overlays/dist/module.js ***!
  \**********************************************************/
/*! exports provided: useOverlayPosition, useOverlay, useOverlayTrigger, usePreventScroll, ModalProvider, useModalProvider, OverlayProvider, OverlayContainer, useModal, DismissButton, ariaHideOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOverlayPosition", function() { return $2a41e45df1593e64$export$d39e1813b3bdd0e1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOverlay", function() { return $a11501f3d1d39e6c$export$ea8f71083e90600f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOverlayTrigger", function() { return $628037886ba31236$export$f9d5c8beee7d008d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePreventScroll", function() { return $49c51c25361d4cd2$export$ee0f7cc6afcd1c18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProvider", function() { return $f57aed4a881a3485$export$178405afcd8c5eb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useModalProvider", function() { return $f57aed4a881a3485$export$d9aaed4c3ece1bc0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayProvider", function() { return $f57aed4a881a3485$export$bf688221f59024e5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return $f57aed4a881a3485$export$b47c3594eab58386; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useModal", function() { return $f57aed4a881a3485$export$33ffd74ebf07f060; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DismissButton", function() { return $86ea4cb521eb2e37$export$2317d149ed6f78c4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ariaHideOutside", function() { return $5e3802645cc19319$export$1c3ebcada18427bf; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/module.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_query_offset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/query/offset */ "./node_modules/dom-helpers/query/offset.js");
/* harmony import */ var dom_helpers_query_offset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_offset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_query_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/query/position */ "./node_modules/dom-helpers/query/position.js");
/* harmony import */ var dom_helpers_query_position__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_position__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_helpers_query_scrollLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-helpers/query/scrollLeft */ "./node_modules/dom-helpers/query/scrollLeft.js");
/* harmony import */ var dom_helpers_query_scrollLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_scrollLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dom_helpers_query_scrollTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dom-helpers/query/scrollTop */ "./node_modules/dom-helpers/query/scrollTop.js");
/* harmony import */ var dom_helpers_query_scrollTop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_scrollTop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-aria/visually-hidden */ "./node_modules/@react-aria/visually-hidden/dist/module.js");













function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $2a41e45df1593e64$exports = {};

$parcel$export($2a41e45df1593e64$exports, "useOverlayPosition", () => $2a41e45df1593e64$export$d39e1813b3bdd0e1);






const $edcf132a9284368a$var$AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const $edcf132a9284368a$var$CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const $edcf132a9284368a$var$AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {
};
// @ts-ignore
let $edcf132a9284368a$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, top = 0, left = 0;
    let scroll = {
    };
    if (containerNode.tagName === 'BODY') {
        var ref;
        width = (ref = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && ref !== void 0 ? ref : document.documentElement.clientWidth;
        var ref1;
        height = (ref1 = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && ref1 !== void 0 ? ref1 : document.documentElement.clientHeight;
        scroll.top = dom_helpers_query_scrollTop__WEBPACK_IMPORTED_MODULE_7___default()(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_8___default()(containerNode).documentElement) || dom_helpers_query_scrollTop__WEBPACK_IMPORTED_MODULE_7___default()(containerNode);
        scroll.left = dom_helpers_query_scrollLeft__WEBPACK_IMPORTED_MODULE_6___default()(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_8___default()(containerNode).documentElement) || dom_helpers_query_scrollLeft__WEBPACK_IMPORTED_MODULE_6___default()(containerNode);
    } else {
        ({ width: width , height: height , top: top , left: left  } = dom_helpers_query_offset__WEBPACK_IMPORTED_MODULE_4___default()(containerNode));
        scroll.top = dom_helpers_query_scrollTop__WEBPACK_IMPORTED_MODULE_7___default()(containerNode);
        scroll.left = dom_helpers_query_scrollLeft__WEBPACK_IMPORTED_MODULE_6___default()(containerNode);
    }
    return {
        width: width,
        height: height,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $edcf132a9284368a$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
function $edcf132a9284368a$var$getDelta(axis, offset, size, containerDimensions, padding) {
    let containerScroll = containerDimensions.scroll[axis];
    let containerHeight = containerDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
    let startEdgeOffset = offset - padding - containerScroll;
    let endEdgeOffset = offset + padding - containerScroll + size;
    if (startEdgeOffset < 0) return -startEdgeOffset;
    else if (endEdgeOffset > containerHeight) return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
    else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $edcf132a9284368a$var$parsePlacement(input) {
    if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = $edcf132a9284368a$var$AXIS[placement] || 'right';
    let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
    if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = 'center';
    let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
    let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
    $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned) {
    let { placement: placement , crossPlacement: crossPlacement , axis: axis , crossAxis: crossAxis , size: size , crossSize: crossSize  } = placementInfo;
    let position = {
    };
    // button position
    position[crossAxis] = childOffset[crossAxis];
    if (crossPlacement === 'center') //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
     /* else {
    the overlay top should match the button top
  } */ 
    // add the crossOffset from props
    position[crossAxis] += crossOffset;
    // this is button center position - the overlay size + half of the button to align bottom of overlay with button center
    let minViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2 - overlaySize[crossSize];
    // this is button position of center, aligns top of overlay with button center
    let maxViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2;
    // clamp it into the range of the min/max positions
    position[crossAxis] = Math.min(Math.max(minViablePosition, position[crossAxis]), maxViablePosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[size];
        position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding) {
    return position.top != null ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top - (containerOffsetWithBoundary.top + position.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    ) : Math.max(0, childOffset.top + containerOffsetWithBoundary.top - (boundaryDimensions.top + boundaryDimensions.scroll.top) - (margins.top + margins.bottom + padding) // save additional space for margin and padding
    );
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement , axis: axis , size: size  } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight) {
    let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
    let { size: size , crossAxis: crossAxis , crossSize: crossSize , placement: placement , crossPlacement: crossPlacement  } = placementInfo;
    let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    let normalizedOffset = offset;
    let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
        let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
    delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let arrowPosition = {
    };
    arrowPosition[crossAxis] = childOffset[crossAxis] - position[crossAxis] + childOffset[crossSize] / 2;
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement , targetNode: targetNode , overlayNode: overlayNode , scrollNode: scrollNode , padding: padding , shouldFlip: shouldFlip , boundaryElement: boundaryElement , offset: offset , crossOffset: crossOffset , maxHeight: maxHeight  } = opts;
    let container = overlayNode.offsetParent || document.body;
    let isBodyContainer = container.tagName === 'BODY';
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isBodyContainer ? dom_helpers_query_offset__WEBPACK_IMPORTED_MODULE_4___default()(targetNode) : dom_helpers_query_position__WEBPACK_IMPORTED_MODULE_5___default()(targetNode, container);
    if (!isBodyContainer) {
        childOffset.top += parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_3___default()(targetNode, 'marginTop'), 10) || 0;
        childOffset.left += parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_3___default()(targetNode, 'marginLeft'), 10) || 0;
    }
    let overlaySize = dom_helpers_query_offset__WEBPACK_IMPORTED_MODULE_4___default()(overlayNode);
    let margins = $edcf132a9284368a$var$getMargins(overlayNode);
    overlaySize.width += margins.left + margins.right;
    overlaySize.height += margins.top + margins.bottom;
    let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
    let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
    let containerOffsetWithBoundary = boundaryElement.tagName === 'BODY' ? dom_helpers_query_offset__WEBPACK_IMPORTED_MODULE_4___default()(container) : dom_helpers_query_position__WEBPACK_IMPORTED_MODULE_5___default()(container, boundaryElement);
    return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight);
}




const $dd149f63282afbbf$export$f6211563215e3b37 = new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef , isOpen: isOpen , onClose: onClose  } = opts;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (!isOpen) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener('scroll', onScroll, true);
        return ()=>{
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}




// @ts-ignore
let $2a41e45df1593e64$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
    let { direction: direction  } = Object(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__["useLocale"])();
    let { targetRef: targetRef , overlayRef: overlayRef , scrollRef: scrollRef = overlayRef , placement: placement = 'bottom' , containerPadding: containerPadding = 12 , shouldFlip: shouldFlip = true , boundaryElement: boundaryElement = typeof document !== 'undefined' ? document.body : null , offset: offset = 0 , crossOffset: crossOffset = 0 , shouldUpdatePosition: shouldUpdatePosition = true , isOpen: isOpen = true , onClose: onClose , maxHeight: maxHeight  } = props;
    let [position, setPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        position: {
        },
        arrowOffsetLeft: undefined,
        arrowOffsetTop: undefined,
        maxHeight: undefined,
        placement: undefined
    });
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight
    ];
    let updatePosition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
        setPosition($edcf132a9284368a$export$b3ceb0cbf1056d98({
            placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight
        }));
    }, deps);
    // Update position when anything changes
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(updatePosition, deps);
    // Update position on window resize
    $2a41e45df1593e64$var$useResize(updatePosition);
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, [
        updatePosition
    ]);
    let close = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(()=>{
        if (!isResizing.current) onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    $dd149f63282afbbf$export$18fc8428861184da({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose ? close : undefined
    });
    return {
        overlayProps: {
            style: {
                position: 'absolute',
                zIndex: 100000,
                ...position.position,
                maxHeight: position.maxHeight
            }
        },
        placement: position.placement,
        arrowProps: {
            style: {
                left: position.arrowOffsetLeft,
                top: position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $2a41e45df1593e64$var$useResize(onResize) {
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
}


var $a11501f3d1d39e6c$exports = {};

$parcel$export($a11501f3d1d39e6c$exports, "useOverlay", () => $a11501f3d1d39e6c$export$ea8f71083e90600f);


const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , isOpen: isOpen , isDismissable: isDismissable = false , isKeyboardDismissDisabled: isKeyboardDismissDisabled = false , shouldCloseOnInteractOutside: shouldCloseOnInteractOutside  } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack.
    let onHide = ()=>{
        if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === 'Escape' && !isKeyboardDismissDisabled) {
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_9__["useInteractOutside"])({
        ref: ref,
        onInteractOutside: isDismissable ? onInteractOutside : null,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_9__["useFocusWithin"])({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}


var $628037886ba31236$exports = {};

$parcel$export($628037886ba31236$exports, "useOverlayTrigger", () => $628037886ba31236$export$f9d5c8beee7d008d);



function $628037886ba31236$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type  } = props;
    let { isOpen: isOpen  } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (ref && ref.current) $dd149f63282afbbf$export$f6211563215e3b37.set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useId"])();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : null
        },
        overlayProps: {
            id: overlayId
        }
    };
}


var $49c51c25361d4cd2$exports = {};

$parcel$export($49c51c25361d4cd2$exports, "usePreventScroll", () => $49c51c25361d4cd2$export$ee0f7cc6afcd1c18);

// @ts-ignore
const $49c51c25361d4cd2$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {
}) {
    let { isDisabled: isDisabled  } = options;
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(()=>{
        if (isDisabled) return;
        if (Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["isIOS"])()) return $49c51c25361d4cd2$var$preventScrollMobileSafari();
        else return $49c51c25361d4cd2$var$preventScrollStandard();
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    return Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["chain"])($49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["getScrollParent"])(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) e.preventDefault();
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if (target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) && target !== document.activeElement) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = 'translateY(-2000px)';
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = '';
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if (target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. ?????????????
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener('resize', ()=>$49c51c25361d4cd2$var$scrollIntoView(target)
                    , {
                        once: true
                    });
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["chain"])($49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'), $49c51c25361d4cd2$var$setStyle(document.body, 'marginTop', `-${scrollY}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["chain"])($49c51c25361d4cd2$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'focus', onFocus, true), $49c51c25361d4cd2$var$addEvent(window, 'scroll', onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    return ()=>{
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
    let scrollable = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["getScrollParent"])(target);
    if (scrollable !== document.documentElement && scrollable !== document.body) {
        let scrollableTop = scrollable.getBoundingClientRect().top;
        let targetTop = target.getBoundingClientRect().top;
        if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
    }
}


var $f57aed4a881a3485$exports = {};

$parcel$export($f57aed4a881a3485$exports, "ModalProvider", () => $f57aed4a881a3485$export$178405afcd8c5eb);
$parcel$export($f57aed4a881a3485$exports, "useModalProvider", () => $f57aed4a881a3485$export$d9aaed4c3ece1bc0);
$parcel$export($f57aed4a881a3485$exports, "OverlayProvider", () => $f57aed4a881a3485$export$bf688221f59024e5);
$parcel$export($f57aed4a881a3485$exports, "OverlayContainer", () => $f57aed4a881a3485$export$b47c3594eab58386);
$parcel$export($f57aed4a881a3485$exports, "useModal", () => $f57aed4a881a3485$export$33ffd74ebf07f060);


const $f57aed4a881a3485$var$Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
    let { children: children  } = props;
    let parent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f57aed4a881a3485$var$Context);
    let [modalCount, setModalCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    let context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1
                );
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1
                );
                if (parent) parent.removeModal();
            }
        })
    , [
        parent,
        modalCount
    ]);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($f57aed4a881a3485$var$Context.Provider, {
        value: context
    }, children));
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
    let context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f57aed4a881a3485$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : null
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps  } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    }));
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($f57aed4a881a3485$var$OverlayContainerDOM, props)));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
    let { portalContainer: portalContainer = document.body , ...rest } = props;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(()=>{
        if (portalContainer.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    let contents = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
    return(/*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.createPortal(contents, portalContainer));
}
function $f57aed4a881a3485$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($f57aed4a881a3485$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
}


var $86ea4cb521eb2e37$exports = {};

$parcel$export($86ea4cb521eb2e37$exports, "DismissButton", () => $86ea4cb521eb2e37$export$2317d149ed6f78c4);
var $61fe14465afefc5e$exports = {};
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = JSON.parse("{\"dismiss\":\"??????????\"}");


var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = JSON.parse("{\"dismiss\":\"????????????????????\"}");


var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = JSON.parse("{\"dismiss\":\"Odstranit\"}");


var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = JSON.parse("{\"dismiss\":\"Luk\"}");


var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = JSON.parse("{\"dismiss\":\"Schlie??en\"}");


var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = JSON.parse("{\"dismiss\":\"????????????????\"}");


var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = JSON.parse("{\"dismiss\":\"Dismiss\"}");


var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = JSON.parse("{\"dismiss\":\"L??peta\"}");


var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = JSON.parse("{\"dismiss\":\"Hylk????\"}");


var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = JSON.parse("{\"dismiss\":\"Rejeter\"}");


var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = JSON.parse("{\"dismiss\":\"??????????\"}");


var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = JSON.parse("{\"dismiss\":\"Elutas??t??s\"}");


var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = JSON.parse("{\"dismiss\":\"Ignora\"}");


var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = JSON.parse("{\"dismiss\":\"?????????\"}");


var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = JSON.parse("{\"dismiss\":\"??????\"}");


var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = JSON.parse("{\"dismiss\":\"Atmesti\"}");


var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = JSON.parse("{\"dismiss\":\"Ner??d??t\"}");


var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = JSON.parse("{\"dismiss\":\"Lukk\"}");


var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = JSON.parse("{\"dismiss\":\"Negeren\"}");


var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = JSON.parse("{\"dismiss\":\"Zignoruj\"}");


var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");


var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = JSON.parse("{\"dismiss\":\"Dispensar\"}");


var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = JSON.parse("{\"dismiss\":\"Revocare\"}");


var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = JSON.parse("{\"dismiss\":\"????????????????????\"}");


var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = JSON.parse("{\"dismiss\":\"Zru??i??\"}");


var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = JSON.parse("{\"dismiss\":\"Opusti\"}");


var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");


var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = JSON.parse("{\"dismiss\":\"Avvisa\"}");


var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = JSON.parse("{\"dismiss\":\"Kapat\"}");


var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = JSON.parse("{\"dismiss\":\"??????????????????\"}");


var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = JSON.parse("{\"dismiss\":\"??????\"}");


var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = JSON.parse("{\"dismiss\":\"??????\"}");


$61fe14465afefc5e$exports = {
    "ar-AE": $773d5888b972f1cf$exports,
    "bg-BG": $d11f19852b941573$exports,
    "cs-CZ": $b983974c2ee1efb3$exports,
    "da-DK": $5809cc9d4e92de73$exports,
    "de-DE": $c68c2e4fc74398d1$exports,
    "el-GR": $0898b4c153db2b77$exports,
    "en-US": $6d74810286a15183$exports,
    "es-ES": $309d73dc65f78055$exports,
    "et-EE": $44ad94f7205cf593$exports,
    "fi-FI": $7c28f5687f0779a9$exports,
    "fr-FR": $e6d75df4b68bd73a$exports,
    "he-IL": $87505c9dab186d0f$exports,
    "hr-HR": $553439c3ffb3e492$exports,
    "hu-HU": $74cf411061b983a2$exports,
    "it-IT": $e933f298574dc435$exports,
    "ja-JP": $ac91fc9fe02f71f6$exports,
    "ko-KR": $52b96f86422025af$exports,
    "lt-LT": $c0d724c3e51dafa6$exports,
    "lv-LV": $c92899672a3fe72e$exports,
    "nb-NO": $9f576b39d8e7a9d6$exports,
    "nl-NL": $9d025808aeec81a7$exports,
    "pl-PL": $fce709921e2c0fa6$exports,
    "pt-BR": $2599cf0c4ab37f59$exports,
    "pt-PT": $3c220ae7ef8a35fd$exports,
    "ro-RO": $93562b5094072f54$exports,
    "ru-RU": $cd9e2abd0d06c7b4$exports,
    "sk-SK": $45375701f409adf1$exports,
    "sl-SI": $27fab53a576de9dd$exports,
    "sr-SP": $4438748d9952e7c7$exports,
    "sv-SE": $0936d7347ef4da4c$exports,
    "tr-TR": $29700c92185d38f8$exports,
    "uk-UA": $662ccaf2be4c25b3$exports,
    "zh-CN": $d80a27deda7cdb3c$exports,
    "zh-TW": $2b2734393847c884$exports
};






function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss , ...otherProps } = props;
    let formatMessage = Object(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__["useMessageFormatter"])((/*@__PURE__*/$parcel$interopDefault($61fe14465afefc5e$exports)));
    let labels = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__["useLabels"])(otherProps, formatMessage('dismiss'));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_11__["VisuallyHidden"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick
    })));
}


var $5e3802645cc19319$exports = {};

$parcel$export($5e3802645cc19319$exports, "ariaHideOutside", () => $5e3802645cc19319$export$1c3ebcada18427bf);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            // If this node is a live announcer, add it to the set of nodes to keep visible.
            if (node instanceof HTMLElement && node.dataset.liveAnnouncer === 'true') visibleNodes.add(node);
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive.
            if (visibleNodes.has(node) || hiddenNodes.has(node.parentElement)) return NodeFilter.FILTER_REJECT;
            // VoiceOver on iOS has issues hiding elements with role="row". Hide the cells inside instead.
            // https://bugs.webkit.org/show_bug.cgi?id=222623
            if (node instanceof HTMLElement && node.getAttribute('role') === 'row') return NodeFilter.FILTER_SKIP;
            // Skip this node but continue to children if one of the targets is inside the node.
            if (targets.some((target)=>node.contains(target)
            )) return NodeFilter.FILTER_SKIP;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    let hide = (node)=>{
        var ref;
        let refCount = (ref = $5e3802645cc19319$var$refCountMap.get(node)) !== null && ref !== void 0 ? ref : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute('aria-hidden') === 'true' && refCount === 0) return;
        if (refCount === 0) node.setAttribute('aria-hidden', 'true');
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    let node1 = walker.nextNode();
    while(node1 != null){
        hide(node1);
        node1 = walker.nextNode();
    }
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList' || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target)
            )) for (let node2 of change.addedNodes){
                if (node2 instanceof HTMLElement && node2.dataset.liveAnnouncer === 'true') visibleNodes.add(node2);
                else if (node2 instanceof Element) hide(node2);
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $5e3802645cc19319$var$refCountMap.get(node);
            if (count === 1) {
                node.removeAttribute('aria-hidden');
                $5e3802645cc19319$var$refCountMap.delete(node);
            } else $5e3802645cc19319$var$refCountMap.set(node, count - 1);
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/selection/dist/module.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-aria/selection/dist/module.js ***!
  \***********************************************************/
/*! exports provided: useSelectableCollection, useSelectableItem, useSelectableList, ListKeyboardDelegate, useTypeSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelectableCollection", function() { return $ae20dd8cbca75726$export$d6daf82dcd84e87c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelectableItem", function() { return $880e95eb8b93ba9a$export$ecf600387e221c37; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelectableList", function() { return $982254629710d113$export$b95089534ab7c1fd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyboardDelegate", function() { return $2a25aae57d74318e$export$a05409b8bb224a5a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypeSelect", function() { return $fb3050f43d946246$export$e32c88dfddc6e1d8; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/module.js");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/module.js");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");






function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $ae20dd8cbca75726$exports = {};

$parcel$export($ae20dd8cbca75726$exports, "useSelectableCollection", () => $ae20dd8cbca75726$export$d6daf82dcd84e87c);





function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["isAppleDevice"])() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$16792effe837dba3(e) {
    if (Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["isMac"])()) return e.metaKey;
    return e.ctrlKey;
}



var $fb3050f43d946246$exports = {};

$parcel$export($fb3050f43d946246$exports, "useTypeSelect", () => $fb3050f43d946246$export$e32c88dfddc6e1d8);

function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate , selectionManager: selectionManager , onTypeSelect: onTypeSelect  } = options;
    let state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        search: '',
        timeout: null
    }).current;
    let onKeyDown = (e)=>{
        let character = $fb3050f43d946246$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey) return;
        // Do not propagate the Spacebar event if it's meant to be part of the search.
        // When we time out, the search term becomes empty, hence the check on length.
        // Trimming is to account for the case of pressing the Spacebar more than once,
        // which should cycle through the selection/deselection of the focused item.
        if (character === ' ' && state.search.trim().length > 0) {
            e.preventDefault();
            if (!('continuePropagation' in e)) e.stopPropagation();
        }
        state.search += character;
        // Use the delegate to find a key to focus.
        // Prioritize items after the currently focused item, falling back to searching the whole list.
        let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
        // If no key found, search from the top.
        if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
        if (key != null) {
            selectionManager.setFocusedKey(key);
            if (onTypeSelect) onTypeSelect(key);
        }
        clearTimeout(state.timeout);
        state.timeout = setTimeout(()=>{
            state.search = '';
        }, 500);
    };
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
        }
    };
}
function $fb3050f43d946246$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return '';
}


function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager , keyboardDelegate: delegate , ref: ref , autoFocus: autoFocus = false , shouldFocusWrap: shouldFocusWrap = false , disallowEmptySelection: disallowEmptySelection = false , disallowSelectAll: disallowSelectAll = false , selectOnFocus: selectOnFocus = manager.selectionBehavior === 'replace' , disallowTypeAhead: disallowTypeAhead = false , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation = false , isVirtualized: isVirtualized , scrollRef: // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref  } = options;
    let { direction: direction  } = Object(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__["useLocale"])();
    let onKeyDown = (e)=>{
        // Prevent option + tab from doing anything since it doesn't move focus to the cells, only buttons/checkboxes
        if (e.altKey && e.key === 'Tab') e.preventDefault();
        // Keyboard events bubble through portals. Don't handle keyboard events
        // for elements outside the collection (e.g. menus).
        if (!ref.current.contains(e.target)) return;
        const navigateToKey = (key, childFocus)=>{
            if (key != null) {
                manager.setFocusedKey(key, childFocus);
                if (e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(key);
                else if (selectOnFocus && !$feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.replaceSelection(key);
            }
        };
        switch(e.key){
            case 'ArrowDown':
                if (delegate.getKeyBelow) {
                    var ref4, ref1;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : (ref4 = delegate.getFirstKey) === null || ref4 === void 0 ? void 0 : ref4.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (ref1 = delegate.getFirstKey) === null || ref1 === void 0 ? void 0 : ref1.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'ArrowUp':
                if (delegate.getKeyAbove) {
                    var ref2, ref3;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : (ref2 = delegate.getLastKey) === null || ref2 === void 0 ? void 0 : ref2.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (ref3 = delegate.getLastKey) === null || ref3 === void 0 ? void 0 : ref3.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'ArrowLeft':
                if (delegate.getKeyLeftOf) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
                    navigateToKey(nextKey, direction === 'rtl' ? 'first' : 'last');
                }
                break;
            case 'ArrowRight':
                if (delegate.getKeyRightOf) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyRightOf(manager.focusedKey);
                    navigateToKey(nextKey, direction === 'rtl' ? 'last' : 'first');
                }
                break;
            case 'Home':
                if (delegate.getFirstKey) {
                    e.preventDefault();
                    let firstKey = delegate.getFirstKey(manager.focusedKey, $feb5ffebff200149$export$16792effe837dba3(e));
                    manager.setFocusedKey(firstKey);
                    if ($feb5ffebff200149$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(firstKey);
                    else if (selectOnFocus) manager.replaceSelection(firstKey);
                }
                break;
            case 'End':
                if (delegate.getLastKey) {
                    e.preventDefault();
                    let lastKey = delegate.getLastKey(manager.focusedKey, $feb5ffebff200149$export$16792effe837dba3(e));
                    manager.setFocusedKey(lastKey);
                    if ($feb5ffebff200149$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(lastKey);
                    else if (selectOnFocus) manager.replaceSelection(lastKey);
                }
                break;
            case 'PageDown':
                if (delegate.getKeyPageBelow) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'PageUp':
                if (delegate.getKeyPageAbove) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case 'a':
                if ($feb5ffebff200149$export$16792effe837dba3(e) && manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
                    e.preventDefault();
                    manager.selectAll();
                }
                break;
            case 'Escape':
                e.preventDefault();
                if (!disallowEmptySelection) manager.clearSelection();
                break;
            case 'Tab':
                if (!allowsTabNavigation) {
                    // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
                    // However, collections should be treated as a single tab stop, with arrow key navigation internally.
                    // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
                    // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
                    // in the collection, so that the browser default behavior will apply starting from that element
                    // rather than the currently focused one.
                    if (e.shiftKey) ref.current.focus();
                    else {
                        let walker = Object(_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__["getFocusableTreeWalker"])(ref.current, {
                            tabbable: true
                        });
                        let next;
                        let last;
                        do {
                            last = walker.lastChild();
                            if (last) next = last;
                        }while (last)
                        if (next && !next.contains(document.activeElement)) Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["focusWithoutScrolling"])(next);
                    }
                    break;
                }
        }
    };
    // Store the scroll position so we can restore it later.
    let scrollPos = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        top: 0,
        left: 0
    });
    Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["useEvent"])(scrollRef, 'scroll', isVirtualized ? null : ()=>{
        scrollPos.current = {
            top: scrollRef.current.scrollTop,
            left: scrollRef.current.scrollLeft
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!e.currentTarget.contains(e.target)) return;
        manager.setFocused(true);
        if (manager.focusedKey == null) {
            let navigateToFirstKey = (key)=>{
                if (key != null) {
                    manager.setFocusedKey(key);
                    if (selectOnFocus) manager.replaceSelection(key);
                }
            };
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            var _lastSelectedKey, _firstSelectedKey;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey((_lastSelectedKey = manager.lastSelectedKey) !== null && _lastSelectedKey !== void 0 ? _lastSelectedKey : delegate.getLastKey());
            else navigateToFirstKey((_firstSelectedKey = manager.firstSelectedKey) !== null && _firstSelectedKey !== void 0 ? _firstSelectedKey : delegate.getFirstKey());
        } else if (!isVirtualized) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element) {
                // This prevents a flash of focus on the first/last element in the collection
                Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["focusWithoutScrolling"])(element);
                Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["scrollIntoView"])(scrollRef.current, element);
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
    };
    const autoFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(autoFocus);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (autoFocusRef.current) {
            let focusedKey = null;
            // Check focus strategy to determine which item to focus
            if (autoFocus === 'first') focusedKey = delegate.getFirstKey();
            if (autoFocus === 'last') focusedKey = delegate.getLastKey();
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) focusedKey = selectedKeys.values().next().value;
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus) Object(_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__["focusSafely"])(ref.current);
        }
        autoFocusRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // If not virtualized, scroll the focused element into view when the focusedKey changes.
    // When virtualized, Virtualizer handles this internally.
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (!isVirtualized && manager.focusedKey && (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)) {
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element) Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["scrollIntoView"])(scrollRef.current, element);
        }
    }, [
        isVirtualized,
        scrollRef,
        manager.focusedKey
    ]);
    let handlers = {
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (e.currentTarget.contains(e.target)) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps  } = $fb3050f43d946246$export$e32c88dfddc6e1d8({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) handlers = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["mergeProps"])(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    // If using virtual focus, don't set a tabIndex at all so that VoiceOver on iOS 14 doesn't try
    // to move real DOM focus to the element anyway.
    let tabIndex;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    return {
        collectionProps: {
            ...handlers,
            tabIndex: tabIndex
        }
    };
}


var $880e95eb8b93ba9a$exports = {};

$parcel$export($880e95eb8b93ba9a$exports, "useSelectableItem", () => $880e95eb8b93ba9a$export$ecf600387e221c37);





function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
    let { selectionManager: manager , key: key , ref: ref , shouldSelectOnPressUp: shouldSelectOnPressUp , isVirtualized: isVirtualized , shouldUseVirtualFocus: shouldUseVirtualFocus , focus: focus , isDisabled: isDisabled , onAction: onAction , allowsDifferentPressOrigin: allowsDifferentPressOrigin  } = options;
    let onSelect = (e)=>{
        if (e.pointerType === 'keyboard' && $feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === 'none') return;
            if (manager.selectionMode === 'single') {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === 'toggle' || e && ($feb5ffebff200149$export$16792effe837dba3(e) || e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    let isFocused = key === manager.focusedKey;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (isFocused && manager.isFocused && !shouldUseVirtualFocus && document.activeElement !== ref.current) {
            if (focus) focus();
            else Object(_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__["focusSafely"])(ref.current);
        }
    }, [
        ref,
        isFocused,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {
    };
    if (!shouldUseVirtualFocus) itemProps = {
        tabIndex: isFocused ? 0 : -1,
        onFocus (e) {
            if (e.target === ref.current) manager.setFocusedKey(key);
        }
    };
    let modality = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    let hasPrimaryAction = onAction && manager.selectionMode === 'none';
    let hasSecondaryAction = onAction && manager.selectionMode !== 'none' && manager.selectionBehavior === 'replace';
    let allowsSelection = !isDisabled && manager.canSelectItem(key);
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {
    };
    if (shouldSelectOnPressUp) {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            if (e.pointerType === 'keyboard') onSelect(e);
        };
        // If allowsDifferentPressOrigin, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e)=>{
            if (e.pointerType !== 'keyboard') onSelect(e);
            if (hasPrimaryAction) onAction();
        };
        else {
            itemPressProps.onPressUp = (e)=>{
                if (e.pointerType !== 'keyboard') onSelect(e);
            };
            itemPressProps.onPress = hasPrimaryAction ? ()=>onAction()
             : null;
        }
    } else {
        // On touch, it feels strange to select on touch down, so we special case this.
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            if (e.pointerType !== 'touch' && e.pointerType !== 'virtual') onSelect(e);
        };
        itemPressProps.onPress = (e)=>{
            if (e.pointerType === 'touch' || e.pointerType === 'virtual' || hasPrimaryAction) {
                // Single tap on touch with selectionBehavior = 'replace' performs an action, i.e. navigation.
                // Also perform action on press up when selectionMode = 'none'.
                if (hasPrimaryAction || hasSecondaryAction) onAction();
                else onSelect(e);
            }
        };
    }
    if (!isVirtualized) itemProps['data-key'] = key;
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    let { pressProps: pressProps , isPressed: isPressed  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__["usePress"])(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === 'mouse') {
            e.stopPropagation();
            e.preventDefault();
            onAction();
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    // TODO: what about when drag and drop is also enabled??
    let { longPressProps: longPressProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__["useLongPress"])({
        isDisabled: !hasSecondaryAction,
        onLongPress (e) {
            if (e.pointerType === 'touch') {
                onSelect(e);
                manager.setSelectionBehavior('toggle');
            }
        }
    });
    // Pressing the Enter key with selectionBehavior = 'replace' performs an action (i.e. navigation).
    let onKeyUp = hasSecondaryAction ? (e)=>{
        if (e.key === 'Enter') onAction();
    } : undefined;
    return {
        itemProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__["mergeProps"])(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {
        }, hasSecondaryAction ? longPressProps : {
        }, {
            onKeyUp: onKeyUp,
            onDoubleClick: onDoubleClick
        }),
        isPressed: isPressed
    };
}


var $982254629710d113$exports = {};

$parcel$export($982254629710d113$exports, "useSelectableList", () => $982254629710d113$export$b95089534ab7c1fd);

var $2a25aae57d74318e$exports = {};

$parcel$export($2a25aae57d74318e$exports, "ListKeyboardDelegate", () => $2a25aae57d74318e$export$a05409b8bb224a5a);
class $2a25aae57d74318e$export$a05409b8bb224a5a {
    getKeyBelow(key) {
        key = this.collection.getKeyAfter(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getKeyAbove(key) {
        key = this.collection.getKeyBefore(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === 'item' && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
    }
    getItem(key) {
        return this.ref.current.querySelector(`[data-key="${key}"]`);
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        let pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);
        while(item && item.offsetTop > pageY){
            key = this.getKeyAbove(key);
            item = this.getItem(key);
        }
        return key;
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        let pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);
        while(item && item.offsetTop < pageY){
            key = this.getKeyBelow(key);
            item = this.getItem(key);
        }
        return key;
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getKeyBelow(key);
        }
        return null;
    }
    constructor(collection, disabledKeys, ref, collator){
        this.collection = collection;
        this.disabledKeys = disabledKeys;
        this.ref = ref;
        this.collator = collator;
    }
}




function $982254629710d113$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager , collection: collection , disabledKeys: disabledKeys , ref: ref , keyboardDelegate: keyboardDelegate , autoFocus: autoFocus , shouldFocusWrap: shouldFocusWrap , isVirtualized: isVirtualized , disallowEmptySelection: disallowEmptySelection , selectOnFocus: selectOnFocus = false , disallowTypeAhead: disallowTypeAhead , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = Object(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__["useCollator"])({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>keyboardDelegate || new $2a25aae57d74318e$export$a05409b8bb224a5a(collection, disabledKeys, ref, collator)
    , [
        keyboardDelegate,
        collection,
        disabledKeys,
        ref,
        collator
    ]);
    let { collectionProps: collectionProps  } = $ae20dd8cbca75726$export$d6daf82dcd84e87c({
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate,
        autoFocus: autoFocus,
        shouldFocusWrap: shouldFocusWrap,
        disallowEmptySelection: disallowEmptySelection,
        selectOnFocus: selectOnFocus,
        disallowTypeAhead: disallowTypeAhead,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        allowsTabNavigation: allowsTabNavigation,
        isVirtualized: isVirtualized,
        scrollRef: ref
    });
    return {
        listProps: collectionProps
    };
}







//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/ssr/dist/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@react-aria/ssr/dist/module.js ***!
  \*****************************************************/
/*! exports provided: SSRProvider, useSSRSafeId, useIsSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSRProvider", function() { return $9d939cbc98267846$export$9f8ac96af4b1b2ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSSRSafeId", function() { return $9d939cbc98267846$export$619500959fc48b26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsSSR", function() { return $9d939cbc98267846$export$535bd6ca7f90a273; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9d939cbc98267846$exports = {};

$parcel$export($9d939cbc98267846$exports, "SSRProvider", () => $9d939cbc98267846$export$9f8ac96af4b1b2ae);
$parcel$export($9d939cbc98267846$exports, "useSSRSafeId", () => $9d939cbc98267846$export$619500959fc48b26);
$parcel$export($9d939cbc98267846$exports, "useIsSSR", () => $9d939cbc98267846$export$535bd6ca7f90a273);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $9d939cbc98267846$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $9d939cbc98267846$var$SSRContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext($9d939cbc98267846$var$defaultContext);
function $9d939cbc98267846$export$9f8ac96af4b1b2ae(props) {
    let cur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($9d939cbc98267846$var$SSRContext);
    let value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $9d939cbc98267846$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
            current: 0
        })
    , [
        cur
    ]);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement($9d939cbc98267846$var$SSRContext.Provider, {
        value: value
    }, props.children));
}
let $9d939cbc98267846$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
function $9d939cbc98267846$export$619500959fc48b26(defaultId) {
    let ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($9d939cbc98267846$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $9d939cbc98267846$var$defaultContext && !$9d939cbc98267846$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`
    , [
        defaultId
    ]);
}
function $9d939cbc98267846$export$535bd6ca7f90a273() {
    let cur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])($9d939cbc98267846$var$SSRContext);
    let isInSSRContext = cur !== $9d939cbc98267846$var$defaultContext;
    let [isSSR, setIsSSR] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isInSSRContext);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(()=>{
        setIsSSR(false);
    }, []);
    return isSSR;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/textfield/dist/module.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-aria/textfield/dist/module.js ***!
  \***********************************************************/
/*! exports provided: useTextField, useFormattedTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTextField", function() { return $2d73ec29415bd339$export$712718f7aec83d5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormattedTextField", function() { return $d841c8010a73d545$export$4f384c9210e583c3; });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/label */ "./node_modules/@react-aria/label/dist/module.js");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2d73ec29415bd339$exports = {};

$parcel$export($2d73ec29415bd339$exports, "useTextField", () => $2d73ec29415bd339$export$712718f7aec83d5);



function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input' , isDisabled: isDisabled = false , isRequired: isRequired = false , isReadOnly: isReadOnly = false , validationState: validationState , type: type = 'text' , onChange: onChange = ()=>{
    }  } = props;
    let { focusableProps: focusableProps  } = Object(_react_aria_focus__WEBPACK_IMPORTED_MODULE_2__["useFocusable"])(props, ref);
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = Object(_react_aria_label__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
    let domProps = Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["filterDOMProps"])(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    return {
        labelProps: labelProps,
        inputProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(domProps, inputElementType === 'input' && inputOnlyProps, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            'aria-required': isRequired || undefined,
            'aria-invalid': validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            value: props.value,
            defaultValue: props.value ? undefined : props.defaultValue,
            onChange: (e)=>onChange(e.target.value)
            ,
            autoComplete: props.autoComplete,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


var $d841c8010a73d545$exports = {};

$parcel$export($d841c8010a73d545$exports, "useFormattedTextField", () => $d841c8010a73d545$export$4f384c9210e583c3);



function $d841c8010a73d545$var$supportsNativeBeforeInputEvent() {
    return typeof window !== 'undefined' && window.InputEvent && // @ts-ignore
    typeof InputEvent.prototype.getTargetRanges === 'function';
}
function $d841c8010a73d545$export$4f384c9210e583c3(props, state1, inputRef) {
    let stateRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(state1);
    stateRef.current = state1;
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(()=>{
        if (!$d841c8010a73d545$var$supportsNativeBeforeInputEvent()) return;
        let input = inputRef.current;
        let onBeforeInput = (e)=>{
            let state = stateRef.current;
            // Compute the next value of the input if the event is allowed to proceed.
            // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
            let nextValue;
            switch(e.inputType){
                case 'historyUndo':
                case 'historyRedo':
                    // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                    // because presumably the input would have already been validated previously.
                    return;
                case 'deleteContent':
                case 'deleteByCut':
                case 'deleteByDrag':
                    nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteContentForward':
                    // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                    // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                    // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                    // If we support additional locales in the future, this may need to change.
                    nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteContentBackward':
                    nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                    break;
                case 'deleteSoftLineBackward':
                case 'deleteHardLineBackward':
                    nextValue = input.value.slice(input.selectionStart);
                    break;
                default:
                    if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                    break;
            }
            // If we did not compute a value, or the new value is invalid, prevent the event
            // so that the browser does not update the input text, move the selection, or add to
            // the undo/redo stack.
            if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
        };
        input.addEventListener('beforeinput', onBeforeInput, false);
        return ()=>{
            input.removeEventListener('beforeinput', onBeforeInput, false);
        };
    }, [
        inputRef,
        stateRef
    ]);
    let onBeforeInput1 = !$d841c8010a73d545$var$supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
        if (!state1.validate(nextValue)) e.preventDefault();
    } : null;
    let { labelProps: labelProps , inputProps: textFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = $2d73ec29415bd339$export$712718f7aec83d5(props, inputRef);
    let compositionStartState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    return {
        inputProps: Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(textFieldProps, {
            onBeforeInput: onBeforeInput1,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = inputRef.current;
                compositionStartState.current = {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            onCompositionEnd () {
                if (!state1.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state1.setInputValue(value);
                }
            }
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/utils/dist/module.js":
/*!*******************************************************!*\
  !*** ./node_modules/@react-aria/utils/dist/module.js ***!
  \*******************************************************/
/*! exports provided: useId, mergeIds, useSlotId, chain, mergeProps, filterDOMProps, focusWithoutScrolling, getOffset, clamp, snapValueToStep, runAfterTransition, useDrag1D, useGlobalListeners, useLabels, useObjectRef, useUpdateEffect, useLayoutEffect, useResizeObserver, useSyncRef, getScrollParent, useViewportSize, useDescription, isMac, isIPhone, isIPad, isIOS, isAppleDevice, isWebKit, isChrome, isAndroid, useEvent, useValueEffect, scrollIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return $bdb11010cef70236$export$f680877a34711e37; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeIds", function() { return $bdb11010cef70236$export$cd8c9cb68f842629; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlotId", function() { return $bdb11010cef70236$export$b4cc09c592e8fdb8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return $ff5963eb1fccf552$export$e08e3b67e392101e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return $3ef42575df84b30b$export$9d1611c77c2fe928; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDOMProps", function() { return $65484d02dcb7eb3e$export$457c3d6518dd4c6f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusWithoutScrolling", function() { return $7215afc6de606d6b$export$de79e2c695e052f3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return $ab71dadb03a6fb2e$export$622cea445a1c5b7d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runAfterTransition", function() { return $bbed8b41f857bcc0$export$24490316f764c430; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag1D", function() { return $9cc09df9fd7676be$export$7bbed75feba39706; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGlobalListeners", function() { return $03deb23ff14920c4$export$4eaf04e54aa8eed6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLabels", function() { return $313b98861ee5dd6c$export$d6875122194c7b44; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObjectRef", function() { return $df56164dff5785e2$export$4338b53315abf666; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return $4f58c5f72bcf79f7$export$496315a1608d9602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResizeObserver", function() { return $9daab02d461809db$export$683480f191c0e3ea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSyncRef", function() { return $e7801be82b4b2a53$export$4debdb1a3f0fa79e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollParent", function() { return $62d8ded9296f3872$export$cfa2225e87938781; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewportSize", function() { return $5df64b3807dc15ee$export$d699905dd57c73ca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescription", function() { return $ef06256079686ba0$export$f8aeda7b10753fa1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return $c87311424ea30a05$export$9ac100e40613ea10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIPhone", function() { return $c87311424ea30a05$export$186c6964ca17d99; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIPad", function() { return $c87311424ea30a05$export$7bef049ce92e4224; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return $c87311424ea30a05$export$fedb369cb70207f1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAppleDevice", function() { return $c87311424ea30a05$export$e1865c3bedcd822b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebKit", function() { return $c87311424ea30a05$export$78551043582a6a98; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return $c87311424ea30a05$export$6446a186d09e379e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return $c87311424ea30a05$export$a11b0059900ceec8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEvent", function() { return $e9faafb641e167db$export$90fc3a17d93f704c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useValueEffect", function() { return $1dbecbe27a04f9af$export$14d238f342723f25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return $2f04cbc44ee30ce0$export$53a0910f038337bd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/module.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapValueToStep", function() { return _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__["snapValueToStep"]; });






function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bdb11010cef70236$exports = {};

$parcel$export($bdb11010cef70236$exports, "useId", () => $bdb11010cef70236$export$f680877a34711e37);
$parcel$export($bdb11010cef70236$exports, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f842629);
$parcel$export($bdb11010cef70236$exports, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb8);

var $f0a04ccd8dbdd83b$exports = {};

$parcel$export($f0a04ccd8dbdd83b$exports, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);

const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect : ()=>{
};




let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let isRendering = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    isRendering.current = true;
    let [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultId);
    let nextId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    let res = Object(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__["useSSRSafeId"])(value);
    // don't memo this, we want it new each render so that the Effects always run
    let updateValue = (val)=>{
        if (!isRendering.current) setValue(val);
        else nextId.current = val;
    };
    $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        isRendering.current = false;
    }, [
        updateValue
    ]);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        let newId = nextId.current;
        if (newId) {
            setValue(newId);
            nextId.current = null;
        }
    }, [
        setValue,
        updateValue
    ]);
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = $1dbecbe27a04f9af$export$14d238f342723f25(id);
    let updateId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : null;
        });
    }, [
        id,
        setResolvedId
    ]);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


var $ff5963eb1fccf552$exports = {};

$parcel$export($ff5963eb1fccf552$exports, "chain", () => $ff5963eb1fccf552$export$e08e3b67e392101e);
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}


var $3ef42575df84b30b$exports = {};

$parcel$export($3ef42575df84b30b$exports, "mergeProps", () => $3ef42575df84b30b$export$9d1611c77c2fe928);



function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(a, b);
            else if (key === 'id' && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


var $65484d02dcb7eb3e$exports = {};

$parcel$export($65484d02dcb7eb3e$exports, "filterDOMProps", () => $65484d02dcb7eb3e$export$457c3d6518dd4c6f);
const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {
}) {
    let { labelable: labelable , propNames: propNames  } = opts;
    let filteredProps = {
    };
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


var $7215afc6de606d6b$exports = {};

$parcel$export($7215afc6de606d6b$exports, "focusWithoutScrolling", () => $7215afc6de606d6b$export$de79e2c695e052f3);
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    var parent = element.parentNode;
    var scrollableElements = [];
    var rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element , scrollTop: scrollTop , scrollLeft: scrollLeft  } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


var $ab71dadb03a6fb2e$exports = {};

$parcel$export($ab71dadb03a6fb2e$exports, "getOffset", () => $ab71dadb03a6fb2e$export$622cea445a1c5b7d);
function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = 'horizontal') {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === 'horizontal' ? rect.right : rect.bottom;
    return orientation === 'horizontal' ? rect.left : rect.top;
}


var $103b0e103f1b5952$exports = {};

$parcel$export($103b0e103f1b5952$exports, "clamp", () => _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__["clamp"]);
$parcel$export($103b0e103f1b5952$exports, "snapValueToStep", () => _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__["snapValueToStep"]);



var $bbed8b41f857bcc0$exports = {};

$parcel$export($bbed8b41f857bcc0$exports, "runAfterTransition", () => $bbed8b41f857bcc0$export$24490316f764c430);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}


var $9cc09df9fd7676be$exports = {};

$parcel$export($9cc09df9fd7676be$exports, "useDrag1D", () => $9cc09df9fd7676be$export$7bbed75feba39706);


// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $9cc09df9fd7676be$var$draggingElements = [];
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
    console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
    let { containerRef: containerRef , reverse: reverse , orientation: orientation , onHover: onHover , onDrag: onDrag , onPositionChange: onPositionChange , onIncrement: onIncrement , onDecrement: onDecrement , onIncrementToMax: onIncrementToMax , onDecrementToMin: onDecrementToMin , onCollapseToggle: onCollapseToggle  } = props;
    let getPosition = (e)=>orientation === 'horizontal' ? e.clientX : e.clientY
    ;
    let getNextOffset = (e)=>{
        let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    let prevPosition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
        window.removeEventListener('mouseup', onMouseUp, false);
        window.removeEventListener('mousemove', onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($9cc09df9fd7676be$var$draggingElements.some((elt)=>target.contains(elt)
        )) return;
        $9cc09df9fd7676be$var$draggingElements.push(target);
        window.addEventListener('mousemove', onMouseDragged, false);
        window.addEventListener('mouseup', onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Left':
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Up':
            case 'ArrowUp':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Down':
            case 'ArrowDown':
                if (orientation === 'vertical') {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case 'Home':
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case 'End':
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case 'Enter':
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


var $03deb23ff14920c4$exports = {};

$parcel$export($03deb23ff14920c4$exports, "useGlobalListeners", () => $03deb23ff14920c4$export$4eaf04e54aa8eed6);

function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Map());
    let addGlobalListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((eventTarget, type, listener, options)=>{
        var ref;
        let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


var $313b98861ee5dd6c$exports = {};

$parcel$export($313b98861ee5dd6c$exports, "useLabels", () => $313b98861ee5dd6c$export$d6875122194c7b44);

function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id , 'aria-label': label , 'aria-labelledby': labelledBy  } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = $bdb11010cef70236$export$f680877a34711e37(id);
    if (labelledBy && label) {
        let ids = new Set([
            ...labelledBy.trim().split(/\s+/),
            id
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}


var $df56164dff5785e2$exports = {};

$parcel$export($df56164dff5785e2$exports, "useObjectRef", () => $df56164dff5785e2$export$4338b53315abf666);


function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    /**
   * We're using `useLayoutEffect` here instead of `useEffect` because we want
   * to make sure that the `ref` value is up to date before other places in the
   * the execution cycle try to read it.
   */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') forwardedRef(objRef.current);
        else forwardedRef.current = objRef.current;
    }, [
        forwardedRef
    ]);
    return objRef;
}


var $4f58c5f72bcf79f7$exports = {};

$parcel$export($4f58c5f72bcf79f7$exports, "useUpdateEffect", () => $4f58c5f72bcf79f7$export$496315a1608d9602);

function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



var $9daab02d461809db$exports = {};

$parcel$export($9daab02d461809db$exports, "useResizeObserver", () => $9daab02d461809db$export$683480f191c0e3ea);

function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref , onResize: onResize  } = options;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


var $e7801be82b4b2a53$exports = {};

$parcel$export($e7801be82b4b2a53$exports, "useSyncRef", () => $e7801be82b4b2a53$export$4debdb1a3f0fa79e);

function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                context.ref.current = null;
            };
        }
    }, [
        context,
        ref
    ]);
}


var $62d8ded9296f3872$exports = {};

$parcel$export($62d8ded9296f3872$exports, "getScrollParent", () => $62d8ded9296f3872$export$cfa2225e87938781);
function $62d8ded9296f3872$export$cfa2225e87938781(node) {
    while(node && !$62d8ded9296f3872$var$isScrollable(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$var$isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


var $5df64b3807dc15ee$exports = {};

$parcel$export($5df64b3807dc15ee$exports, "useViewportSize", () => $5df64b3807dc15ee$export$d699905dd57c73ca);

// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let [size1, setSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(()=>$5df64b3807dc15ee$var$getViewportSize()
    );
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener('resize', onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener('resize', onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size1;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}


var $ef06256079686ba0$exports = {};

$parcel$export($ef06256079686ba0$exports, "useDescription", () => $ef06256079686ba0$export$f8aeda7b10753fa1);


let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id1, setId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id1 : undefined
    };
}


var $c87311424ea30a05$exports = {};

$parcel$export($c87311424ea30a05$exports, "isMac", () => $c87311424ea30a05$export$9ac100e40613ea10);
$parcel$export($c87311424ea30a05$exports, "isIPhone", () => $c87311424ea30a05$export$186c6964ca17d99);
$parcel$export($c87311424ea30a05$exports, "isIPad", () => $c87311424ea30a05$export$7bef049ce92e4224);
$parcel$export($c87311424ea30a05$exports, "isIOS", () => $c87311424ea30a05$export$fedb369cb70207f1);
$parcel$export($c87311424ea30a05$exports, "isAppleDevice", () => $c87311424ea30a05$export$e1865c3bedcd822b);
$parcel$export($c87311424ea30a05$exports, "isWebKit", () => $c87311424ea30a05$export$78551043582a6a98);
$parcel$export($c87311424ea30a05$exports, "isChrome", () => $c87311424ea30a05$export$6446a186d09e379e);
$parcel$export($c87311424ea30a05$exports, "isAndroid", () => $c87311424ea30a05$export$a11b0059900ceec8);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var ref;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((ref = window.navigator['userAgentData']) === null || ref === void 0 ? void 0 : ref.brands.some((brand)=>re.test(brand.brand)
    )) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test((window.navigator['userAgentData'] || window.navigator).platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}


var $e9faafb641e167db$exports = {};

$parcel$export($e9faafb641e167db$exports, "useEvent", () => $e9faafb641e167db$export$90fc3a17d93f704c);

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler1, options) {
    let handlerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(handler1);
    handlerRef.current = handler1;
    let isDisabled = handler1 == null;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (isDisabled) return;
        let element = ref.current;
        let handler = (e)=>handlerRef.current.call(this, e)
        ;
        element.addEventListener(event, handler, options);
        return ()=>{
            element.removeEventListener(event, handler, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}


var $1dbecbe27a04f9af$exports = {};

$parcel$export($1dbecbe27a04f9af$exports, "useValueEffect", () => $1dbecbe27a04f9af$export$14d238f342723f25);


function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue);
    let valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    let effect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    valueRef.current = value;
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    nextRef.current = ()=>{
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef.current();
        else setValue(newValue.value);
    };
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((fn)=>{
        effect.current = fn(valueRef.current);
        nextRef.current();
    }, [
        effect,
        nextRef
    ]);
    return [
        value,
        queue
    ];
}


var $2f04cbc44ee30ce0$exports = {};

$parcel$export($2f04cbc44ee30ce0$exports, "scrollIntoView", () => $2f04cbc44ee30ce0$export$53a0910f038337bd);
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    let maxX = x + scrollView.offsetWidth;
    let maxY = y + scrollView.offsetHeight;
    if (offsetX <= x) x = offsetX;
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= y) y = offsetY;
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/visually-hidden/dist/module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-aria/visually-hidden/dist/module.js ***!
  \*****************************************************************/
/*! exports provided: useVisuallyHidden, VisuallyHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVisuallyHidden", function() { return $5c3e21d68f1c4674$export$a966af930f325cab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisuallyHidden", function() { return $5c3e21d68f1c4674$export$439d29a4e110a164; });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/module.js");




function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5c3e21d68f1c4674$exports = {};

$parcel$export($5c3e21d68f1c4674$exports, "useVisuallyHidden", () => $5c3e21d68f1c4674$export$a966af930f325cab);
$parcel$export($5c3e21d68f1c4674$exports, "VisuallyHidden", () => $5c3e21d68f1c4674$export$439d29a4e110a164);



const $5c3e21d68f1c4674$var$styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: '0 -1px -1px 0',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
    whiteSpace: 'nowrap'
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {
}) {
    let { style: style , isFocusable: isFocusable  } = props;
    let [isFocused, setFocused] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    let { focusProps: focusProps  } = Object(_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__["useFocus"])({
        isDisabled: !isFocusable,
        onFocusChange: setFocused
    });
    // If focused, don't hide the element.
    let combinedStyles = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$5c3e21d68f1c4674$var$styles,
            ...style
        };
        else return $5c3e21d68f1c4674$var$styles;
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusProps,
            style: combinedStyles
        }
    };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children , elementType: Element = 'div' , isFocusable: isFocusable , style: style , ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps  } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Element, Object(_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])(otherProps, visuallyHiddenProps), children));
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/collections/dist/module.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react-stately/collections/dist/module.js ***!
  \****************************************************************/
/*! exports provided: Item, Section, useCollection, getItemCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return $c1d7fb2ec91bae71$export$6d08773d2e66f8f2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return $9fc4852771d079eb$export$6e2c8f0811a474ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCollection", function() { return $7613b1592d41b092$export$6cd28814d92fa9c9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemCount", function() { return $453cc9f0df89c0a5$export$77d5aafae4e095b2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c1d7fb2ec91bae71$exports = {};

$parcel$export($c1d7fb2ec91bae71$exports, "Item", () => $c1d7fb2ec91bae71$export$6d08773d2e66f8f2);

function $c1d7fb2ec91bae71$var$Item(props) {
    return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems , title: title , children: children  } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning)) console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.');
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child1 of childItems)yield {
                type: 'item',
                value: child1
            };
            else if (title) {
                let items = [];
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;


var $9fc4852771d079eb$exports = {};

$parcel$export($9fc4852771d079eb$exports, "Section", () => $9fc4852771d079eb$export$6e2c8f0811a474ce);

function $9fc4852771d079eb$var$Section(props) {
    return null;
}
$9fc4852771d079eb$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children , title: title , items: items1  } = props;
    yield {
        type: 'section',
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items1) throw new Error('props.children was a function but props.items is missing');
                for (let item of items1)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $9fc4852771d079eb$export$6e2c8f0811a474ce = $9fc4852771d079eb$var$Section;


var $abe69ec9966cc167$exports = {};


var $7613b1592d41b092$exports = {};

$parcel$export($7613b1592d41b092$exports, "useCollection", () => $7613b1592d41b092$export$6cd28814d92fa9c9);

class $eb2240fc39a57fa5$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $eb2240fc39a57fa5$var$iterable(()=>this.iterateCollection(props)
        );
    }
    *iterateCollection(props) {
        let { children: children , items: items  } = props;
        if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            for (let item of props.items)yield* this.getFullNode({
                value: item
            }, {
                renderer: children
            });
        } else {
            let items = [];
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, (child)=>{
                items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {
                });
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _key;
            let key = (_key = v.key) !== null && _key !== void 0 ? _key : v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = typeof element.type === 'function' ? element.type.name : element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            let index = partialNode.index;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                let nodeKey = childNode.key;
                if (!nodeKey) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    // Cache the node based on its value
                    node.value = childNode.value || partialNode.value;
                    if (node.value) this.cache.set(node.value, node);
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node.type)}> in <${$eb2240fc39a57fa5$var$capitalize(parentNode.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null) return;
        // Create full node
        let builder = this;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: partialNode.value,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: partialNode.textValue,
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes,
            childNodes: $eb2240fc39a57fa5$var$iterable(function*() {
                if (!partialNode.hasChildNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // TODO: Remove this line entirely and enforce that users always provide unique keys.
                    // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    child.index = index;
                    let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
                    for (let node1 of nodes){
                        index++;
                        yield node1;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $eb2240fc39a57fa5$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item1 of iterable){
                cache.push(item1);
                yield item1;
            }
        }
    };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element))
    ;
    if (outer) return outer;
    if (inner) return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}



function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context, invalidators = []) {
    let builder = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>new $eb2240fc39a57fa5$export$bf788dd355e3a401()
    , []);
    let prev = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>{
        let nodes = builder.build(props, context);
        prev.current = factory(nodes, prev.current);
        return prev.current;
    // Don't invalidate when any prop changes, just the two we care about.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        builder,
        props.children,
        props.items,
        context,
        ...invalidators
    ]);
}


var $453cc9f0df89c0a5$exports = {};

$parcel$export($453cc9f0df89c0a5$exports, "getItemCount", () => $453cc9f0df89c0a5$export$77d5aafae4e095b2);
const $453cc9f0df89c0a5$var$cache = new WeakMap();
function $453cc9f0df89c0a5$export$77d5aafae4e095b2(collection) {
    let count = $453cc9f0df89c0a5$var$cache.get(collection);
    if (count != null) return count;
    count = 0;
    for (let item of collection)if (item.type === 'section') count += $453cc9f0df89c0a5$export$77d5aafae4e095b2(item.childNodes);
    else count++;
    $453cc9f0df89c0a5$var$cache.set(collection, count);
    return count;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/combobox/dist/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/@react-stately/combobox/dist/module.js ***!
  \*************************************************************/
/*! exports provided: useComboBoxState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComboBoxState", function() { return $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e; });
/* harmony import */ var _react_stately_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-stately/list */ "./node_modules/@react-stately/list/dist/module.js");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_stately_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/menu */ "./node_modules/@react-stately/menu/dist/module.js");





function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a9e7382a7d111cb5$exports = {};

$parcel$export($a9e7382a7d111cb5$exports, "useComboBoxState", () => $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e);




function $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e(props) {
    var ref4;
    let { defaultFilter: defaultFilter , menuTrigger: menuTrigger = 'input' , allowsEmptyCollection: allowsEmptyCollection = false , allowsCustomValue: allowsCustomValue , shouldCloseOnBlur: shouldCloseOnBlur = true  } = props;
    let [showAllItems, setShowAllItems] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
    let [isFocused1, setFocusedState] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
    var _defaultInputValue;
    let [inputValue, setInputValue] = Object(_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__["useControlledState"])(props.inputValue, (_defaultInputValue = props.defaultInputValue) !== null && _defaultInputValue !== void 0 ? _defaultInputValue : '', props.onInputChange);
    let onSelectionChange = (key)=>{
        if (props.onSelectionChange) props.onSelectionChange(key);
        // If key is the same, reset the inputValue and close the menu
        // (scenario: user clicks on already selected option)
        if (key === selectedKey) {
            resetInputValue();
            triggerState.close();
        }
    };
    var _items;
    let { collection: collection , selectionManager: selectionManager , selectedKey: selectedKey , setSelectedKey: setSelectedKey , selectedItem: selectedItem , disabledKeys: disabledKeys  } = Object(_react_stately_list__WEBPACK_IMPORTED_MODULE_0__["useSingleSelectListState"])({
        ...props,
        onSelectionChange: onSelectionChange,
        items: (_items = props.items) !== null && _items !== void 0 ? _items : props.defaultItems
    });
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, defaultFilter)
    , [
        collection,
        inputValue,
        defaultFilter,
        props.items
    ]);
    // Track what action is attempting to open the menu
    let menuOpenTrigger = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])('focus');
    let onOpenChange = (open)=>{
        if (props.onOpenChange) props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
    };
    let triggerState = Object(_react_stately_menu__WEBPACK_IMPORTED_MODULE_3__["useMenuTriggerState"])({
        ...props,
        onOpenChange: onOpenChange,
        isOpen: undefined,
        defaultOpen: undefined
    });
    let open1 = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // Prevent open operations from triggering if there is nothing to display
        // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
        // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
        if (allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) {
            if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is manually opened. Only care about this if items are undefined
            setShowAllItems(true);
            menuOpenTrigger.current = trigger;
            triggerState.open(focusStrategy);
        }
    };
    let toggle = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
        if (!(allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) && !triggerState.isOpen) return;
        if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is toggled open. Only care about this if items are undefined
        setShowAllItems(true);
        // Only update the menuOpenTrigger if menu is currently closed
        if (!triggerState.isOpen) menuOpenTrigger.current = trigger;
        triggerState.toggle(focusStrategy);
    };
    let lastValue = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(inputValue);
    let resetInputValue = ()=>{
        var ref;
        var ref3;
        let itemText = (ref3 = (ref = collection.getItem(selectedKey)) === null || ref === void 0 ? void 0 : ref.textValue) !== null && ref3 !== void 0 ? ref3 : '';
        lastValue.current = itemText;
        setInputValue(itemText);
    };
    let isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    var _selectedKey, ref1;
    let lastSelectedKey = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])((ref1 = (_selectedKey = props.selectedKey) !== null && _selectedKey !== void 0 ? _selectedKey : props.defaultSelectedKey) !== null && ref1 !== void 0 ? ref1 : null);
    var ref2;
    let lastSelectedKeyText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])((ref2 = (ref4 = collection.getItem(selectedKey)) === null || ref4 === void 0 ? void 0 : ref4.textValue) !== null && ref2 !== void 0 ? ref2 : '');
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(()=>{
        var ref;
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused1 && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue.current && menuTrigger !== 'manual') open1(null, 'input');
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) triggerState.close();
        // Close when an item is selected.
        if (selectedKey != null && selectedKey !== lastSelectedKey.current) triggerState.close();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue.current) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set selectedKey to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (inputValue === '' && (props.inputValue === undefined || props.selectedKey === undefined)) setSelectedKey(null);
        }
        // If it is the intial render and inputValue isn't controlled nor has an intial value, set input to match current selected key if any
        if (isInitialRender.current && props.inputValue === undefined && props.defaultInputValue === undefined) resetInputValue();
        // If the selectedKey changed, update the input value.
        // Do nothing if both inputValue and selectedKey are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (selectedKey !== lastSelectedKey.current && (props.inputValue === undefined || props.selectedKey === undefined)) resetInputValue();
        else lastValue.current = inputValue;
        var ref5;
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = (ref5 = (ref = collection.getItem(selectedKey)) === null || ref === void 0 ? void 0 : ref.textValue) !== null && ref5 !== void 0 ? ref5 : '';
        if (!isFocused1 && selectedKey != null && props.inputValue === undefined && selectedKey === lastSelectedKey.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                lastValue.current = selectedItemText;
                setInputValue(selectedItemText);
            }
        }
        isInitialRender.current = false;
        lastSelectedKey.current = selectedKey;
        lastSelectedKeyText.current = selectedItemText;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(()=>{
        // Reset focused key when the menu closes
        if (!triggerState.isOpen) selectionManager.setFocusedKey(null);
    }, [
        triggerState.isOpen,
        selectionManager
    ]);
    // Revert input value and close menu
    let revert = ()=>{
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        lastSelectedKey.current = null;
        setSelectedKey(null);
        triggerState.close();
    };
    let commitSelection = ()=>{
        // If multiple things are controlled, call onSelectionChange
        if (props.selectedKey !== undefined && props.inputValue !== undefined) {
            var ref;
            props.onSelectionChange(selectedKey);
            var ref6;
            // Stop menu from reopening from useEffect
            let itemText = (ref6 = (ref = collection.getItem(selectedKey)) === null || ref === void 0 ? void 0 : ref.textValue) !== null && ref6 !== void 0 ? ref6 : '';
            lastValue.current = itemText;
            triggerState.close();
        } else {
            // If only a single aspect of combobox is controlled, reset input value and close menu for the user
            resetInputValue();
            triggerState.close();
        }
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectedKey === selectionManager.focusedKey) commitSelection();
            else setSelectedKey(selectionManager.focusedKey);
        } else if (allowsCustomValue) commitCustomValue();
        else // Reset inputValue and close menu if no item is focused but user triggers a commit
        commitSelection();
    };
    let setFocused = (isFocused)=>{
        if (isFocused) {
            if (menuTrigger === 'focus') open1(null, 'focus');
        } else if (shouldCloseOnBlur) {
            var ref;
            var ref7;
            let itemText = (ref7 = (ref = collection.getItem(selectedKey)) === null || ref === void 0 ? void 0 : ref.textValue) !== null && ref7 !== void 0 ? ref7 : '';
            if (allowsCustomValue && inputValue !== itemText) commitCustomValue();
            else commitSelection();
        }
        setFocusedState(isFocused);
    };
    return {
        ...triggerState,
        toggle: toggle,
        open: open1,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        disabledKeys: disabledKeys,
        isFocused: isFocused1,
        setFocused: setFocused,
        selectedItem: selectedItem,
        collection: showAllItems ? originalCollection : filteredCollection,
        inputValue: inputValue,
        setInputValue: setInputValue,
        commit: commit,
        revert: revert
    };
}
function $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, filter) {
    return new _react_stately_list__WEBPACK_IMPORTED_MODULE_0__["ListCollection"]($a9e7382a7d111cb5$var$filterNodes(collection, inputValue, filter));
}
function $a9e7382a7d111cb5$var$filterNodes(nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === 'section' && node.hasChildNodes) {
            let filtered = $a9e7382a7d111cb5$var$filterNodes(node.childNodes, inputValue, filter);
            if ([
                ...filtered
            ].length > 0) filteredNode.push({
                ...node,
                childNodes: filtered
            });
        } else if (node.type !== 'section' && filter(node.textValue, inputValue)) filteredNode.push({
            ...node
        });
    }
    return filteredNode;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/list/dist/module.js":
/*!*********************************************************!*\
  !*** ./node_modules/@react-stately/list/dist/module.js ***!
  \*********************************************************/
/*! exports provided: useListState, useSingleSelectListState, ListCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useListState", function() { return $e72dd72e1c76a225$export$2f645645f7bca764; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSingleSelectListState", function() { return $a0d645289fe9b86b$export$e7f05e985daf4b5f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCollection", function() { return $a02d57049d202695$export$d085fb9e920b5ca7; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/selection */ "./node_modules/@react-stately/selection/dist/module.js");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/module.js");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/module.js");





function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $e72dd72e1c76a225$exports = {};

$parcel$export($e72dd72e1c76a225$exports, "useListState", () => $e72dd72e1c76a225$export$2f645645f7bca764);

var $a02d57049d202695$exports = {};

$parcel$export($a02d57049d202695$exports, "ListCollection", () => $a02d57049d202695$export$d085fb9e920b5ca7);
var tmp = Symbol.iterator;
class $a02d57049d202695$export$d085fb9e920b5ca7 {
    *[tmp]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key);
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    constructor(nodes){
        this.keyMap = new Map();
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
        };
        for (let node2 of nodes)visit(node2);
        let last;
        let index = 0;
        for (let [key, node1] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node1.prevKey = last.key;
            } else {
                this.firstKey = key;
                node1.prevKey = undefined;
            }
            if (node1.type === 'item') node1.index = index++;
            last = node1;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this.lastKey = last === null || last === void 0 ? void 0 : last.key;
    }
}




function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
    let { filter: filter  } = props;
    let selectionState = Object(_react_stately_selection__WEBPACK_IMPORTED_MODULE_1__["useMultipleSelectionState"])(props);
    let disabledKeys = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let factory = (nodes)=>filter ? new $a02d57049d202695$export$d085fb9e920b5ca7(filter(nodes)) : new $a02d57049d202695$export$d085fb9e920b5ca7(nodes)
    ;
    let context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        })
    , [
        props.suppressTextValueWarning
    ]);
    let collection = Object(_react_stately_collections__WEBPACK_IMPORTED_MODULE_2__["useCollection"])(props, factory, context, [
        filter
    ]);
    // Reset focused key if that item is deleted from the collection.
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{
        if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    }, [
        collection,
        selectionState.focusedKey
    ]);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: new _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__["SelectionManager"](collection, selectionState)
    };
}


var $a0d645289fe9b86b$exports = {};

$parcel$export($a0d645289fe9b86b$exports, "useSingleSelectListState", () => $a0d645289fe9b86b$export$e7f05e985daf4b5f);



function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
    var _defaultSelectedKey;
    let [selectedKey, setSelectedKey] = Object(_react_stately_utils__WEBPACK_IMPORTED_MODULE_3__["useControlledState"])(props.selectedKey, (_defaultSelectedKey = props.defaultSelectedKey) !== null && _defaultSelectedKey !== void 0 ? _defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>selectedKey != null ? [
            selectedKey
        ] : []
    , [
        selectedKey
    ]);
    let { collection: collection , disabledKeys: disabledKeys , selectionManager: selectionManager  } = $e72dd72e1c76a225$export$2f645645f7bca764({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            let key = keys.values().next().value;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/menu/dist/module.js":
/*!*********************************************************!*\
  !*** ./node_modules/@react-stately/menu/dist/module.js ***!
  \*********************************************************/
/*! exports provided: useMenuTriggerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenuTriggerState", function() { return $a28c903ee9ad8dc5$export$79fefeb1c2091ac3; });
/* harmony import */ var _react_stately_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-stately/overlays */ "./node_modules/@react-stately/overlays/dist/module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a28c903ee9ad8dc5$exports = {};

$parcel$export($a28c903ee9ad8dc5$exports, "useMenuTriggerState", () => $a28c903ee9ad8dc5$export$79fefeb1c2091ac3);


function $a28c903ee9ad8dc5$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = Object(_react_stately_overlays__WEBPACK_IMPORTED_MODULE_0__["useOverlayTriggerState"])(props);
    let [focusStrategy1, setFocusStrategy] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
    return {
        focusStrategy: focusStrategy1,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/overlays/dist/module.js":
/*!*************************************************************!*\
  !*** ./node_modules/@react-stately/overlays/dist/module.js ***!
  \*************************************************************/
/*! exports provided: useOverlayTriggerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOverlayTriggerState", function() { return $fc909762b330b746$export$61c6a8c84e605fb6; });
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/module.js");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fc909762b330b746$exports = {};

$parcel$export($fc909762b330b746$exports, "useOverlayTriggerState", () => $fc909762b330b746$export$61c6a8c84e605fb6);

function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = Object(_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__["useControlledState"])(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    return {
        isOpen: isOpen,
        open () {
            setOpen(true);
        },
        close () {
            setOpen(false);
        },
        toggle () {
            setOpen(!isOpen);
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/selection/dist/module.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-stately/selection/dist/module.js ***!
  \**************************************************************/
/*! exports provided: useMultipleSelectionState, SelectionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultipleSelectionState", function() { return $7af3f5b51489e0b5$export$253fe78d46329472; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionManager", function() { return $d496c0a20b6e58ec$export$6c8a5aaad13c9852; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/module.js");



function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $7af3f5b51489e0b5$exports = {};

$parcel$export($7af3f5b51489e0b5$exports, "useMultipleSelectionState", () => $7af3f5b51489e0b5$export$253fe78d46329472);

class $e40ea825a81a3709$export$52baac22726c72bf extends Set {
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
            this.anchorKey = anchorKey || keys.anchorKey;
            this.currentKey = currentKey || keys.currentKey;
        } else {
            this.anchorKey = anchorKey;
            this.currentKey = currentKey;
        }
    }
}



function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
    let { selectionMode: selectionMode = 'none' , disallowEmptySelection: disallowEmptySelection , allowDuplicateSelectionEvents: allowDuplicateSelectionEvents  } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    let [, setFocused] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    let focusedKeyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    let childFocusStrategyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    let [, setFocusedKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    let selectedKeysProp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>$7af3f5b51489e0b5$var$convertSelection(props.selectedKeys)
    , [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>$7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new $e40ea825a81a3709$export$52baac22726c72bf())
    , [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = Object(_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__["useControlledState"])(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set()
    , [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.selectionBehavior || 'toggle');
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (props.selectionBehavior === 'replace' && selectionBehavior === 'toggle' && typeof selectedKeys === 'object' && selectedKeys.size === 0) setSelectionBehavior('replace');
    return {
        selectionMode: selectionMode,
        disallowEmptySelection: disallowEmptySelection,
        selectionBehavior: selectionBehavior,
        setSelectionBehavior: setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = 'first') {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys: selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp
    };
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === 'all' ? 'all' : new $e40ea825a81a3709$export$52baac22726c72bf(selection);
}


var $d496c0a20b6e58ec$exports = {};

$parcel$export($d496c0a20b6e58ec$exports, "SelectionManager", () => $d496c0a20b6e58ec$export$6c8a5aaad13c9852);

class $d496c0a20b6e58ec$export$6c8a5aaad13c9852 {
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === 'none') return false;
        key = this.getKey(key);
        return this.state.selectedKeys === 'all' ? !this.state.disabledKeys.has(key) : this.state.selectedKeys.has(key);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === 'all') return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k)
        );
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || (item === null || item === void 0 ? void 0 : item.index) < first.index) first = item;
        }
        return first === null || first === void 0 ? void 0 : first.key;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || (item === null || item === void 0 ? void 0 : item.index) > last.index) last = item;
        }
        return last === null || last === void 0 ? void 0 : last.key;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            this.replaceSelection(toKey);
            return;
        }
        toKey = this.getKey(toKey);
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === 'all') selection = new $e40ea825a81a3709$export$52baac22726c72bf([
            toKey
        ], toKey, toKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            let anchorKey = selectedKeys.anchorKey || toKey;
            selection = new $e40ea825a81a3709$export$52baac22726c72bf(selectedKeys, anchorKey, toKey);
            for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey))selection.delete(key);
            for (let key1 of this.getKeyRange(toKey, anchorKey))if (!this.state.disabledKeys.has(key1)) selection.add(key1);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if (fromItem.index <= toItem.index) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        let keys = [];
        let key = from;
        while(key){
            let item = this.collection.getItem(key);
            if (item && item.type === 'item' || item.type === 'cell' && this.allowsCellSelection) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) // ??\_(???)_/??
        return key;
        // If cell selection is allowed, just return the key.
        if (item.type === 'cell' && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item.type !== 'item' && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== 'item') return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single' && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        key = this.getKey(key);
        if (key == null) return;
        let keys = new $e40ea825a81a3709$export$52baac22726c72bf(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(key)) keys.delete(key);
        else {
            keys.add(key);
            keys.anchorKey = key;
            keys.currentKey = key;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === 'none') return;
        key = this.getKey(key);
        if (key == null) return;
        this.state.setSelectedKeys(new $e40ea825a81a3709$export$52baac22726c72bf([
            key
        ], key, key));
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === 'none') return;
        let selection = new $e40ea825a81a3709$export$52baac22726c72bf();
        for (let key of keys){
            key = this.getKey(key);
            if (key != null) {
                selection.add(key);
                if (this.selectionMode === 'single') break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        let keys = [];
        let addKeys = (key)=>{
            while(key){
                if (!this.state.disabledKeys.has(key)) {
                    let item = this.collection.getItem(key);
                    if (item.type === 'item') keys.push(key);
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if (item.hasChildNodes && (this.allowsCellSelection || item.type !== 'item')) addKeys([
                        ...item.childNodes
                    ][0].key);
                }
                key = this.collection.getKeyAfter(key);
            }
        };
        addKeys(this.collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (this.selectionMode === 'multiple') this.state.setSelectedKeys('all');
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $e40ea825a81a3709$export$52baac22726c72bf());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === 'toggle' || e && (e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
        this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key2 of selectedKeys){
            if (!selection.has(key2)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(key)) return false;
        let item = this.collection.getItem(key);
        if (!item || item.type === 'cell' && !this.allowsCellSelection) return false;
        return true;
    }
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        var ref;
        this.allowsCellSelection = (ref = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && ref !== void 0 ? ref : false;
        this._isSelectAll = null;
    }
}


var $63d397230baf7bd4$exports = {};





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/utils/dist/module.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react-stately/utils/dist/module.js ***!
  \**********************************************************/
/*! exports provided: useControlledState, clamp, snapValueToStep, toFixedNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControlledState", function() { return $bfee1151ccb0650f$export$40bfa8c7b0832715; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return $48d9f1d165180307$export$7d15b64cf5a3a4c4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapValueToStep", function() { return $48d9f1d165180307$export$cb6e0bb50bc19463; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFixedNumber", function() { return $48d9f1d165180307$export$b6268554fba451f; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bfee1151ccb0650f$exports = {};

$parcel$export($bfee1151ccb0650f$exports, "useControlledState", () => $bfee1151ccb0650f$export$40bfa8c7b0832715);

function $bfee1151ccb0650f$export$40bfa8c7b0832715(value1, defaultValue, onChange) {
    let [stateValue, setStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value1 || defaultValue);
    let ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value1 !== undefined);
    let wasControlled = ref.current;
    let isControlled = value1 !== undefined;
    // Internal state reference for useCallback
    let stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(stateValue);
    if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
    ref.current = isControlled;
    let setValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((value2, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(stateRef.current, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) stateRef.current = value;
        };
        if (typeof value2 === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value2(isControlled ? stateRef.current : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value2);
            onChangeCaller(value2, ...args);
        }
    }, [
        isControlled,
        onChange
    ]);
    // If a controlled component's value prop changes, we need to update stateRef
    if (isControlled) stateRef.current = value1;
    else value1 = stateValue;
    return [
        value1,
        setValue
    ];
}


var $48d9f1d165180307$exports = {};

$parcel$export($48d9f1d165180307$exports, "clamp", () => $48d9f1d165180307$export$7d15b64cf5a3a4c4);
$parcel$export($48d9f1d165180307$exports, "snapValueToStep", () => $48d9f1d165180307$export$cb6e0bb50bc19463);
$parcel$export($48d9f1d165180307$exports, "toFixedNumber", () => $48d9f1d165180307$export$b6268554fba451f);
function $48d9f1d165180307$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $48d9f1d165180307$export$cb6e0bb50bc19463(value, min, max, step) {
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step;
    // correct floating point behavior by rounding to step precision
    let string = step.toString();
    let index = string.indexOf('.');
    let precision = index >= 0 ? string.length - index : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        snappedValue = Math.round(snappedValue * pow) / pow;
    }
    return snappedValue;
}
function $48d9f1d165180307$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/autocomplete.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/autocomplete.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".autocomplete__wrapper {\n\tposition: relative;\n}\n\n.autocomplete__hint,\n.autocomplete__input {\n\t-webkit-appearance: none;\n\tborder: 2px solid #0b0c0c;\n\tborder-radius: 0;\n\t/* Safari 10 on iOS adds implicit border rounding. */\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\tmargin-bottom: 0;\n\t/* BUG: Safari 10 on macOS seems to add an implicit margin. */\n\twidth: 100%;\n}\n\n.autocomplete__input {\n\tbackground-color: transparent;\n\tposition: relative;\n}\n\n.autocomplete__hint {\n\tcolor: #b1b4b6;\n\tposition: absolute;\n}\n\n.autocomplete__input--default {\n\tpadding: 5px;\n}\n\n.autocomplete__input--focused {\n\toutline: 3px solid #fd0 !important ; /*  need to remove important when dash input.css if figured out */\n\toutline-offset: 0;\n\tbox-shadow: inset 0 0 0 2px;\n}\n\n.autocomplete__input--show-all-values {\n\tpadding: 5px 34px 5px 5px;\n\t/* Space for arrow. Other padding should match .autocomplete__input--default. */\n\tcursor: pointer;\n}\n\n.autocomplete__dropdown-arrow-down {\n\tdisplay: inline-block;\n\tposition: absolute;\n\tright: 8px;\n\twidth: 24px;\n\theight: 24px;\n\ttop: 10px;\n\tpointer-events: none;\n}\n\n.autocomplete__menu {\n\tbackground-color: #fff;\n\tborder: 2px solid #0B0C0C;\n\tborder-top: 0;\n\tcolor: #0B0C0C;\n\tmargin: 0;\n\tmax-height: 342px;\n\toverflow-x: hidden;\n\tpadding: 0;\n\twidth: 100%;\n\twidth: calc(100% - 4px);\n}\n\n.autocomplete__menu--visible {\n\tdisplay: block;\n}\n\n.autocomplete__menu--hidden {\n\tdisplay: none;\n}\n\n.autocomplete__menu--overlay {\n\tbox-shadow: rgba(0, 0, 0, 0.256863) 0px 2px 6px;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 100%;\n\tz-index: 100;\n}\n\n.autocomplete__menu--inline {\n\tposition: relative;\n}\n\n.autocomplete__option {\n\tborder-bottom: solid #b1b4b6;\n\tborder-width: 1px 0;\n\tcursor: pointer;\n\tdisplay: block;\n\tposition: relative;\n}\n\n.autocomplete__option>* {\n\tpointer-events: none;\n}\n\n.autocomplete__option:first-of-type {\n\tborder-top-width: 0;\n}\n\n.autocomplete__option:last-of-type {\n\tborder-bottom-width: 0;\n}\n\n.autocomplete__option--odd {\n\tbackground-color: #FAFAFA;\n}\n\n.autocomplete__option--focused,\n.autocomplete__option:hover {\n\tbackground-color: #1d70b8;\n\tborder-color: #1d70b8;\n\tcolor: white;\n\toutline: none;\n}\n\n@media (-ms-high-contrast: active),\n(forced-colors: active) {\n\t.autocomplete__menu {\n\t\tborder-color: FieldText;\n\t}\n\n\t.autocomplete__option {\n\t\tbackground-color: Field;\n\t\tcolor: FieldText;\n\t}\n\n\t.autocomplete__option--focused,\n\t.autocomplete__option:hover {\n\t\tforced-color-adjust: none;\n\t\t/* prevent backplate from obscuring text */\n\t\tbackground-color: Highlight;\n\t\tborder-color: Highlight;\n\t\tcolor: HighlightText;\n\n\t\t/* Prefer SelectedItem / SelectedItemText in browsers that support it */\n\t\tbackground-color: SelectedItem;\n\t\tborder-color: SelectedItem;\n\t\tcolor: SelectedItemText;\n\t\toutline-color: SelectedItemText;\n\t}\n}\n\n.autocomplete__option--no-results {\n\tbackground-color: #FAFAFA;\n\tcolor: #646b6f;\n\tcursor: not-allowed;\n}\n\n.autocomplete__hint,\n.autocomplete__input,\n.autocomplete__option {\n\tfont-size: 16px;\n\tline-height: 1.25;\n}\n\n.autocomplete__hint,\n.autocomplete__option {\n\tpadding: 5px;\n}\n\n@media (min-width: 641px) {\n\n\t.autocomplete__hint,\n\t.autocomplete__input,\n\t.autocomplete__option {\n\t\tfont-size: 19px;\n\t\tline-height: 1.31579;\n\t}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/combobox.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/combobox.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dluhc-combobox {\n\tfont-family: Arial, sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tfont-size: 1rem;\n\tline-height: 1.25;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n\theight: 40px;\n\theight: 2.5rem;\n\tpadding: 5px;\n\tborder: 2px solid #0b0c0c;\n}\n\n@media print {\n\n\t.dluhc-combobox {\n\t\tfont-family: sans-serif;\n\t}\n}\n\n@media (min-width: 49.9375em) {\n\n\t.dluhc-combobox {\n\t\tfont-size: 19px;\n\t\tfont-size: 1.1875rem;\n\t\tline-height: 1.25;\n\t}\n}\n\n@media print {\n\n\t.dluhc-combobox {\n\t\tfont-size: 14pt;\n\t\tline-height: 1.25;\n\t}\n}\n\n.dluhc-combobox:focus {\n\toutline: 3px solid #fd0;\n\toutline-offset: 0;\n\tbox-shadow: inset 0 0 0 2px;\n}\n\n/* .govuk-select option:active,\n.select div[class*='control'] option:active,\n.govuk-select option:checked,\n.select div[class*='control'] option:checked,\n.govuk-select:focus::-ms-value,\n.select div[class*='control']:focus::-ms-value {\n\tcolor: #fff;\n\tbackground-color: #1d70b8;\n} */\n\n.dluhc-combobox--error {\n\tborder: 2px solid #d4351c;\n}\n\n.dluhc-combobox--error:focus {\n\tborder-color: #0b0c0c;\n}", ""]);
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

/***/ "./node_modules/dom-helpers/ownerDocument.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/ownerDocument.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/contains.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/contains.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

exports.default = _default;

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);
  return false;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/isWindow.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/isWindow.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/offset.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/query/offset.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = offset;

var _contains = _interopRequireDefault(__webpack_require__(/*! ./contains */ "./node_modules/dom-helpers/query/contains.js"));

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

function offset(node) {
  var doc = (0, _ownerDocument.default)(node),
      win = (0, _isWindow.default)(doc),
      docElem = doc && doc.documentElement,
      box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  if (!doc) return; // Make sure it's not a disconnected DOM node

  if (!(0, _contains.default)(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect(); // IE8 getBoundingClientRect doesn't support width & height

  box = {
    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
    width: (box.width == null ? node.offsetWidth : box.width) || 0,
    height: (box.height == null ? node.offsetHeight : box.height) || 0
  };
  return box;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/offsetParent.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/query/offsetParent.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = offsetParent;

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! ../style */ "./node_modules/dom-helpers/style/index.js"));

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = (0, _ownerDocument.default)(node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && (0, _style.default)(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/position.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/position.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = position;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _offset = _interopRequireDefault(__webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/query/offset.js"));

var _offsetParent = _interopRequireDefault(__webpack_require__(/*! ./offsetParent */ "./node_modules/dom-helpers/query/offsetParent.js"));

var _scrollTop = _interopRequireDefault(__webpack_require__(/*! ./scrollTop */ "./node_modules/dom-helpers/query/scrollTop.js"));

var _scrollLeft = _interopRequireDefault(__webpack_require__(/*! ./scrollLeft */ "./node_modules/dom-helpers/query/scrollLeft.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! ../style */ "./node_modules/dom-helpers/style/index.js"));

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  },
      offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if ((0, _style.default)(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _offsetParent.default)(node);
    offset = (0, _offset.default)(node);
    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset.default)(offsetParent);
    parentOffset.top += parseInt((0, _style.default)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop.default)(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style.default)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft.default)(offsetParent) || 0;
  } // Subtract parent offsets and node margins


  return (0, _extends2.default)({}, offset, {
    top: offset.top - parentOffset.top - (parseInt((0, _style.default)(node, 'marginTop'), 10) || 0),
    left: offset.left - parentOffset.left - (parseInt((0, _style.default)(node, 'marginLeft'), 10) || 0)
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/scrollLeft.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/query/scrollLeft.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/scrollTop.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/query/scrollTop.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/style/getComputedStyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = _getComputedStyle;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;
  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;
      prop = (0, _camelizeStyle.default)(prop);
      if (prop == 'float') prop = 'styleFloat';
      var current = node.currentStyle[prop] || null;
      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

        if (rsLeft) runStyle.left = node.currentStyle.left;
        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px'; // Revert the changed values

        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/style/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = style;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var _hyphenateStyle = _interopRequireDefault(__webpack_require__(/*! ../util/hyphenateStyle */ "./node_modules/dom-helpers/util/hyphenateStyle.js"));

var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/style/getComputedStyle.js"));

var _removeStyle = _interopRequireDefault(__webpack_require__(/*! ./removeStyle */ "./node_modules/dom-helpers/style/removeStyle.js"));

var _properties = __webpack_require__(/*! ../transition/properties */ "./node_modules/dom-helpers/transition/properties.js");

var _isTransform = _interopRequireDefault(__webpack_require__(/*! ../transition/isTransform */ "./node_modules/dom-helpers/transition/isTransform.js"));

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];

    if (!value && value !== 0) {
      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += _properties.transform + ": " + transforms + ";";
  }

  node.style.cssText += ';' + css;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/style/removeStyle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = removeStyle;

function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/transition/isTransform.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-helpers/transition/properties.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelize.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelize.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelizeStyle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = camelizeStyleName;

var _camelize = _interopRequireDefault(__webpack_require__(/*! ./camelize */ "./node_modules/dom-helpers/util/camelize.js"));

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */
var msPattern = /^-ms-/;

function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hyphenate;
var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
/*!*********************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenateStyle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(__webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/util/hyphenate.js"));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/util/inDOM.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/index.js ***!
  \******************************************************/
/*! exports provided: default, PART_TYPE, isFormatXMLElementFn, formatToParts, IntlMessageFormat, ErrorCode, FormatError, InvalidValueError, InvalidValueTypeError, MissingValueError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/core */ "./node_modules/intl-messageformat/lib/src/core.js");
/* harmony import */ var _src_formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/formatters */ "./node_modules/intl-messageformat/lib/src/formatters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PART_TYPE", function() { return _src_formatters__WEBPACK_IMPORTED_MODULE_1__["PART_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormatXMLElementFn", function() { return _src_formatters__WEBPACK_IMPORTED_MODULE_1__["isFormatXMLElementFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatToParts", function() { return _src_formatters__WEBPACK_IMPORTED_MODULE_1__["formatToParts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlMessageFormat", function() { return _src_core__WEBPACK_IMPORTED_MODULE_0__["IntlMessageFormat"]; });

/* harmony import */ var _src_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/error */ "./node_modules/intl-messageformat/lib/src/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["FormatError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidValueError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["InvalidValueError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidValueTypeError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["InvalidValueTypeError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingValueError", function() { return _src_error__WEBPACK_IMPORTED_MODULE_2__["MissingValueError"]; });

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




/* harmony default export */ __webpack_exports__["default"] = (_src_core__WEBPACK_IMPORTED_MODULE_0__["IntlMessageFormat"]);


/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/core.js":
/*!*********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/core.js ***!
  \*********************************************************/
/*! exports provided: IntlMessageFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlMessageFormat", function() { return IntlMessageFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/intl-messageformat/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formatjs/fast-memoize */ "./node_modules/@formatjs/fast-memoize/lib/index.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatters */ "./node_modules/intl-messageformat/lib/src/formatters.js");
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic,
        }),
        getDateTimeFormat: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic,
        }),
        getPluralRules: Object(_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__["strategies"].variadic,
        }),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== _formatters__WEBPACK_IMPORTED_MODULE_3__["PART_TYPE"].literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return Object(_formatters__WEBPACK_IMPORTED_MODULE_3__["formatToParts"])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
        }); };
        this.getAst = function () { return _this.ast; };
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.__parse = _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__["parse"];
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());



/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/error.js":
/*!**********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/error.js ***!
  \**********************************************************/
/*! exports provided: ErrorCode, FormatError, InvalidValueError, InvalidValueTypeError, MissingValueError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatError", function() { return FormatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidValueError", function() { return InvalidValueError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidValueTypeError", function() { return InvalidValueTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingValueError", function() { return MissingValueError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/intl-messageformat/node_modules/tslib/tslib.es6.js");

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error));

var InvalidValueError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));

var InvalidValueTypeError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));

var MissingValueError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));



/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/formatters.js":
/*!***************************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/formatters.js ***!
  \***************************************************************/
/*! exports provided: PART_TYPE, isFormatXMLElementFn, formatToParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PART_TYPE", function() { return PART_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormatXMLElementFn", function() { return isFormatXMLElementFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatToParts", function() { return formatToParts; });
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/intl-messageformat/lib/src/error.js");


var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isLiteralElement"])(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isLiteralElement"])(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isPoundElement"])(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["MissingValueError"](varName, originalMessage);
        }
        var value = values[varName];
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isArgumentElement"])(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option ??? which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isDateElement"])(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isDateTimeSkeleton"])(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isTimeElement"])(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isDateTimeSkeleton"])(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isNumberElement"])(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isNumberSkeleton"])(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isTagElement"])(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__["InvalidValueTypeError"](value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isSelectElement"])(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (Object(_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__["isPluralElement"])(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new _error__WEBPACK_IMPORTED_MODULE_1__["FormatError"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _error__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}


/***/ }),

/***/ "./node_modules/intl-messageformat/node_modules/tslib/tslib.es6.js":
/*!*************************************************************************!*\
  !*** ./node_modules/intl-messageformat/node_modules/tslib/tslib.es6.js ***!
  \*************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/usehooks-ts/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/usehooks-ts/esm/index.js ***!
  \***********************************************/
/*! exports provided: useBoolean, useClickAnyWhere, useCopyToClipboard, useCounter, useDarkMode, useDebounce, useEffectOnce, useElementSize, useEventListener, useFetch, useHover, useImageOnLoad, useIntersectionObserver, useInterval, useIsClient, useIsFirstRender, useIsMounted, useLocalStorage, useLockedBody, useMap, useMediaQuery, useOnClickOutside, useReadLocalStorage, useScreen, useScript, useSsr, useStep, useTimeout, useUpdateEffect, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBoolean */ "./node_modules/usehooks-ts/esm/useBoolean/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_0__["useBoolean"]; });

/* harmony import */ var _useClickAnyWhere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useClickAnyWhere */ "./node_modules/usehooks-ts/esm/useClickAnyWhere/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickAnyWhere", function() { return _useClickAnyWhere__WEBPACK_IMPORTED_MODULE_1__["useClickAnyWhere"]; });

/* harmony import */ var _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCopyToClipboard */ "./node_modules/usehooks-ts/esm/useCopyToClipboard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCopyToClipboard", function() { return _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_2__["useCopyToClipboard"]; });

/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCounter */ "./node_modules/usehooks-ts/esm/useCounter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return _useCounter__WEBPACK_IMPORTED_MODULE_3__["useCounter"]; });

/* harmony import */ var _useDarkMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useDarkMode */ "./node_modules/usehooks-ts/esm/useDarkMode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDarkMode", function() { return _useDarkMode__WEBPACK_IMPORTED_MODULE_4__["useDarkMode"]; });

/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDebounce */ "./node_modules/usehooks-ts/esm/useDebounce/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"]; });

/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/usehooks-ts/esm/useEffectOnce/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectOnce", function() { return _useEffectOnce__WEBPACK_IMPORTED_MODULE_6__["useEffectOnce"]; });

/* harmony import */ var _useElementSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useElementSize */ "./node_modules/usehooks-ts/esm/useElementSize/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useElementSize", function() { return _useElementSize__WEBPACK_IMPORTED_MODULE_7__["useElementSize"]; });

/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return _useEventListener__WEBPACK_IMPORTED_MODULE_8__["useEventListener"]; });

/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useFetch */ "./node_modules/usehooks-ts/esm/useFetch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return _useFetch__WEBPACK_IMPORTED_MODULE_9__["useFetch"]; });

/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useHover */ "./node_modules/usehooks-ts/esm/useHover/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_10__["useHover"]; });

/* harmony import */ var _useImageOnLoad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useImageOnLoad */ "./node_modules/usehooks-ts/esm/useImageOnLoad/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImageOnLoad", function() { return _useImageOnLoad__WEBPACK_IMPORTED_MODULE_11__["useImageOnLoad"]; });

/* harmony import */ var _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useIntersectionObserver */ "./node_modules/usehooks-ts/esm/useIntersectionObserver/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntersectionObserver", function() { return _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_12__["useIntersectionObserver"]; });

/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useInterval */ "./node_modules/usehooks-ts/esm/useInterval/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_13__["useInterval"]; });

/* harmony import */ var _useIsClient__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useIsClient */ "./node_modules/usehooks-ts/esm/useIsClient/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsClient", function() { return _useIsClient__WEBPACK_IMPORTED_MODULE_14__["useIsClient"]; });

/* harmony import */ var _useIsFirstRender__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useIsFirstRender */ "./node_modules/usehooks-ts/esm/useIsFirstRender/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsFirstRender", function() { return _useIsFirstRender__WEBPACK_IMPORTED_MODULE_15__["useIsFirstRender"]; });

/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useIsMounted */ "./node_modules/usehooks-ts/esm/useIsMounted/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsMounted", function() { return _useIsMounted__WEBPACK_IMPORTED_MODULE_16__["useIsMounted"]; });

/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useLocalStorage */ "./node_modules/usehooks-ts/esm/useLocalStorage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return _useLocalStorage__WEBPACK_IMPORTED_MODULE_17__["useLocalStorage"]; });

/* harmony import */ var _useLockedBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useLockedBody */ "./node_modules/usehooks-ts/esm/useLockedBody/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLockedBody", function() { return _useLockedBody__WEBPACK_IMPORTED_MODULE_18__["useLockedBody"]; });

/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useMap */ "./node_modules/usehooks-ts/esm/useMap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMap", function() { return _useMap__WEBPACK_IMPORTED_MODULE_19__["useMap"]; });

/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useMediaQuery */ "./node_modules/usehooks-ts/esm/useMediaQuery/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() { return _useMediaQuery__WEBPACK_IMPORTED_MODULE_20__["useMediaQuery"]; });

/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./useOnClickOutside */ "./node_modules/usehooks-ts/esm/useOnClickOutside/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return _useOnClickOutside__WEBPACK_IMPORTED_MODULE_21__["useOnClickOutside"]; });

/* harmony import */ var _useReadLocalStorage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useReadLocalStorage */ "./node_modules/usehooks-ts/esm/useReadLocalStorage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReadLocalStorage", function() { return _useReadLocalStorage__WEBPACK_IMPORTED_MODULE_22__["useReadLocalStorage"]; });

/* harmony import */ var _useScreen__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useScreen */ "./node_modules/usehooks-ts/esm/useScreen/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScreen", function() { return _useScreen__WEBPACK_IMPORTED_MODULE_23__["useScreen"]; });

/* harmony import */ var _useScript__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useScript */ "./node_modules/usehooks-ts/esm/useScript/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScript", function() { return _useScript__WEBPACK_IMPORTED_MODULE_24__["useScript"]; });

/* harmony import */ var _useSsr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useSsr */ "./node_modules/usehooks-ts/esm/useSsr/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSsr", function() { return _useSsr__WEBPACK_IMPORTED_MODULE_25__["useSsr"]; });

/* harmony import */ var _useStep__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./useStep */ "./node_modules/usehooks-ts/esm/useStep/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStep", function() { return _useStep__WEBPACK_IMPORTED_MODULE_26__["useStep"]; });

/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useTimeout */ "./node_modules/usehooks-ts/esm/useTimeout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout__WEBPACK_IMPORTED_MODULE_27__["useTimeout"]; });

/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/usehooks-ts/esm/useUpdateEffect/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return _useUpdateEffect__WEBPACK_IMPORTED_MODULE_28__["useUpdateEffect"]; });

/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./useWindowSize */ "./node_modules/usehooks-ts/esm/useWindowSize/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_29__["useWindowSize"]; });































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useBoolean/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useBoolean/index.js ***!
  \**********************************************************/
/*! exports provided: useBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBoolean */ "./node_modules/usehooks-ts/esm/useBoolean/useBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useBoolean/useBoolean.js":
/*!***************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useBoolean/useBoolean.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useBoolean(defaultValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!defaultValue), value = _a[0], setValue = _a[1];
    var setTrue = function () { return setValue(true); };
    var setFalse = function () { return setValue(false); };
    var toggle = function () { return setValue(function (x) { return !x; }); };
    return { value: value, setValue: setValue, setTrue: setTrue, setFalse: setFalse, toggle: toggle };
}
/* harmony default export */ __webpack_exports__["default"] = (useBoolean);
//# sourceMappingURL=useBoolean.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useClickAnyWhere/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useClickAnyWhere/index.js ***!
  \****************************************************************/
/*! exports provided: useClickAnyWhere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useClickAnyWhere__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useClickAnyWhere */ "./node_modules/usehooks-ts/esm/useClickAnyWhere/useClickAnyWhere.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickAnyWhere", function() { return _useClickAnyWhere__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useClickAnyWhere/useClickAnyWhere.js":
/*!***************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useClickAnyWhere/useClickAnyWhere.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");

function useClickAnyWhere(handler) {
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_0__["useEventListener"])('click', function (event) {
        handler(event);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (useClickAnyWhere);
//# sourceMappingURL=useClickAnyWhere.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useCopyToClipboard/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useCopyToClipboard/index.js ***!
  \******************************************************************/
/*! exports provided: useCopyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCopyToClipboard */ "./node_modules/usehooks-ts/esm/useCopyToClipboard/useCopyToClipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCopyToClipboard", function() { return _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useCopyToClipboard/useCopyToClipboard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useCopyToClipboard/useCopyToClipboard.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function useCopyToClipboard() {
    var _this = this;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), copiedText = _a[0], setCopiedText = _a[1];
    var copy = function (text) { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) {
                        console.warn('Clipboard not supported');
                        return [2, false];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, navigator.clipboard.writeText(text)];
                case 2:
                    _a.sent();
                    setCopiedText(text);
                    return [2, true];
                case 3:
                    error_1 = _a.sent();
                    console.warn('Copy failed', error_1);
                    setCopiedText(null);
                    return [2, false];
                case 4: return [2];
            }
        });
    }); };
    return [copiedText, copy];
}
/* harmony default export */ __webpack_exports__["default"] = (useCopyToClipboard);
//# sourceMappingURL=useCopyToClipboard.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useCounter/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useCounter/index.js ***!
  \**********************************************************/
/*! exports provided: useCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCounter */ "./node_modules/usehooks-ts/esm/useCounter/useCounter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return _useCounter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useCounter/useCounter.js":
/*!***************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useCounter/useCounter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCounter(initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue || 0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(function (x) { return x + 1; }); };
    var decrement = function () { return setCount(function (x) { return x - 1; }); };
    var reset = function () { return setCount(initialValue || 0); };
    return {
        count: count,
        increment: increment,
        decrement: decrement,
        reset: reset,
        setCount: setCount,
    };
}
/* harmony default export */ __webpack_exports__["default"] = (useCounter);
//# sourceMappingURL=useCounter.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useDarkMode/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useDarkMode/index.js ***!
  \***********************************************************/
/*! exports provided: useDarkMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useDarkMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDarkMode */ "./node_modules/usehooks-ts/esm/useDarkMode/useDarkMode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDarkMode", function() { return _useDarkMode__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useDarkMode/useDarkMode.js":
/*!*****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useDarkMode/useDarkMode.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useLocalStorage */ "./node_modules/usehooks-ts/esm/useLocalStorage/index.js");
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useMediaQuery */ "./node_modules/usehooks-ts/esm/useMediaQuery/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./node_modules/usehooks-ts/esm/index.js");



var COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';
function useDarkMode(defaultValue) {
    var isDarkOS = Object(_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(COLOR_SCHEME_QUERY);
    var _a = Object(_useLocalStorage__WEBPACK_IMPORTED_MODULE_0__["useLocalStorage"])('darkMode', defaultValue !== null && defaultValue !== void 0 ? defaultValue : false), isDarkMode = _a[0], setDarkMode = _a[1];
    Object(___WEBPACK_IMPORTED_MODULE_2__["useUpdateEffect"])(function () {
        setDarkMode(isDarkOS);
    }, [isDarkOS]);
    return {
        isDarkMode: isDarkMode,
        toggle: function () { return setDarkMode(function (prev) { return !prev; }); },
        enable: function () { return setDarkMode(true); },
        disable: function () { return setDarkMode(false); },
    };
}
/* harmony default export */ __webpack_exports__["default"] = (useDarkMode);
//# sourceMappingURL=useDarkMode.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useDebounce/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useDebounce/index.js ***!
  \***********************************************************/
/*! exports provided: useDebounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDebounce */ "./node_modules/usehooks-ts/esm/useDebounce/useDebounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useDebounce/useDebounce.js":
/*!*****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useDebounce/useDebounce.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var timer = setTimeout(function () { return setDebouncedValue(value); }, delay || 500);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}
/* harmony default export */ __webpack_exports__["default"] = (useDebounce);
//# sourceMappingURL=useDebounce.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useEffectOnce/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useEffectOnce/index.js ***!
  \*************************************************************/
/*! exports provided: useEffectOnce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/usehooks-ts/esm/useEffectOnce/useEffectOnce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectOnce", function() { return _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useEffectOnce/useEffectOnce.js":
/*!*********************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useEffectOnce/useEffectOnce.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEffectOnce(effect) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, []);
}
/* harmony default export */ __webpack_exports__["default"] = (useEffectOnce);
//# sourceMappingURL=useEffectOnce.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useElementSize/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useElementSize/index.js ***!
  \**************************************************************/
/*! exports provided: useElementSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useElementSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useElementSize */ "./node_modules/usehooks-ts/esm/useElementSize/useElementSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useElementSize", function() { return _useElementSize__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useElementSize/useElementSize.js":
/*!***********************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useElementSize/useElementSize.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");


function useElementSize() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), ref = _a[0], setRef = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        width: 0,
        height: 0,
    }), size = _b[0], setSize = _b[1];
    var handleSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setSize({
            width: (ref === null || ref === void 0 ? void 0 : ref.offsetWidth) || 0,
            height: (ref === null || ref === void 0 ? void 0 : ref.offsetHeight) || 0,
        });
    }, [ref === null || ref === void 0 ? void 0 : ref.offsetHeight, ref === null || ref === void 0 ? void 0 : ref.offsetWidth]);
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('resize', handleSize);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        handleSize();
    }, [ref === null || ref === void 0 ? void 0 : ref.offsetHeight, ref === null || ref === void 0 ? void 0 : ref.offsetWidth]);
    return [setRef, size];
}
/* harmony default export */ __webpack_exports__["default"] = (useElementSize);
//# sourceMappingURL=useElementSize.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useEventListener/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useEventListener/index.js ***!
  \****************************************************************/
/*! exports provided: useEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/useEventListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return _useEventListener__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useEventListener/useEventListener.js":
/*!***************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useEventListener/useEventListener.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEventListener(eventName, handler, element) {
    var savedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var targetElement = (element === null || element === void 0 ? void 0 : element.current) || window;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        if (savedHandler.current !== handler) {
            savedHandler.current = handler;
        }
        var eventListener = function (event) {
            if (!!(savedHandler === null || savedHandler === void 0 ? void 0 : savedHandler.current)) {
                savedHandler.current(event);
            }
        };
        targetElement.addEventListener(eventName, eventListener);
        return function () {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element, handler]);
}
/* harmony default export */ __webpack_exports__["default"] = (useEventListener);
//# sourceMappingURL=useEventListener.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useFetch/index.js":
/*!********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useFetch/index.js ***!
  \********************************************************/
/*! exports provided: useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useFetch */ "./node_modules/usehooks-ts/esm/useFetch/useFetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return _useFetch__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useFetch/useFetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useFetch/useFetch.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function useFetch(url, options) {
    var _this = this;
    var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    var cancelRequest = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var initialState = {
        error: undefined,
        data: undefined,
    };
    var fetchReducer = function (state, action) {
        switch (action.type) {
            case 'loading':
                return __assign({}, initialState);
            case 'fetched':
                return __assign(__assign({}, initialState), { data: action.payload });
            case 'error':
                return __assign(__assign({}, initialState), { error: action.payload });
            default:
                return state;
        }
    };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(fetchReducer, initialState), state = _a[0], dispatch = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!url)
            return;
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch({ type: 'loading' });
                        if (cache.current[url]) {
                            dispatch({ type: 'fetched', payload: cache.current[url] });
                            return [2];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4, fetch(url, options)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return [4, response.json()];
                    case 3:
                        data = (_a.sent());
                        cache.current[url] = data;
                        if (cancelRequest.current)
                            return [2];
                        dispatch({ type: 'fetched', payload: data });
                        return [3, 5];
                    case 4:
                        error_1 = _a.sent();
                        if (cancelRequest.current)
                            return [2];
                        dispatch({ type: 'error', payload: error_1 });
                        return [3, 5];
                    case 5: return [2];
                }
            });
        }); };
        void fetchData();
        return function () {
            cancelRequest.current = true;
        };
    }, [url]);
    return state;
}
/* harmony default export */ __webpack_exports__["default"] = (useFetch);
//# sourceMappingURL=useFetch.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useHover/index.js":
/*!********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useHover/index.js ***!
  \********************************************************/
/*! exports provided: useHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useHover */ "./node_modules/usehooks-ts/esm/useHover/useHover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useHover/useHover.js":
/*!***********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useHover/useHover.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");


function useHover(elementRef) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), value = _a[0], setValue = _a[1];
    var handleMouseEnter = function () { return setValue(true); };
    var handleMouseLeave = function () { return setValue(false); };
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('mouseenter', handleMouseEnter, elementRef);
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('mouseleave', handleMouseLeave, elementRef);
    return value;
}
/* harmony default export */ __webpack_exports__["default"] = (useHover);
//# sourceMappingURL=useHover.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useImageOnLoad/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useImageOnLoad/index.js ***!
  \**************************************************************/
/*! exports provided: useImageOnLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useImageOnLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useImageOnLoad */ "./node_modules/usehooks-ts/esm/useImageOnLoad/useImageOnLoad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImageOnLoad", function() { return _useImageOnLoad__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useImageOnLoad/useImageOnLoad.js":
/*!***********************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useImageOnLoad/useImageOnLoad.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useImageOnLoad() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoaded = _a[0], setIsLoaded = _a[1];
    var handleImageOnLoad = function () {
        setIsLoaded(true);
    };
    var css = {
        thumbnail: {
            visibility: isLoaded ? 'hidden' : 'visible',
            filter: 'blur(8px)',
            transition: 'visibility 0ms ease-out 500ms',
        },
        fullSize: {
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 500ms ease-in 0ms',
        },
    };
    return { handleImageOnLoad: handleImageOnLoad, css: css };
}
/* harmony default export */ __webpack_exports__["default"] = (useImageOnLoad);
//# sourceMappingURL=useImageOnLoad.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIntersectionObserver/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIntersectionObserver/index.js ***!
  \***********************************************************************/
/*! exports provided: useIntersectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIntersectionObserver */ "./node_modules/usehooks-ts/esm/useIntersectionObserver/useIntersectionObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntersectionObserver", function() { return _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIntersectionObserver/useIntersectionObserver.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIntersectionObserver/useIntersectionObserver.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIntersectionObserver(elementRef, _a) {
    var _b = _a.threshold, threshold = _b === void 0 ? 0 : _b, _c = _a.root, root = _c === void 0 ? null : _c, _d = _a.rootMargin, rootMargin = _d === void 0 ? '0%' : _d, _e = _a.freezeOnceVisible, freezeOnceVisible = _e === void 0 ? false : _e;
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), entry = _f[0], setEntry = _f[1];
    var frozen = (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) && freezeOnceVisible;
    var updateEntry = function (_a) {
        var entry = _a[0];
        setEntry(entry);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var node = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current;
        var hasIOSupport = !!window.IntersectionObserver;
        if (!hasIOSupport || frozen || !node)
            return;
        var observerParams = { threshold: threshold, root: root, rootMargin: rootMargin };
        var observer = new IntersectionObserver(updateEntry, observerParams);
        observer.observe(node);
        return function () { return observer.disconnect(); };
    }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);
    return entry;
}
/* harmony default export */ __webpack_exports__["default"] = (useIntersectionObserver);
//# sourceMappingURL=useIntersectionObserver.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useInterval/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useInterval/index.js ***!
  \***********************************************************/
/*! exports provided: useInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useInterval */ "./node_modules/usehooks-ts/esm/useInterval/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useInterval/useInterval.js":
/*!*****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useInterval/useInterval.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInterval(callback, delay) {
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        savedCallback.current = callback;
    }, [callback]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!delay && delay !== 0) {
            return;
        }
        var id = setInterval(function () { return savedCallback.current(); }, delay);
        return function () { return clearInterval(id); };
    }, [delay]);
}
/* harmony default export */ __webpack_exports__["default"] = (useInterval);
//# sourceMappingURL=useInterval.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIsClient/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIsClient/index.js ***!
  \***********************************************************/
/*! exports provided: useIsClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useIsClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsClient */ "./node_modules/usehooks-ts/esm/useIsClient/useIsClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsClient", function() { return _useIsClient__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIsClient/useIsClient.js":
/*!*****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIsClient/useIsClient.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIsClient() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isClient = _a[0], setClient = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setClient(true);
    }, []);
    return isClient;
}
/* harmony default export */ __webpack_exports__["default"] = (useIsClient);
//# sourceMappingURL=useIsClient.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIsFirstRender/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIsFirstRender/index.js ***!
  \****************************************************************/
/*! exports provided: useIsFirstRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useIsFirstRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsFirstRender */ "./node_modules/usehooks-ts/esm/useIsFirstRender/useIsFirstRender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsFirstRender", function() { return _useIsFirstRender__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIsFirstRender/useIsFirstRender.js":
/*!***************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIsFirstRender/useIsFirstRender.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIsFirstRender() {
    var isFirst = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
/* harmony default export */ __webpack_exports__["default"] = (useIsFirstRender);
//# sourceMappingURL=useIsFirstRender.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIsMounted/index.js":
/*!************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIsMounted/index.js ***!
  \************************************************************/
/*! exports provided: useIsMounted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsMounted */ "./node_modules/usehooks-ts/esm/useIsMounted/useIsMounted.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsMounted", function() { return _useIsMounted__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useIsMounted/useIsMounted.js":
/*!*******************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useIsMounted/useIsMounted.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIsMounted() {
    var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return isMounted.current; }, []);
}
/* harmony default export */ __webpack_exports__["default"] = (useIsMounted);
//# sourceMappingURL=useIsMounted.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useLocalStorage/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useLocalStorage/index.js ***!
  \***************************************************************/
/*! exports provided: useLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useLocalStorage */ "./node_modules/usehooks-ts/esm/useLocalStorage/useLocalStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return _useLocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useLocalStorage/useLocalStorage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useLocalStorage/useLocalStorage.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");


function useLocalStorage(key, initialValue) {
    var readValue = function () {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            var item = window.localStorage.getItem(key);
            return item ? parseJSON(item) : initialValue;
        }
        catch (error) {
            console.warn("Error reading localStorage key \u201C" + key + "\u201D:", error);
            return initialValue;
        }
    };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(readValue), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = function (value) {
        if (typeof window == 'undefined') {
            console.warn("Tried setting localStorage key \u201C" + key + "\u201D even though environment is not a client");
        }
        try {
            var newValue = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key, JSON.stringify(newValue));
            setStoredValue(newValue);
            window.dispatchEvent(new Event('local-storage'));
        }
        catch (error) {
            console.warn("Error setting localStorage key \u201C" + key + "\u201D:", error);
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setStoredValue(readValue());
    }, []);
    var handleStorageChange = function () {
        setStoredValue(readValue());
    };
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('storage', handleStorageChange);
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('local-storage', handleStorageChange);
    return [storedValue, setValue];
}
/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);
function parseJSON(value) {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value !== null && value !== void 0 ? value : '');
    }
    catch (error) {
        console.log('parsing error on', { value: value });
        return undefined;
    }
}
//# sourceMappingURL=useLocalStorage.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useLockedBody/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useLockedBody/index.js ***!
  \*************************************************************/
/*! exports provided: useLockedBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useLockedBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useLockedBody */ "./node_modules/usehooks-ts/esm/useLockedBody/useLockedBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLockedBody", function() { return _useLockedBody__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useLockedBody/useLockedBody.js":
/*!*********************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useLockedBody/useLockedBody.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLockedBody(initialLocked) {
    if (initialLocked === void 0) { initialLocked = false; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialLocked), locked = _a[0], setLocked = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        if (!locked) {
            return;
        }
        var originalOverflow = document.body.style.overflow;
        var originalPaddingRight = document.body.style.paddingRight;
        document.body.style.overflow = 'hidden';
        var root = document.getElementById('___gatsby');
        var scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
        if (scrollBarWidth) {
            document.body.style.paddingRight = scrollBarWidth + "px";
        }
        return function () {
            document.body.style.overflow = originalOverflow;
            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [locked]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
    }, [initialLocked]);
    return [locked, setLocked];
}
/* harmony default export */ __webpack_exports__["default"] = (useLockedBody);
//# sourceMappingURL=useLockedBody.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useMap/index.js":
/*!******************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useMap/index.js ***!
  \******************************************************/
/*! exports provided: useMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMap */ "./node_modules/usehooks-ts/esm/useMap/useMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMap", function() { return _useMap__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useMap/useMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useMap/useMap.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMap(initialState) {
    if (initialState === void 0) { initialState = new Map(); }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Map(initialState)), map = _a[0], setMap = _a[1];
    var actions = {
        set: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (key, value) {
            setMap(function (prev) {
                var copy = new Map(prev);
                copy.set(key, value);
                return copy;
            });
        }, []),
        setAll: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (entries) {
            setMap(function () { return new Map(entries); });
        }, []),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (key) {
            setMap(function (prev) {
                var copy = new Map(prev);
                copy.delete(key);
                return copy;
            });
        }, []),
        reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
            setMap(function () { return new Map(); });
        }, []),
    };
    return [map, actions];
}
/* harmony default export */ __webpack_exports__["default"] = (useMap);
//# sourceMappingURL=useMap.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useMediaQuery/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useMediaQuery/index.js ***!
  \*************************************************************/
/*! exports provided: useMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMediaQuery */ "./node_modules/usehooks-ts/esm/useMediaQuery/useMediaQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() { return _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useMediaQuery/useMediaQuery.js":
/*!*********************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useMediaQuery/useMediaQuery.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediaQuery(query) {
    var getMatches = function (query) {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getMatches(query)), matches = _a[0], setMatches = _a[1];
    function handleChange() {
        setMatches(getMatches(query));
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var matchMedia = window.matchMedia(query);
        handleChange();
        matchMedia.addEventListener('change', handleChange);
        return function () {
            matchMedia.removeEventListener('change', handleChange);
        };
    }, [query]);
    return matches;
}
/* harmony default export */ __webpack_exports__["default"] = (useMediaQuery);
//# sourceMappingURL=useMediaQuery.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useOnClickOutside/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useOnClickOutside/index.js ***!
  \*****************************************************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useOnClickOutside */ "./node_modules/usehooks-ts/esm/useOnClickOutside/useOnClickOutside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return _useOnClickOutside__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useOnClickOutside/useOnClickOutside.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useOnClickOutside/useOnClickOutside.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");

function useOnClickOutside(ref, handler, mouseEvent) {
    if (mouseEvent === void 0) { mouseEvent = 'mousedown'; }
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_0__["useEventListener"])(mouseEvent, function (event) {
        var el = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!el || el.contains(event.target)) {
            return;
        }
        handler(event);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);
//# sourceMappingURL=useOnClickOutside.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useReadLocalStorage/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useReadLocalStorage/index.js ***!
  \*******************************************************************/
/*! exports provided: useReadLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useReadLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useReadLocalStorage */ "./node_modules/usehooks-ts/esm/useReadLocalStorage/useReadLocalStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReadLocalStorage", function() { return _useReadLocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useReadLocalStorage/useReadLocalStorage.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useReadLocalStorage/useReadLocalStorage.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");


function useReadLocalStorage(key) {
    var readValue = function () {
        if (typeof window === 'undefined') {
            return null;
        }
        try {
            var item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        }
        catch (error) {
            console.warn("Error reading localStorage key \u201C" + key + "\u201D:", error);
            return null;
        }
    };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(readValue), storedValue = _a[0], setStoredValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setStoredValue(readValue());
    }, []);
    var handleStorageChange = function () {
        setStoredValue(readValue());
    };
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('storage', handleStorageChange);
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('local-storage', handleStorageChange);
    return storedValue;
}
/* harmony default export */ __webpack_exports__["default"] = (useReadLocalStorage);
//# sourceMappingURL=useReadLocalStorage.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useScreen/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useScreen/index.js ***!
  \*********************************************************/
/*! exports provided: useScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useScreen */ "./node_modules/usehooks-ts/esm/useScreen/useScreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScreen", function() { return _useScreen__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useScreen/useScreen.js":
/*!*************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useScreen/useScreen.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");


function useScreen() {
    var getScreen = function () {
        if (typeof window !== 'undefined' && window.screen) {
            return window.screen;
        }
        return undefined;
    };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getScreen()), screen = _a[0], setScreen = _a[1];
    function handleSize() {
        setScreen(getScreen());
    }
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('resize', handleSize);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        handleSize();
    }, []);
    return screen;
}
/* harmony default export */ __webpack_exports__["default"] = (useScreen);
//# sourceMappingURL=useScreen.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useScript/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useScript/index.js ***!
  \*********************************************************/
/*! exports provided: useScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useScript */ "./node_modules/usehooks-ts/esm/useScript/useScript.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScript", function() { return _useScript__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useScript/useScript.js":
/*!*************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useScript/useScript.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useScript(src) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(src ? 'loading' : 'idle'), status = _a[0], setStatus = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!src) {
            setStatus('idle');
            return;
        }
        var script = document.querySelector("script[src=\"" + src + "\"]");
        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', 'loading');
            document.body.appendChild(script);
            var setAttributeFromEvent = function (event) {
                script === null || script === void 0 ? void 0 : script.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error');
            };
            script.addEventListener('load', setAttributeFromEvent);
            script.addEventListener('error', setAttributeFromEvent);
        }
        else {
            setStatus(script.getAttribute('data-status'));
        }
        var setStateFromEvent = function (event) {
            setStatus(event.type === 'load' ? 'ready' : 'error');
        };
        script.addEventListener('load', setStateFromEvent);
        script.addEventListener('error', setStateFromEvent);
        return function () {
            if (script) {
                script.removeEventListener('load', setStateFromEvent);
                script.removeEventListener('error', setStateFromEvent);
            }
        };
    }, [src]);
    return status;
}
/* harmony default export */ __webpack_exports__["default"] = (useScript);
//# sourceMappingURL=useScript.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useSsr/index.js":
/*!******************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useSsr/index.js ***!
  \******************************************************/
/*! exports provided: useSsr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSsr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSsr */ "./node_modules/usehooks-ts/esm/useSsr/useSsr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSsr", function() { return _useSsr__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useSsr/useSsr.js":
/*!*******************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useSsr/useSsr.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function useSsr() {
    var isDOM = typeof window !== 'undefined' &&
        window.document &&
        window.document.documentElement;
    return {
        isBrowser: isDOM,
        isServer: !isDOM,
    };
}
/* harmony default export */ __webpack_exports__["default"] = (useSsr);
//# sourceMappingURL=useSsr.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useStep/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useStep/index.js ***!
  \*******************************************************/
/*! exports provided: useStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStep */ "./node_modules/usehooks-ts/esm/useStep/useStep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStep", function() { return _useStep__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useStep/useStep.js":
/*!*********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useStep/useStep.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStep(maxStep) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1), currentStep = _a[0], setCurrentStep = _a[1];
    var canGoToNextStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return currentStep + 1 <= maxStep; }, [currentStep, maxStep]);
    var canGoToPrevStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return currentStep - 1 >= 1; }, [currentStep]);
    var setStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (step) {
        var newStep = step instanceof Function ? step(currentStep) : step;
        if (newStep >= 1 && newStep <= maxStep) {
            setCurrentStep(newStep);
            return;
        }
        throw new Error('Step not valid');
    }, [maxStep, currentStep]);
    var goToNextStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (canGoToNextStep) {
            setCurrentStep(function (step) { return step + 1; });
        }
    }, [canGoToNextStep]);
    var goToPrevStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (canGoToPrevStep) {
            setCurrentStep(function (step) { return step - 1; });
        }
    }, [canGoToPrevStep]);
    var reset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setCurrentStep(1);
    }, []);
    return [
        currentStep,
        {
            goToNextStep: goToNextStep,
            goToPrevStep: goToPrevStep,
            canGoToNextStep: canGoToNextStep,
            canGoToPrevStep: canGoToPrevStep,
            setStep: setStep,
            reset: reset,
        },
    ];
}
/* harmony default export */ __webpack_exports__["default"] = (useStep);
//# sourceMappingURL=useStep.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useTimeout/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useTimeout/index.js ***!
  \**********************************************************/
/*! exports provided: useTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTimeout */ "./node_modules/usehooks-ts/esm/useTimeout/useTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useTimeout/useTimeout.js":
/*!***************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useTimeout/useTimeout.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTimeout(callback, delay) {
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        savedCallback.current = callback;
    }, [callback]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!delay && delay !== 0) {
            return;
        }
        var id = setTimeout(function () { return savedCallback.current(); }, delay);
        return function () { return clearTimeout(id); };
    }, [delay]);
}
/* harmony default export */ __webpack_exports__["default"] = (useTimeout);
//# sourceMappingURL=useTimeout.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useUpdateEffect/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useUpdateEffect/index.js ***!
  \***************************************************************/
/*! exports provided: useUpdateEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/usehooks-ts/esm/useUpdateEffect/useUpdateEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return _useUpdateEffect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useUpdateEffect/useUpdateEffect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useUpdateEffect/useUpdateEffect.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsFirstRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useIsFirstRender */ "./node_modules/usehooks-ts/esm/useIsFirstRender/index.js");


function useUpdateEffect(effect, deps) {
    var isFirst = Object(_useIsFirstRender__WEBPACK_IMPORTED_MODULE_1__["useIsFirstRender"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!isFirst) {
            return effect();
        }
    }, deps);
}
/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);
//# sourceMappingURL=useUpdateEffect.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useWindowSize/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useWindowSize/index.js ***!
  \*************************************************************/
/*! exports provided: useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useWindowSize */ "./node_modules/usehooks-ts/esm/useWindowSize/useWindowSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/usehooks-ts/esm/useWindowSize/useWindowSize.js":
/*!*********************************************************************!*\
  !*** ./node_modules/usehooks-ts/esm/useWindowSize/useWindowSize.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/usehooks-ts/esm/useEventListener/index.js");


function useWindowSize() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        width: 0,
        height: 0,
    }), windowSize = _a[0], setWindowSize = _a[1];
    var handleSize = function () {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["useEventListener"])('resize', handleSize);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        handleSize();
    }, []);
    return windowSize;
}
/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);
//# sourceMappingURL=useWindowSize.js.map

/***/ }),

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

  var setPros = function setPros(props) {
    setValue(props.value);
    console.log('props', props);
    console.log('value', value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Autocomplete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
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
    showAllValues: true,
    displayMenu: "overlay",
    placeholder: "Select Option",
    alwaysDisplayArrow: true,
    value: "Hello LOL2",
    setProps: setPros
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "The output value is ", value)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/demo/index.js":
/*!***************************!*\
  !*** ./src/demo/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/demo/App.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./src/lib/LazyLoader.js":
/*!*******************************!*\
  !*** ./src/lib/LazyLoader.js ***!
  \*******************************/
/*! exports provided: AutoComplete, Dropdown, ComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fragments_AutoComplete_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragments/AutoComplete.react */ "./src/lib/fragments/AutoComplete.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _fragments_AutoComplete_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _fragments_Dropdown_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments/Dropdown.react */ "./src/lib/fragments/Dropdown.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _fragments_Dropdown_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _fragments_ComboBox_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments/ComboBox.react */ "./src/lib/fragments/ComboBox.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _fragments_ComboBox_react__WEBPACK_IMPORTED_MODULE_2__["default"]; });




 // export const UkGovDashComponents = React.lazy(() => import(/* webpackChunkName: "UkGovDashComponents" */ './fragments/UkGovDashComponents.react'));

/***/ }),

/***/ "./src/lib/components/AutoComplete.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/AutoComplete.react.js ***!
  \**************************************************/
/*! exports provided: default, basePropTypes, defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePropTypes", function() { return basePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LazyLoader */ "./src/lib/LazyLoader.js");
/* harmony import */ var _dropdownArrowDown_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdownArrowDown.react */ "./src/lib/components/dropdownArrowDown.react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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
 * 	style
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
var basePropTypes = {
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
   * alwaysDisplayArrow
   */
  alwaysDisplayArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * wrapperRef
   */
  wrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Override the css style of the wrapper
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
AutoComplete.propTypes = _objectSpread(_objectSpread({}, basePropTypes), {}, {
  /**
   * This is the ID for the label field
   */
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});
var defaultProps = AutoComplete.defaultProps;
var propTypes = AutoComplete.propTypes;

/***/ }),

/***/ "./src/lib/components/Dropdown.react.js":
/*!**********************************************!*\
  !*** ./src/lib/components/Dropdown.react.js ***!
  \**********************************************/
/*! exports provided: dropdownPropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownPropTypes", function() { return dropdownPropTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoComplete.react */ "./src/lib/components/AutoComplete.react.js");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LazyLoader */ "./src/lib/LazyLoader.js");




/**
 * @param {{
 * 	label: string,
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
 * }} [props={}]
 *
 * @return {*}
 */

var Dropdown = function Dropdown() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyLoader__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], props);
};

var dropdownPropTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Label text
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

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
   * alwaysDisplayArrow
   */
  alwaysDisplayArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * wrapperRef
   */
  wrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Override the css style of the wrapper
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
Dropdown.propTypes = dropdownPropTypes;
Dropdown.defaultProps = _AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__["defaultProps"];
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./src/lib/components/dropdownArrowDown.react.js":
/*!*******************************************************!*\
  !*** ./src/lib/components/dropdownArrowDown.react.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 *Default dropdown arrow
 *
 * @param {string} { className }
 */

var DropdownArrowDown = function DropdownArrowDown(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    style: {
      top: '8px'
    },
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9  c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3  z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownArrowDown);
DropdownArrowDown.propTypes = {
  /**
   * Class name to add to SVG
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/lib/components/status.js":
/*!**************************************!*\
  !*** ./src/lib/components/status.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Status; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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




var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

var statusDebounceMillis = 1400;
/**
 * Display ststus
 *
 * @export
 * @class Status
 * @extends {Component}
 */

var Status = /*#__PURE__*/function (_Component) {
  _inherits(Status, _Component);

  var _super = _createSuper(Status);

  function Status(props) {
    var _this;

    _classCallCheck(this, Status);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      bump: false,
      debounced: false
    });

    var that = _assertThisInitialized(_this);

    _this.debounceStatusUpdate = debounce(function () {
      if (!that.state.debounced) {
        var shouldSilence = !that.props.isInFocus || that.props.validChoiceMade;
        that.setState(function (_ref) {
          var bump = _ref.bump;
          return {
            bump: !bump,
            debounced: true,
            silenced: shouldSilence
          };
        });
      }
    }, statusDebounceMillis);
    return _this;
  }

  _createClass(Status, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref2) {
      var queryLength = _ref2.queryLength;
      this.setState({
        debounced: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          length = _this$props.length,
          queryLength = _this$props.queryLength,
          minQueryLength = _this$props.minQueryLength,
          selectedOption = _this$props.selectedOption,
          selectedOptionIndex = _this$props.selectedOptionIndex,
          tQueryTooShort = _this$props.tQueryTooShort,
          tNoResults = _this$props.tNoResults,
          tSelectedOption = _this$props.tSelectedOption,
          tResults = _this$props.tResults;
      var _this$state = this.state,
          bump = _this$state.bump,
          debounced = _this$state.debounced,
          silenced = _this$state.silenced;
      var queryTooShort = queryLength < minQueryLength;
      var noResults = length === 0;
      var contentSelectedOption = selectedOption ? tSelectedOption(selectedOption, length, selectedOptionIndex) : '';
      var content = null;

      if (queryTooShort) {
        content = tQueryTooShort(minQueryLength);
      } else if (noResults) {
        content = tNoResults();
      } else {
        content = tResults(length, contentSelectedOption);
      }

      this.debounceStatusUpdate();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          border: '0',
          clip: 'rect(0 0 0 0)',
          height: '1px',
          marginBottom: '-1px',
          marginRight: '-1px',
          overflow: 'hidden',
          padding: '0',
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: '1px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id + '__status--A',
        role: "status",
        "aria-atomic": "true",
        "aria-live": "polite"
      }, !silenced && debounced && bump ? content : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id + '__status--B',
        role: "status",
        "aria-atomic": "true",
        "aria-live": "polite"
      }, !silenced && debounced && !bump ? content : ''));
    }
  }]);

  return Status;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Status.defaultProps = {
  tQueryTooShort: function tQueryTooShort(minQueryLength) {
    return "Type in ".concat(minQueryLength, " or more characters for results");
  },
  tNoResults: function tNoResults() {
    return 'No search results';
  },
  tSelectedOption: function tSelectedOption(selectedOption, length, index) {
    return "".concat(selectedOption, " ").concat(index + 1, " of ").concat(length, " is highlighted");
  },
  tResults: function tResults(length, contentSelectedOption) {
    var words = {
      result: length === 1 ? 'result' : 'results',
      is: length === 1 ? 'is' : 'are'
    };
    return "".concat(length, " ").concat(words.result, " ").concat(words.is, " available. ").concat(contentSelectedOption);
  }
};
Status.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * length
   */
  length: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * min Query Length
   */
  minQueryLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Query Length
   */
  queryLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Selected option
   */
  selectedOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Selected Option Index
   */
  selectedOptionIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * tQueryTooShort
   */
  tQueryTooShort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * tNoResults
   */
  tNoResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * tSelectedOption
   */
  tSelectedOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * tResults
   */
  tResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/lib/components/ui/ComboBox.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/ui/ComboBox.react.js ***!
  \*************************************************/
/*! exports provided: default, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LazyLoader */ "./src/lib/LazyLoader.js");




var ComboBox = function ComboBox() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__["ComboBox"], props);
};

ComboBox.defaultProps = {};
ComboBox.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  defaultInputValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  defaultItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf({
    key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.String,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),
  onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  allowsCustomValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectedKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  menuTrigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ComboBox);
var propTypes = ComboBox.propTypes;

/***/ }),

/***/ "./src/lib/components/ui/ListBox.react.js":
/*!************************************************!*\
  !*** ./src/lib/components/ui/ListBox.react.js ***!
  \************************************************/
/*! exports provided: ListBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return ListBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/listbox */ "./node_modules/@react-aria/listbox/dist/module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * Listbox
 *
 * @param {*} [props={}]
 * @return {*}
 */

function ListBox() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var _props$listBoxRef = props.listBoxRef,
      listBoxRef = _props$listBoxRef === void 0 ? ref : _props$listBoxRef,
      state = props.state;

  var _useListBox = Object(_react_aria_listbox__WEBPACK_IMPORTED_MODULE_1__["useListBox"])(props, state, listBoxRef),
      listBoxProps = _useListBox.listBoxProps;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", _extends({}, listBoxProps, {
    ref: listBoxRef,
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      maxHeight: '150px',
      overflow: 'auto'
    }
  }), _toConsumableArray(state.collection).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
      key: item.key,
      item: item,
      state: state
    });
  }));
}

function Option(_ref) {
  var item = _ref.item,
      state = _ref.state;
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  var _useOption = Object(_react_aria_listbox__WEBPACK_IMPORTED_MODULE_1__["useOption"])({
    key: item.key
  }, state, ref),
      optionProps = _useOption.optionProps,
      isSelected = _useOption.isSelected,
      isFocused = _useOption.isFocused,
      isDisabled = _useOption.isDisabled;

  var backgroundColor;
  var color = 'black';

  if (isFocused) {
    backgroundColor = '#1d70b8';
    color = 'white';
  } else if (isDisabled) {
    backgroundColor = 'transparent';
    color = 'gray';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", _extends({}, optionProps, {
    ref: ref,
    style: {
      background: backgroundColor,
      color: color,
      padding: '2px 5px',
      outline: 'none',
      cursor: 'pointer'
    }
  }), item.rendered);
}

Option.defaultProps = {};
Option.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
ListBox.defaultProps = {};
ListBox.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};


/***/ }),

/***/ "./src/lib/components/ui/Popover.react.js":
/*!************************************************!*\
  !*** ./src/lib/components/ui/Popover.react.js ***!
  \************************************************/
/*! exports provided: Popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_overlays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/overlays */ "./node_modules/@react-aria/overlays/dist/module.js");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/**
 * Propover
 *
 * @export
 * @param {*} props
 * @return {*}
 */

function Popover(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var _props$popoverRef = props.popoverRef,
      popoverRef = _props$popoverRef === void 0 ? ref : _props$popoverRef,
      isOpen = props.isOpen,
      onClose = props.onClose,
      children = props.children; // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.

  var _useOverlay = Object(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_1__["useOverlay"])({
    isOpen: isOpen,
    onClose: onClose,
    shouldCloseOnBlur: true,
    isDismissable: true
  }, popoverRef),
      overlayProps = _useOverlay.overlayProps; // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_aria_focus__WEBPACK_IMPORTED_MODULE_2__["FocusScope"], {
    restoreFocus: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, overlayProps, {
    ref: popoverRef,
    style: {
      position: "absolute",
      width: "100%",
      border: "1px solid gray",
      background: "white",
      marginTop: 4
    }
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_1__["DismissButton"], {
    onDismiss: onClose
  })));
}
Popover.defaultProps = {};
Popover.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

/***/ }),

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
    if (selectElement || showAllValues) {
      return;
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

    if (selectElement && !isMenuOpen) {
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
              setFocus(selectElement ? optionsAvailable ? 0 : -1 : focus);
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
      var opt = getValueFromQuery(query, options);
      setProps({
        value: (opt === null || opt === void 0 ? void 0 : opt.value) || opt || query
      });
    }

    setAriaHint(!(query !== null && query !== void 0 && query.length));
  }, [query]);
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

/***/ }),

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
ComboBox.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (ComboBox);

/***/ }),

/***/ "./src/lib/fragments/Dropdown.react.js":
/*!*********************************************!*\
  !*** ./src/lib/fragments/Dropdown.react.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/label */ "./node_modules/@react-aria/label/dist/module.js");
/* harmony import */ var _AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoComplete.react */ "./src/lib/fragments/AutoComplete.react.js");
/* harmony import */ var _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AutoComplete.react */ "./src/lib/components/AutoComplete.react.js");
/* harmony import */ var _components_Dropdown_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dropdown.react */ "./src/lib/components/Dropdown.react.js");
var _excluded = ["label"];

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * @param {{
 * 	label,
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
 * }} [props={}]
 *
 * @return {*}
 */

var Dropdown = function Dropdown() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var label = props.label,
      autoComplete = _objectWithoutProperties(props, _excluded);

  var _useLabel = Object(_react_aria_label__WEBPACK_IMPORTED_MODULE_1__["useLabel"])(props),
      labelProps = _useLabel.labelProps,
      fieldProps = _useLabel.fieldProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(autoComplete),
      _useState2 = _slicedToArray(_useState, 1),
      autoCompleteProps = _useState2[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "govuk-form-group",
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", _extends({
    className: "govuk-label"
  }, labelProps), label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoComplete_react__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    ariaLabelledBy: fieldProps['aria-labelledby']
  }, _objectSpread(_objectSpread({}, autoCompleteProps), {}, {
    style: null
  }))));
};

Dropdown.propTypes = _components_Dropdown_react__WEBPACK_IMPORTED_MODULE_4__["dropdownPropTypes"];
Dropdown.defaultProps = _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_3__["defaultProps"];
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./src/lib/fragments/autocomplete.css":
/*!********************************************!*\
  !*** ./src/lib/fragments/autocomplete.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./autocomplete.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/autocomplete.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!./autocomplete.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/autocomplete.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./autocomplete.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/autocomplete.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/lib/fragments/combobox.css":
/*!****************************************!*\
  !*** ./src/lib/fragments/combobox.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./combobox.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/combobox.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!./combobox.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/combobox.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./combobox.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/fragments/combobox.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/lib/helper/isIOS.js":
/*!*********************************!*\
  !*** ./src/lib/helper/isIOS.js ***!
  \*********************************/
/*! exports provided: isIOSDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOSDevice", function() { return isIOSDevice; });
function isIOSDevice() {
  return typeof navigator !== 'undefined' && Boolean(navigator.userAgent.match(/(iPod|iPhone|iPad)/g) && navigator.userAgent.match(/AppleWebKit/g));
}

/***/ }),

/***/ "./src/lib/helper/keys.js":
/*!********************************!*\
  !*** ./src/lib/helper/keys.js ***!
  \********************************/
/*! exports provided: keyCodes, isPrintableKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyCodes", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrintableKeyCode", function() { return isPrintableKeyCode; });
var keyCodes = {
  13: 'enter',
  27: 'escape',
  32: 'space',
  38: 'up',
  40: 'down'
};
function isPrintableKeyCode(keyCode) {
  return keyCode > 47 && keyCode < 58 || // number keys
  keyCode === 32 || keyCode === 8 || // spacebar or backspace
  keyCode > 64 && keyCode < 91 || // letter keys
  keyCode > 95 && keyCode < 112 || // numpad keys
  keyCode > 185 && keyCode < 193 || // ;=,-./` (in order)
  keyCode > 218 && keyCode < 223 // [\]' (in order)
  ;
}

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: AutoComplete, Dropdown, ComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AutoComplete.react */ "./src/lib/components/AutoComplete.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _components_AutoComplete_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_Dropdown_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dropdown.react */ "./src/lib/components/Dropdown.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _components_Dropdown_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_ui_ComboBox_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ui/ComboBox.react */ "./src/lib/components/ui/ComboBox.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _components_ui_ComboBox_react__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* eslint-disable import/prefer-default-export */





/***/ })

})
//# sourceMappingURL=96d2dbe-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI5NmQyZGJlLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==