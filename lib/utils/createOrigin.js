export function createOriginFromNuxtOptions(options) {
  return `http${options.server.https ? 's' : ''}://${options.server.host}:${
    options.server.port
  }`
}
