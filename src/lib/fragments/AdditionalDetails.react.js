import React, { useState } from 'react';

const AdditionalDetails = ({ summaryText, detailsText }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <details className="govuk-details" data-module="govuk-details" open={isOpen} onClick={() => setIsOpen(!isOpen)}>
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
