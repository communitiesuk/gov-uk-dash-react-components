// ChangeLogBanner.js
import { format } from 'date-fns';
import React from 'react';
import { defaultProps, propTypes } from '../components/ChangeLogBanner.react';
import './ChangeLogBanner.css';

const ChangeLogBanner = ({ updates = defaultProps.updates }) => {
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
                                {update.date && (
                                    <time dateTime={update.date}>
                                        {format(new Date(update.date), 'd MMMM yyyy')}
                                    </time> 
                                )} &mdash; {update.heading} 
                                {update.link && (
                                    <a className={"govuk-link-white govuk-!-margin-left-1"} href={update.link}>
                                    {update.linkTitle ? update.linkTitle : 'More'}
                                    </a>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );

};

ChangeLogBanner.defaultProps = defaultProps;
ChangeLogBanner.propTypes = propTypes;
export default ChangeLogBanner;
