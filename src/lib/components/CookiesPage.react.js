import React from 'react';
import PropTypes from 'prop-types';
import { CookiesPage as RealComponent } from '../LazyLoader';
import { CookieProvider } from './cookies/utils/CookieContext';

/**
 * Lazy loaded CookiesPage
 * 
 * This CookiesPage component tells users about the cookies you’re setting on their device and lets
 * them accept or reject different types of non-essential cookies.
 *
 * @param {
 * id: string,                            // Unique identifier for the cookie component
 * tag: string                            // Google Analytics tag string
 * appTitle: string  
 * previousPage: string                     // Name of the app
 * } [props={}]
 * @return {*}
 */
const CookiesPage = (props = {}) => {
    return (
        <CookieProvider>
        <RealComponent {...props} />
        </CookieProvider>
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

 CookiesPage.defaultProps = {
    /**
     * Any default prop values, e.g.
     *   congratulatoryMessage: 'You are amazing'
     */
};

CookiesPage.propTypes = {
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
     * The name of the app to be referenced in CookiesPage.
     */
    appTitle: PropTypes.string,

    /**
     * The name of the app to be referenced in CookiesPage.
     */
     previousPage: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
};

export const defaultProps = CookiesPage.defaultProps;
export const propTypes = CookiesPage.propTypes;

export default CookiesPage