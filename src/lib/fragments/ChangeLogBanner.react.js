// ChangeLogBanner.js
import moment from "moment";
import React from 'react';
import { defaultProps, propTypes } from '../components/ChangeLogBanner.react';
import { ChangeLogBannerContainer, ChangeLogBannerSTY, ChangeLogBannerTag } from './ChangeLogBanner.styles';

const ChangeLogBanner = ({ items = defaultProps.items, LinkComponent = 'a' }) => {
    return (
        <div className="changeLogBanner">
            <ChangeLogBannerContainer>
                {items.map((item, index) => {
                    {
                        const linkProps = LinkComponent === 'a' ? { href: item.link } : { to: item.link }
                        return (
                            <ChangeLogBannerSTY key={index}>
                                <div className={"govuk-body-s govuk-!-font-weight-bold govuk-!-margin-bottom-0"}>
                                    <ChangeLogBannerTag>
                                        {item.type}
                                    </ChangeLogBannerTag>
                                    <time dateTime={item.date}>
                                        {moment(item.date).format("D MMMM YYYY")}
                                    </time> &mdash; {item.heading}
                                    <LinkComponent {...linkProps}
                                        className={"govuk-link govuk-link--no-visited-state govuk-!-margin-left-1"}>
                                        {item.linkTitle ? item.linkTitle : 'More'}
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