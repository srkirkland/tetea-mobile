import * as Amplitude from "expo-analytics-amplitude";
let isInitialized = false;
// TODO: dev api key
const apiKey = "";

export const events = {
  SUBJECT_VIEWED: "SUBJECT_VIEWED",
  DOCUMENT_VIEWED: "DOCUMENT_VIEWED"
};

export function initialize() {
  if (isInitialized || !apiKey) {
//   if (isInitialized || __DEV__ || !apiKey) {
    return;
  }

  Amplitude.initialize(apiKey);
  isInitialized = true;
}

export function track(event, properties) {
  initialize();

  if (properties) {
    Amplitude.logEventWithProperties(event, properties);
  } else {
    Amplitude.logEvent(event);
  }
}

export default {
  events,
  initialize,
  track
};
