import React, { useState } from 'react';
import { useLabel } from '@react-aria/label';
import AutoComplete from './AutoComplete';
import {
	defaultProps,
} from './props/AutoComplete';
import {
	dropdownPropTypes,
} from './props/Dropdown';


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
	const { label, ...autoComplete } = props;
	const { labelProps, fieldProps } = useLabel(props);
	const [autoCompleteProps] = useState(autoComplete);
	return (
		<div className="govuk-form-group" style={props.style}>
			<label className="govuk-label" {...labelProps}>{label}</label>
			<AutoComplete
				ariaLabelledBy={fieldProps['aria-labelledby']}
				displayMenu="overlay"
				showAllValues={true}
				alwaysDisplayArrow={true}
				{...{ ...autoCompleteProps, style: null }}
			/>
		</div>
	);
}

Dropdown.propTypes = dropdownPropTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;