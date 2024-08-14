import React from 'react';
import PropTypes from 'prop-types';
import { CookieBanner as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded CookieBanner
 *
 * This CookieBanner component creates a banner to allow users to accept or reject cookies which
 * are not essential to making the service work. The banner displays until a user has saved their
 * cookie preference. Once a user has accepted or rejected cookies, the cookies banner shows a
 * confirmation message.
 * 
 * @param {
 * id: string,                            // Unique identifier for the cookie component
 * tag: string                            // Google Analytics tag string
 * appTitle: string                       // Name of the app
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
     * The Google Analytics tag.
     */
    tag: PropTypes.string,

    /**
     * The name of the app to be referenced in CookieBanner.
     */
    appTitle: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
};

export const defaultProps = CookieBanner.defaultProps;
export const propTypes = CookieBanner.propTypes;

export default CookieBanner