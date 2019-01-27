import { createMiddleware } from './middleware'
import { toObject } from './utils/toObject'
import { ModuleOptions } from './types/nuxt';

function nuxtMaintenanceMode(this: any, moduleOptions: ModuleOptions) {
  const options = Object.assign(
    {},
    toObject(moduleOptions),
    this.options ? toObject(this.options.maintenance) : {}
  ) as ModuleOptions
  options.nuxt = this
  if (!options.enabled) {
    return false
  }
  const middleware = createMiddleware(options)
  this.addServerMiddleware(middleware)
}

export default nuxtMaintenanceMode
module.exports.meta = require('../package.json')
