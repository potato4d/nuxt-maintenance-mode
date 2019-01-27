import { NuxtOptions } from '../types/nuxt'

export function createOriginFromNuxtOptions(options: NuxtOptions) {
  return `http${options.server.https ? 's' : ''}://${options.server.host}:${
    options.server.port
  }`
}
