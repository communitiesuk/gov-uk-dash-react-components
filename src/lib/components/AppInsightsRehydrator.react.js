import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { rehydrateAppInsights } from "../utils/cookies/Cookie";

/**
 * Rehydrates Application Insights on app load when usage cookies
 * have already been accepted.
 */
const AppInsightsRehydrator = ({ id, app_insights_conn_string, setProps }) => {
  useEffect(() => {
    rehydrateAppInsights(app_insights_conn_string);
  }, [app_insights_conn_string]);

  return <div id={id} style={{ display: "none" }} aria-hidden="true" />;
};

AppInsightsRehydrator.propTypes = {
  id: PropTypes.string,
  app_insights_conn_string: PropTypes.string,
  setProps: PropTypes.func,
};

export const propTypes = AppInsightsRehydrator.propTypes;

export default AppInsightsRehydrator;