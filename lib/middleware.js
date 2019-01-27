import { matchRoute } from './utils/matcher'
import { createOriginFromNuxtOptions } from './utils/createOrigin'

process.env.DEBUG = 'nuxt:*'

export function createMiddleware(options) {
  return async (req, res, next) => {
    const { Nuxt } = require('nuxt')
    const nuxt = new Nuxt(options.nuxt.options)
    if (req.matcher && !matchRoute(req.path, options.matcher)) {
      console.log('no target')
      next()
      return
    }
    if (matchRoute(req.url, options.path)) {
      console.log('path', req.url)
      next()
      return
    }
    const origin = createOriginFromNuxtOptions(options.nuxt.options)
    const window = await nuxt.renderAndGetWindow(`${origin}${options.path}`)
    const scripts = window.document.querySelectorAll('script')
    scripts.forEach(script => {
      script.remove()
    })
    const preloads = window.document.querySelectorAll('script')
    preloads.forEach(preload => {
      preload.remove()
    })
    res.writeHead(503, { 'Content-Type': 'text/html' })
    res.write(window.document.querySelector('html').outerHTML, () => {
      res.end()
      return
    })
  }
}
