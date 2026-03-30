import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { rehydrateAppInsights } from "./cookies/utils/Cookie";

const AppInsightsRehydrator = ({ app_insights_conn_string }) => {
  useEffect(() => {
    rehydrateAppInsights(app_insights_conn_string);
  }, [app_insights_conn_string]);

  return null;
};

AppInsightsRehydrator.propTypes = {
  app_insights_conn_string: PropTypes.string,
};

export default AppInsightsRehydrator;