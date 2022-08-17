import React from 'react';
import PropTypes from 'prop-types';
import {
	defaultProps,
} from './AutoComplete.react';
import { Dropdown as RealComponent } from '../LazyLoader';



/**
 * @param {{
 * 	label: string,
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
 * }} [props={}]
 *
 * @return {*}
 */
const Dropdown = (props = {}) => {
	return (
		<RealComponent {...props} />
	);
}

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

}

Dropdown.propTypes = dropdownPropTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;