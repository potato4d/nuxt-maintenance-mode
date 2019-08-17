import { createMiddleware } from './middleware'
import { toObject } from './utils/toObject'
import { ModuleOptions, RootToDoType } from './types/nuxt'
import consola from 'consola'

let isLaunched: boolean

function nuxtMaintenanceMode(this: RootToDoType, moduleOptions: ModuleOptions) {
  if (isLaunched) {
    return
  }
  const options = Object.assign(
    {},
    toObject(moduleOptions),
    this.options ? toObject(this.options.maintenance) : {}
  ) as ModuleOptions
  options.nuxt = this
  if (!options.enabled || !options.path) {
    consola.info('Skip activation of maintenance mode plugin')
    return false
  }
  if (options.matcher && options.exclude) {
    consola.warn('Both Matcher and Exclude were defined. Please remove one of them to avoid conflict.')
    return false
  }
  consola.info('Add maintenance mode plugin to server middleware')
  const middleware = createMiddleware(options)
  this.addServerMiddleware(middleware)
  isLaunched = true
}

export default nuxtMaintenanceMode
module.exports.meta = require('../package.json')
