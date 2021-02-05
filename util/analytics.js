import * as Analytics from "expo-firebase-analytics";

export const events = {
  SUBJECT_VIEWED: "SUBJECT_VIEWED",
  DOCUMENT_VIEWED: "DOCUMENT_VIEWED",
};

export function track(event, properties) {
  Analytics.logEvent(event, properties);
}

export function setScreenView(name) {
  Analytics.setCurrentScreen(name);
}

export default {
  events,
  track,
};
