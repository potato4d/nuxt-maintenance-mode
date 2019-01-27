import { createMiddleware } from './middleware'

function nuxtMaintenanceMode(moduleOptions) {
  const options = Object.assign(
    {},
    moduleOptions || {},
    this.options ? this.options.maintenance || {} : {}
  )
  options.nuxt = this
  if (!options.enabled) {
    return false
  }
  const middleware = createMiddleware(options)
  this.addServerMiddleware(middleware)
}

export default nuxtMaintenanceMode
module.exports.meta = require('../package.json')
