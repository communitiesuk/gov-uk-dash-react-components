import {append, includes, without} from 'ramda';
import React from 'react';
import {type} from 'ramda';
import { defaultProps, propTypes } from '../components/CheckboxList.react';

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
 * CheckboxList is a component that encapsulates several checkboxes.
 * The values and labels of the checkbox list are specified in the `options`
 * property and the checked items are specified with the `value` property.
 * Each checkbox is rendered as an input with a surrounding label.
 */
const CheckboxList = (props)=>{
    const {
        id,
        options,
        setProps,
        value,
    } =  { ...defaultProps, ...props };

    if (!id) { throw new Error('id is not defined') }

    return (
        <div            
            id={id}
            className="govuk-checkboxes" 
            data-module="govuk-checkboxes"
        >
            {sanitizeOptions(options).map((option, index) => {
                return (
                    <div className="govuk-checkboxes__item" key={option.value} style={{paddingBottom:"10px"}}> 
                        <input checked={includes(option.value, value)} className="govuk-checkboxes__input" 
                            type="checkbox" id={`${id}_option_${index}`} value={option.value}
                            onChange={() => {                                
                                let newValue;
                                if (includes(option.value, value)) {
                                    newValue = without(
                                        [option.value],
                                        value
                                    );
                                } else {
                                    newValue = append(option.value, value);
                                }
                                setProps({value: newValue});
                            }}
                        />
                        <label className="govuk-label govuk-checkboxes__label" htmlFor={`${id}_option_${index}`}>
                            {option.label}
                        </label>                            
                    </div>                        
                );
            })}
        </div>
    );
}


CheckboxList.defaultProps = defaultProps;
CheckboxList.propTypes = propTypes;

export default CheckboxList