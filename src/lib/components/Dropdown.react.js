import React from 'react';
import PropTypes from 'prop-types';
import { AUTO_COMPLETE_DEFAULTS } from '../helper/autocomplete.defaults';
import { Dropdown as RealComponent } from '../LazyLoader';



/**
 * @param {{
 * 	label: string,
 * 	labelStyle,
 * 	id,
 * 	autoselect,
 * 	cssNamespace,
 * 	value,
 * 	minLength,
 * 	name,
 * 	placeholder,
 * 	onConfirm,
 * 	confirmOnBlur,
 * 	showNoOptionsFound,
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
 *  errorMessage,
 *  errorMessageWhenEmpty,
 *  menu_open,
 *  showOptionHeadings
 * }} [props={}]
 *
 * @return {*}
 */
const Dropdown = (props = {}) => {
	const mergedProps = { ...AUTO_COMPLETE_DEFAULTS, ...props };
	return <RealComponent {...mergedProps} />;
};

export const dropdownPropTypes = {
	/**
	 * The ID used to identify this component in Dash callbacks.
	 */
	id: PropTypes.string,

	/**
	 * Label text
	 */
	label: PropTypes.string,

	/**
	 * Override the css style of the dropdown label text
	 */
	labelStyle: PropTypes.any,

	/**
	 * Should auto select
	 */
	autoselect: PropTypes.bool,
	/**
	 * cssNamespace
	 */
	cssNamespace: PropTypes.string,
	/**
	 * No Description
	 */
	minLength: PropTypes.number,
	/**
	 * No Description
	 */
	name: PropTypes.string,
	/**
	 * No Description
	 */
	placeholder: PropTypes.string,
	/**
	 * No Description
	 */
	onConfirm: PropTypes.func,
	/**
	 * No Description
	 */
	confirmOnBlur: PropTypes.bool,
	/**
	 * No Description
	 */
	showNoOptionsFound: PropTypes.bool,
	/**
	 * No Description
	 */
	required: PropTypes.bool,
	/**
	 * No Description
	 */
	tNoResults: PropTypes.func,
	/**
	 * No Description
	 */
	tAssistiveHint: PropTypes.func,
	/**
	 * No Description
	 */
	source: PropTypes.any,
	/**
	 * No Description
	 */
	templates: PropTypes.any,
	/**
	 * No Description
	 */
	tStatusQueryTooShort: PropTypes.func,
	/**
	 * No Description
	 */
	tStatusNoResults: PropTypes.any,
	/**
	 * No Description
	 */
	tStatusSelectedOption: PropTypes.func,
	/**
	 * No Description
	 */
	tStatusResults: PropTypes.any,

	/**
	 * React component for dropdown arrow
	 */
	dropdownArrow: PropTypes.any,

	/**
	 * Accessible element
	 */
	selectElement: PropTypes.any,

	/**
	 * The value displayed in the input.
	 */
	value: PropTypes.string,

	/**
		 * Dash-assigned callback that should be called to report property changes
		 * to Dash, to make them available for callbacks.
		 */
	setProps: PropTypes.func,

	/**
	 * wrapperRef
	 */
	wrapperRef: PropTypes.any,

	/**
	 * Override the css style of the wrapper
	 */
	style: PropTypes.any,

	/**
	 * Error message to display when invalid input entered in dropdown
	 */
	errorMessage: PropTypes.string,


	/**
	 * Whether to display error message when query is empty in dropdown
	 */
	 errorMessageWhenEmpty: PropTypes.bool,
	/**
	 * Whether the dropdown menu is open. Used to fire a callback  
	 * when the menu is opened.
	 */
	 menu_open: PropTypes.bool,
	/**
	 * Whether the list of autocomplete options contains headings that
	 * are unclickable (like when disabled) but not struckthrough and bolded
	 */
	 showOptionHeadings: PropTypes.bool,
}

Dropdown.propTypes = dropdownPropTypes;

export default Dropdown;