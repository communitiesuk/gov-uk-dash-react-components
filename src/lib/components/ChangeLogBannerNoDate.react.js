import React from 'react';
import PropTypes from 'prop-types';
import { ChangeLogBannerNoDate as RealComponent } from '../LazyLoader';

/**
 * Lazy loaded ChangeLogBannerNoDate
 *
 * @param {
 * 	id,
 * } [props={}]
 * @return {*}
 */
const ChangeLogBannerNoDate = (props = {}) => {
    return (
        <RealComponent {...props} />
    );
}

/**
 * PropTypes is a part of React, see full documenation below.
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

ChangeLogBannerNoDate.defaultProps = {
    /**
     * Any default prop values, e.g.
     *   congratulatoryMessage: 'You are amazing'
     */
};

ChangeLogBannerNoDate.propTypes = {
    /**
     * Array of dictionaries representing changelog updates
     */
     updates: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,           // Type of change
            heading: PropTypes.string.isRequired,        // Heading or title of the change
        })
    ),  // Marked as required because the component uses it directly

   
};

ChangeLogBannerNoDate.defaultProps = {
    updates: null,
};

export const defaultProps = ChangeLogBannerNoDate.defaultProps;
export const propTypes = ChangeLogBannerNoDate.propTypes;

export default ChangeLogBannerNoDate



   



