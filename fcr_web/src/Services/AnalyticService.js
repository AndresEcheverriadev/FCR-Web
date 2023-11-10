import PiwikPro, { PageViews, DataLayer } from "@piwikpro/react-piwik-pro";

const initialize = () => {
  PiwikPro.initialize(
    "46fd4b9c-6ff7-4f6b-b25c-e52650e6cd0c",
    "https://cristoreyangol.piwik.pro"
  );
};

const pageView = async (title) => {
  PageViews.trackPageView(`${title}`);
};

const event = async (event) => {
  await DataLayer.push({ event: `${event}` });
};

export const AnalyticService = { initialize, event, pageView };
