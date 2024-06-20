import {append, includes, without, type} from 'ramda';

import React, { Component, useState } from 'react';

import { defaultProps, propTypes } from '../components/Radios.react';

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
 * Update comment
 */
const Radios = (props)=>{
    const {
        id,
        options,
        setProps,
        value: propValue,
    } =  { ...defaultProps, ...props };

     // State to manage the selected radio value
    const [value, setValue] = useState(propValue);

    if (!id) { throw new Error('id is not defined') }

    const handleChange = (newValue) => {
        setValue(newValue); // Update local state
        setProps({ value: newValue }); // Propagate value to parent component
    };

    return (
        <div            
            id={id}
            className="govuk-radios" 
            data-module="govuk-radios"
        >
            {sanitizeOptions(options).map((option, index) => {
                return (
                    <div className="govuk-radios__item" key={option.value}> 
                        <input checked={value==option.value} className="govuk-radios__input" 
                            type="radio" id={`${id}_option_${index}`} value={option.value} name="myRadioGroup"
                            // make-prop or use id for name
                            onChange={() => handleChange(option.value)}
                            // onChange={() => {                                
                            //     // let newValue;
                            // const newValue = option.value
                            // setProps({value: newValue})
                            // console.log(value, "***");}}

                            
                            
                        />
                        <label className="govuk-label govuk-radios__label" htmlFor={`${id}_option_${index}`}>
                            {option.label}
                        </label>                            
                    </div>                        
                );
            })}
        </div>
    );
}

Radios.defaultProps = defaultProps;
Radios.propTypes = propTypes;

export default Radios