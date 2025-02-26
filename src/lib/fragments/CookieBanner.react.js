
import React, { useContext, useEffect } from 'react';

import { setCookies, deleteCookies, handleCookieAccept, handleCookiesInitialLoad } from '../components/cookies/utils/Cookie';
import { CookieContext } from '../components/cookies/utils/CookieContext';

import Cookies from "js-cookie";


const CookieBanner = ({ ...props }) => {
    const { cookieStateIsSet, setCookieStateIsSet, cookieAccepted, setCookieAccepted } = useContext(CookieContext);
    const { tag } = props;
    const { appTitle } = props;
    const { domain } = props;

    useEffect(() => {

        if (cookieAccepted) {
            handleCookieAccept(true, tag, domain);
            setCookieStateIsSet(true);
        }
        else if (cookieAccepted === false) {
            handleCookieAccept(false, tag, domain);
            setCookieStateIsSet(true);
        }

    }, [cookieAccepted]);

    useEffect(() => {

        const cookiePreference = Cookies.get('cookies_preferences_set');

        if (cookiePreference === 'true') {

            const cookiePolicyRaw = Cookies.get('cookies_policy');
            if (!cookiePolicyRaw) {
                Cookies.remove("cookies_preferences_set");
                setCookieStateIsSet(false)
            }
            else {
                const cookiePolicy = JSON.parse(cookiePolicyRaw);

                if (cookiePolicy.usage === false || !cookiePolicy.usage) {
                    window[`ga-disable-${tag}`] = true;
                    deleteCookies(tag, domain);
                }
                else {
                    setCookies(tag);
                }

                setCookieStateIsSet(true);
            }
        }
        else {
            setCookieStateIsSet(false);
        }

    }, [cookieAccepted]);

    if (cookieStateIsSet === null) return null;

    if (cookieStateIsSet && cookieAccepted !== null) {
        return (
            <div {...props} id="global-cookie-message" className="govuk-cookie-banner"
                data-module="cookie-banner" role="region" aria-label="cookie banner" data-nosnippet=""
            >
                <div className="govuk-cookie-banner__message govuk-width-container" role="alert">
                    <div className="govuk-grid-row">
                        <div className="govuk-grid-column-two-thirds">
                            <div className="govuk-cookie-banner__content" tabIndex="-1">
                                <p className="govuk-body">You've {cookieAccepted ? "accepted" : "rejected"} additional cookies. You can <a className="govuk-link" href="/cookiespage" > change your cookie settings</a> at any time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="govuk-button-group">
                        <button type="button" className="govuk-button" data-hide-cookie-banner="true"
                            data-module="track-click" data-track-category="cookieBanner"
                            data-track-action="Hide cookie banner" onClick={() => setCookieAccepted(null)}>
                            Hide cookie message
                        </button>
                    </div>
                </div>
            </div>
        );
    }


    if (!cookieStateIsSet) {
        return <div className="govuk-cookie-banner " role="region" aria-label={`Cookies on ${appTitle}`}>
            <div className={"govuk-cookie-banner__message govuk-width-container"}>
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">
                        <h2 className="govuk-cookie-banner__heading govuk-heading-m">
                            Cookies on {appTitle}
                        </h2>
                        <div className="govuk-cookie-banner__content">
                            <p className={"govuk-body"}>We use some essential cookies to make this service work.</p>
                            <p className={"govuk-body"}>
                                We’d like to set additional cookies so we can remember your settings, understand how
                                people use the service and make improvements.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="govuk-button-group">
                    <button className="govuk-button" type="submit"
                        data-module="track-click" data-accept-cookies="true"
                        data-track-category="cookieBanner"
                        onClick={() => {setCookieAccepted(true); setCookieStateIsSet(true)}}>
                        Accept additional cookies
                    </button>
                    <button className="govuk-button"
                        type="submit" data-module="track-click" data-set-cookie-preferences="true"
                        data-track-category="cookieBanner" onClick={() => {setCookieAccepted(false); setCookieStateIsSet(true)}}>
                        Reject additional cookies
                    </button>
                    <a className="govuk-link" href="/cookiespage" >View cookies</a>
                </div>
            </div>
        </div>
    }

    return null;

};


export default CookieBanner;