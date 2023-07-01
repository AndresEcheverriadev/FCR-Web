import ReactGA from "react-ga4";

const initialize = async () => {
  ReactGA.initialize("G-80E5Y9MEL8");
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
