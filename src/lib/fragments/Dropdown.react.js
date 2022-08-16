import React, { useState } from 'react';
import { useLabel } from '@react-aria/label';
import AutoComplete from './AutoComplete.react';
import {
	defaultProps,
} from '../components/AutoComplete.react';
import {
	dropdownPropTypes,
} from '../components/Dropdown.react';


/**
 * @param {{
 * 	label,
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
	const { label, value, id, ...autoComplete } = props;
	const { labelProps, fieldProps } = useLabel(props);
	return (
		<div className="govuk-form-group" style={props.style}>
			<label className="govuk-label" {...labelProps}>{label}</label>
			<AutoComplete
				id={id}
				key={`${id}_${value}`}
				ariaLabelledBy={fieldProps['aria-labelledby']}
				displayMenu="overlay"
				showAllValues={true}
				alwaysDisplayArrow={true}
				value={value}
				{...{ ...autoComplete, style: null }}
			/>
		</div>
	);
}

Dropdown.propTypes = dropdownPropTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;