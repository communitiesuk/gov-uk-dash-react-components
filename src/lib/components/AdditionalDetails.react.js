import PropTypes from 'prop-types';
import React from 'react';
import { AdditionalDetails as RealComponent } from '../LazyLoader';

const AdditionalDetails = (props) => {
    return (
        <RealComponent {...props} />
    );
}

AdditionalDetails.propTypes = {
    /**
     * Text to be shown as a summary
     */
    summaryText: PropTypes.string.isRequired,

    /**
     * Detailed text to be shown when expanded
     */
    detailsText: PropTypes.string.isRequired,
};

AdditionalDetails.defaultProps = {
    summaryText: "Add summary text",
    detailsText: "Add details text",
};

export const propTypes = AdditionalDetails.propTypes;
export const defaultProps = AdditionalDetails.defaultProps;

export default AdditionalDetails;
