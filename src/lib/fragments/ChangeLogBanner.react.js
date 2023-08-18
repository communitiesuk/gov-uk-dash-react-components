// ChangeLogBanner.js
import moment from "moment";
import React from 'react';
import { defaultProps, propTypes } from '../components/ChangeLogBanner.react';
import { ChangeLogBannerContainer, ChangeLogBannerSTY, ChangeLogBannerTag } from './ChangeLogBanner.styles';
const ChangeLogBanner = (props) => {
    const {
        items,
    } = { ...defaultProps, ...props };
    // const item = {
    //     type: "New",
    //     date: "2020-10-01",
    //     heading: "New data added to the site"
    // };


    return (
        <div className="changeLogBanner">
            <ChangeLogBannerContainer>
                {items.map((item, index) => <ChangeLogBannerSTY>
                    <div className={"govuk-body-s govuk-!-font-weight-bold govuk-!-margin-bottom-0"}>
                        <ChangeLogBannerTag>
                            {item.type}
                        </ChangeLogBannerTag>
                        <time dateTime={item.date}>
                            {moment(item.date).format("D MMMM YYYY")}
                        </time> &mdash; {item.heading}
                        {/* <Link to={ `/details/whats-new/record/${ item.id }` }
                      className={ "govuk-link govuk-link--no-visited-state govuk-!-margin-left-1" }>
                    More
                </Link> */}
                    </div>
                </ChangeLogBannerSTY>
                )}
            </ChangeLogBannerContainer>
        </div>
    );
};

ChangeLogBanner.defaultProps = defaultProps;
ChangeLogBanner.propTypes = propTypes;
export default ChangeLogBanner;