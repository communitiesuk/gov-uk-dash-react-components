import React, { useEffect, useContext, useState } from 'react';

import { handleCookieAccept } from '../../components/cookies/utils/Cookie';

import Cookies from "js-cookie";
import { CookieContext } from '../../components/cookies/utils/CookieContext';



const SuccessNotification = ({...props}) => {
    const {previousPage} = props
    
  return (
    <div className="govuk-notification-banner govuk-notification-banner--success govuk-!-margin-top-1"
         role="alert" aria-labelledby="govuk-notification-banner-title"
         data-module="govuk-notification-banner">
      <div className="govuk-notification-banner__header">
        <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
          Success
        </h2>
      </div>
      <div className="govuk-notification-banner__content">
        <p className="govuk-notification-banner__heading">
          You’ve updated your cookie preferences. <a className="govuk-notification-banner__link" href={previousPage}>Go back to the page you were looking at</a>.
        </p>
      </div>
    </div>
  );
};

const CookiesPage = ({ ...props }) => {
    const {cookieStateIsSet, setCookieStateIsSet, cookieAccepted, setCookieAccepted} = useContext(CookieContext);
    const [cookieThroughCookiePage, setCookieThroughCookiePage] = useState(false)
    const { tag } = props;
    const { appTitle } = props;
    const { domain } = props;

    const handleButtonClick = (cookieState) => {
      setCookieAccepted(cookieState);
      setCookieThroughCookiePage(true)
      handleCookieAccept(cookieState, tag, domain);
      window.scrollTo(0, 0);
    };
  
    useEffect(() => {
      const cookiePreference = Cookies.get('cookies_preferences_set');
      const cookiePolicyRaw = Cookies.get('cookies_policy');
      if (!cookiePolicyRaw) {
        setCookieStateIsSet(false);
        setCookieAccepted(false)
      } else {
        const cookiePolicy = JSON.parse(cookiePolicyRaw);

        if (cookiePreference === 'true') {
            setCookieStateIsSet(true);
            setCookieAccepted(cookiePolicy.usage)
        } else {
            setCookieStateIsSet(false);
            setCookieAccepted(cookiePolicy.usage)
        }
    }
    }, []);

    return <>
        <article style={{maxWidth: "50em"}}>

            { cookieThroughCookiePage ? <SuccessNotification {...props} /> : null }

            <h1 className={"govuk-heading-l"}>Cookies</h1>

            <p className={"govuk-body"}>
                Cookies are files saved on your phone, tablet or computer when you visit a website.
            </p>
            <p className={"govuk-body govuk-!-margin-bottom-8"}>
                We use cookies to store information about how you use the {appTitle} dashboard,
                such as the pages you visit.
            </p>

            <h2 className={"govuk-heading-m"}>Cookie settings</h2>

            <p className={"govuk-body govuk-!-margin-bottom-8"}>
                We use 2 types of cookie. You can choose which cookies you're happy for us to use.
            </p>

            <h2 className={"govuk-heading-m"}>Essential cookies</h2>

            <p className={"govuk-body"}>
                Essential cookies keep your information secure while you use the service. We do not need to ask permission to use them.
            </p>

            <div className={"govuk-body govuk-!-margin-bottom-8"}>
                <table>
                    <thead className={"govuk-table__head"}>
                        <tr className={"govuk-table__row"}>
                            <th scope={"col"} className={"govuk-table__header"}>Name</th>
                            <th scope={"col"} className={"govuk-table__header govuk-!-width-two-third"}>Purpose</th>
                            <th scope={"col"} className={"govuk-table__header"}>Expires</th>
                        </tr>
                    </thead>
                    <tbody className={"govuk-table__body"}>
                        <tr className={"govuk-table__row"}>
                            <td className={"govuk-table__cell"}><b>cookies_policy</b></td>
                            <td className={"govuk-table__cell"}>
                                Saves your chosen cookies preference for future vists.
                            </td>
                            <td className={"govuk-table__cell"} style={{ minWidth: `100px` }}>1 year
                            </td>
                        </tr>
                        <tr className={"govuk-table__row"}>
                            <td className={"govuk-table__cell"}><b>cookies_preferences_set</b></td>
                            <td className={"govuk-table__cell"}>
                                Saves whether you've set your cookie preferences to avoid repeat prompts.
                            </td>
                                <td className={"govuk-table__cell"} style={{ minWidth: `100px` }}>1 year
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className={"govuk-heading-m"}>Cookies that measure website use</h2>

            <p className={"govuk-body"}>
                We use Google Analytics to measure how you use the website so we can
                improve it based on user needs. Google Analytics sets cookies that store
                anonymized information about:
            </p>

            <div className={"govuk-body"}>
                <ul className="govuk-list govuk-list--bullet">
                    <li>how you got to the site</li>
                    <li>the pages you visit on the {appTitle} dashboard, and how long you spend on each page</li>
                    <li>what you click on while you're visiting the site</li>
                </ul>
            </div>


            <p className={"govuk-body"}>
                We’d like to set additional cookies so we can remember your settings, understand how
                people use the service and make improvements.
            </p>

            <p className={"govuk-body"}>
                These are the Google Analytics cookies we’ll use:
            </p>

            <div className={"govuk-body govuk-!-margin-bottom-8"}>
                <table>
                    <thead className={"govuk-table__head"}>
                        <tr className={"govuk-table__row"}>
                            <th scope={"col"} className={"govuk-table__header"}>Name</th>
                            <th scope={"col"} className={"govuk-table__header govuk-!-width-two-third"}>Purpose</th>
                            <th scope={"col"} className={"govuk-table__header"}>Expires</th>
                        </tr>
                    </thead>
                    <tbody className={"govuk-table__body"}>
                        <tr className={"govuk-table__row"}>
                            <td className={"govuk-table__cell"}><b>_ga</b></td>
                            <td className={"govuk-table__cell"}>
                                These help us count how many people visit the {appTitle} dashboard by
                                tracking if you’ve visited before.
                            </td>
                            <td className={"govuk-table__cell"} style={{ minWidth: `100px` }}>2 years
                            </td>
                        </tr>
                        <tr className={"govuk-table__row"}>
                            <td className={"govuk-table__cell"}><b>_gid</b></td>
                            <td className={"govuk-table__cell"}>
                                These help us count how many people visit the {appTitle} dashboard by
                                tracking if you’ve visited before.
                            </td>
                                <td className={"govuk-table__cell"} style={{ minWidth: `100px` }}>24 hours
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={"govuk-body govuk-!-margin-bottom-8"}>
                <div className="govuk-radios">
                    <div className="gem-c-radio govuk-radios__item">
                        <input type="radio" name="cookies-usage" id="radio-c6a408c0-0"
                               checked={ cookieAccepted }
                               className="govuk-radios__input" onClick={() => setCookieAccepted(true)} />
                        <label htmlFor="radio-c6a408c0-0" className="gem-c-label govuk-label govuk-radios__label">
                            Use cookies that measure my website use
                        </label>
                    </div>
                    <div className="gem-c-radio govuk-radios__item">
                        <input type="radio" name="cookies-usage" id="radio-c6a408c0-1"
                               checked={ !cookieAccepted }
                               className="govuk-radios__input"
                               onClick={() => setCookieAccepted(false)} />
                        <label htmlFor="radio-c6a408c0-1" className="gem-c-label govuk-label govuk-radios__label">
                            Do not use cookies that measure my website use
                        </label>
                    </div>
                </div>
            </div>
            
            <p className={"govuk-body"}>
                <button className="gem-c-button govuk-button"
                    type="submit" data-module="track-click"
                    data-accept-cookies="true" data-track-category="cookies"
                    onClick={ () => handleButtonClick(cookieAccepted)}>
                    Save changes
                </button>
            </p>
        </article>
    </>
};


export default CookiesPage;