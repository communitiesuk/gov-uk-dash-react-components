import PropTypes from 'prop-types';
import React from 'react';
import { ChangeLogBanner as RealComponent } from '../LazyLoader';

/**
 *Default dropdown arrow
 *
 * @param {string} { className }
 */
const ChangeLogBanner = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

ChangeLogBanner.propTypes = {
    /**
     * Array of dictionaries representing items
     */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key1: PropTypes.string,
            key2: PropTypes.number,
            key3: PropTypes.arrayOf(PropTypes.string),
        })
    ),
};

export const defaultProps = ChangeLogBanner.defaultProps;
export const propTypes = ChangeLogBanner.propTypes;
export default ChangeLogBanner;

