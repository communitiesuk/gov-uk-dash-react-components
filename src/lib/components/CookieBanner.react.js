import React from 'react';
import PropTypes from 'prop-types';
import { CookieBanner as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded CookieBanner
 *
 * @param {
 * 	id,
 * } [props={}]
 * @return {*}
 */
const CookieBanner = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

 CookieBanner.defaultProps = {
    /**
     * Any default prop values, e.g.
     *   congratulatoryMessage: 'You are amazing'
     */
};

CookieBanner.propTypes = {
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

export const defaultProps = CookieBanner.defaultProps;
export const propTypes = CookieBanner.propTypes;

export default CookieBanner