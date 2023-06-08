import PropTypes from 'prop-types';
import React from 'react';
import { Accordion as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded ComponentTemplate
 *
 * @param {
 * 	id,
 *  accordionHeadings,
 *  children,
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
     * Array of accordion headings.
     */
    accordionHeadings: PropTypes.arrayOf(PropTypes.string),

    /**
     * Array of accordion children.
     */
    children: PropTypes.arrayOf(PropTypes.node),

    /**
     * Array that determines the creation of banners for each section.
     * Each item in the array corresponds to a section on the page.
     * If an item is an integer, a banner with a button is created. 
     * The button focuses on the child content with the corresponding index.
     * If an item is null, no banner is created for that section.
     */
    bannerSections: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([null]),
    ])),

    /**
     * Array of booleans that determines the initial open/closed state of each section in the component.
     * Each item in the array corresponds to a section. If an item is true, the corresponding section is open 
     * by default when the component is first rendered. If an item is false, the corresponding section is closed by default.
     */
    defaultSectionsOpen: PropTypes.arrayOf(PropTypes.bool),

};

export const defaultProps = Accordion.defaultProps;
export const propTypes = Accordion.propTypes;

export default Accordion