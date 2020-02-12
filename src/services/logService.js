import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({
    dsn: 'https://c9aadf70c8544c769b8e6445bf924863@sentry.io/2444861'
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
