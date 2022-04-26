webpackHotUpdateuk_gov_dash_components("main",{

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
exports.push([module.i, ".autocomplete__wrapper {\n\tposition: relative;\n}\n\n.autocomplete__hint,\n.autocomplete__input {\n\t-webkit-appearance: none;\n\tborder: 2px solid #0b0c0c;\n\tborder-radius: 0;\n\t/* Safari 10 on iOS adds implicit border rounding. */\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\tmargin-bottom: 0;\n\t/* BUG: Safari 10 on macOS seems to add an implicit margin. */\n\twidth: 100%;\n}\n\n.autocomplete__input {\n\tbackground-color: transparent;\n\tposition: relative;\n}\n\n.autocomplete__hint {\n\tcolor: #b1b4b6;\n\tposition: absolute;\n}\n\n.autocomplete__input--default {\n\tpadding: 5px;\n}\n\n.autocomplete__input--focused {\n\toutline: 3px solid #fd0;\n\toutline-offset: 0;\n\tbox-shadow: inset 0 0 0 2px;\n}\n\n.autocomplete__input--show-all-values {\n\tpadding: 5px 34px 5px 5px;\n\t/* Space for arrow. Other padding should match .autocomplete__input--default. */\n\tcursor: pointer;\n}\n\n.autocomplete__dropdown-arrow-down {\n\tdisplay: inline-block;\n\tposition: absolute;\n\tright: 8px;\n\twidth: 24px;\n\theight: 24px;\n\ttop: 10px;\n\tpointer-events: none;\n}\n\n.autocomplete__menu {\n\tbackground-color: #fff;\n\tborder: 2px solid #0B0C0C;\n\tborder-top: 0;\n\tcolor: #0B0C0C;\n\tmargin: 0;\n\tmax-height: 342px;\n\toverflow-x: hidden;\n\tpadding: 0;\n\twidth: 100%;\n\twidth: calc(100% - 4px);\n}\n\n.autocomplete__menu--visible {\n\tdisplay: block;\n}\n\n.autocomplete__menu--hidden {\n\tdisplay: none;\n}\n\n.autocomplete__menu--overlay {\n\tbox-shadow: rgba(0, 0, 0, 0.256863) 0px 2px 6px;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 100%;\n\tz-index: 100;\n}\n\n.autocomplete__menu--inline {\n\tposition: relative;\n}\n\n.autocomplete__option {\n\tborder-bottom: solid #b1b4b6;\n\tborder-width: 1px 0;\n\tcursor: pointer;\n\tdisplay: block;\n\tposition: relative;\n}\n\n.autocomplete__option>* {\n\tpointer-events: none;\n}\n\n.autocomplete__option:first-of-type {\n\tborder-top-width: 0;\n}\n\n.autocomplete__option:last-of-type {\n\tborder-bottom-width: 0;\n}\n\n.autocomplete__option--odd {\n\tbackground-color: #FAFAFA;\n}\n\n.autocomplete__option--focused,\n.autocomplete__option:hover {\n\tbackground-color: #1d70b8;\n\tborder-color: #1d70b8;\n\tcolor: white;\n\toutline: none;\n}\n\n@media (-ms-high-contrast: active),\n(forced-colors: active) {\n\t.autocomplete__menu {\n\t\tborder-color: FieldText;\n\t}\n\n\t.autocomplete__option {\n\t\tbackground-color: Field;\n\t\tcolor: FieldText;\n\t}\n\n\t.autocomplete__option--focused,\n\t.autocomplete__option:hover {\n\t\tforced-color-adjust: none;\n\t\t/* prevent backplate from obscuring text */\n\t\tbackground-color: Highlight;\n\t\tborder-color: Highlight;\n\t\tcolor: HighlightText;\n\n\t\t/* Prefer SelectedItem / SelectedItemText in browsers that support it */\n\t\tbackground-color: SelectedItem;\n\t\tborder-color: SelectedItem;\n\t\tcolor: SelectedItemText;\n\t\toutline-color: SelectedItemText;\n\t}\n}\n\n.autocomplete__option--no-results {\n\tbackground-color: #FAFAFA;\n\tcolor: #646b6f;\n\tcursor: not-allowed;\n}\n\n.autocomplete__hint,\n.autocomplete__input,\n.autocomplete__option {\n\tfont-size: 16px;\n\tline-height: 1.25;\n}\n\n.autocomplete__hint,\n.autocomplete__option {\n\tpadding: 5px;\n}\n\n@media (min-width: 641px) {\n\n\t.autocomplete__hint,\n\t.autocomplete__input,\n\t.autocomplete__option {\n\t\tfont-size: 19px;\n\t\tline-height: 1.31579;\n\t}\n}", ""]);
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
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
          var _ref, _r$label;

          return ((_ref = (_r$label = r === null || r === void 0 ? void 0 : r.label) !== null && _r$label !== void 0 ? _r$label : r === null || r === void 0 ? void 0 : r.name) !== null && _ref !== void 0 ? _ref : r === null || r === void 0 ? void 0 : r.value).toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }));
      } else {
        syncResults(values.filter(function (r) {
          return r.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }));
      }
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

  var handleComponentBlur = function handleComponentBlur(newState, escape) {
    var focusOnBlur = escape && selectElement ? -1 : null;
    debugger;
    var newQuery;

    if (confirmOnBlur) {
      newQuery = newState.query || query;
      onConfirm(options[selected]);
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
    if (selectElement) {
      return;
    }

    var shouldReopenMenu = !validChoiceMade && (query === null || query === void 0 ? void 0 : query.length) >= minLength && (options === null || options === void 0 ? void 0 : options.length) > 0;
    setFocus(-1);
    debugger;

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
    var menuOpen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var selectedOption = options[index];
    var newQuery = templateInputValue(selectedOption);
    onConfirm(selectedOption); // Do not remove this, otherwise the input can receive the event and
    // keep the menu open unintentionally

    event.preventDefault();
    event.stopPropagation();
    setFocus(-1);
    setHover(null);
    setMenuOpen(menuOpen);
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
    event.preventDefault(); // If we're replacing a select element, we need to provide the interaction
    // where the dropdown is closed, and user presses up.
    // In this case they focus on the option before the selected one (or the last),
    // and also make menu open

    if (selectElement && isMenuOpen === false) {
      dataSource('', function (options) {
        setMenuOpen(true);
        setOptions(options);
        var index = query && options.indexOf(query) > 0 ? options.indexOf(query) - 1 : options.length - 1;

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
        var index = query && options.indexOf(query) > -1 ? options.indexOf(query) + 1 : 0;

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
    if (selectElement && !isMenuOpen || showAllValues && !isMenuOpen && query === '') {
      if (query.trim().length === 0) {
        event.preventDefault();
      }

      dataSource('', function (options) {
        var index = query && options.indexOf(query) > -1 ? options.indexOf(query) : 0;
        setMenuOpen(true);
        setOptions(options);
        setFocus(index);
        setSelected(index);
      });
      return;
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
    } else if (selectElement) {
      dataSource('', function (options) {
        setOptions(options);
        var index = query && options.indexOf(query) > -1 ? options.indexOf(query) : 0;
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
    debugger;

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

  var clearSelection = function clearSelection() {
    setFocus(null);
    setHover(null);
    setMenuOpen(false);
    setOptions(value ? [value] : []);
    setQuery('');
    setValidChoiceMade(false);
    selectElement.value = null;
    var event = new Event('selectElement', {
      bubbles: true,
      cancelable: false
    });
    selectElement.dispatchEvent(event);
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

    if (selectElement) {
      // Expose public API
      selectElement.accessibleAutocomplete = {
        clearSelection: clearSelection
      };
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

/***/ })

})
//# sourceMappingURL=8446579-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4NDQ2NTc5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==