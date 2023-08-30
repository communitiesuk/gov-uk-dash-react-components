import PropTypes from 'prop-types';
import React from 'react';
import { ChangeLogBanner as RealComponent } from '../LazyLoader';

const ChangeLogBanner = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

ChangeLogBanner.propTypes = {
    /**
     * Array of dictionaries representing changelog updates
     */
    updates: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,           // Type of change
            date: PropTypes.string.isRequired,           // Date of the change
            heading: PropTypes.string.isRequired,        // Heading or title of the change
            link: PropTypes.string.isRequired,           // Link associated with the change
            linkTitle: PropTypes.string,                 // Optional title of the link
        })
    ),  // Marked as required because the component uses it directly

    /**
     * Custom Link component or 'a'. 
     * If it's a custom component, it should accept 'to' prop instead of 'href'.
     */
    LinkComponent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object
    ]),
};

ChangeLogBanner.defaultProps = {
    updates: null,
    LinkComponent: 'a'
};
export const propTypes = ChangeLogBanner.propTypes;
export const defaultProps = ChangeLogBanner.defaultProps;

export default ChangeLogBanner;
