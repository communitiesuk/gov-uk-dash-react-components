import React from 'react';

import { createContext, useState, useEffect } from "react";

import Cookies from "js-cookie";

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookieStateIsSet, setCookieStateIsSet] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(null);

  const
      today = new Date(),
      [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()],
      cookieExpiryDate = new Date(year + 1, month, day).toUTCString();

    // Set initial cookie values on load
    useEffect(() => {
  
      if (!Cookies.get('cookies_preferences_set')) {
        document.cookie = `cookies_preferences_set=false; expires=${cookieExpiryDate}; path=/`
        setCookieStateIsSet(false);
      }
  
      if (!Cookies.get('cookies_policy')) {
        document.cookie = `cookies_policy=${encodeURIComponent('{"essential":true,"usage":false,"preferences":false}')}; expires=${cookieExpiryDate};`;
        setCookieStateIsSet(false);
      }
    }, []);

  

  // document.cookie = `cookies_policy=${encodeURIComponent('{"essential":true,"usage":false,"preferences":false}')}; expires=${cookieExpiryDate};`;
  // document.cookie = `cookies_preferences_set=false; expires=${cookieExpiryDate}; path=/`

  // useEffect(() => {
  //   console.log("cookieStateIsSet:", cookieStateIsSet)
  //   console.log("cookieAccepted:",cookieAccepted)
  // }, [cookieStateIsSet, cookieAccepted]);


  return (
    <CookieContext.Provider value={{ cookieStateIsSet, setCookieStateIsSet, cookieAccepted, setCookieAccepted }}>
      {children}
    </CookieContext.Provider>
  );
};

