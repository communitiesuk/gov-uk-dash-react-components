// ChangeLogBanner.js
import moment from "moment";
import React from 'react';
import { defaultProps, propTypes } from '../components/ChangeLogBanner.react';
import { ChangeLogBannerContainer, ChangeLogBannerSTY, ChangeLogBannerTag } from './ChangeLogBanner.styles';

const ChangeLogBanner = ({ updates = defaultProps.updates, LinkComponent = 'a' }) => {
    if (!updates.length) return null;
    return (
        <div className="changeLogBanner">
            <ChangeLogBannerContainer>
                {updates.map((update, index) => {
                    {
                        const linkProps = LinkComponent === 'a' ? { href: update.link } : { to: update.link }
                        return (
                            <ChangeLogBannerSTY key={index}>
                                <div className={"govuk-body-s govuk-!-font-weight-bold govuk-!-margin-bottom-0 govuk-width-container"}>
                                    <ChangeLogBannerTag>
                                        {update.type}
                                    </ChangeLogBannerTag>
                                    <time dateTime={update.date}>
                                        {moment(update.date).format("D MMMM YYYY")}
                                    </time> &mdash; {update.heading}
                                    <LinkComponent {...linkProps}
                                        className={"govuk-link govuk-link--no-visited-state govuk-!-margin-left-1"}>
                                        {update.linkTitle ? update.linkTitle : 'More'}
                                    </LinkComponent>
                                </div>
                            </ChangeLogBannerSTY>
                        )
                    }
                })}
            </ChangeLogBannerContainer>
        </div>
    );
};

ChangeLogBanner.defaultProps = defaultProps;
ChangeLogBanner.propTypes = propTypes;
export default ChangeLogBanner;