export interface Option {
  enable?: boolean
  route: string
  matcher?: string
}

declare function nuxtMaintenanceMode(moduleOption: Option): any;

export default nuxtMaintenanceMode
