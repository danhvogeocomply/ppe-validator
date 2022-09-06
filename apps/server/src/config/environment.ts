import { get } from 'env-var'

const environments = {
  env: get('NODE_ENV').default('development').asString(),
  port: get('PORT').default(3000).asPortNumber(),
}

export default environments
