export interface NuxtOptions {
  server: {
    https: boolean
    host: string,
    port: string
  }
}

export interface ModuleOptions {
  enabled?: boolean
  matcher?: string
  path?: string
  nuxt: {
    options: NuxtOptions
  }
}
