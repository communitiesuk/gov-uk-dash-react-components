import Cookies from "js-cookie";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

let ai = null;

export function enableAppInsights(connectionString) {
  if (!connectionString) return null;

  if (ai) {
    ai.core.getCookieMgr().setEnabled(true);
    ai.config.disableTelemetry = false;
    return ai;
  }

  ai = new ApplicationInsights({
    config: {
      connectionString,
      disableCookiesUsage: false,
      disableTelemetry: false,
      enableAutoRouteTracking: true,
      enableSessionStorageBuffer: false,
    },
  });

  ai.loadAppInsights();
  ai.trackPageView();
  return ai;
}

export function disableAppInsights() {
  if (!ai) return;

  ai.config.disableTelemetry = true;
  ai.core.getCookieMgr().setEnabled(false);

  if (typeof ai.unload === "function") {
    ai.unload(false);
  }

  ai = null;
}

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
  }

  // User has just accepted on the current page, so log that page once.
  enableAppInsights(app_insights_conn_string, true);
};

export const deleteCookies = (tag, domain) => {
  Cookies.remove("_ga", { path: "/", domain });
  Cookies.remove("_gid", { path: "/", domain });
  Cookies.remove(`_ga_${tag.slice(2)}`, { path: "/", domain });
  Cookies.remove(`_gat_gtag_${tag}`, { path: "/", domain });

  Cookies.remove("ai_user", { path: "/", domain });
  Cookies.remove("ai_session", { path: "/", domain });

  window[`ga-disable-${tag}`] = true;

  disableAppInsights();
};

export const handleCookieAccept = (accepted, tag, domain, app_insights_conn_string) => {
  const today = new Date();
  const [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()];
  const cookieExpiryDate = new Date(year + 1, month, day).toUTCString();

  if (accepted) {
    document.cookie = `cookies_policy=${encodeURIComponent('{"essential":true,"usage":true,"preferences":true}')}; expires=${cookieExpiryDate}; path=/`;
    setCookies(tag, app_insights_conn_string);
  } else {
    document.cookie = `cookies_policy=${encodeURIComponent('{"essential":true,"usage":false,"preferences":false}')}; expires=${cookieExpiryDate}; path=/`;
    deleteCookies(tag, domain);
  }

  document.cookie = `cookies_preferences_set=true; expires=${cookieExpiryDate}; path=/`;
};


export function hasUsageConsent() {
  const cookiePolicyRaw = Cookies.get("cookies_policy");
  if (!cookiePolicyRaw) return false;

  try {
    const cookiePolicy = JSON.parse(cookiePolicyRaw);
    return cookiePolicy && cookiePolicy.usage === true;
  } catch {
    return false;
  }
}

export function rehydrateAppInsights(connectionString) {
  if (!connectionString) return null;
  if (!hasUsageConsent()) return null;

  return enableAppInsights(connectionString);
}