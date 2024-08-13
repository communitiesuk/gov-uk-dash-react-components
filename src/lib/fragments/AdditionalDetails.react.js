import React, { useEffect, useRef, useState } from 'react';

const AdditionalDetails = ({ id, summaryText, detailsText, hidden }) => {
    if (hidden) {
        return null;
    }

    const [isOpen, setIsOpen] = useState(false);
    const detailsRef = useRef(null);

    const handleToggle = () => {
        if (detailsRef.current) {
            setIsOpen(detailsRef.current.open);
        }
    };

    useEffect(() => {
        // Initially sync state with ref's open attribute
        if (detailsRef.current) {
            setIsOpen(detailsRef.current.open);
        }
    }, []);

    return (
        <details ref={detailsRef} id={id} className="govuk-details" data-module="govuk-details" open={isOpen} onClick={handleToggle}>
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
