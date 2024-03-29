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
 *  children,
 *  expandedClass,
 *  collapsedClass,
 *  ariaLabel,
 *  subMenuClass,
 *  titleClass,
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
};

ExpandableMenuItem.propTypes = {
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
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
    /**
     * An array of li HTML elements that will displayed on click
     */
    children: PropTypes.array,
    /**
     * CSS class that will be applied when the menu is expanded
     */
    expandedClass: PropTypes.string,
    /**
     * CSS class that will be applied when the menu is collapsed
     */
    collapsedClass: PropTypes.string,
    /**
     * Accessible text to describe the expandable menu element, attached to Li element that wraps the children
     */
    ariaLabel: PropTypes.string,
    /**
     * CSS class that will be applied to the sub nav menu
     */
    subMenuClass: PropTypes.string,
    /**
     * CSS class that will be applied to the title of the sub nav menu
     */
    titleClass: PropTypes.string,
};

export const defaultProps = ExpandableMenuItem.defaultProps;
export const propTypes = ExpandableMenuItem.propTypes;

export default ExpandableMenuItem