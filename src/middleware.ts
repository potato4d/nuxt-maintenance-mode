import { matchRoute } from './utils/matcher'
import { createOriginFromNuxtOptions } from './utils/createOrigin'
import { ModuleOptions } from './types/nuxt'
import { DOMWindow } from 'jsdom'

let renderedPageCache: string

async function render(nuxt: any, options: ModuleOptions) {
  if (renderedPageCache) {
    return renderedPageCache
  }
  const origin = createOriginFromNuxtOptions(options.nuxt.options)
  const window = (await nuxt.renderAndGetWindow(
    `${origin}${options.path}`
  )) as DOMWindow
  const scripts = window.document.querySelectorAll('script')
  scripts.forEach(script => {
    script.remove()
  })
  const preloads = window.document.querySelectorAll('script')
  preloads.forEach(preload => {
    preload.remove()
  })
  renderedPageCache = window.document.querySelector('html')!.outerHTML
  return renderedPageCache
}

export function createMiddleware(options: ModuleOptions) {
  return async (req: any, res: any, next: () => void) => {
    const { Nuxt } = require('nuxt')
    const nuxt = new Nuxt(options.nuxt.options)
    if (options.matcher && !matchRoute(req.path, options.matcher)) {
      next()
      return
    }
    if (matchRoute(req.url, options.path || '')) {
      next()
      return
    }
    try {
      const html = await render(nuxt, options)
      res.writeHead(503, { 'Content-Type': 'text/html' })
      res.write(html, () => {
        res.end()
        return
      })
    } catch (e) {
      console.log(e)
      res.writeHead(500, { 'Content-Type': 'text/html' })
      res.write(`<html><body>500 Internal server errror </body></html>`, () => {
        res.end()
        return
      })
    }
  }
}
