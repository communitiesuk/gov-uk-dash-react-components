import React from 'react';
import PropTypes from 'prop-types';
import { ComponentTemplate as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded ComponentTemplate
 *
 * @param {
 * 	id,
 * } [props={}]
 * @return {*}
 */
const ComponentTemplate = ({
    id,
    setProps,
}) => {
    return (
        <RealComponent
            id={id}
			setProps={setProps}
        />
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */


ComponentTemplate.propTypes = {
    /**
     * Add any options you wish to pass to your component to this dictionary.
     */

    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
};

export const propTypes = ComponentTemplate.propTypes;

export default ComponentTemplate