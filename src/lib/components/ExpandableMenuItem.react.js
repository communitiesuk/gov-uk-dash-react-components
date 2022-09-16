import React from 'react';
import PropTypes from 'prop-types';
import { ExpandableMenuItem as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded ExpandableMenuItem
 *
 * @param {
 * 	id,
 *  title,
 *  collapsedByDefault,
 *  links,
 * } [props={}]
 * @return {*}
 */
const ExpandableMenuItem = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

ExpandableMenuItem.defaultProps = {
    collapsedByDefault: true,
    links: []
};

ExpandableMenuItem.propTypes = {
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
     * The clickable text to display sub-menu
     */
    title: PropTypes.string,
    /**
     * Default behaviour of whether or not the sub-menu is collapsed on load
     */
    collapsedByDefault: PropTypes.bool,
    /**
     * An array of li HTML elements that will displayed on click
     */
    links: PropTypes.array,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
};

export const defaultProps = ExpandableMenuItem.defaultProps;
export const propTypes = ExpandableMenuItem.propTypes;

export default ExpandableMenuItem