import React, { useState } from 'react';

const AdditionalDetails = ({ id, summaryText, detailsText, hidden }) => {
    if (hidden) {
        return null
    } 
    const [isOpen, setIsOpen] = useState(false);

    return (
        <details id={id} className="govuk-details" data-module="govuk-details" open={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <summary className="govuk-details__summary">
                <span className="govuk-details__summary-text">
                    {summaryText}
                </span>
            </summary>
            <div className="govuk-details__text">
                {detailsText}
            </div>
        </details>
    );
};

export default AdditionalDetails;
