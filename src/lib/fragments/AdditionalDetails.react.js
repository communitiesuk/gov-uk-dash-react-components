import React, { useEffect, useRef, useState } from 'react';
import { propTypes } from '../components/AdditionalDetails.react';

const AdditionalDetails = ({
    id,
    summaryText = "Add summary text",
    detailsText = "Add details text",
    hidden = false
}) => {
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
        if (detailsRef.current) {
            setIsOpen(detailsRef.current.open);
        }
    }, []);

    return (
        <details
            ref={detailsRef}
            id={id}
            className="govuk-details"
            data-module="govuk-details"
            open={isOpen}
            onClick={handleToggle}
        >
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

AdditionalDetails.propTypes = propTypes

export default AdditionalDetails;