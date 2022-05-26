import React, { useState } from 'react';
import { LabelAriaProps, useLabel } from '@react-aria/label';
import AutoComplete, { AutoCompleteTypes } from './AutoComplete';
import { autoCompleteDefaultProps } from './AutoComplete';



const Dropdown = (props: LabelAriaProps & AutoCompleteTypes): JSX.Element => {
    const { label, ...autoComplete } = props;
    const { labelProps, fieldProps } = useLabel(props);
    const [autoCompleteProps] = useState(autoComplete);
    return (
        <div className="govuk-form-group" style={props.style}>
            <label className="govuk-label" {...labelProps}>
                {label}
            </label>
            <AutoComplete
                ariaLabelledBy={fieldProps["aria-labelledby"]}
                displayMenu="overlay"
                showAllValues={true}
                alwaysDisplayArrow={true}
                {...{ ...autoCompleteProps, style: null }}
            />
        </div>
    );
};
Dropdown.defaultProps = autoCompleteDefaultProps;

export default Dropdown;