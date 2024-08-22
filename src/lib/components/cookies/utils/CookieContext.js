import React from 'react';

import { createContext, useState, useEffect } from "react";

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookieStateIsSet, setCookieStateIsSet] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);

  const
      today = new Date(),
      [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()],
      cookieExpiryDate = new Date(year + 1, month, day).toUTCString();

  document.cookie = `cookies_policy=${encodeURIComponent('{"essential":true,"usage":false,"preferences":false}')}; expires=${cookieExpiryDate};`;
  document.cookie = `cookies_preferences_set=false; expires=${cookieExpiryDate}; path=/`

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

