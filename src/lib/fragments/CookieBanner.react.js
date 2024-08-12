
import React, { useState, useEffect } from 'react';

import { setCookies, deleteCookies, handleCookieAccept } from '../components/cookies/utils/Cookie';

import Cookies from "js-cookie";


const CookieBanner = ({ ...props }) => {

    const [cookieStateIsSet, setCookieStateIsSet] = useState(null);
    const [cookieAccepted, setCookieAccepted] = useState(null);

    useEffect(() => {

        if (cookieAccepted) {
            handleCookieAccept(true);
            console.info("Cookies accepted.");
            setCookieStateIsSet(true);
        }
        else if (cookieAccepted === false) {
            handleCookieAccept(false);
            console.info("Cookies declined.");
            setCookieStateIsSet(true);
        }

    }, [cookieAccepted]);

    useEffect(() => {

        const cookiePreference = Cookies.get('cookies_preferences_set_21_3');

        if (cookiePreference === 'true') {
            console.info("Cookies preferences have been set.");

            const cookiePolicyRaw = Cookies.get('cookies_policy_21_3');

            if (!cookiePolicyRaw) {
                Cookies.remove("cookies_preferences_set_21_3");
                setCookieStateIsSet(false)
                console.info("Cookies policy has not been set.");
            }
            else {
                console.info("Cookies policy has been set.");
                const cookiePolicy = JSON.parse(cookiePolicyRaw);

                if (cookiePolicy.usage === false || !cookiePolicy.usage) {
                    window['ga-disable-G-SR22PGM0C2'] = true;
                    deleteCookies();
                    console.info("Cookies are disabled.");
                }
                else {
                    setCookies();
                    console.info("Cookies successfully set.");
                }

                setCookieStateIsSet(true);
            }
        }
        else {
            setCookieStateIsSet(false);
            console.info("Cookies preferences have not been set.");
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
                                <p className="govuk-body">You've {cookieAccepted ? "accepted" : "rejected"} additional cookies. You can <a class="govuk-link" href="/cookiespage" > change your cookie settings</a> at any time.</p>
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
        return <div className="govuk-cookie-banner " role="region" aria-label="Cookies on Housing Supply in England">
            <div className={"govuk-cookie-banner__message govuk-width-container"}>
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">
                        <h2 className="govuk-cookie-banner__heading govuk-heading-m">
                            Cookies on Housing Supply in England
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

                {/* .govuk-cookie-banner .govuk-button-group {
  display: block;
} needs removing from pkg css */}
                <div className="govuk-button-group">
                    <button className="govuk-button" type="submit"
                        data-module="track-click" data-accept-cookies="true"
                        data-track-category="cookieBanner"
                        style={{ maxWidth: '50%' }}
                        onClick={() => setCookieAccepted(true)}>
                        Accept additional cookies
                    </button>
                    <button className="govuk-button"
                        style={{ maxWidth: '50%' }}
                        type="submit" data-module="track-click" data-set-cookie-preferences="true"
                        data-track-category="cookieBanner" onClick={() => setCookieAccepted(false)}>
                        Reject additional cookies
                    </button>
                    <a class="govuk-link" href="/cookiespage" >View cookies</a>
                </div>
            </div>
        </div>
    }

    return null;

};


export default CookieBanner;