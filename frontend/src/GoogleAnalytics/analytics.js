import ReactGA from "react-ga";

const TRACKING_ID = "UA-145691579-2";

export function init() {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  ReactGA.initialize(TRACKING_ID, { debug: isDev });
}

export function sendEvent(payload) {
  ReactGA.event(payload);
}

export function sendPageview(path) {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}

let analytics = {
  init,
  sendEvent,
  sendPageview,
};

export default analytics;
