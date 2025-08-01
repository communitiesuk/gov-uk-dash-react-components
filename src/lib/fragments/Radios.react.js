import { type } from 'ramda';

import React, { useState } from 'react';

import { propTypes } from '../components/Radios.react';

const sanitizeOptions = options => {
    if (type(options) === 'Object') {
        return Object.entries(options).map(([value, label]) => ({
            label: React.isValidElement(label) ? label : String(label),
            value,
        }));
    }

    if (type(options) === 'Array') {
        if (
            options.length > 0 &&
            ['String', 'Number', 'Bool'].includes(type(options[0]))
        ) {
            return options.map(option => ({
                label: String(option),
                value: option,
            }));
        }
        return options;
    }

    return options;
};

/**
 * Radios is a component that encapsulates several radios.
 * The values and labels of the Radios list are specified in the `options`
 * property and the selected item is specified with the `value` property.
 * Only one Radio item can be selected at once.
 * Each Radio item is rendered as an input with a surrounding label.
 */
const Radios = (props) => {
    const {
        id,
        title,
        options,
        setProps,
        value: propValue,
    } =  { ...props };

     // State to manage the selected radio value
    const [value, setValue] = useState(propValue);

    if (!id) { throw new Error('id is not defined') }

    const handleChange = (newValue) => {
        setValue(newValue); // Update local state
        setProps({ value: newValue }); // Propagate value to parent component
    };

    return (
        <div className='govuk-form-group' id={id}>
            <fieldset className='govuk-fieldset'>
                <legend className='govuk-fieldset__legend govuk-fieldset__legend--l'>
                    <label className="govuk-label">{title}</label>
                </legend>
                <div className="govuk-radios govuk-radios--small" data-module="govuk-radios">
                {sanitizeOptions(options).map((option, index) => {
                return (
                    <div className="govuk-radios__item" key={option.value}> 
                        <input checked={value==option.value} className="govuk-radios__input" 
                            type="radio" id={`${id}_option_${index}`} value={option.value} name={id}
                            onChange={() => handleChange(option.value)} 
                        />
                        <label className="govuk-label govuk-radios__label" htmlFor={`${id}_option_${index}`}>
                            {option.label}
                        </label>                            
                    </div>                        
                );
            })}
                </div>
            </fieldset>
        </div>
    ) 
}

Radios.propTypes = propTypes;

export default Radios