import { createMiddleware } from './middleware'
import { toObject } from './utils/toObject'

function nuxtMaintenanceMode(moduleOptions) {
  const options = Object.assign(
    {},
    toObject(moduleOptions),
    this.options ? toObject(this.options.maintenance) : {}
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
