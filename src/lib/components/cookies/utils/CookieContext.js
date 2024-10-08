import React from 'react';

import { createContext, useState } from "react";

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookieStateIsSet, setCookieStateIsSet] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(null);
  return (
    <CookieContext.Provider value={{ cookieStateIsSet, setCookieStateIsSet, cookieAccepted, setCookieAccepted }}>
      {children}
    </CookieContext.Provider>
  );
};