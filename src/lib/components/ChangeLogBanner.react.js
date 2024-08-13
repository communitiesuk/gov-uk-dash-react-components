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
            date: PropTypes.string,                      // Optional date of the change
            heading: PropTypes.string.isRequired,        // Heading or title of the change
            link: PropTypes.string,                     // Optional link associated with the change
            linkTitle: PropTypes.string,                 // Optional title of the link
        })
    ),  // Marked as required because the component uses it directly

   
};

ChangeLogBanner.defaultProps = {
    updates: null,
};
export const propTypes = ChangeLogBanner.propTypes;
export const defaultProps = ChangeLogBanner.defaultProps;

export default ChangeLogBanner;
