import React from 'react';
import PropTypes from 'prop-types';
import { SideNavigation as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded SideNavigation
 *
 * @param {
 * 	id,
 * } [props={}]
 * @return {*}
 */
const SideNavigation = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

SideNavigation.defaultProps = {
    /**
     * Any default prop values, e.g.
     *   congratulatoryMessage: 'You are amazing'
     */
};

SideNavigation.propTypes = {
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

export const defaultProps = SideNavigation.defaultProps;
export const propTypes = SideNavigation.propTypes;

export default SideNavigation