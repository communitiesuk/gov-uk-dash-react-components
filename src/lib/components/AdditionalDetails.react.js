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
     * Id of component
     */
    id: PropTypes.string.isRequired,

    /**
     * Text to be shown as a summary
     */
    summaryText: PropTypes.string,

    /**
     * Detailed text to be shown when expanded
     */
    detailsText: PropTypes.string,

     /**
     * Whether the component renders or not
     */
    hidden: PropTypes.bool,
};

AdditionalDetails.defaultProps = {
    summaryText: "Add summary text",
    detailsText: "Add details text",
    hidden: false
};

export const propTypes = AdditionalDetails.propTypes;
export const defaultProps = AdditionalDetails.defaultProps;

export default AdditionalDetails;
