import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete as RealComponent } from '../LazyLoader';
import DropdownArrowDown from './dropdownArrowDown.react';
import { AUTO_COMPLETE_DEFAULTS } from '../helper/autocomplete.defaults';

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
 * 	style,
 *  errorMessage,
 *  errorMessageWhenEmpty,
 *  menu_open, 
 * } [props={}]
 * @return {*}
 */
const AutoComplete = ({
	AUTO_COMPLETE_DEFAULTS,
	...props // in case you pass anything else
}) => {
	return <RealComponent
		autoselect={autoselect}
		cssNamespace={cssNamespace}
		value={value}
		displayMenu={displayMenu}
		minLength={minLength}
		name={name}
		placeholder={placeholder}
		onConfirm={onConfirm}
		confirmOnBlur={confirmOnBlur}
		showNoOptionsFound={showNoOptionsFound}
		showAllValues={showAllValues}
		required={required}
		tNoResults={tNoResults}
		tAssistiveHint={tAssistiveHint}
		dropdownArrow={dropdownArrow}
		alwaysDisplayArrow={alwaysDisplayArrow}
		errorMessage={errorMessage}
		errorMessageWhenEmpty={errorMessageWhenEmpty}
		menu_open={menu_open}
		{...props}
	/>;
};

export default AutoComplete



export const basePropTypes = {
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

};

AutoComplete.propTypes = {
	...basePropTypes,
	/**
	 * This is the ID for the label field
	 */
	ariaLabelledBy: PropTypes.string,
};


export const propTypes = AutoComplete.propTypes;