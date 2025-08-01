import PropTypes from 'prop-types';
import React from 'react';
import { Accordion as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded Accordion Component
 *
 * This Accordion component dynamically creates sections based on the provided `accordionHeadings`.
 * Each section can be independently opened or closed. The `defaultSectionsOpen` array corresponds
 * to the sections defined by `accordionHeadings`, where each element in the array represents the 
 * open (true) or closed (false) state of the respective section on initial render.
 *
 * @param {{
 *   id: string,                            // Unique identifier for the accordion component
 *   accordionHeadings: string[],           // Array of headings for each section of the accordion
 *   children: React.ReactNode,             // Content to be rendered inside the accordion
 *   showToggleText: boolean,               // Flag to show or hide toggle text  
 *   defaultSectionsOpen: boolean[],        // Array indicating the initial open state of each section
 * }} [props={}]                            // Component props with default empty object
 * @return {React.ReactElement}             // Returns a React element representing the accordion
 */
const Accordion = ({
    id,
    accordionHeadings,
    children,
    showToggleText = true,
    defaultSectionsOpen,
    setProps,
}) => {
    return (
        <RealComponent
            id={id}
            accordionHeadings={accordionHeadings}
            children={children}
            showToggleText={showToggleText}
            defaultSectionsOpen={defaultSectionsOpen}
            setProps={setProps}
        />
    );
}


/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */


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
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]),
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
	 * Whether to display "Show" / "Hide" text before Accordion heading
	 */
	showToggleText: PropTypes.bool,

    /**
     * Array of booleans that determines the initial open/closed state of each section in the component.
     * Each item in the array corresponds to a section. If an item is true, the corresponding section is open 
     * by default when the component is first rendered. If an item is false, the corresponding section is closed by default.
     */
    defaultSectionsOpen: PropTypes.arrayOf(PropTypes.bool),

};

export const propTypes = Accordion.propTypes;

export default Accordion