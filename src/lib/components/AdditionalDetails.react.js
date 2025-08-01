import PropTypes from 'prop-types';
import React from 'react';
import { AdditionalDetails as RealComponent } from '../LazyLoader';

const AdditionalDetails = ({
    summaryText = "Add summary text",
    detailsText = "Add details text",
    hidden = false,
    ...rest
}) => {
    return (
        <RealComponent
            summaryText={summaryText}
            detailsText={detailsText}
            hidden={hidden}
            {...rest}
        />
    );
};

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

export const propTypes = AdditionalDetails.propTypes;

export default AdditionalDetails;