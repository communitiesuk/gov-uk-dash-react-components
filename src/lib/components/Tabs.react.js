import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded Tabs
 *
 * @param {
 * 	id,
 *  tabHeadings,
 *  defaultTab,
 *  children,
 * } [props={}]
 * @return {*}
 */
const Tabs = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

 Tabs.defaultProps = {
    /**
     * Any default prop values, e.g.
     *   congratulatoryMessage: 'You are amazing'
     */
};

Tabs.propTypes = {
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
     * Array of accordion headings.
     */
    tabHeadings: PropTypes.arrayOf(PropTypes.string),

    /**
     * The default active tab
     */
     defaultTab: PropTypes.number,

     /**
      * Array of accordion children.
      */
     children: PropTypes.arrayOf(PropTypes.node),
};

export const defaultProps = Tabs.defaultProps;
export const propTypes = Tabs.propTypes;

export default Tabs