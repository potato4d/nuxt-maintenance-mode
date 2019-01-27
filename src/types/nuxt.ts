export interface NuxtOptions {
  server: {
    https: boolean
    host: string
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

export type RawNuxtOptions = NuxtOptions & {
  maintenance: ModuleOptions
}

export interface RootToDoType {
  options: RawNuxtOptions
  addServerMiddleware: (middleware: any) => void
}
