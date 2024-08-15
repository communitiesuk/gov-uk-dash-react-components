import Cookies from "js-cookie";

export const stripPII = function (str) {
    if (!str || str === "") return "";

    return str.replace(/(.*)([A-Z]{1,2}\d{1,2}[A-Z]?\s?\d{1,2}[A-Z]{1,2})(.*)/gi, '$1[REDACTED]$3')
};


export const stripPIIUri = function (str) {
    if (!str || str === "") return "";

    return str.replace(/(.*)(postcode=[^&]+)(.*)/gi, '$1[REDACTED]$3')
};


export const setCookies = (tag) => {
    console.info("Cookies accepted - setting up GA.");
    console.log(`***${tag}`)
    window[`ga-disable-${tag}`] = false;

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        window.dataLayer.push(arguments)
    }

    window.gtag = window.gtag || gtag;

    try {
        gtag('js', new Date());
        // GovUK tracker
        gtag('config', tag, {
            cookie_domain: 'none'
        });


        console.info("GA successfully set up.", gtag);

    } catch (error) {
        console.warn("Cookies accepted, but tracking is blocked by the browser.")
        console.warn("Failed to set GA cookies.")
    }
};


export const deleteCookies = (tag) => {
    Cookies.remove("_ga");
    Cookies.remove("_gid");
    Cookies.remove(`_gat_gtag_${tag}`);

    window[`ga-disable-${tag}`] = true;


    console.info("Removed cookies and disabled tracking.");
};


export const handleCookieAccept = (accepted, tag) => {
    const
        today = new Date(),
        [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()],
        cookieExpiryDate = new Date(year, month + 1, day).toUTCString();

    if (accepted) {
        document.cookie = `cookies_policy_21_3=${encodeURIComponent('{"essential":true,"usage":true,"preferences":true}')}; expires=${cookieExpiryDate};`;
        setCookies(tag);
    } else {
        document.cookie = `cookies_policy_21_3=${encodeURIComponent('{"essential":true,"usage":false,"preferences":false}')}; expires=${cookieExpiryDate};`;
        deleteCookies(tag);
    }

    document.cookie = `cookies_preferences_set_21_3=true; expires=${cookieExpiryDate}; path=/`

};