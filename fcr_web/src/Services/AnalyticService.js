import ReactGA from "react-ga4";

const initialize = async () => {
  ReactGA.initialize(process.env.REACT_APP_GTM_ID);
};

const pageView = async (locationURL, title) => {
  ReactGA.send({
    hitType: "pageview",
    page: `${locationURL}`,
    title: `${title}`,
  });
};

const event = async (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export const AnalyticService = { initialize, event, pageView };
