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
const Dropdown = (props = {}) => {
	const { label, ...autoComplete } = props;
	const { labelProps, fieldProps } = useLabel(props);
	const [autoCompleteProps] = useState(autoComplete);
	return (
		<div className="govuk-form-group" style={props.style}>
			<label className="govuk-label" {...labelProps}>{label}</label>
			<AutoComplete
				ariaLabelledBy={fieldProps['aria-labelledby']}
				{...{ ...autoCompleteProps, style: null }}
			/>
		</div>
	);
}

Dropdown.propTypes = dropdownPropTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;