import environments from './environment'

const config = {
  ...environments,
  isDev: environments.env === 'development' || environments.env === 'dev',
  isProduction: environments.env === 'production' || environments.env === 'prod',
}

export default config
