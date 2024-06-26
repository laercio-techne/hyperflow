import {
  API_BASE_URL_KEY,
  REACT_APP_APP_VESION,
  REACT_APP_FAKE_SERVER_URL,
  REACT_APP_JSON_SERVER_URL,
  REACT_APP_POSTHOG_KEY,
  REACT_APP_POSTHOG_HOST,
  REACT_APP_WS_BASE_URL,
  REACT_APP_JOURNEY_ONBOARDING,
  REACT_APP_ONBOARDING_API_KEY,
} from "config";

const ApiConfig = {
  login: "/auth/login",
  verify: "/auth",
  comments: "/comments",
  refreshtoken: "/api/refreshtoken",
  signup: "/auth/register",
  conditions: "/conditions",
  resources: "/customers/attributes",
  eventResources: "/events/attributes",
  eventAttributes: "/events/possible-attributes",
  customersAttributes: "/customers/possible-attributes",
  campaigns: "/campaigns",
  segments: "/segments",
  domains: "/email/domains",
  resendDomains: "/email/resend/domains",
  updateUserInfo: "/accounts",
  audiences: "/audiences",
  addtemplate: "/audiences/add-template",
  createSegment: "/audiences/create",
  updateSegment: "/audiences/update",
  createTemplate: "/templates/create",
  correlateSlack: "/slack/cor",
  getAllTemplates: "/templates",
  getAllPeople: "/customers",
  searchCustomersForTest: "/customers/search-for-test",
  searchCustomersForWebhookTest: "/customers/search-for-webhook-test",
  customerCreate: "/customers/create",
  customerDelete: "/customers/delete/",
  flow: "/workflows",
  startFlow: "/workflows/start",
  deleteFlow: "/workflows/delete",
  slackInstall: "/slack/install",
  syncPosthog: "/customers/importph",
  deleteMedia: "accounts/delete-media/",
};

const AppConfig = {
  APP_VERSION: REACT_APP_APP_VESION,
  API_BASE_URL: API_BASE_URL_KEY,
  FAKE_SERVER_URL: REACT_APP_FAKE_SERVER_URL,
  JSON_SERVER_URL: REACT_APP_JSON_SERVER_URL,
  POSTHOG_KEY: REACT_APP_POSTHOG_KEY,
  POSTHOG_HOST: REACT_APP_POSTHOG_HOST,
  WS_BASE_URL: REACT_APP_WS_BASE_URL,
  JOURNEY_ONBOARDING: REACT_APP_JOURNEY_ONBOARDING,
  ONBOARDING_API_KEY: REACT_APP_ONBOARDING_API_KEY,
  storageKeys: {
    USER_DATA: "userData",
  },
};

export { ApiConfig, AppConfig };