import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded ComponentTemplate
 *
 * @param {
 * 	id,
 *  accordionContent,
 * } [props={}]
 * @return {*}
 */
const Accordion = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

Accordion.defaultProps = {
    /**
     * Any default prop values, e.g.
     *   congratulatoryMessage: 'You are amazing'
     */
};

Accordion.propTypes = {
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

    /**
     * Accordion heading and children content object.
     */
    accordionContent: PropTypes.objectOf({heading:PropTypes.string, children:PropTypes.array}),
};

export const defaultProps = Accordion.defaultProps;
export const propTypes = Accordion.propTypes;

export default Accordion