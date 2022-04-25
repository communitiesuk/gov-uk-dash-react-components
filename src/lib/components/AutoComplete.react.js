import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete as RealComponent } from '../LazyLoader';
import DropdownArrowDown from './dropdownArrowDown.react';

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
const AutoComplete = (props = {}) => {
	return (
			<RealComponent {...props} />
	);
}

export default AutoComplete

AutoComplete.defaultProps = {
	autoselect: false,
	cssNamespace: 'autocomplete',
	value: '',
	displayMenu: 'inline',
	minLength: 0,
	name: 'input-autocomplete',
	placeholder: '',
	onConfirm: () => { },
	confirmOnBlur: true,
	showNoOptionsFound: true,
	showAllValues: false,
	required: false,
	tNoResults: () => 'No results found',
	tAssistiveHint: () => 'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.',
	dropdownArrow: DropdownArrowDown,
	alwaysDisplayArrow: true,
};

AutoComplete.propTypes = {
	/**
	 * The ID used to identify this component in Dash callbacks.
	 */
	id: PropTypes.string,
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
	displayMenu: PropTypes.string,
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
	showAllValues: PropTypes.bool,
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
	 * This is the ID for the label field
	 */
	ariaLabelledBy: PropTypes.string,

	/**
	 * alwaysDisplayArrow
	 */
	alwaysDisplayArrow: PropTypes.bool,

	/**
	 * wrapperRef
	 */
	wrapperRef: PropTypes.any,

	/**
	 * Override the css style of the wrapper
	 */
	style: PropTypes.string
};


export const defaultProps = AutoComplete.defaultProps;
export const propTypes = AutoComplete.propTypes;