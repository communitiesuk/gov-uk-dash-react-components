import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/ChangeLogBannerNoDate.react';
import './ChangeLogBanner.css';

const ChangeLogBannerNoDate = ({ updates = defaultProps.updates }) => {
    if (!updates.length) return null;
    return (
        <div className="changeLogBanner">
            <div className="change-log-banner-container">
                {updates.map((update, index) => {
                    // ...
                    return (
                        <div className="change-log-banner-style" key={index}>
                            <div className={"govuk-body-s govuk-!-font-weight-bold govuk-!-margin-bottom-0 govuk-width-container"}>
                                <strong className="govuk-tag change-log-banner-tag">
                                    {update.type}
                                </strong>
                                &mdash; {update.heading}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


ChangeLogBannerNoDate.defaultProps = defaultProps;
ChangeLogBannerNoDate.propTypes = propTypes;

export default ChangeLogBannerNoDate








