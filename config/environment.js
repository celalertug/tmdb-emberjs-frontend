'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'tmdb-emberjs-frontend',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    TMDB: {
      API_KEY_V3: 'ee4fcea51515cf2ac9180f7467c48847',
      API_KEY:
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRmY2VhNTE1MTVjZjJhYzkxODBmNzQ2N2M0ODg0NyIsInN1YiI6IjYwOGQ1OGRlZjhhZWU4MDA0MGI3NmVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C7pLyWtJNrGWgpraeUy-frIP6s1YAOt_5n7GQmdxPZ4',
      BASE_URL: 'https://api.themoviedb.org/3',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
