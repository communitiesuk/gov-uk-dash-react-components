import Cookies from "js-cookie";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

let ai = null;

export function enableAppInsights(connectionString) {
  if (!connectionString) return null;
  if (ai) return ai;

  ai = new ApplicationInsights({
    config: {
      connectionString,
      // because you’re only calling this after consent:
      disableCookiesUsage: false,
      enableAutoRouteTracking: true,
    },
  });

  ai.loadAppInsights();
  return ai;
}

export function disableAppInsights() {
  if (ai) {
    ai.config.disableCookiesUsage = true;
  }
}
export const stripPII = function (str) {
    if (!str || str === "") return "";

    return str.replace(/(.*)([A-Z]{1,2}\d{1,2}[A-Z]?\s?\d{1,2}[A-Z]{1,2})(.*)/gi, '$1[REDACTED]$3')
};


export const stripPIIUri = function (str) {
    if (!str || str === "") return "";

    return str.replace(/(.*)(postcode=[^&]+)(.*)/gi, '$1[REDACTED]$3')
};



export const setCookies = (tag, app_insights_conn_string) => {
  window[`ga-disable-${tag}`] = false;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  try {
    gtag("js", new Date());
    gtag("config", tag, { cookie_domain: "none" });
  } catch (error) {
    console.warn("Cookies accepted, but tracking is blocked by the browser.");
    console.warn("Failed to set GA cookies.");
  }

  // ✅ App Insights only starts after consent
  enableAppInsights(app_insights_conn_string);
};

export const deleteCookies = (tag, domain) => {
  Cookies.remove("_ga", { path: "/", domain });
  Cookies.remove("_gid", { path: "/", domain });
  Cookies.remove(`_ga_${tag?.slice(2)}`, { path: "/", domain });
  Cookies.remove(`_gat_gtag_${tag}`, { path: "/", domain });

  window[`ga-disable-${tag}`] = true;

  // ✅ Remove App Insights cookies (common names)
  Cookies.remove("ai_user", { path: "/", domain });
  Cookies.remove("ai_session", { path: "/", domain });

  // ✅ If AI was already initialised, stop it using cookies going forward
  disableAppInsights();
};
export const handleCookieAccept = (accepted, tag, domain, app_insights_conn_string) => {
    const
        today = new Date(),
        [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()],
        cookieExpiryDate = new Date(year + 1, month, day).toUTCString();
    if (accepted) {
        document.cookie = `cookies_policy=${encodeURIComponent('{"essential":true,"usage":true,"preferences":true}')}; expires=${cookieExpiryDate}; path=/`;
        setCookies(tag, app_insights_conn_string);
    } else {
        document.cookie = `cookies_policy=${encodeURIComponent('{"essential":true,"usage":false,"preferences":false}')}; expires=${cookieExpiryDate}; path=/`;
        deleteCookies(tag, domain);
    }

    document.cookie = `cookies_preferences_set=true; expires=${cookieExpiryDate}; path=/`
    

};