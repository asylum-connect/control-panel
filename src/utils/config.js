// Dev/Staging config is the base
const base = {
  apiDomain: 'https://asylum-connect-api-staging.herokuapp.com',
  apiBasePath: '/v1',
  catalogUrl: 'https://asylum-connect-catalog-staging.herokuapp.com',
};

const local = {
  apiDomain: 'http://localhost:8080',
};

const prod = {
  apiDomain: 'https://asylum-connect-api.herokuapp.com',
  // TODO: Switch to production
  catalogUrl: 'https://asylum-connect-catalog-staging.herokuapp.com',
};

const env = process.env.REACT_APP_APP_ENV;

export default {
  ...base,
  ...(env === 'local' ? local : {}),
  ...(env === 'prod' ? prod : {}),
};
